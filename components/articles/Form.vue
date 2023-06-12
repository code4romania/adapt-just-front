<template>
  <div>
    <ValidationObserver ref="form" v-slot="{ invalid, validated, handleSubmit, validate }">
      <ui-form-card>
        <template>
          <v-form>
            <v-row>
              <v-col sm="12" md="8">
                <ValidationProvider vid="name" name="nume" rules="required" v-slot="{ errors, valid }">
                  <ui-form-label>Titlu articol</ui-form-label>
                  <v-text-field
                    v-model="article.name"
                    :error-messages="errors"
                    outlined
                  ></v-text-field>
                </ValidationProvider>

                <ui-form-label>Thumbnail</ui-form-label>
                <v-file-input
                  outlined
                  accept="image/*"
                  prepend-icon=""
                  @change="changeImage"
                  placeholder="Selecteaza o imagine"

                ></v-file-input>
                <v-img
                  v-if="article?.upload?.dataUrl"
                  contain
                  width="200px"
                  style="border: 1px solid; border-radius: 15px"
                  :src="article?.upload?.dataUrl"
                  class="mb-5"
                />

                <div class="mb-5">
                  <ui-form-label>Continut</ui-form-label>
                  <ui-form-text-editor
                    mode="advanced"
                    :value="article.content"
                    @input="article.content = $event"
                  />
                </div>
                <div class="mb-5">
                  <ui-form-label>Continut simplificat</ui-form-label>
                  <ui-form-text-editor
                      mode="simple"
                      :value="article.short_content"
                      @input="article.short_content = $event"
                  />
                </div>
              </v-col>
              <v-col sm="12" md="4">
                <ui-form-label>Publica</ui-form-label>
                <v-card
                  outlined
                >
                  <v-card-text>
                    <v-switch
                      v-model="article.status"
                      true-value="active"
                      false-value="draft"
                      class="mt-0"
                    ></v-switch>
                    <p>
                      Dacă nu activezi funcția de publică, articolul va rămâne salvat ca draft.
                    </p>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>

          </v-form>
        </template>
        <template #actions>
          <v-spacer/>
          <v-btn :loading="loading" large outlined plain  to="/admin/articles" >Anuleaza</v-btn>
          <v-btn :loading="loading" large color="primary" @click="submit" >Salveaza</v-btn>
        </template>
      </ui-form-card>
    </ValidationObserver>
  </div>
</template>

<script>
import Editor from '@tinymce/tinymce-vue'
export default {
  props:{
    article:{
      type: [Object],
      required: true
    }
  },
  components:{
    Editor
  },
  data: () => ({
    loading: false,
    formData: {}
  }),
  async fetch() {

  },
  computed:{
    isUpdate() {
      return !!this.article?.id
    }
  },
  methods:{
    async changeImage(file){
      if (file) {
        try {
          this.article.upload = await this.upload(file)
        } catch (e) {
          const snack = { color: 'error', message: e.message }
          this.$store.commit('snackbar/setSnack', snack)
        }
      } else {
        this.article.upload = null
      }
    },
    async handleTinymceUpload(blobInfo, success, failure) {
      try {
        const file = await this.upload(blobInfo.blob())
        success(file.dataUrl)
      } catch (e) {
        const snack = { color: 'error', message: e.message }
        this.$store.commit('snackbar/setSnack', snack)
      }
    },
    async upload(file) {
      return await this.$store.dispatch('uploads/create', { file});
    },
    async submit() {
      this.loading      = true;
      const result = await this.$refs.form.validate();

      if (!result) {
        this.loading = false;
        return false;
      }


      let action = 'articles/';
      if (this.isUpdate) {
        action += 'update'
      }else{
        action += 'create'
      }

      const data = {...this.article}
      data.upload_id = this.article?.upload?.id

      try{
        await this.$store.dispatch(action, data)
        this.$emit('success');
      } catch (e){
        this.$form.handleError(e, this.$refs.form);
      } finally {
        this.loading = false
      }

    }
  }
}
</script>

<style lang="scss">
  .brand-form.v-card{
  }
</style>


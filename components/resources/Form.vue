<template>
  <div>
    <ValidationObserver ref="form" v-slot="{ invalid, validated, handleSubmit, validate }">
      <ui-form-card>
        <template>
          <v-form>
            <v-row>
              <v-col sm="12" md="8">
                <ValidationProvider vid="type" name="tip" rules="required" v-slot="{ errors, valid }">
                  <ui-form-label>Tip resursa de sprijin</ui-form-label>
                  <v-select
                      v-model="resource.type"
                      :error-messages="errors"
                      :items="types"
                      outlined
                  ></v-select>
                </ValidationProvider>

                <div v-if="isOrganisation || isPhoneNumber">
                  <ValidationProvider vid="name" name="denumire" rules="required" v-slot="{ errors, valid }">
                    <ui-form-label>Denumire</ui-form-label>
                    <v-text-field
                      v-model="resource.name"
                      :error-messages="errors"
                      outlined
                    ></v-text-field>
                  </ValidationProvider>

                  <ValidationProvider vid="phone" name="telefon" rules="required" v-slot="{ errors, valid }">
                    <ui-form-label>Phone</ui-form-label>
                    <v-text-field
                      v-model="resource.phone"
                      :error-messages="errors"
                      outlined
                    ></v-text-field>
                  </ValidationProvider>

                  <ValidationProvider v-if="isOrganisation" vid="short_content" name="scurta descriere" rules="required" v-slot="{ errors, valid }">
                    <ui-form-label>Scurta descriere</ui-form-label>
                    <v-textarea
                        v-model="resource.short_content"
                        :error-messages="errors"
                        outlined
                    ></v-textarea>
                  </ValidationProvider>
                  <ValidationProvider v-if="isOrganisation" vid="logo" name="logo" v-slot="{ errors, valid }">
                    <ui-form-label>Logo organizatie</ui-form-label>
                    <v-file-input
                      outlined
                      accept="image/*"
                      prepend-icon=""
                      @change="changeImage"
                      placeholder="Selecteaza o imagine"
                    ></v-file-input>
                    <v-img
                      v-if="resource?.upload?.dataUrl"
                      contain
                      width="200px"
                      style="border: 1px solid; border-radius: 15px"
                      :src="resource?.upload?.dataUrl"
                      class="mb-5"
                    />
                  </ValidationProvider>
                </div>
                <div v-if="isLawyer">
                  <ValidationProvider vid="name" name="titlu" rules="required" v-slot="{ errors, valid }">
                    <ui-form-label>Titlu sfat</ui-form-label>
                    <v-text-field
                        v-model="resource.name"
                        :error-messages="errors"
                        outlined
                    ></v-text-field>
                  </ValidationProvider>
                    <div class="mb-5">
                      <ui-form-label>Continut</ui-form-label>
                      <ui-form-text-editor
                          mode="advanced"
                          :value="resource.content"
                          @input="resource.content = $event"
                      />
                    </div>
                    <div class="mb-5">
                      <ui-form-label>Continut simplificat</ui-form-label>
                      <ui-form-text-editor
                          mode="simple"
                          :value="resource.short_content"
                          @input="resource.short_content = $event"
                      />
                    </div>
                </div>
              </v-col>
              <v-col sm="12" md="4">
                <ui-form-label>Publica</ui-form-label>
                <v-card
                  outlined
                >
                  <v-card-text>

                    <v-switch
                      v-model="resource.status"
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
          <v-btn :loading="loading" large outlined plain  to="/admin/resources" >Anuleaza</v-btn>
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
    resource:{
      type: [Object],
      required: true
    }
  },
  components:{
    Editor
  },
  data: () => ({
    loading: false,
    formData: {},
    types: [
      {
        text: 'Organizatie',
        value: 'organisation'
      },
      {
        text: 'Numar de telefon',
        value: 'phone_number'
      },
      {
        text: 'Sfaturi avocat',
        value: 'lawyer'
      },
    ]
  }),
  async fetch() {

  },
  computed:{
    isUpdate() {
      return !!this.resource?.id
    },
    isOrganisation() {
      return this.resource?.type === 'organisation'
    },
    isPhoneNumber() {
      return this.resource?.type === 'phone_number'
    },
    isLawyer() {
      return this.resource?.type === 'lawyer'
    },
  },
  methods:{
    async changeImage(file){
      if (file) {
        try {
          this.resource.upload = await this.$store.dispatch('uploads/create', { file})
        } catch (e) {
          const snack = { color: 'error', message: e.message }
          this.$store.commit('snackbar/setSnack', snack)
        }
      } else {
        this.resource.upload = null
      }


    },
    async submit() {
      this.loading      = true;
      const result = await this.$refs.form.validate();

      if (!result) {
        this.loading = false;
        return false;
      }


      let action = 'resources/';
      if (this.isUpdate) {
        action += 'update'
      }else{
        action += 'create'
      }

      const data = {...this.resource}
      data.upload_id = this.resource?.upload?.id

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


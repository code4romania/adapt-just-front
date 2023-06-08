<template>
  <div>
    <ValidationObserver ref="form" v-slot="{ invalid, validated, handleSubmit, validate }">
      <ui-form-card>
        <template>
          <v-form>
            <v-row>
              <v-col sm="12" md="6">
                <ValidationProvider vid="first_name" name="nume" rules="required" v-slot="{ errors, valid }">
                  <ui-form-label>Nume</ui-form-label>
                  <v-text-field
                    v-model="user.first_name"
                    :error-messages="errors"
                    outlined
                  ></v-text-field>
                </ValidationProvider>
              </v-col>
              <v-col sm="12" md="6">
                <ValidationProvider vid="last_name" name="prenume" rules="required|min:1|max:255" v-slot="{ errors, valid }">
                  <ui-form-label>Prenume</ui-form-label>
                  <v-text-field
                    v-model="user.last_name"
                    :error-messages="errors"
                    outlined
                  ></v-text-field>
                </ValidationProvider>
              </v-col>
              <v-col sm="12" md="6">
                <ValidationProvider vid="email" name="email" rules="required|email" v-slot="{ errors, valid }">
                  <ui-form-label>Email</ui-form-label>
                  <v-text-field
                    v-model="user.email"
                    :error-messages="errors"
                    outlined
                    :disabled="isUpdate"
                  ></v-text-field>
                </ValidationProvider>
              </v-col>
            </v-row>
            <v-row>
              <v-col sm="12" md="6">
                <ui-form-label>Permisiuni</ui-form-label>
                <template v-for="p in formData?.permissions">
                  <v-checkbox
                    v-model="user.permissions"
                    :value="p.id"
                    :label="p.label"
                    hide-details
                  ></v-checkbox>
                </template>
              </v-col>
            </v-row>
          </v-form>
        </template>
        <template #actions>
          <v-spacer/>
          <v-btn :loading="loading" large outlined plain  to="/admin/users" >Anuleaza</v-btn>
          <v-btn :loading="loading" large color="primary" @click="submit" >Save</v-btn>
        </template>
      </ui-form-card>
    </ValidationObserver>
  </div>
</template>

<script>
export default {
  props:{
    user:{
      type: [Object],
      required: true
    }
  },
  data: () => ({
    loading: false,
    formData: {}
  }),
  async fetch() {
    const response = await this.$store.dispatch('users/form');
    this.formData = response?.data || {}
  },
  computed:{
    isUpdate() {
      return !!this.user?.id
    }
  },
  methods:{
    async submit(){
      this.loading      = true;
      const result = await this.$refs.form.validate();

      if (!result) {
        this.loading = false;
        return false;
      }
      let action = 'users/';
      if( this.user?.id ){
        action += 'update'
      }else{
        action += 'create'
      }

      try{
        await this.$store.dispatch(action, this.user)
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


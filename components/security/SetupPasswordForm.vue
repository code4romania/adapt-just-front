<template>
  <div>
    <p class="mb-6 font-weight-medium text-center">Ai deja o parola setata?
      <nuxt-link class="text-decoration-none font-weight-bold" to="/login">Autentifica-te</nuxt-link>
    </p>
    <ValidationObserver ref="form" v-slot="{ invalid, validated, handleSubmit, validate }">
      <v-card class="elevation-12 setup-password-card" width="400px">
        <v-card-text class="pa-0">
          <v-img height="100px" contain src="/images/layout/ceasul-cel-bun-logo.svg"/>
          <div class="text-center font-weight-bold mt-2">
            &#9679;
            am uitat parola
            &#9679;
          </div>
          <v-form class="mt-6">
            <ValidationProvider
              vid="password"
              name="parola"
              rules="required|min:8"
              v-slot="{ errors, valid }">
              <v-text-field
                v-model="login.password"
                :error-messages="errors"
                :success="valid"
                label="Password"
                type="password"
                autocomplete="off"
                hide-details
                outlined
                dense
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                :type="showPassword ? 'text' : 'password'"
                @click:append="showPassword = !showPassword"
              ></v-text-field>
              <div class="caption error--text" style="min-height: 15px">
                <div v-for="(err, index) in errorMessages(errors)" :key="`error-${index}`">
                  {{ err }}
                </div>
              </div>
            </ValidationProvider>
            <ValidationProvider vid="password_confirmation" name="confirmare parola" rules="required|confirmed:password"  v-slot="{ errors, valid }">
              <v-text-field
                v-model="login.password_confirmation"
                :error-messages="errors"
                :success="valid"
                label="Password Confirmation"
                type="password"
                outlined
                dense
                :append-icon="showPasswordConfirmation ? 'mdi-eye' : 'mdi-eye-off'"
                :type="showPasswordConfirmation ? 'text' : 'password'"
                @click:append="showPasswordConfirmation = !showPasswordConfirmation"
              ></v-text-field>
            </ValidationProvider>
          </v-form>
        </v-card-text>
        <v-card-actions class="pa-0 mt-4 ">
          <v-btn :loading="loading" block large color="primary" @click="submit" class="text-none">Seteaza parola</v-btn>
        </v-card-actions>
      </v-card>
    </ValidationObserver>
  </div>
</template>

<script>

export default {
  data: () => ({
    login:{
      password: '',
      password_confirmation: ''
    },
    showPassword: false,
    showPasswordConfirmation: false,
    loading: false
  }),

  computed: {
  },
  methods:{
    async submit(){
      this.loading      = true;
      const result = await this.$refs.form.validate();
      if (!result) {
        this.loading = false;
        return false;
      }
      await this.$axios.$get('/sanctum/csrf-cookie');
      await this.$store.dispatch("users/setupPassword", {
        id: this.$route.params.user_id,
        hash: this.$route.params.hash,
        login: this.login,
        query: this.$route.query
      })
        .then( (response) => {

          const message = 'Parola a fost setata cu succes.';
          const snack = { color: 'success', message: message }
          this.$store.commit('snackbar/setSnack', snack);
          this.$emit("success");

        })
        .catch( (error) => {
          const errors = error.response?.data?.errors || null;
          if (errors) {
            this.$refs.form.setErrors(errors);
          }
          const message = error.response?.data?.message || 'Invalid data';
          const snack = { color: 'error', message: message }
          this.$store.commit('snackbar/setSnack', snack);
        })
      this.loading = false
    },
    errorMessages(err) {
      return err && err.length ? err : []
    }
  }
}
</script>

<style lang="scss">
.setup-password-card.v-card{
  padding: 10px 40px 40px 40px;
  border-radius: 15px;
}
</style>

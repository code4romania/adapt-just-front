<template>
  <div>
    <p class="mb-6 font-weight-medium text-center">
      <nuxt-link class="text-decoration-none font-weight-bold" to="/login">Autentifica-te</nuxt-link>
    </p>
    <ValidationObserver ref="form" v-slot="{ invalid, validated, handleSubmit, validate }">
      <v-card class="elevation-12 setup-password-card" width="400px">
        <v-card-text class="pa-0">
          <v-img height="100px" contain src="/images/layout/ceasul-cel-bun-logo.svg"/>
          <div class="text-center font-weight-bold mt-2 mb-6">
            &#9679;
            recuperare parola
            &#9679;
          </div>
          <div class="">
            <span v-if="!form.token">Introdu adresa de email asociata contului tau.</span>
            <span v-else>Introdu o noua parola.</span>

          </div>
          <v-form class="mt-2">
            <ValidationProvider
              vid="email"
              name="email"
              rules="required|email|min:8"
              v-slot="{ errors, valid }">
              <v-text-field
                  v-model="form.email"
                  :error-messages="errors"
                  label="Email"
                  type="email"
                  outlined
                  dense
                  :disabled="!!form.token"
              ></v-text-field>
            </ValidationProvider>

            <template v-if="form.token">
              <ValidationProvider
                  vid="password"
                  name="parola noua"
                  rules="required|min:8"
                  v-slot="{ errors, valid }"
              >
                <v-text-field
                    v-model="form.password"
                    :error-messages="errors"
                    type="password"
                    label="Parola noua"
                    autocomplete="off"
                    outlined
                    dense
                    :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="showPassword ? 'text' : 'password'"
                    @click:append="showPassword = !showPassword"
                ></v-text-field>
              </ValidationProvider>
              <ValidationProvider
                  vid="password_confirmation"
                  name="confirmare parola noua"
                  rules="required|confirmed:password"
                  v-slot="{ errors, valid }"
              >
                <v-text-field
                    v-model="form.password_confirmation"
                    :error-messages="errors"
                    :success="valid"
                    type="password"
                    label="Confirmare parola noua"
                    autocomplete="off"
                    outlined
                    dense
                    :append-icon="showPasswordConfirmation ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="showPasswordConfirmation ? 'text' : 'password'"
                    @click:append="showPasswordConfirmation = !showPasswordConfirmation"
                ></v-text-field>
              </ValidationProvider>
            </template>
          </v-form>
        </v-card-text>
        <v-card-actions class="pa-0 mt-4 ">
          <v-btn :loading="loading" block large color="primary" @click="submit" class="text-none">Reseteaza parola</v-btn>
        </v-card-actions>
      </v-card>
    </ValidationObserver>
  </div>
</template>

<script>
export default {
  data: () => ({
    form: {},
    showPassword: false,
    showPasswordConfirmation: false,
    loading: false
  }),
  created() {
    this.form = {};
    if (this.$route.query.token) {
      this.form = {
        token: this.$route.query.token,
        email: this.$route.query.email ?? null
      }
    }
  },
  computed: {
    passwordRules() {
      return `required|min_one_uppercase|min_one_number|min_one_special_character|min:13|custom_password_consecutive_validation|custom_password_qwerty_validation|custom_password_same_validation|not_like:email,${this.form.email}`
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

      let action = 'forgotPassword'
      if (this.form.token) {
        action = 'resetPassword'
      }

      await this.$axios.$get('/sanctum/csrf-cookie');
      await this.$store.dispatch(`users/${action}`, this.form)
          .then( (response) => {
            let message = 'Your password was successfully updated. You can now login into the system';
            if( action === 'forgotPassword' ){
              message = 'We\'ve sent you an email with further instructions on resetting your password.';
            }

            const snack   = { color: 'success', message, timeout: -1 }
            this.$store.commit('snackbar/setSnack', snack);
            this.$emit('success');
          })
          .catch( (error) => {
            const errors = error.response?.data?.errors || null;
            const message = error.response?.data?.message || 'Something was wrong';
            if (errors) {
              this.$refs.form.setErrors(errors);
            }

            const snack = { color: 'error', message: message }
            this.$store.commit('snackbar/setSnack', snack);
            this.loading = false

          })
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

<template>
  <div>
    <div>
      <ValidationObserver ref="form" v-slot="{ invalid, validated, handleSubmit, validate }">
        <v-card class="elevation-12 login-card" width="500px">
          <v-card-text class="pa-0">
            <v-img height="100px" contain src="/images/layout/ceasul-cel-bun-logo.svg"/>
<!--            <div class="text-center font-weight-bold mt-2">-->
<!--              &#9679;-->
<!--              administrare-->
<!--              &#9679;-->
<!--            </div>-->
            <v-form class="mt-6">
              <ValidationProvider name="email" rules="required|email" v-slot="{ errors, valid }">
                <ui-form-label>Adresă de email</ui-form-label>
                <v-text-field
                  v-model="login.email"
                  :error-messages="errors"
                  :success="valid"
                  type="email"
                  outlined
                  dense
                ></v-text-field>
              </ValidationProvider>
              <ValidationProvider name="parola" rules="required"  v-slot="{ errors, valid }">
                <ui-form-label>Parolă</ui-form-label>
                <v-text-field
                  v-model="login.password"
                  :error-messages="errors"
                  :success="valid"
                  type="password"
                  outlined
                  dense
                ></v-text-field>
              </ValidationProvider>
            </v-form>
            <v-row>
              <v-col>
                <v-checkbox
                    class="mt-0"
                    v-model="login.remember"
                    label="Ține-mă minte"
                    style="width: 150px"
                >
                </v-checkbox>
              </v-col>
              <v-spacer/>
              <v-col>
                <v-btn to="/reset-password" text plain color="primary" class="font-weight-bold text-none">Mi-am uitat parola</v-btn>
              </v-col>

            </v-row>
          </v-card-text>
          <v-card-actions class="pa-0 mt-4">
            <v-btn :loading="loading" block large color="primary" @click="submit" >Log in</v-btn>
          </v-card-actions>
        </v-card>
      </ValidationObserver>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    twoFactor: false,
    code: null,
    login:{
      email: '',
      password: ''
    },
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
      try {
        await this.$auth.loginWith('local', {
          data: this.login
        });
        this.$emit('success');

      } catch (e) {
        this.$form.handleError(e, this.$refs.form);
        this.loading = false
      }
    }
  }
}
</script>

<style lang="scss">
.login-card.v-card{
  padding: 10px 40px 40px 40px;
  border-radius: 15px;
}
</style>

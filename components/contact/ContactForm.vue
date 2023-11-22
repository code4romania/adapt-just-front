<template>
  <div class="contact-form">
    <ValidationObserver ref="form">
      <v-form @submit.prevent="submit">
        <v-row>
          <v-col cols="6">
            <contact-form-input
              v-model="form.first_name"
              :v-id="form.first_name"
              name="Nume"
              rules="required"
              placeholder="Nume"
            />
          </v-col>
          <v-col cols="6">
            <contact-form-input
              v-model="form.last_name"
              :v-id="form.last_name"
              name="Prenume"
              rules="required"
              placeholder="Prenume"
            />
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <contact-form-input
              v-model="form.email"
              :v-id="form.email"
              name="Email"
              placeholder="Email"
              rules="required|email"
            />
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <contact-form-message
              v-model="form.message"
              :v-id="form.message"
              name="Mesaj"
              placeholder="Mesaj"
              rules="required"
            />
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <ValidationProvider
              name="Politica de confidențialitate"
              vid="terms"
              rules="required"
            >
              <v-switch
                v-model="terms"
                inset
                id="terms"
                :ripple="false"
                :true-value="'true'"
                :false-value="''"
                slot-scope="{ errors }"
                :error-messages="errors"
              >
                <template v-slot:label>
                  <span class="terms-label">Prin selectarea acestei opțiuni, sunteți de acord cu <span class="font-weight-bold link" @click="openLink1">Politica de confidențialitate</span> și <span class="font-weight-bold link" @click="openLink2">Politica de utilizare cookies.</span></span>
                </template>
              </v-switch>
            </ValidationProvider>
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <recaptcha
              @error="onError"
              @success="onSuccess"
              @expired="onExpired"
            />
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <v-btn
              large
              type="submit"
              color="#FBBF24"
              :loading="loading"
              class="white--text"
              @click="submit"
            >
              Trimite
            </v-btn>
          </v-col>
        </v-row>
      </v-form>
    </ValidationObserver>
  </div>
</template>

<script>

import ContactFormInput from './ContactFormInput'
import ContactFormMessage from './ContactFormMessage'

export default {
  components: {
    ContactFormInput,
    ContactFormMessage,
  },
  data() {
    return {
      loading: false,
      form: {
        first_name: '',
        last_name: '',
        email: '',
        message: '',
      },
      terms: '',
    }
  },
  methods: {
    openLink1() {
      window.open('https://www.google.com', '_blank')
    },
    openLink2() {
      window.open('https://www.google.com', '_blank')
    },
    onError() {},
    onSuccess() {},
    onExpired() {},
    async submit() {
      this.loading = true

      const result = await this.$refs.form.validate()
      if (!result) {
        this.loading = false
        return
      }

      this.loading = false
    }
  }
}

</script>

<style lang="scss">

.contact-form {
  .terms-label {
    color: #111827;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    font-style: normal;
    text-transform: uppercase;
    font-family: Inter, sans-serif;

    .link {
      text-decoration-line: underline;
    }
  }
}

</style>

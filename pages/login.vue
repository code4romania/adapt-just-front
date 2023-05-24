<template>
  <v-card>
    <form @submit.prevent="submit">

      <v-text-field
          v-model="email.value.value"
          :error-messages="email.errorMessage.value"
          label="E-mail"
      ></v-text-field>

      <v-text-field
          type="password"
          v-model="password.value.value"
          :error-messages="password.errorMessage.value"
          label="Password"
      ></v-text-field>

      <v-btn
          class="me-4"
          type="submit"
      >
        Login
      </v-btn>
    </form>
  </v-card>
</template>
<script setup lang="ts">
import {useField, useForm} from 'vee-validate'

const email = useField('email')
const password = useField('password')


const {handleSubmit} = useForm({
  validationSchema: {
    email(value: string) {
      if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true

      return 'Must be a valid e-mail.'
    },
  },
})

const submit = handleSubmit(values => {
  alert(JSON.stringify(values, null, 2))
})

</script>

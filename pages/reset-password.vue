<template>
  <v-main>
    <v-container fill-height>
      <v-row class="justify-center align-center">
        <v-col cols="auto">
          <security-reset-password-form @success="onLoggedIn"/>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>

export default {
  layout: 'blank',
  auth: 'guest',
  head () {
    return {
      title: 'Login'
    }
  },
  components: {
  },
  computed: {

  },
  beforeMount () {

  },
  methods:{
    onLoggedIn(){
      this.$router.push('/admin')
    }
  }
}
</script>

<template>
  <v-main>
    <v-container fill-height>
      <v-row class="justify-center align-center">
        <v-col cols="auto">
          <security-setup-password-form @success="onSuccess" />
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>

export default {
  layout: 'blank',
  auth: false,
  components: {
  },
  computed: {
  },
  methods:{
    onSuccess(){
      this.$router.push('/admin');
    }
  }
}
</script>

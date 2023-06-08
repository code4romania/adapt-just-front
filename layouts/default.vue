<template>
  <v-app ref="mouseMoveRef">
    <v-main>
      <v-container fluid>
        <dashboard-snackbar />
        <router-view></router-view>
      </v-container>
    </v-main>
    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      drawer: false,
      showLockScreen: false
    }
  },

  computed: {
  },
  methods: {

  }
}
</script>

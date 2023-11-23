<template>
  <v-app class="adapt-app">
    <app-alert />
    <app-header />

    <v-main class="app-main">
      <app-actions
        @hide="hideApp = true"
      />

      <router-view />
    </v-main>

    <app-footer v-if="footerVisible" />

    <app-hide-dialog
      :visible="hideApp"
      @close="hideApp = false"
    />
  </v-app>
</template>

<script>

import AppAlert from '/components/shared/layout/AppAlert'
import AppHeader from '/components/shared/layout/AppHeader'
import AppFooter from '/components/shared/layout/AppFooter'
import AppActions from '/components/shared/layout/AppActions'
import AppHideDialog from '/components/shared/layout/AppHideDialog'

export default {
  components: {
    AppAlert,
    AppHeader,
    AppFooter,
    AppActions,
    AppHideDialog,
  },
  data() {
    return {
      hideApp: false,
    }
  },
  computed: {
    footerVisible() {
      return !this.$route.path.startsWith('/cere-ajutor')
    }
  }
}

</script>

<style lang="scss">

.app-main {
  padding-top: $main-padding-top !important;
}

</style>

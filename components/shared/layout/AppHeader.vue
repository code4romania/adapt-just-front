<template>
  <v-app-bar
    flat
    color="#FFF"
    class="app-header"
  >
    <v-img
      src="/images/website/2.svg"
      height="56px"
      width="81px"
      max-height="56px"
      max-width="81px"
      style="margin-right: 120px;"
    />

    <!-- <v-spacer /> -->

    <div class="d-flex flex-fill align-center justify-space-between">
      <v-app-bar-nav-icon>
        <router-link to="/">
          <v-img
            src="/images/website/logo.svg"
            max-height="64px"
            max-width="64px"
          />
        </router-link>
      </v-app-bar-nav-icon>

      <v-btn
        text
        plain
        to="/complaint"
        color="#264767"
        class="app-header-link ml-12"
      >
        Cere ajutor
      </v-btn>

      <v-btn
        text
        color="#264767"
        class="app-header-link"
      >
        Informații
      </v-btn>

      <v-btn
        text
        color="#264767"
        class="app-header-link"
      >
        Resurse de sprijin
      </v-btn>

      <v-btn
        text
        color="#264767"
        class="app-header-link"
      >
        Despre
      </v-btn>

      <v-btn
        text
        color="#264767"
        class="app-header-link"
      >
        Contact
      </v-btn>
    </div>

    <!-- <v-spacer /> -->

    <v-img
      src="/images/website/1.svg"
      height="64px"
      width="64px"
      max-height="64px"
      max-width="64px"
      style="margin-left: 120px;"
    />
  </v-app-bar>
</template>

<script>

export default {
  name: 'AppHeader',
}

</script>

<style lang="scss">

.app-header {
  z-index: 100;
  padding: 0 32px;
  top: $alert-height;
  height: $header-height;
  max-height: $header-height;
  position: fixed !important;
  border-bottom: 1px solid $gray100 !important;

  .v-toolbar__content {
    .app-header-link {
      padding-left: 0;
      border-radius: 0;
      padding-right: 0;
      padding-bottom: 2px;
      height: $header-height;

      &.v-btn--active {
        padding-bottom: 0;
        border-bottom: 2px solid $yellow500;
      }

      .v-btn__content {
        font-size: 16px;
        color: $gray700;
        font-weight: 500;
        font-family: Inter;
        opacity: 1 !important;
        text-transform: uppercase;
      }
    }
  }
}

</style>

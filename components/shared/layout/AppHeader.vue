<template>
  <div>
    <v-app-bar
      flat
      color="#FFF"
      class="app-header"
    >
      <div v-if="$vuetify.breakpoint.mdAndUp" class="d-flex flex-fill align-center">
        <v-img
          v-if="$vuetify.breakpoint.lgAndUp"
          src="/images/website/2.svg"
          height="56px"
          width="81px"
          max-height="56px"
          max-width="81px"
        />

        <v-spacer />

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
          :ripple="false"
          color="#264767"
          to="/cere-ajutor"
          class="app-header-link ml-12 mr-8"
        >
          Cere ajutor
        </v-btn>

        <v-btn
          text
          plain
          :ripple="false"
          color="#264767"
          to="/informatii"
          class="app-header-link mr-8"
        >
          Informații
        </v-btn>

        <v-btn
          text
          plain
          color="#264767"
          :ripple="false"
          to="resurse-de-sprijin"
          class="app-header-link mr-8"
        >
          Resurse de sprijin
        </v-btn>

        <v-btn
          text
          plain
          to="/despre"
          color="#264767"
          :ripple="false"
          class="app-header-link mr-8"
        >
          Despre
        </v-btn>

        <v-btn
          text
          plain
          to="/contact"
          color="#264767"
          :ripple="false"
          class="app-header-link"
        >
          Contact
        </v-btn>

        <v-spacer />

        <v-img
          v-if="$vuetify.breakpoint.lgAndUp"
          src="/images/website/1.svg"
          height="64px"
          width="64px"
          max-height="64px"
          max-width="64px"
        />
      </div>

      <div v-else class="d-flex flex">
        <v-btn
          icon
          color="#FBBF24"
          @click.stop="drawer = !drawer"
        >
          <v-icon size="32px">mdi-menu</v-icon>
        </v-btn>

        <div class="d-flex flex justify-center">
          <v-app-bar-nav-icon>
            <router-link to="/">
              <v-img
                src="/images/website/logo.svg"
                max-height="64px"
                max-width="64px"
              />
            </router-link>
          </v-app-bar-nav-icon>
        </div>
      </div>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      v-if="$vuetify.breakpoint.smAndDown"
      app
      color="#FFF"
      width="400px"
      class="app-drawer"
    >
      <div class="d-flex align-center px-4">
        <v-btn
          icon
          color="#FBBF24"
          @click.stop="drawer = false"
        >
          <v-icon size="32px">mdi-menu</v-icon>
        </v-btn>
        <v-spacer />
        <v-img
          src="/images/website/logo.svg"
          max-height="64px"
          max-width="64px"
        />
        <v-spacer />
      </div>

      <v-divider />
      <v-list>
        <v-list-item to="/cere-ajutor">
          <v-list-item-content>
            <v-list-item-title>
              Cere ajutor
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item to="/informatii">
          <v-list-item-content>
            <v-list-item-title>
              Informații
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item to="/resurse-de-sprijin">
          <v-list-item-content>
            <v-list-item-title>
              Resurse de sprijin
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item to="/despre">
          <v-list-item-content>
            <v-list-item-title>
              Despre
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item to="/contact">
          <v-list-item-content>
            <v-list-item-title>
              Contact
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>

export default {
  name: 'AppHeader',
  data: () => ({
    drawer: false,
  }),
}

</script>

<style lang="scss">

.app-header {
  z-index: 100;
  padding: 0 32px;
  top: $alert-height;
  position: fixed !important;
  height: $header-height !important;
  max-height: $header-height !important;
  border-bottom: 1px solid $gray100 !important;

  .v-toolbar__content {
    height: 100% !important;

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
        opacity: 1 !important;
        text-transform: uppercase;
        font-family: Inter, sans-serif;
      }
    }
  }
}

.app-drawer {
  z-index: 101;
  
  .v-list-item {
    font-size: 16px;
    color: $gray700;
    font-weight: 500;
    text-transform: uppercase;
    font-family: Inter, sans-serif;

    .v-list-item__content {
      padding: 20px 0;
    }

    &:hover {
      background-color: $yellow50 !important;
    }

    &.v-list-item--active {
      font-weight: 600;
      color: $yellow500;
      background-color: $yellow50 !important;
    }
  }
}

@media #{map-get($display-breakpoints, 'sm-and-down')} {
  .app-header {
    top: $alert-height-sm;
    padding: 0 16px !important;

    .v-toolbar__content {
      padding-left: 0;
      padding-right: 0;
    }
  }
}

</style>

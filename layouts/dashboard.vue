<template>
  <v-app ref="mouseMoveRef">
    <vue-confirm-dialog></vue-confirm-dialog>
    <v-main>
      <v-container
        fluid
        style="border-bottom: 1px solid #F2F2F2; margin-bottom: 50px"
        class="pa-0"
      >
        <v-container>
          <v-row>
            <v-col>
              <v-toolbar
                elevation="0"
                class="main-toolbar"
              >
                <v-toolbar-title>
                  <v-img contain height="60px" src="/images/layout/ceasul-cel-bun-logo.svg"/>
                </v-toolbar-title>
                <v-spacer/>
                <v-btn
                  text
                  class="text-none"
                >
                  Dashboard
                </v-btn>
                <v-btn
                  text
                  class="text-none"
                  to="/admin/complaints"
                  v-if="$user.hasPermission('ViewAny - complaints')"
                >
                  Raportări
                </v-btn>
                <v-btn
                  text
                  class="text-none"
                  to="/admin/articles"
                  v-if="$user.hasPermission('ViewAny - articles')"
                >
                  Gestionare articole
                </v-btn>
                <v-btn
                  text
                  class="text-none"
                  to="/admin/resources"
                  v-if="$user.hasPermission('ViewAny - resources')"
                >
                  Gestionare resurse de sprijin
                </v-btn>
                <v-btn
                  text
                  class="text-none"
                  to="/admin/users"
                  v-if="$user.hasPermission('ViewAny - users')"
                >
                  Utilizatori
                </v-btn>
                <v-spacer/>
                <v-menu
                  bottom
                  left
                  min-width="200px"
                  rounded
                  offset-y
                >
                  <template v-slot:activator="{ on }">
                    <v-btn
                      icon
                      x-large
                      v-on="on"
                    >
                      <v-avatar
                        color="primary"
                        size="48"
                      >
                        <span class="white--text text-h5">{{ $user.initials()}}</span>
                      </v-avatar>
                    </v-btn>
                  </template>
                  <v-card>
                    <v-list-item-content class="justify-center">
                      <div class="mx-auto text-center">
                        <h4>{{ $auth?.user.full_name }}</h4>
                        <v-divider class="my-3"></v-divider>
                        <v-btn
                          depressed
                          rounded
                          text
                          @click="handleLogout"
                        >
                          Deconectare
                        </v-btn>
                      </div>
                    </v-list-item-content>
                  </v-card>
                </v-menu>
              </v-toolbar>
            </v-col>
          </v-row>
        </v-container>
      </v-container>

      <v-container>
        <dashboard-snackbar />
        <router-view></router-view>
      </v-container>
    </v-main>
    <v-footer app>

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
    async handleLogout () {
      await this.$auth.logout()
      await this.$router.push('/login')
    },
  }
}
</script>

<style lang="scss">
.main-toolbar{
  .v-toolbar__content{
    padding-left: 0px;
    padding-right: 0px;
  }
}
</style>

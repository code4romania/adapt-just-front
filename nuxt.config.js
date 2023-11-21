import webpack from "webpack";

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - Ceasul Bun',
    title: 'Ceasul Bun',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/lodash',
    {src: '@/plugins/vee-validate.js'},
    '~/plugins/vue-confirm-dialog.js',
    { src: '~/plugins/helpers/user.js' },
    { src: '~/plugins/helpers/form.js' },
    { src: '~/plugins/axios.js'},
    { src: '~/plugins/component-loader.js' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/moment',
    '@nuxtjs/google-fonts'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
  ],

  ssr: false,
  auth: {
    redirect: false,
    strategies: {
      local: {
        token: {
          property: 'token',
          global: true,
          type: 'Bearer'
        },
        endpoints: {
          login: {
            url: '/api/login',
            withCredentials: true
          },
          logout: {
            url: '/api/logout',
            method: 'post',
            withCredentials: true
          },
          user: {
            url: '/api/user',
            method: 'get',
            withCredentials: true
          }
        },
        user: {
          property: 'data'
        }
      },
    }
  },
  axios: {
    credentials: true
  },
  router: {
    middleware: ['auth', 'permission-check']
  },
  moment: {
    locales: ['ro']
  },
  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        light: {
          primary: '#D97706',
          // accent: colors.grey.darken3,
          // secondary: colors.amber.darken3,
          // info: colors.teal.lighten1,
          // warning: colors.amber.base,
          // error: colors.deepOrange.accent4,
          // success: colors.green.accent3,
          anchor: '#8c9eff',
        }
      }
    }
  },

  googleFonts: {
    preload: true,
    display: 'swap',
    families: {
      Roboto: {
        wght: [400]
      },
      Inter: [400, 500, 600, 700, 800],
      "Titillium Web" : [400, 600, 700, 800],
      Montserrat: [700],
      'Encode Sans': [400, 500, 700],
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    plugins: [
      new webpack.ProvidePlugin({
        _: 'lodash'
      })
    ],
    transpile: [
      'defu',
      'vee-validate/dist/rules'
    ],

  }
}

import Vue from 'vue'
import VueGtag from 'vue-gtag'

export default ({ app }) => {
  if (app.$config.STAGE === 'production') {
    Vue.use(VueGtag, {
      config: { id: app.$config.NUXT_PUBLIC_GTAG_ID },
      appName: 'CerAjutor',
      pageTrackerScreenviewEnabled: true,
    }, app.router)
  }
}

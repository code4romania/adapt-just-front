<template>
  <div>
    <v-app class="adapt-app">
      <app-alert />
      <app-header />
      <v-main class="app-main">
        <router-view />
      </v-main>

      <app-footer v-if="footerVisible" />

      <app-hide-dialog
          :visible="hideApp"
          @close="hideApp = false"
      />
    </v-app>
    <app-actions
        @hide="hideApp = true"
        @increaseFont="increaseFont"
        @decreaseFont="decreaseFont"
        @invert="invert"
        @blackAndWhite="blackAndWhite"
        @linkHighLight="linkHighLight"
        @resetAll="resetAll"
    />
  </div>

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
  head () {
    return {
      meta: [
        { hid: 'og:image', property: 'og:image', content: '/images/website/ceasul-bun-share.png' }
      ]
    }
  },
  data() {
    return {
      hideApp: false,
      accessibility: null,
      filterRootElement: null
    }
  },
  computed: {
    footerVisible() {
      return !this.$route.path.startsWith('/cere-ajutor')
    }
  },
  beforeMount() {
    this.accessibility = localStorage.getItem('accessibility');
    if (!this.accessibility) {
      this.defaultValues();
      localStorage.setItem("accessibility", JSON.stringify(this.accessibility))
    } else {
      this.accessibility = JSON.parse(this.accessibility)
    }
  },
  mounted() {
    document.onreadystatechange = () => {
      if (document.readyState === "complete") {
        this.initAccessibility()
      }
    }

  },
  updated() {
    setTimeout(() => {
      this.initAccessibility()
    }, 500)
  },
  methods: {
    initAccessibility() {
      this.filterRootElement = document.getElementsByTagName('body')[0]
      this.adjustFont(this.filterRootElement, 0, true)
      if (this.accessibility.fontSize) {
        this.adjustFont(this.filterRootElement, this.accessibility.fontSize ?? 0)
      }
      this.toggleBlackAndWhite()
      this.toggleInvert()
      this.toggleLinkHighLight()
    },

    increaseFont() {
      let fontSize = (this.accessibility.fontSize ?? 0) + 1
      if (fontSize > 5) {
        return false
      }
      this.accessibility.fontSize = fontSize;
      this.setLocalstorage(this.accessibility);

      this.adjustFont(document.getElementsByTagName('body')[0], this.accessibility.fontSize ?? 0)
    },
    decreaseFont() {
      let fontSize = (this.accessibility.fontSize ?? 0) - 1
      if (fontSize < -5) {
        return false
      }
      this.accessibility.fontSize = fontSize
      this.setLocalstorage(this.accessibility)
      this.adjustFont(document.getElementsByTagName('body')[0],  this.accessibility.fontSize ?? 0 )

    },
    adjustFont(nodeElement, value, init = false) {
      if (!nodeElement?.classList?.contains('no-accessibility')) {
        var elems = nodeElement.children;
        _.forEach(elems, (el) => {
          if (init) {
            if (!parseFloat(el.getAttribute('data-dfs'))) {
              const fs = parseFloat(window.getComputedStyle(el, null).getPropertyValue('font-size'))
              el.setAttribute('data-dfs', fs)
            }
          } else {
            const fs = parseFloat(el.getAttribute('data-dfs'))

            el.style.fontSize = parseFloat(fs + (2 * value)) + "px"
          }

          this.adjustFont(el, value, init)
        })
      }
    },

    blackAndWhite() {
      this.accessibility.blackAndWhite = !this.accessibility?.blackAndWhite
      this.accessibility.invert = false
      this.setLocalstorage(this.accessibility)
      this.toggleBlackAndWhite()
      this.toggleInvert()
    },
    toggleBlackAndWhite() {
      if (this.accessibility.blackAndWhite) {
        this.filterRootElement.classList.add('accessibility-grayscale')
      } else {
        this.filterRootElement.classList.remove('accessibility-grayscale')
      }
    },
    invert() {
      this.accessibility.invert = !this.accessibility?.invert
      this.accessibility.blackAndWhite = false
      this.setLocalstorage(this.accessibility)
      this.toggleInvert()
      this.toggleBlackAndWhite()
    },
    toggleInvert() {
      if (this.accessibility.invert) {
        this.filterRootElement.classList.add('accessibility-invert')
      } else {
        this.filterRootElement.classList.remove('accessibility-invert')
      }
    },
    linkHighLight() {
      this.accessibility.linkHighLight = !this.accessibility?.linkHighLight
      this.setLocalstorage(this.accessibility)
      this.toggleLinkHighLight()
    },
    toggleLinkHighLight() {
      if (this.accessibility.linkHighLight) {
        this.filterRootElement.classList.add('accessibility-link-high-light')
      } else {
        this.filterRootElement.classList.remove('accessibility-link-high-light')
      }
    },

    resetAll() {
      this.defaultValues();
      this.setLocalstorage(this.accessibility)

      this.adjustFont(this.filterRootElement, this.accessibility.fontSize ?? 0)
      this.toggleBlackAndWhite()
      this.toggleInvert()
      this.toggleLinkHighLight()

    },
    defaultValues() {
      this.accessibility = {
        fontSize: 0,
        blackAndWhite: 0,
        invert: 0,
        linkHighLight: 0
      }
    },
    setLocalstorage(accessibility) {
      localStorage.setItem('accessibility', JSON.stringify(accessibility))
    },
  }
}

</script>

<style lang="scss">

html{
  position: relative !important;
}
.accessibility-grayscale .v-application{
  -webkit-filter: grayscale(100%) !important;
  filter: grayscale(100%) !important;
}

.accessibility-invert .v-application{
  -webkit-filter:  invert(100%) !important;
  filter:  invert(100%) !important;
}

div.v-application > div.v-application--wrap{
  //filter: none !important;
}

.accessibility-link-high-light button,
.accessibility-link-high-light button *,
.accessibility-link-high-light a[href],
.accessibility-link-high-light a[href] *, {
  text-decoration: underline !important;
}

.app-main {
  padding-top: $main-padding-top !important;
}

@media #{map-get($display-breakpoints, 'sm-and-down')} {
  .app-main {
    padding-top: $main-padding-top-sm !important;
  }
}

</style>

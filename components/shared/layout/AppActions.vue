<template>
  <div class="app-actions no-accessibility">
    <div class="d-flex flex">
      <v-btn
        text
        class="hide-button"
        @click="handleHide"
      >
        Ascunde

        <div>
          <v-img
            src="/images/website/icons/hide-icon.svg"
            height="24px"
            width="24px"
            class="ml-3"
          />
        </div>
      </v-btn>
    </div>

    <div class="d-flex flex">
      <v-btn
        text
        class="listen-button"
        :class="{ 'active': isListen }"
        @click="handleListen"
      >
        Ascultă

        <div>
          <v-img
            src="/images/website/icons/listen-icon.svg"
            height="24px"
            width="24px"
            class="ml-3"
          />
        </div>
      </v-btn>
    </div>

    <div class="d-flex flex">
      <v-menu
        offset-y
        offset-x
        :close-on-content-click="false"
        content-class="no-accessibility "
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
              text
              class="accessibility-button"
              v-on="on"
          >
            <div>
              <v-img
                  src="/images/website/icons/accessibility-icon.svg"
                  height="24px"
                  width="24px"
              />
            </div>
          </v-btn>
        </template>
        <v-list
          class="accessibility-button-list"
        >
          <v-list-item
            @click="accessibilityEvent('increaseFont')"
            :class="{'active' : accessibility?.fontSize > 0}"
          >
            <v-list-item-icon>
              <v-icon >mdi-plus-thick</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Mareste fontul</v-list-item-title>
          </v-list-item>
          <v-list-item
            @click="accessibilityEvent('decreaseFont')"
            :class="{'active' : accessibility?.fontSize < 0}"
          >
            <v-list-item-icon>
              <v-icon >mdi-minus-thick</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Micsoreaza fontul</v-list-item-title>
          </v-list-item>
          <v-list-item
              @click="accessibilityEvent('blackAndWhite')"
              :class="{'active' : accessibility?.blackAndWhite}"
          >
            <v-list-item-icon>
              <v-icon >mdi-brightness-6</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Alb si negru</v-list-item-title>
          </v-list-item>
          <v-list-item
              @click="accessibilityEvent('invert')"
              :class="{'active' : accessibility?.invert}"
          >
            <v-list-item-icon>
              <v-icon >mdi-invert-colors</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Inverseaza culorile</v-list-item-title>
          </v-list-item>
          <v-list-item
              @click="accessibilityEvent('linkHighLight')"
              :class="{'active' : accessibility?.linkHighLight}"
          >
            <v-list-item-icon>
              <v-icon>mdi-format-underline</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Evidentiza legaturile</v-list-item-title>
          </v-list-item>
          <v-list-item
            @click="accessibilityEvent('resetAll')"
          >
            <v-list-item-icon>
              <v-icon>mdi-replay</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Reseteaza</v-list-item-title>
          </v-list-item>

        </v-list>
      </v-menu>

    </div>

  </div>
</template>

<script>

export default {
  data() {
    return {
      isListen: false,
      accessibility: null
    }
  },
  mounted() {
    this.syncAccessibility()
  },
  methods: {
    handleHide() {
      if (this.isListen) {
        speechSynthesis.cancel()
        this.isListen = false
      }
      this.$emit('hide')
    },
    handleListen() {
      this.isListen = !this.isListen

      if (this.isListen) {
        this.listen()
      } else {
        speechSynthesis.cancel()
      }
    },
    listen() {
      const elements = document.querySelectorAll('[data-listen-text]')
      if (elements.length === 0) return

      const voices = speechSynthesis.getVoices()
      const utterance = new SpeechSynthesisUtterance()
      utterance.lang = 'ro-RO'
      utterance.rate = 0.6
      utterance.pitch = 1.0
      utterance.volume = 1.0
      utterance.voice = voices.filter(
        (voice) => voice.lang === 'ro-RO'
      )[0]

      const texts = []
      elements.forEach((element) => {
        let text = element.innerText || element.value

        if (/^\d+$/.test(text)) {
          const numbers = text.split('')
          const spacedNumbers = numbers.map((number) => ` ${number}`)
          text = spacedNumbers.join('')
        }

        texts.push(text)
      })

      const text = texts.join('; ')
      utterance.text = text

      speechSynthesis.speak(utterance)
      utterance.onend = () => {
        this.isListen = false
      }
    },
    accessibilityEvent(ev) {
      this.$emit(ev)
      this.syncAccessibility()
    },
    syncAccessibility() {
        this.accessibility = localStorage.getItem('accessibility');
        if (this.accessibility) {
          this.accessibility = JSON.parse(this.accessibility)
        }
    }
  }
}

</script>

<style lang="scss">

.app-actions {
  z-index: 2;
  position: fixed;
  margin-top: 2rem;
  top: 150px;

  .hide-button {
    background: #FFF;
    height: auto !important;
    border: 1px solid $gray200;
    border-radius: 0px 8px 8px 0px;
    padding: 0.75rem 1rem !important;

    .v-btn__content {
      color: $red600;
      font-weight: 600;
      line-height: 20px;
      text-align: center;
      font-size: 1.25rem;
      font-style: normal;
      font-family: Inter, sans-serif;
    }
  }

  .listen-button {
    width: 100%;
    margin-top: 14px;
    background: #FFF;
    height: auto !important;
    border: 1px solid $gray200;
    border-radius: 0px 8px 8px 0px;
    padding: 0.75rem 1rem !important;

    &.active {
      background: $yellow400;
      border: 1px solid $yellow600;
    }

    .v-btn__content {
      color: $gray900;
      font-weight: 600;
      line-height: 20px;
      text-align: center;
      font-size: 1.25rem;
      font-style: normal;
      font-family: Inter, sans-serif;
    }
  }
  .accessibility-button {
    margin-top: 14px;
    background: #FFF;
    height: auto !important;
    border: 1px solid $gray200;
    border-radius: 0px 8px 8px 0px;
    padding: 0.75rem 1rem !important;

    &.active {
      background: $yellow400;
      border: 1px solid $yellow600;
    }

    .v-btn__content {
      color: $gray900;
      font-weight: 600;
      line-height: 20px;
      text-align: center;
      font-size: 1.25rem;
      font-style: normal;
      font-family: Inter, sans-serif;
    }
  }

}
.accessibility-button-list {
  .v-list-item.active{
    background-color: #D97706;
  }
}

@media #{map-get($display-breakpoints, 'xs-only')} {
  .app-actions {
    top: auto;
    bottom: 0;
    width: 100%;
    display: flex;
    margin-top: 0;
    flex-direction: row-reverse;

    .hide-button {
      width: 100%;
      border-radius: 0px 8px 0px 0px !important;
      .v-btn__content {
        font-size: 14px !important;
      }
    }

    .listen-button {
      width: 100%;
      margin-top: 0;
      border-radius: 0px 0px 0px 0px !important;
      .v-btn__content{
        font-size: 14px !important;
      }

    }
    .accessibility-button {
      width: 100%;
      margin-top: 0;
      border-radius: 8px 0px 0px 0px !important;
    }
  }
}

</style>

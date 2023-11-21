<template>
  <div class="app-actions">
    <div>
      <v-btn
        text
        class="hide-button"
        @click="handleHide"
      >
        Ascunde

        <v-img
          src="/images/website/icons/hide-icon.svg"
          height="24px"
          width="24px"
          class="ml-3"
        />
      </v-btn>
    </div>

    <!-- <div>
      <v-btn
        text
        class="listen-button"
        :class="{ 'active': isListen }"
        @click="handleListen"
      >
        Ascultă

        <v-img
          src="/images/website/icons/listen-icon.svg"
          height="24px"
          width="24px"
          class="ml-3"
        />
      </v-btn>
    </div> -->
  </div>
</template>

<script>

export default {
  data() {
    return {
      isListen: false,
    }
  },
  methods: {
    handleHide() {
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
        const innerText = element.innerText
        texts.push(innerText)
      })

      const text = texts.join('; ')
      utterance.text = text

      speechSynthesis.speak(utterance)
      utterance.onend = () => {
        this.isListen = false
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
}

</style>

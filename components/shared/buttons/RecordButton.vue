<template>
  <v-btn
    text
    class="record-button"
    :class="{ 'active': isRecording }"
    @mousedown="startRecording"
    @mouseup="stopRecording"
  >
    <v-img
      src="/images/website/icons/microphone-icon.svg"
      width="23px"
      height="40px"
    />
  </v-btn>
</template>

<script>

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
const recognition = new SpeechRecognition()

recognition.lang = 'ro-RO'
recognition.maxAlternatives = 1
recognition.interimResults = false

export default {
  data() {
    return {
      isRecording: false,
    }
  },
  methods: {
    startRecording() {
      this.isRecording = true

      recognition.start()
      recognition.onresult = (event) => {
        const text = event.results[0][0].transcript
        this.$emit('input', text)
      }
    },
    stopRecording() {
      this.isRecording = false
      recognition.stop()
    },
  }
}

</script>

<style lang="scss">

.record-button {
  margin-left: 80px;
  width: 64px !important;
  height: 64px !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;

  border-radius: 32px !important;
  background: $yellow400 !important;
  box-shadow: 0px 2.45833px 4.91667px 0px rgba(0, 0, 0, 0.05) !important;

  &.active {
    background: $yellow300 !important;
    animation: pulse 1s infinite;

    @keyframes pulse {
      0% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.1);
      }
      100% {
        transform: scale(1);
      }
    }
  }
}

@media #{map-get($display-breakpoints, 'sm-and-down')} {
  .record-button {
    margin-left: 0 !important;
    margin-top: 30px !important;
  }
}

</style>

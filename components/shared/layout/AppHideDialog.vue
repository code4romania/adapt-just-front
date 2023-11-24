<template>
  <v-dialog
    v-model="dialog"
    persistent
    fullscreen
    content-class="hide-dialog"
  >
    <v-toolbar flat :height="106" class="hide-header">
      <v-toolbar-title>
        <v-img src="/images/website/clocktime.svg"/>
      </v-toolbar-title>
    </v-toolbar>

    <div class="splashscreen">
      <div style="z-index: 1;">
        <h1 class="splashscreen-title">Bună, <br>este</h1>
        <h1 class="splashscreen-time" @click="$emit('close')">{{ time }}</h1>
        <h2 class="splashscreen-date-label" v-if="dateLabel">{{ dateLabel }},</h2>
        <h2 class="splashscreen-date">{{ date }}.</h2>
        <h2 class="splashscreen-text mt-4">Apasă pe ceas pentru a reveni</h2>
      </div>

      <div>
        <v-img
          src="/images/website/clock.svg"
          class="clock-image"
          @click="$emit('close')"
        />
      </div>
    </div>
  </v-dialog>
</template>

<script>

export default {
  props: {
    visible: {
      type: Boolean,
      default: false,
    }
  },
  created() {
    setInterval(this.getNow, 1000);
  },
  watch: {
    visible(val) {
      this.dialog = val
    }
  },
  data() {
    return {
      time: '',
      date: '',
      dateLabel: '',
      dialog: this.visible,
    }
  },
  methods: {
    getNow() {
      this.time = this.$moment().format('HH:mm')
      this.dateLabel = this.$moment().format('dddd')
      this.date = this.$moment().format('DD.MM.YYYY')
    }
  }
}

</script>

<style lang="scss">

.hide-dialog {
  background-color: #FFF;

  .hide-header {
    box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.10) !important;
  }

  .splashscreen {
    display: flex;
    padding: 0 100px;
    align-items: center;
    justify-content: center;
    height: calc(100% - 106px);

    .splashscreen-title {
      font-size: 60px;
      font-weight: 700;
      line-height: 60px;
      font-style: normal;
      color: #264767;
      font-family: Montserrat, sans-serif;
    }

    .splashscreen-time {
      font-weight: 700;
      font-size: 140px;
      margin: 30px 0px;
      line-height: 171px;
      font-style: normal;
      color: #264767;
      font-family: Montserrat, sans-serif;
    }

    .splashscreen-date,
    .splashscreen-date-label {
      font-style: normal;
      font-weight: 700;
      font-size: 30px;
      line-height: 37px;
      color: #264767;
      text-transform: capitalize;
      font-family: Montserrat, sans-serif;
    }

    .splashscreen-text {
      color: #264767;
      font-size: 24px;
      font-weight: 700;
      font-style: normal;
      line-height: normal;
      font-family: Montserrat, sans-serif;
    }

    .clock-image {
      max-width: 763px;
      max-height: 477px;
    }
  }
}

@media #{map-get($display-breakpoints, 'md-only')} {
  .hide-dialog {
    .splashscreen {
      padding: 0 50px !important;

      .clock-image {
        max-width: 580px !important;
        max-height: 400px !important;
      }
    }
  }
}

@media #{map-get($display-breakpoints, 'sm-and-down')} {
  .hide-dialog {
    .splashscreen {
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      padding-top: 50px !important;

      .splashscreen-title {
        font-size: 48px;
      }
      
      .splashscreen-time {
        font-size: 120px;
        margin: 0 !important;
      }

      .clock-image {
        bottom: 0;
        right: -60px;
        position: absolute;
        max-width: 500px !important;
        max-height: 400px !important;
      }
    }
  }
}

@media #{map-get($display-breakpoints, 'xs-only')} {
  .hide-dialog {
    .splashscreen {
      padding-left: 20px !important;
      padding-right: 20px !important;
    }
  }
}

</style>

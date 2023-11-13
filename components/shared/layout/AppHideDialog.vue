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
      <v-row no-gutters style="height: 100%;">
        <v-col cols="5" class="d-flex align-center justify-end">
          <div>
            <h1 class="splashscreen-title">Bună, <br>este</h1>
            <h1 class="splashscreen-time" @click="$emit('close')">{{ time }}</h1>
            <h2 class="splashscreen-date-label" v-if="dateLabel">{{ dateLabel }},</h2>
            <h2 class="splashscreen-date">{{ date }}.</h2>
            <h2 class="splashscreen-text mt-4">Apasă pe ceas pentru a reveni</h2>
          </div>
        </v-col>

        <v-col cols="7" class="d-flex align-center justify-center">
          <v-img
            src="/images/website/clock.svg"
            max-width="763px"
            max-height="477px"
            @click="$emit('close')"
          />
        </v-col>
      </v-row>
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
    flex-direction: column;
    height: calc(100vh - 106px);

    .splashscreen-title {
      font-size: 60px;
      font-weight: 700;
      line-height: 60px;
      font-style: normal;
      color: #264767;
      font-family: Montserrat;
    }

    .splashscreen-time {
      font-weight: 700;
      font-size: 140px;
      margin: 30px 0px;
      line-height: 171px;
      font-style: normal;
      color: #264767;
      font-family: Montserrat;
    }

    .splashscreen-date,
    .splashscreen-date-label {
      font-style: normal;
      font-weight: 700;
      font-size: 30px;
      line-height: 37px;
      color: #264767;
      font-family: Montserrat;
      text-transform: capitalize;
    }

    .splashscreen-text {
      color: #264767;
      font-size: 24px;
      font-weight: 700;
      font-style: normal;
      line-height: normal;
      font-family: Montserrat;
    }
  }
}

</style>

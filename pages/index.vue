<template>
  <v-container class="splashscreen">
    <v-row>
      <v-col>
        <v-toolbar
          flat
        >
          <v-toolbar-title>
            <v-img src="/images/website/clocktime.svg"/>
          </v-toolbar-title>
        </v-toolbar>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <h1 class="splashscreen-title">Bună, <br>este</h1>
        <h1 class="splashscreen-time">{{ time }}</h1>
        <h2 class="splashscreen-date-label" v-if="dateLabel">{{ dateLabel }},</h2>
        <h2 class="splashscreen-date">{{ date }}</h2>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  auth: false,
  head: {
    titleTemplate: null
  },
  created() {
    setInterval(this.getNow, 1000);
  },
  data() {
    return {
      time: '',
      dateLabel: '',
      date: ''
    }
  },
  methods: {
    getNow: function() {
      this.time = this.$moment().format('HH:mm')
      this.dateLabel = this.$moment().format('dddd')
      this.date = this.$moment().format('DD.MM.YYYY')
    }
  }
}
</script>

<style lang="scss">
.splashscreen{
  .splashscreen-title{
    font-style: normal;
    font-weight: 700;
    font-size: 60px;
    line-height: 60px;
    color: #264767;
    margin-top: 100px;
  }
  .splashscreen-time{
    font-style: normal;
    font-weight: 700;
    font-size: 140px;
    line-height: 171px;
    color: #264767;
    margin: 30px 0px;
  }
  .splashscreen-date,
  .splashscreen-date-label{
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 37px;

    color: #264767;
  }
}

</style>

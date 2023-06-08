<template>
  <v-btn
    plain
    class="text-none ui-form-back-button px-0"
    large
    :to="to"
  >
    <v-icon>mdi-chevron-left</v-icon>
    Inapoi
  </v-btn>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss">
  .ui-form-back-button{
    .v-btn__content{
      font-size: 18px !important;
    }
  }
</style>

<template>
  <v-btn
    outlined
    color="#FFF"
    data-listen-text
    class="back-button"
    :block="$vuetify.breakpoint.xsOnly"
    @click.native="$emit('click')"
  >
    <div>
      <v-img
        src="/images/website/icons/form-arrow-left.svg"
        width="24px"
        height="24px"
        class="mr-2"
      />
    </div>

    Înapoi
  </v-btn>
</template>

<style lang="scss">

.back-button {
  border-radius: 8px;
  height: auto !important;
  background-color: #FFF;
  border: 1px solid $gray300;
  padding: 0.5rem 2rem !important;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.10), 0px 1px 2px 0px rgba(0, 0, 0, 0.06);

  .v-btn__content {
    color: $gray600;
    font-size: 20px;
    font-weight: 600;
    line-height: 28px;
    font-style: normal;
    font-family: Inter, sans-serif;
  }
}

@media #{map-get($display-breakpoints, 'xs-only')} {
  .back-button {
    height: 50px !important;
  }
}

</style>

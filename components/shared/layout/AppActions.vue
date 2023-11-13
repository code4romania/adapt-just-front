<template>
  <div class="app-actions">
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
</template>

<script>

export default {
  methods: {
    handleHide() {
      this.$emit('hide')
    }
  }
}

</script>

<style lang="scss">

.app-actions {
  z-index: 2;
  position: fixed;
  margin-top: 2rem;
  background-color: rgba(255, 255, 0, 0.5);

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
}

</style>

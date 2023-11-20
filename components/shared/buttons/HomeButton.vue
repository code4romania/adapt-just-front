<template>
  <v-btn
    :to="to"
    outlined
    color="#FFF"
    class="home-button"
  >
    <v-img
      src="/images/website/icons/arrow-left.svg"
      width="20px"
      height="20px"
      class="mr-3"
    />

    {{ text }}
  </v-btn>
</template>

<script>

export default {
  props: {
    to: {
      type: String,
      default: '/',
    },
    text: {
      type: String,
      default: 'Ecran principal',
    },
  }
}

</script>

<style lang="scss">

.home-button {
  border-radius: 8px;
  height: auto !important;
  background-color: #FFF;
  border: 1px solid $yellow400;
  padding: 0.75rem 1rem !important;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.05);

  .v-btn__content {
    color: $gray900;
    font-size: 20px;
    font-weight: 700;
    line-height: 24px;
    font-style: normal;
    font-family: "Encode Sans", sans-serif;
  }

  &:hover {
    background-color: $yellow50;

    &::before {
      transition: none;
      background: none;
    }
  }
}

</style>

<template>
  <v-btn
    data-listen-text
    class="next-button"
    :loading="loading"
    :disabled="disabled"
    :block="$vuetify.breakpoint.xsOnly"
    :class="{ 'mb-4': $vuetify.breakpoint.xsOnly }"
    @click.native="$emit('click')"
  >
    {{ text }}

    <div>
      <v-img
        src="/images/website/icons/arrow-right.svg"
        alt="Arrow right"
        width="24px"
        height="24px"
        class="ml-2"
      />
    </div>
  </v-btn>
</template>

<script>

export default {
  props: {
    text: {
      type: String,
      default: 'Continuă',
    },
    loading: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  }
}

</script>

<style lang="scss">

.next-button {
  height: auto !important;
  padding: 0.5rem 1rem !important;
  border-radius: 0.5rem !important;
  background-color: $yellow400 !important;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.10), 0px 1px 2px 0px rgba(0, 0, 0, 0.06) !important;

  .v-btn__content {
    font-weight: 600;
    line-height: 28px;
    font-size: 1.25rem;
    font-style: normal;
    color: $gray900 !important;
    font-family: Inter, sans-serif;
  }
}

@media #{map-get($display-breakpoints, 'xs-only')} {
  .next-button {
    height: 50px !important;
  }
}

</style>

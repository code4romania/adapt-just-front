<template>
  <v-btn
    outlined
    color="#FFFBEB"
    class="complaint-location-button"
    @click="$emit('click')"
  >
    <div v-if="!location">
      <v-img
        src="/images/website/icons/location-icon.svg"
        width="35px"
        height="35px"
        class="mr-8"
      />
    </div>

    <div class="button-content">
      <span class="d-block button-title">
        {{ text }}
      </span>
    </div>

    <div>
      <v-img
        src="/images/website/icons/form-arrow-right.svg"
        width="30px"
        height="30px"
        class="ml-3"
      />
    </div>
  </v-btn>
</template>

<script>

export default {
  props: {
    location: {
      type: Object,
      default: null,
    },
  },
  computed: {
    text() {
      if (this.location) {
        return this.location.name;
      }

      return 'Caută o locație';
    },
  },
}

</script>

<style lang="scss">

.complaint-location-button {
  flex: 1;
  border-radius: 8px;
  height: auto !important;
  background-color: $yellow50;
  border: 1px solid $yellow200;
  padding: 14px 16px 14px 32px !important;

  &:hover {
    background-color: $yellow50;

    &::before {
      transition: none;
      background: none;
    }
  }

  .v-btn__content {
    width: 100%;

    .button-content {
      flex: 1;
      display: flex;
      overflow: hidden;
      flex-direction: column;
      align-items: flex-start;

      .button-title {
        width: 100%;
        color: $gray900;
        font-size: 24px;
        font-weight: 600;
        overflow: hidden;
        text-align: left;
        line-height: 20px;
        font-style: normal;
        white-space: nowrap;
        text-overflow: ellipsis;
        text-transform: uppercase;
        font-family: Inter, sans-serif;
      }
    }
  }
}

</style>

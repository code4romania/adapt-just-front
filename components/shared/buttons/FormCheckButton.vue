<template>
  <v-btn
    outlined
    color="#FFF"
    :class="{ active }"
    class="form-check-button"
    @click="$emit('click')"
  >
    <v-img
      v-if="icon"
      :src="icon"
      max-width="64px"
    />

    <div class="button-content">
      <span class="d-block button-title">
        {{ title }}
      </span>
    </div>

    <div v-if="!active" class="check" />
    <svg v-else xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
      <rect x="0.5" y="0.5" width="31" height="31" rx="3.5" fill="#D97706"/>
      <rect x="0.5" y="0.5" width="31" height="31" rx="3.5" stroke="#D97706"/>
      <path d="M24.4138 9.58606C24.7888 9.96112 24.9994 10.4697 24.9994 11.0001C24.9994 11.5304 24.7888 12.039 24.4138 12.4141L14.4138 22.4141C14.0388 22.789 13.5302 22.9996 12.9998 22.9996C12.4695 22.9996 11.9609 22.789 11.5858 22.4141L7.58584 18.4141C7.22152 18.0369 7.01993 17.5317 7.02449 17.0073C7.02905 16.4829 7.23938 15.9812 7.6102 15.6104C7.98102 15.2396 8.48264 15.0293 9.00704 15.0247C9.53143 15.0202 10.0366 15.2217 10.4138 15.5861L12.9998 18.1721L21.5858 9.58606C21.9609 9.21112 22.4695 9.00049 22.9998 9.00049C23.5302 9.00049 24.0388 9.21112 24.4138 9.58606Z" fill="white"/>
    </svg>
  </v-btn>
</template>

<script>

export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: false,
    },
    active: {
      type: Boolean,
      required: false,
      default: false,
    },
  }
}

</script>

<style lang="scss">

.form-check-button {
  width: 100%;
  border-radius: 6px;
  height: auto !important;
  background-color: #FFF;
  border: 1px solid $yellow200;
  padding: 17px 25px 17px 17px !important;

  &.active {
    background-color: $yellow50;
  }

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
      margin-left: 12px;
      flex-direction: column;
      align-items: flex-start;

      .button-title {
        color: $gray900;
        font-size: 24px;
        font-weight: 600;
        line-height: 24px;
        font-style: normal;
        text-transform: uppercase;
        font-family: Inter, sans-serif;
      }
    }

    .check {
      width: 32px;
      height: 32px;
      border-radius: 4px;
      background: #FFF;
      border: 1px solid #D1D5DB;
    }
  }
}

</style>

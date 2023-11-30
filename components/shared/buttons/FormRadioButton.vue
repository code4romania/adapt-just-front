<template>
  <v-btn
    outlined
    color="#FFF"
    :class="{ active }"
    class="form-radio-button"
    @click="$emit('click')"
  >
    <div class="button-content">
      <span class="d-block button-title">
        {{ title }}
      </span>

      <div v-if="subtitle">
        <span class="d-block button-subtitle">
          {{ subtitle }}
        </span>
      </div>
    </div>

    <div v-if="!active" class="check" />
    <svg v-else xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
      <rect x="0.0830078" width="31.9584" height="32" rx="15.9792" fill="#D97706"/>
      <circle cx="16.083" cy="16" r="6" fill="white"/>
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
    subtitle: {
      default: '',
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

.form-radio-button {
  width: 100%;
  border-radius: 6px;
  height: auto !important;
  background-color: #FFF;
  border: 1px solid $yellow600;
  padding: 19px 30px 19px 30px !important;

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
        font-weight: 700;
        line-height: 60px;
        font-style: normal;
        text-transform: uppercase;
        font-family: Inter, sans-serif;
      }

      .button-subtitle {
        color: #4B5563;
        font-size: 20px;
        font-weight: 700;
        line-height: 60px;
        font-style: normal;
        letter-spacing: -0.1px;
        text-transform: uppercase;
        font-family: Inter, sans-serif;
      }
    }

    .check {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background: #FFF;
      border: 1px solid $gray300;
    }
  }
}

</style>

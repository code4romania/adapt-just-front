<template>
  <v-btn
    outlined
    color="#FFF"
    class="form-button"
    :class="{ active }"
    :disabled="disabled"
    @click="$emit('click')"
  >
    <v-img
      v-if="icon"
      :src="icon"
      max-width="100px"
      class="button-icon"
    />

    <div class="button-content">
      <span class="d-block button-title" data-listen-text>
        {{ title }}
      </span>
      <div v-if="subtitle" class="subtitle-container">
        <span class="d-block button-subtitle" data-listen-text>
          {{ subtitle }}
        </span>
      </div>
    </div>

    <div>
      <v-img
        src="/images/website/icons/form-arrow-right.svg"
        width="43px"
        height="43px"
        class="ml-3 button-arrow"

      />
    </div>
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
      type: String,
      required: false,
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
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
  }
}

</script>

<style lang="scss">

.form-button {
  width: 100%;
  border-radius: 8px;
  height: auto !important;
  background-color: #FFF;
  border: 1px solid $yellow600;
  padding: 28px 52px 28px 48px !important;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.05);

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
      margin-left: 45px;
      flex-direction: column;
      align-items: flex-start;

      .button-title {
        color: $gray900;
        font-size: 24px;
        font-weight: 700;
        line-height: 32px;
        font-style: normal;
        letter-spacing: -0.12px;
        text-transform: uppercase;
        font-family: Inter, sans-serif;
        white-space: normal !important;
        text-align: left;
      }

      .subtitle-container {
        width: 100%;
        text-align: left;

        .button-subtitle {
          color: #4B5563;
          margin-top: 16px;
          font-size: 20px;
          font-weight: 700;
          overflow: hidden;
          line-height: 32px;
          font-style: normal;
          white-space: nowrap;
          letter-spacing: -0.1px;
          text-overflow: ellipsis;
          text-transform: uppercase;
          font-family: Inter, sans-serif;
        }
      }
    }
  }

}

@media #{map-get($display-breakpoints, 'sm-and-down')} {
  .form-button {
    padding: 28px !important;
    .v-btn__content {
      .button-content {
        margin-left: 15px !important;

        .button-title {
          font-size: 16px;
          line-height: 20px;
          letter-spacing: -0.12px;

        }
        .subtitle-container {
          .button-subtitle {
            white-space: initial !important;
            margin-top: 16px;
            font-size: 12px;
            line-height: 16px;
            letter-spacing: -0.1px;
          }
        }
      }
    }

    .button-icon{
      max-width: 50px !important;
    }

    .button-arrow{
      width: 20px !important;
      height: 20px !important;
    }
  }
}

</style>

<template>
  <v-card class="resource-card" height="196px">
    <div v-if="icon" class="icon-container">
      <v-img
        :src="icon"
        max-width="48px"
        max-height="48px"
      />
    </div>

    <v-card-text class="pa-0 px-6">
      <span class="resource-title">{{ title }}</span>
    </v-card-text>

    <v-card-actions>
      <v-btn :to="to" text block color="primary">
        {{ buttonText }}
        <v-icon right>mdi-arrow-right</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>

export default {
  props: {
    title: {
      type: String,
      required: true,
      default: '',
    },
    icon: {
      type: String,
      required: false,
      default: '',
    },
    to: {
      type: String,
      required: false,
      default: '/resurse-de-sprijin',
    },
    buttonText: {
      type: String,
      default: 'Vezi mai mult',
    }
  }
}

</script>

<style lang="scss">

.resource-card {
  height: 196px;
  max-width: 484px;
  margin-bottom: 80px;
  border-radius: 12px !important;
  
  .icon-container {
    top: -32px;
    left: 24px;
    width: 64px;
    height: 64px;
    position: absolute;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid $yellow400;
  }

  .v-card__text {
    height: 124px;
    padding-top: 64px !important;

    .resource-title {
      color: $gray900;
      font-size: 20px;
      font-weight: 500;
      line-height: 28px;
      font-style: normal;
      text-transform: uppercase;
      font-family: Inter, sans-serif;
    }
  }

  .v-card__actions {
    padding: 0;
    background: #F9FAFB;

    .v-btn {
      height: 72px;
      padding: 0 24px;
      justify-content: flex-start;

      .v-btn__content {
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
        font-style: normal;
        font-family: Inter, sans-serif;
      }
    }
  }
}

</style>

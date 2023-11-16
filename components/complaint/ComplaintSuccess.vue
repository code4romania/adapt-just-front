<template>
  <div class="complaint-success">
    <form-stepper
      :step="steps"
      :steps="steps"
    />

    <div class="title-container form-title">
      <page-title>
        Plângerea ta a fost trimisă!
      </page-title>

      <span class="subtitle">
        Plângerea ta a fost trimisă către:
      </span>
      
      <span class="subtitle d-block mt-4">
        <span class="font-weight-bold">{{ institutions }}</span>
      </span>
    </div>

    <div class="mt-8">
      <v-img
        src="/images/website/complaint-success.svg"
        width="100%"
        height="396px"
      />
    </div>

    <div class="return-container">
      <v-btn
        outlined
        color="#FFF"
        class="return-button"
        @click="goHome"
      >
        Ecran principal

        <v-img
          src="/images/website/icons/return-icon.svg"
          width="20px"
          height="20px"
          class="ml-4"
        />
      </v-btn>
    </div>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
  props: {
    steps: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    ...mapGetters('complaint', ['getInstitutions']),
    institutions() {
      return this.getInstitutions()
    },
  },
  methods: {
    goHome() {
      this.$store.commit('complaint/reset')
      this.$router.push('/')
    }
  }
}

</script>

<style lang="scss">

.complaint-success {
  .return-container {
    margin-top: 80px;

    .return-button {
      border-radius: 8px;
      height: auto !important;
      background-color: $yellow400;
      padding: 12px 24px !important;
      box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.06), 0px 1px 3px 0px rgba(0, 0, 0, 0.10);

      .v-btn__content {
        color: $gray900;
        font-size: 20px;
        font-weight: 700;
        font-style: normal;
        font-family: Inter, sans-serif;
      }

      &:hover {
        &::before {
          transition: none;
          background: none;
        }
      }
    }
  }
}

</style>

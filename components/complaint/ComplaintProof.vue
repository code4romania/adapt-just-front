<template>
  <div class="complaint-proof">
    <form-stepper
      :step="4"
      :steps="6"
    />

    <div class="title-container">
      <page-title>
        Ai dovezi?
      </page-title>

      <span class="subtitle">
        Dovezile pot fi orice poză, videoclip sau înregistrare
      </span>
    </div>

    <div class="actions-container">
      <back-button @click="$emit('back')" />
      <next-button :disabled="true" />
    </div>
  </div>
</template>

<script>

import PageTitle from '/components/shared/text/PageTitle'
import FormStepper from '/components/shared/form/FormStepper'
import BackButton from '/components/shared/buttons/BackButton'
import NextButton from '/components/shared/buttons/NextButton'

export default {
  components: {
    PageTitle,
    BackButton,
    NextButton,
    FormStepper,
  },
}

</script>

<style lang="scss">

.complaint-proof {
  .title-container {
    margin-top: 72px !important;

    .subtitle {
      color: $gray700;
      font-size: 24px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      text-transform: uppercase;
      font-variant: all-small-caps;
      font-family: Inter, sans-serif;
    }
  }
}

</style>

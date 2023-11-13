<template>
  <div class="complaint-name">
    <form-stepper
      :step="1"
      :steps="6"
    />

    <div class="title-container">
      <page-title>
        Cum te cheamă?
      </page-title>

      <span class="subtitle">
        Scrie numele mic și numele de familie
      </span>
    </div>

    <div class="form-content">
      <div class="d-flex align-center">
        <form-text-input
          :value="nameText"
          @input="nameText = $event"
        />

        <record-button />
      </div>
      <record-text />
    </div>

    <div class="actions-container">
      <back-button @click="handleBack" />
      <next-button
        :disabled="!nextEnabled"
        @click="submit"
      />
    </div>
  </div>
</template>

<script>

import PageTitle from '/components/shared/text/PageTitle'
import RecordText from '/components/shared/text/RecordText'
import FormStepper from '/components/shared/form/FormStepper'
import BackButton from '/components/shared/buttons/BackButton'
import NextButton from '/components/shared/buttons/NextButton'
import FormTextInput from '/components/shared/form/FormTextInput'
import RecordButton from '/components/shared/buttons/RecordButton'

export default {
  components: {
    PageTitle,
    RecordText,
    BackButton,
    NextButton,
    FormStepper,
    RecordButton,
    FormTextInput,
  },
  props: {
    name: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      nameText: this.name,
    }
  },
  computed: {
    nextEnabled() {
      return !!this.nameText;
    }
  },
  methods: {
    handleBack() {
      this.$store.commit('complaint/setName', '');
      this.$emit('back');
    },
    submit() {
      this.$store.commit('complaint/setName', this.nameText);
      this.$emit('next');
    }
  }
}

</script>

<style lang="scss">

.complaint-name {
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

  .form-content {
    margin-top: 48px;
  }
}

</style>

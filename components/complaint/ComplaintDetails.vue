<template>
  <div class="complaint-details">
    <form-stepper
      :step="3"
      :steps="6"
    />

    <div class="title-container">
      <page-title>
        {{ title }}
      </page-title>

      <span v-if="!showOther" class="subtitle">
        Alege toate variantele care ți se aplică:
      </span>
    </div>

    <div class="form-container">
      <div v-if="!showOther">
        <div class="button-container">
          <form-check-button
            title="Am fost batut/ă"
            :active="details.includes('beaten')"
            icon="/images/website/complaint/beaten-icon.svg"
            @click="handleChange('beaten')"
          />
        </div>

        <div class="button-container">
          <form-check-button
            title="Am fost abuzat/ă sexual"
            :active="details.includes('abused')"
            icon="/images/website/complaint/abused-icon.svg"
            @click="handleChange('abused')"
          />
        </div>

        <div class="button-container">
          <form-check-button
            title="Am fost sedat/ă"
            :active="details.includes('sedated')"
            icon="/images/website/complaint/sedated-icon.svg"
            @click="handleChange('sedated')"
          />
        </div>

        <div class="button-container">
          <form-check-button
            title="Am fost pedepsit/ă"
            :active="details.includes('punished')"
            icon="/images/website/complaint/punished-icon.svg"
            @click="handleChange('punished')"
          />
        </div>

        <div class="button-container">
          <form-check-button
            title="Altceva"
            :active="details.includes('other')"
            icon="/images/website/complaint/suffered-icon.svg"
            @click="handleChange('other')"
          />
        </div>
      </div>
    </div>

    <div class="actions-container">
      <back-button @click="handleBack" />
      <next-button
        :disabled="!nextEnabled"
        @click="$emit('next')"
      />
    </div>
  </div>
</template>

<script>

import PageTitle from '/components/shared/text/PageTitle'
import FormStepper from '/components/shared/form/FormStepper'
import BackButton from '/components/shared/buttons/BackButton'
import NextButton from '/components/shared/buttons/NextButton'
import FormCheckButton from '/components/shared/buttons/FormCheckButton'

export default {
  components: {
    PageTitle,
    BackButton,
    NextButton,
    FormStepper,
    FormCheckButton,
  },
  props: {
    details: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      showOther: false,
    }
  },
  computed: {
    title() {
      if (this.showOther) {
        return 'Ai selectat altceva'
      }

      return 'Ce ai pățit?';
    },
    nextEnabled() {
      return this.details.length > 0;
    },
  },
  methods: {
    handleChange(value) {
      let details = this.details;

      if (value === 'other' && !details.includes('other')) {
        this.showOther = true;
      }

      details = details.includes(value)
        ? details.filter((item) => item !== value)
        : [...details, value];

      this.$store.commit('complaint/setDetails', details);
    },
    handleBack() {
      if (this.showOther) {
        this.showOther = false;
        return;
      }

      this.$store.commit('complaint/setDetails', []);
      this.$emit('back');
    }
  }
}

</script>

<style lang="scss">

.complaint-details {
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

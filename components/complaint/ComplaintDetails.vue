<template>
  <div>
    <form-stepper
      :step="3"
      :steps="steps"
    />

    <div class="title-container form-title">
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

    <form-actions
      :next-enabled="nextEnabled"
      @back="handleBack"
      @next="$emit('next')"
    />
  </div>
</template>

<script>

import BackButton from '/components/shared/buttons/BackButton'
import NextButton from '/components/shared/buttons/NextButton'
import FormCheckButton from '/components/shared/buttons/FormCheckButton'

export default {
  components: {
    BackButton,
    NextButton,
    FormCheckButton,
  },
  props: {
    details: {
      type: Array,
      default: () => [],
    },
    steps: {
      type: Number,
      default: 0,
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

      return 'Ce ai pățit?'
    },
    nextEnabled() {
      return this.details.length > 0
    },
  },
  methods: {
    handleChange(value) {
      let details = this.details

      if (value === 'other' && !details.includes('other')) {
        this.showOther = true
      }

      details = details.includes(value)
        ? details.filter((item) => item !== value)
        : [...details, value]

      this.$store.commit('complaint/setDetails', details)
    },
    handleBack() {
      if (this.showOther) {
        this.showOther = false
        return
      }

      this.$emit('back')
    }
  }
}

</script>

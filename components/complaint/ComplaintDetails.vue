<template>
  <div class="complaint-details">
    <form-stepper
      :step="4"
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

      <div v-else>
        <form-text-area
          :value="reason"
          placeholder="Scrie aici ce altceva s-a întâmplat..."
          @input="handleReasonChange"
        />

        <div class="record-container">
          <record-text />
          <div class="mt-6">
            <record-button />
          </div>
        </div>
      </div>
    </div>

    <form-actions
      :next-enabled="nextEnabled"
      @back="handleBack"
      @next="handleNext"
    />
  </div>
</template>

<script>

import FormCheckButton from '/components/shared/buttons/FormCheckButton'

export default {
  components: {
    FormCheckButton,
  },
  props: {
    steps: {
      type: Number,
      default: 0,
    },
    details: {
      type: Array,
      default: () => [],
    },
    reason: {
      type: String,
      default: '',
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
    handleReasonChange(value) {
      this.$store.commit('complaint/setReason', value)
    },
    handleBack() {
      if (this.showOther) {
        const details = this.details.filter((item) => item !== 'other')

        this.$store.commit('complaint/setDetails', details)
        this.$store.commit('complaint/setReason', '')
        this.showOther = false
        return
      }

      this.$emit('back')
    },
    handleNext() {
      if (this.showOther) {
        this.showOther = false
        return
      }

      this.$emit('next')
    }
  }
}

</script>

<style lang="scss">

.complaint-details {
  .record-container {
    display: flex;
    margin-top: 80px;
    align-items: center;
    flex-direction: column;

    .record-button {
      margin-left: 0 !important;
    }
  }
}

</style>

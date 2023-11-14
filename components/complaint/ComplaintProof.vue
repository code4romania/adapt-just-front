<template>
  <div>
    <form-stepper
      :step="4"
      :steps="steps"
    />

    <div class="title-container form-title">
      <page-title>
        Ai dovezi?
      </page-title>

      <span class="subtitle">
        Dovezile pot fi orice poză, videoclip sau înregistrare
      </span>
    </div>

    <div class="form-container">
      <div class="button-container">
        <form-radio-button
          :active="proofType === 'yes'"
          title="Da și le pot atașa acum"
          subtitle="Pot atașa acum dovezile"
          @click="handleChange('yes')"
        />
      </div>

      <div class="button-container">
        <form-radio-button
          :active="proofType === 'later'"
          title="Da și le pot oferi la nevoie"
          subtitle="Pot oferi dovezile dacă îmi vor fi cerute mai târziu"
          @click="handleChange('later')"
        />
      </div>

      <div class="button-container">
        <form-radio-button
          title="Nu am dovezi"
          :active="proofType === 'no'"
          @click="handleChange('no')"
        />
      </div>
    </div>

    <form-actions
      :next-enabled="false"
      @back="$emit('back')"
      @next="$emit('next')"
    />
  </div>
</template>

<script>

import FormRadioButton from '~/components/shared/buttons/FormRadioButton'

export default {
  components: {
    FormRadioButton,
  },
  props: {
    steps: {
      type: Number,
      default: 0,
    },
    proofType: {
      type: String,
      default: '',
    },
  },
  methods: {
    handleChange(proofType) {
      if (proofType !== this.proofType) {
        this.$store.commit('complaint/setProofType', proofType)
      }
    }
  }
}

</script>

<template>
  <div class="complaint-type">
    <div class="title-container">
      <page-title>
        Ce problemă ai?
      </page-title>
    </div>

    <div class="form-container">
      <div class="button-container">
        <form-button
          title="Mi-a făcut cineva rău"
          :active="selectedType === 'hurt'"
          icon="/images/website/complaint/hurt-icon.svg"
          subtitle="Am fost bătut, abuzat sexual, pedepsit, sedat sau altceva"
          @click="handleChange('hurt')"
        />
      </div>

      <div class="button-container">
        <form-button
          title="Vreau să mă mut"
          :active="selectedType === 'move'"
          icon="/images/website/complaint/move-icon.svg"
          subtitle="Vreau să fiu mutat într-un alt centru sau spital"
          @click="handleChange('move')"
        />
      </div>

      <div class="button-container">
        <form-button
          title="Vreau la judecător"
          :active="selectedType === 'evaluation'"
          subtitle="Vreau să ies de sub interdicție"
          icon="/images/website/complaint/judge-icon.svg"
          @click="handleChange('evaluation')"
        />
      </div>
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
import FormButton from '/components/shared/buttons/FormButton'
import BackButton from '/components/shared/buttons/BackButton'
import NextButton from '/components/shared/buttons/NextButton'

export default {
  components: {
    PageTitle,
    FormButton,
    BackButton,
    NextButton,
  },
  props: {
    type: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      selectedType: this.type,
    }
  },
  computed: {
    nextEnabled() {
      return !!this.selectedType
    }
  },
  methods: {
    handleChange(type) {
      if (this.selectedType === type) {
        this.selectedType = null
        return
      }

      this.selectedType = type
    },
    handleBack() {
      this.$store.commit('complaint/setType', null)
      this.$emit('back')
    },
    submit() {
      this.$store.commit('complaint/setType', this.selectedType)
      this.$emit('next')
    }
  }
}

</script>

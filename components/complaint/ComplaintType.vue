<template>
  <div>
    <div class="title-container">
      <page-title>
        Ce problemă ai?
      </page-title>
    </div>

    <div class="form-container">
      <div class="button-container">
        <form-button
          :disabled="loading"
          :active="type === 'hurt'"
          title="Mi-a făcut cineva rău"
          icon="/images/website/complaint/hurt-icon.svg"
          subtitle="Am fost bătut, abuzat sexual, pedepsit, sedat sau altceva"
          @click="handleChange('hurt')"
        />
      </div>

      <div class="button-container">
        <form-button
          :disabled="loading"
          title="Vreau să mă mut"
          :active="type === 'move'"
          icon="/images/website/complaint/move-icon.svg"
          subtitle="Vreau să fiu mutat într-un alt centru sau spital"
          @click="handleChange('move')"
        />
      </div>

      <div class="button-container">
        <form-button
          :disabled="loading"
          title="Vreau la judecător"
          :active="type === 'evaluation'"
          subtitle="Vreau să ies de sub interdicție"
          icon="/images/website/complaint/judge-icon.svg"
          @click="handleChange('evaluation')"
        />
      </div>
    </div>

    <form-actions
      :next-enabled="nextEnabled"
      :next-loading="loading"
      @next="submit"
      @back="$emit('back')"
    />
  </div>
</template>

<script>

export default {
  props: {
    type: {
      type: String,
      default: '',
    },
    victim: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      loading: false,
    }
  },
  computed: {
    nextEnabled() {
      return !!this.type
    }
  },
  methods: {
    handleChange(t) {
      let type = t
      if (type === this.type) {
        type = ''
      }

      this.$store.commit('complaint/setType', type)
    },
    async submit() {
      this.loading = true

      try {
        await this.$store.dispatch('complaint/getInstitutions', {
          type: this.type,
          victim: this.victim,
        })
      } catch (e) {}

      this.loading = false
      this.$emit('next')
    },
  }
}

</script>

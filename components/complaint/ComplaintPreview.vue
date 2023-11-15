<template>
  <div>
    <form-stepper
      :step="7"
      :steps="steps"
    />

    <div class="title-container form-title">
      <page-title>
        Plângerea ta
      </page-title>

      <span class="subtitle">
        Verifică conținutul plângerii și când ești sigur/ă că vrei să o trimiți, apasă <span class="font-weight-bold">Trimite.</span><br />
        Odată trimisă, ea va ajunge direct la <span class="font-weight-bold">{{ institutions }}</span>
      </span>
    </div>

    <form-actions
      :next-enabled="false"
      @back="$emit('back')"
      @next="$emit('next')"
    />
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
  }
}

</script>

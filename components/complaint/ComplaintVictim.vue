<template>
  <div>
    <div class="title-container">
      <page-title>
        Pentru cine vrei să ceri ajutor?
      </page-title>
    </div>

    <div class="form-container">
      <div class="button-container">
        <form-button
          title="Pentru mine"
          :active="victim === 'me'"
          icon="/images/website/complaint/me-icon.svg"
          subtitle="Am o problemă și am nevoie de ajutor"
          @click="handleChange('me')"
        />
      </div>

      <div class="button-container">
        <form-button
          title="Pentru altcineva"
          :active="victim === 'other'"
          icon="/images/website/complaint/other-icon.svg"
          subtitle="Are altcineva o problemă și vreau să ajut"
          @click="handleChange('other')"
        />
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    victim: {
      type: String,
      default: '',
    },
  },
  methods: {
    async handleChange(victim) {
      this.$store.commit('complaint/setVictim', victim)
      this.$emit('next')
    }
  }
}

</script>

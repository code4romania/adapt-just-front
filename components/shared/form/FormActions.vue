<template>
  <div class="form-actions">
    <back-button @click="$emit('back')" />
    <next-button
      :loading="nextLoading"
      :disabled="!nextEnabled"
      @click="$emit('next')"
    />
  </div>
</template>

<script>

import BackButton from '/components/shared/buttons/BackButton'
import NextButton from '/components/shared/buttons/NextButton'

export default {
  components: {
    BackButton,
    NextButton,
  },
  props: {
    nextEnabled: {
      type: Boolean,
      default: true,
    },
    nextLoading: {
      type: Boolean,
      default: false,
    },
  }
}

</script>

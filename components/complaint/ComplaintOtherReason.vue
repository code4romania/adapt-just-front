<template>
  <div class="complaint-moving-reason">
    <form-stepper
      :step="4"
      :steps="steps"
    />

    <div class="title-container form-title">
      <page-title>
        Ce s-a întâmplat?
      </page-title>

      <span class="subtitle" data-listen-text>
        Scrie în casetă ceea ce vrei să raportezi
      </span>
    </div>

    <div class="form-container">
      <form-text-area
        :value="reason"
        @input="handleReasonChange"
      />

      <div class="record-container">
        <record-text />
        <div class="mt-6">
          <record-button @input="handleRecording" />
        </div>
      </div>
    </div>

    <form-actions
      :next-enabled="nextEnabled"
      @back="$emit('back')"
      @next="$emit('next')"
    />
  </div>
</template>

<script>

export default {
  props: {
    steps: {
      type: Number,
      default: 0,
    },
    reason: {
      type: String,
      default: '',
    },
  },
  computed: {
    nextEnabled() {
      return !!this.reason
    },
  },
  methods: {
    handleReasonChange(value) {
      this.$store.commit('complaint/setReason', value)
    },
    handleRecording(text) {
      const reason = this.reason ? `${this.reason} ${text}` : text
      this.$store.commit('complaint/setReason', reason)
    }
  }
}

</script>

<style lang="scss">

.complaint-moving-reason {
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

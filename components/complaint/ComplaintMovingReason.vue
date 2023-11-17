<template>
  <div class="complaint-moving-reason">
    <form-stepper
      :step="5"
      :steps="steps"
    />

    <div class="title-container form-title">
      <page-title>
        De ce vrei să te muți?
      </page-title>

      <span class="subtitle">
        Scrie în casetă de ce vrei să te muți
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
          <record-button />
        </div>
      </div>
    </div>

    <form-actions
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
  methods: {
    handleReasonChange(value) {
      this.$store.commit('complaint/setReason', value)
    },
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

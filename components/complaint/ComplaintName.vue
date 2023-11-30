<template>
  <div>
    <form-stepper
      :step="1"
      :steps="steps"
    />

    <div class="title-container form-title">
      <page-title>
        Cum te cheamă?
      </page-title>

      <span class="subtitle">
        Scrie numele mic și numele de familie
      </span>
    </div>

    <div class="form-container">
      <div class="d-flex align-center">
        <form-text-input
          :value="nameText"
          @input="nameText = $event"
        />

        <record-button />
      </div>
      <record-text />
    </div>

    <form-actions
      :next-enabled="nextEnabled"
      @next="submit"
      @back="$emit('back')"
    />
  </div>
</template>

<script>

export default {
  props: {
    name: {
      type: String,
      default: '',
    },
    steps: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      nameText: this.name,
    }
  },
  computed: {
    nextEnabled() {
      return !!this.nameText
    }
  },
  methods: {
    submit() {
      this.$store.commit('complaint/setName', this.nameText)
      this.$emit('next')
    }
  }
}

</script>

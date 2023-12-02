<template>
  <v-text-field
    v-model="innerValue"
    flat
    outlined
    clearable
    color="#BDBDBD"
    data-listen-text
    hide-details="auto"
    class="form-text-input"
    :placeholder="placeholder"
  />
</template>

<script>

export default {
  props: {
    value: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      innerValue: this.value,
    }
  },
  watch: {
    // Handles internal model changes.
    innerValue (newVal) {
      this.$emit('input', newVal)
    },
    // Handles external model changes.
    value (newVal) {
      this.innerValue = newVal
    }
  },
}

</script>

<style lang="scss">

.form-text-input {
  width: 100%;
  padding: 9px 13px;
  border-radius: 6px;
  background: #FFF;
  border: 1px solid $gray300;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.05);

  input {
    font-size: 18px;
    font-weight: 400;
    line-height: 28px;
    font-style: normal;
    text-transform: uppercase;
    color: $gray800 !important;
    font-family: Inter, sans-serif;
  }
}

</style>

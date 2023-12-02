<template>
  <div>
    <v-textarea
      v-model="innerValue"
      flat
      outlined
      height="200px"
      color="#BDBDBD"
      data-listen-text
      hide-details="auto"
      class="form-text-area"
      :placeholder="placeholder"
    />

    <span v-if="!innerValue" data-listen-text style="display: none;">
      {{ placeholder }}
    </span>
  </div>
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
      default: 'Scrie aici...',
    }
  },
  data() {
    return {
      innerValue: this.value,
    }
  },
  watch: {
    // Handles internal model changes.
    innerValue (newVal) {
      this.$emit('input', newVal);
    },
    // Handles external model changes.
    value (newVal) {
      this.innerValue = newVal;
    }
  },
}

</script>

<style lang="scss">

.form-text-area {
  background: #FFF;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.05);

  fieldset {
    border-radius: 6px;
    border: 1px solid #D1D5DB;
  }

  textarea {
    font-size: 20px;
    font-weight: 400;
    line-height: 24px;
    font-style: normal;
    text-transform: uppercase;
    color: $gray500 !important;
    font-family: "Encode Sans", sans-serif !important;
  }
}

</style>

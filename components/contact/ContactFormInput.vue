<template>
  <div class="contact-form-input">
    <label class="input-label mb-1" :for="$attrs.vid" data-listen-text>
      {{ $attrs.name }}
    </label>

    <ValidationProvider
      :name="$attrs.name"
      :vid="$attrs.vid || $attrs.model"
      :rules="rules"
      :outlined="outlined"
    >
      <v-text-field
        v-model="innerValue"
        slot-scope="{ errors }"
        :outlined="outlined"
        :error-messages="errors"
        color="#D1D5DB"
        data-listen-text
        v-bind="$attrs"
        v-on="$listeners"
      >
        <template v-slot:append-outer v-if="errors.length">
          <span style="display: none;" data-listen-text>{{ errors[0] }}</span>
        </template>
      </v-text-field>
    </ValidationProvider>
  </div>
</template>

<script>

export default {
  props: {
    rules: {
      type: [Object, String],
      default: ''
    },
    outlined: {
      type: Boolean,
      default: true
    },
    // must be included in props
    value: {
      type: null,
      default: null
    }
  },
  data: () => ({
    innerValue: ''
  }),
  watch:{
    value: {
      handler() {
        this.innerValue = this.value
      }
    }
  }
}

</script>

<style lang="scss">

.contact-form-input {
  .input-label {
    display: block;
    color: $gray700;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    font-style: normal;
    text-transform: uppercase;
    font-family: Inter, sans-serif;
  }

  .v-input__control {
    .v-input__slot {
      border-radius: 6px;
    }
  }
}

</style>

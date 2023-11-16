<template>
  <div class="complaint-signature">
    <form-stepper
      :step="step"
      :steps="steps"
    />

    <div class="title-container form-title">
      <page-title>
        Semnează plângerea
      </page-title>

      <span class="subtitle">
        Desenează cu degetul pe ecran semnătura ta sau scrie-ți numele
      </span>
    </div>

    <div class="form-container">
      <div class="signature-container">
        <vueSignature
          ref="signature"
          :h="'420px'"
          :disabled="false"
          :sigOption="option"
          @endStroke="save"
        />
        <v-btn
          v-if="signature"
          block
          color="#9CA3AF40"
          @click="clear"
        >
          Anulează
        </v-btn>
      </div>
    </div>

    <form-actions
      next-text="Trimite"
      @back="$emit('back')"
      @next="$emit('next')"
    />
  </div>
</template>

<script>

import vueSignature from 'vue-signature'

export default {
  components: {
    vueSignature,
  },
  props: {
    steps: {
      type: Number,
      default: 0,
    },
    signature: {
      type: String,
      default: null,
    }
  },
  data() {
    return {
      option: {
        penColor: 'rgb(0, 0, 0)',
        backgroundColor: 'rgb(255,255,255)',
      },
    }
  },
  computed: {
    step() {
      return this.steps - 1
    }
  },
  async mounted() {
    await this.$nextTick()
    if (this.signature) {
      this.$refs.signature.fromDataURL(this.signature)
    }
  },
  methods: {
    save() {
      const signature = this.$refs.signature.save()
      this.$store.commit('complaint/setSignature', signature)
    },
    clear() {
      this.$refs.signature.clear()
      this.$store.commit('complaint/setSignature', null)
    }
  }
}

</script>

<style lang="scss">

.complaint-signature {
  .signature-container {
    border-radius: 6px;
    border: 2px dashed #374151;
  }
}

</style>

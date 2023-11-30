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
      :next-loading="loading"
      @back="$emit('back')"
      @next="submit"
    />
  </div>
</template>

<script>

import { mapState } from 'vuex'
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
  },
  data() {
    return {
      loading: false,
      option: {
        penColor: 'rgb(0, 0, 0)',
        backgroundColor: 'rgb(255,255,255)',
      },
    }
  },
  computed: {
    ...mapState('complaint', [
      'victim',
      'type',
      'name',
      'cnp',
      'idCardUpload',
      'location',
      'locationTo',
      'locationToType',
      'details',
      'reason',
      'proofType',
      'uploads',
      'signature'
    ]),
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
    },
    async submit() {
      const data = {
        cnp: this.cnp,
        name: this.name,
        type: this.type,
        victim: this.victim,
        reason: this.reason,
        details: this.details,
        uploads: this.uploads,
        signature: this.signature,
        proof_type: this.proofType,
        id_card_upload: this.idCardUpload,
        location_id: this.location?.id || null,
        location_name: this.location?.name || null,
        location_to_id: this.locationTo?.id || null,
        location_to_name: this.locationTo?.name || null,
        location_to_type: this.locationToType,
      }

      this.loading = true

      try {
        await this.$store.dispatch('complaint/create', data)

        this.loading = false
        this.$emit('next')
      } catch (error) {
        this.loading = false
        this.$toast.error('A apărut o eroare la trimiterea plângerii. Te rugăm să încerci mai târziu.')
      }
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

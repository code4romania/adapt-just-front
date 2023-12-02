<template>
  <div>
    <form-stepper
      :step="2"
      :steps="steps"
    />

    <div class="title-container form-title">
      <page-title>
        Care este CNP-ul tău?
      </page-title>

      <span class="subtitle" data-listen-text>
        Scrie codul numeric personal
      </span>
    </div>

    <div class="form-container">
      <div
        class="d-flex align-center"
        :class="{ 'flex-column': $vuetify.breakpoint.smAndDown }"
      >
        <form-text-input
          :value="cnpText"
          placeholder="Cod numeric personal"
          @input="handleChange"
        />

        <record-button @input="handleChange" />
      </div>
      <record-text />

      <div class="upload-container">
        <span class="upload-text" data-listen-text>
          Sau apasă mai jos și <span class="font-weight-bold">încarcă o poză cu buletinul</span> dacă îl ai
        </span>

        <form-upload
          :loading="loading"
          title="Încarcă poza"
          @change="handleUpload"
        />
      </div>

      <div v-if="idCardUpload" class="mt-8">
        <complaint-uploads-list
          title="Poză buletin"
          :uploads="[idCardUpload]"
          @delete="handleDelete"
        />
      </div>
    </div>

    <form-actions
      :next-enabled="nextEnabled"
      @next="submit"
      @back="$emit('back')"
    />
  </div>
</template>

<script>

import ComplaintUploadsList from './ComplaintUploadsList'

export default {
  components: {
    ComplaintUploadsList,
  },
  props: {
    steps: {
      type: Number,
      default: 0,
    },
    cnp: {
      type: String,
      default: '',
    },
    idCardUpload: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      loading: false,
      cnpText: this.cnp,
    }
  },
  computed: {
    nextEnabled() {
      if (!this.cnpText) {
        return !this.loading
      }
      
      return this.cnpText.length === 13 && /^\d+$/.test(this.cnpText)
    }
  },
  methods: {
    handleChange(text) {
      if (!text) {
        this.cnpText = ''
        return
      }

      this.cnpText = text.trim().replace(' ', '')
    },
    async handleUpload(file) {
      if (file) {
        this.loading = true

        try {
          const data = await this.$store.dispatch('uploads/create', { file })
          this.$store.commit('complaint/setIdCardUpload', data)
        } catch (e) {}

        this.loading = false
      }
    },
    handleDelete() {
      this.$store.commit('complaint/setIdCardUpload', null)
    },
    submit() {
      if (this.cnpText !== this.cnp) {
        this.$store.commit('complaint/setCnp', this.cnpText)
      }

      this.$emit('next')
    }
  }
}

</script>

<style lang="scss" scoped>

.upload-container {
  margin-top: 50px;

  .upload-text {
    display: block;
    color: $gray600;
    font-size: 16px;
    font-weight: 400;
    line-height: 21px;
    text-align: center;
    margin-bottom: 20px;
    text-transform: uppercase;
    font-family: "Encode Sans", sans-serif;
  }
}

</style>

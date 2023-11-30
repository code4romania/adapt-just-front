<template>
  <div>
    <form-stepper
      :step="6"
      :steps="steps"
    />

    <div class="title-container form-title">
      <page-title>
        Încarcă dovezile
      </page-title>
    </div>

    <div class="mt-5">
      <form-upload
        :loading="loading"
        title="Încarcă dovada"
        accept="image/*,video/*,audio/*,application/pdf"
        description="Poate fi o poză, un videoclip, o înregistrare, un document sau orice alt fișier"
        @change="handleUpload"
      />
    </div>

    <div v-if="uploads.length" class="mt-10">
      <complaint-uploads-list
        :uploads="uploads"
        @delete="handleDelete"
      />
    </div>

    <form-actions
      :next-enabled="nextEnabled"
      @back="$emit('back')"
      @next="$emit('next')"
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
    uploads: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      loading: false,
    }
  },
  computed: {
    hasUploads() {
      return this.uploads.length > 0
    },
    nextEnabled() {
      return this.hasUploads && !this.loading
    },
  },
  methods: {
    async handleUpload(file) {
      this.loading = true
      
      try {
        const data = await this.$store.dispatch('uploads/create', { file })
        const uploads = [...this.uploads, data]

        this.$store.commit('complaint/setUploads', uploads)
      } catch (e) {
      } finally {
        this.loading = false
      }
    },
    handleDelete(upload) {
      const uploads = this.uploads.filter(u => u.id !== upload.id)
      this.$store.commit('complaint/setUploads', uploads)
    }
  }
}

</script>

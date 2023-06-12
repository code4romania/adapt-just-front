<template>
  <Editor api-key="lrxq3bhmei2fjbso62k9bhdatxeup6dyuehhhjvz9psqzy1v"
          :init="tinyMceMode"
          v-model="innerModel"
  ></Editor>
</template>

<script>
import Editor from '@tinymce/tinymce-vue'
export default {
  props:{
    mode:{
      type : String,
      default: 'simple'
    },
    value: {
      type : String,
    }
  },
  components:{
    Editor
  },
  computed: {
    simpleModeOptions() {
      return {
        height: 500,
        plugins: [
          'advlist autolink lists link image charmap print preview anchor',
          'searchreplace visualblocks code fullscreen',
          'insertdatetime media table paste wordcount'
        ],
        toolbar: 'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
        images_upload_handler: this.handleTinymceUpload,
      }
    },
    advancedModeOptions() {
      return {
        height: 500,
        plugins: [
          'advlist autolink lists link image charmap print preview anchor',
          'searchreplace visualblocks code fullscreen',
          'insertdatetime media table paste  wordcount'
        ],
        toolbar: 'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
        images_upload_handler: this.handleTinymceUpload,
      }
    },
    tinyMceMode() {
      return this.mode === 'simple' ? this.simpleModeOptions : this.advancedModeOptions
    }

  },
  data: () => ({
    loading: false,
    innerModel: ''
  }),
  watch: {
    innerModel() {
      this.$emit('input', this.innerModel)
    },
    value() {
      this.innerModel = this.value
    }
  },
  mounted() {
    if (this.value) {
      this.innerModel = this.value
    }
  },
  methods:{
    async handleTinymceUpload(blobInfo, success, failure) {
      try {
        const file = await this.upload(blobInfo.blob())
        success(file.dataUrl)
      } catch (e) {
        const snack = { color: 'error', message: e.message }
        this.$store.commit('snackbar/setSnack', snack)
      }
    },
    async upload(file) {
      return await this.$store.dispatch('uploads/create', { file});
    }
  }
}
</script>

<style lang="scss">

</style>

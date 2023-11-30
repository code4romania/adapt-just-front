<template>
  <div class="form-upload">
    <input
      ref="input"
      type="file"
      :accept="accept"
      name="file-upload"
      :disabled="loading"
      @change="handleChange"
    >

    <div class="d-flex flex-column align-center form-upload-content">
      <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
        <path d="M37.3337 10.6666H16.0003C14.5858 10.6666 13.2293 11.2285 12.2291 12.2287C11.2289 13.2289 10.667 14.5854 10.667 15.9999V42.6666M10.667 42.6666V47.9999C10.667 49.4144 11.2289 50.771 12.2291 51.7712C13.2293 52.7713 14.5858 53.3333 16.0003 53.3333H48.0003C49.4148 53.3333 50.7714 52.7713 51.7716 51.7712C52.7718 50.771 53.3337 49.4144 53.3337 47.9999V37.3333M10.667 42.6666L22.8963 30.4373C23.8965 29.4374 25.2528 28.8757 26.667 28.8757C28.0812 28.8757 29.4375 29.4374 30.4377 30.4373L37.3337 37.3333M53.3337 26.6666V37.3333M53.3337 37.3333L49.1043 33.1039C48.1042 32.1041 46.7479 31.5424 45.3337 31.5424C43.9195 31.5424 42.5631 32.1041 41.563 33.1039L37.3337 37.3333M37.3337 37.3333L42.667 42.6666M48.0003 10.6666H58.667M53.3337 5.33325V15.9999M37.3337 21.3333H37.3603" stroke="#9CA3AF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>

      <div class="mt-6">
        <span class="title">
          {{ title }}
        </span>
      </div>

      <div v-if="description" class="mt-6 text-center">
        <span class="description">
          {{ description }}
        </span>
      </div>

      <div v-if="loading" class="mt-6">
        <v-progress-circular
          size="24"
          indeterminate
          color="#D97706"
        />
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    title: {
      type: String,
      default: 'Alege un fișier',
    },
    description: {
      type: String,
      default: '',
    },
    accept: {
      type: String,
      default: 'image/*',
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleChange(e) {
      const file = e.target.files[0]
      this.$emit('change', file)
      this.$refs.input.value = null
    }
  }
}

</script>

<style lang="scss">

.form-upload {
  border-radius: 6px;
  position: relative;
  background-color: #FFF;
  padding: 22px 26px 26px 26px;
  border: 2px dashed #D1D5DB;

  input[type="file"] {
    top: 0;
    left: 0;
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;

    &:hover {
      cursor: pointer;
    }
  }

  .form-upload-content {
    max-width: 380px;
    margin-left: auto;
    margin-right: auto;

    .title {
      font-size: 24px;
      font-weight: 700;
      color: $yellow600;
      line-height: 20px;
      font-style: normal;
      text-transform: uppercase;
      font-family: "Encode Sans", sans-serif !important;
    }

    .description {
      color: $gray500;
      font-size: 16px;
      font-weight: 400;
      line-height: 26px;
      font-style: normal;
      text-transform: uppercase;
      font-family: "Encode Sans", sans-serif !important;
    }
  }
}

</style>

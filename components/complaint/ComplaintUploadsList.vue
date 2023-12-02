<template>
  <div class="complaint-uploads">
    <div>
      <span class="uploads-title" data-listen-text>
        {{ title }}
      </span>
    </div>

    <div class="mt-6 uploads-container">
      <div v-for="(upload, idx) in uploads" :key="`upload_${idx}`" class="upload-container">
        <div class="mr-2 d-flex">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M8 4C6.34315 4 5 5.34315 5 7V11C5 13.7614 7.23858 16 10 16C12.7614 16 15 13.7614 15 11V7C15 6.44772 15.4477 6 16 6C16.5523 6 17 6.44772 17 7V11C17 14.866 13.866 18 10 18C6.13401 18 3 14.866 3 11V7C3 4.23858 5.23858 2 8 2C10.7614 2 13 4.23858 13 7V11C13 12.6569 11.6569 14 10 14C8.34315 14 7 12.6569 7 11V7C7 6.44772 7.44772 6 8 6C8.55228 6 9 6.44772 9 7V11C9 11.5523 9.44772 12 10 12C10.5523 12 11 11.5523 11 11V7C11 5.34315 9.65685 4 8 4Z" fill="#9CA3AF"/>
          </svg>
        </div>

        <div class="d-flex flex">
          <span class="upload-name">
            {{ upload.name }}
          </span>
        </div>

        <div class="d-flex align-center">
          <v-btn text color="#D97706" @click="openFile(upload)">
            VEZI
          </v-btn>
          <div class="v-separator" />
          <v-btn text color="#D97706" @click="$emit('delete', upload)">
            ȘTERGE
          </v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    uploads: {
      type: Array,
      default: () => [],
    },
    title: {
      type: String,
      default: 'Dovezi adăugate',
    }
  },
  methods: {
    openFile(file) {
      window.open(file.dataUrl, '_blank')
    }
  },
}

</script>

<style lang="scss">

.complaint-uploads {
  width: 75%;

  .uploads-title {
    color: $gray800;
    font-size: 20px;
    font-weight: 600;
    line-height: 20px;
    font-style: normal;
    text-transform: uppercase;
    font-family: Inter, sans-serif;
  }

  .uploads-container {
    border-radius: 6px;
    border: 1px solid #D1D5DB;

    .upload-container {
      display: flex;
      align-items: center;
      padding: 13px 17px 12px 13px;

      &:not(:last-child) {
        border-bottom: 1px solid #D1D5DB;
      }

      .upload-name {
        color: $gray900;
        font-size: 16px;
        font-weight: 400;
        line-height: 20px;
        font-style: normal;
        text-transform: uppercase;
        font-family: "Encode Sans", sans-serif !important;
      }

      .v-btn {
        .v-btn__content {
          font-size: 16px;
          font-weight: 500;
          color: $yellow600;
          line-height: 20px;
          font-style: normal;
          font-family: "Encode Sans", sans-serif !important;
        }
      }

      .v-separator {
        width: 1px;
        height: 20px;
        margin-left: 5px;
        margin-right: 5px;
        background-color: #D1D5DB;
      }
    }
  }
}

</style>

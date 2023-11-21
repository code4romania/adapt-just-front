<template>
  <div class="organisation-page">
    <div class="organisation-content">
      <home-button to="/resurse-de-sprijin/organizatii" text="Organizații" />

      <div class="mt-6">
        <div v-if="loading" class="loading-container">
          <v-skeleton-loader type="image" />
        </div>

        <div v-else-if="organisation">
          <v-card class="organisation-card">
            <div class="d-flex">
              <div v-if="organisation.upload" class="organisation-image">
                <v-img :src="organisation.upload.dataUrl" />
              </div>

              <div>
                <span class="organisation-name">
                  {{ organisation.name }}
                </span>

                <div v-if="organisation.short_content">
                  <span class="organisation-description">
                    {{ organisation.short_content }}
                  </span>
                </div>

                <div v-if="organisation.phone" class="mt-4">
                  <span class="contact-label">Contact</span>

                  <div class="d-flex align-center phone-container" @click="callPhone">
                    <v-icon color="#000" size="24px">mdi-phone</v-icon>
                    <span class="phone-text ml-1">
                      {{ organisation.phone }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </v-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  auth: false,
  head: {
    title: 'Organizații'
  },
  data() {
    return {
      loading: true,
      organisation: null
    }
  },
  async mounted() {
    await this.getOrganisation()
  },
  methods: {
    async getOrganisation() {
      const id = this.$route.params.organisation_id

      try {
        const organisation = await this.$store.dispatch('resources/getResource', id)
        this.organisation = organisation
      } catch (error) {
      } finally {
        this.loading = false
      }
    },
    callPhone() {
      window.open(`tel:${this.organisation.phone}`)
    }
  }
}

</script>

<style lang="scss">

.organisation-page {
  .organisation-content {
    max-width: 850px;
    margin: 20px auto 50px;

    .organisation-card {
      padding: 40px !important;
      border-radius: 24px !important;
      box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.10) !important;

      .organisation-image {
        width: 213px;
        height: 213px;
        margin-right: 80px;
        padding: 20px 14px;
      }

      .organisation-name {
        display: block;
        color: #000;
        font-size: 24px;
        font-weight: 700;
        font-style: normal;
        margin-bottom: 16px;
        line-height: normal;
        text-transform: uppercase;
        font-family: "Titillium Web", sans-serif;
      }

      .organisation-description {
        color: #6C7B8A;
        font-size: 16px;
        font-weight: 400;
        font-style: normal;
        line-height: 28px;
        text-transform: uppercase;
        font-family: "Titillium Web", sans-serif;
      }

      .contact-label {
        color: #333;
        display: block;
        font-size: 24px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        text-transform: uppercase;
        font-family: "Titillium Web", sans-serif;
      }

      .phone-container {
        cursor: pointer;

        .phone-text {
          color: #000;
          font-size: 24px;
          font-weight: 400;
          font-style: normal;
          line-height: normal;
          font-family: "Titillium Web", sans-serif;
        }
      }
    }

    .loading-container {
      height: 560px;

      .v-skeleton-loader__image {
        height: 560px;
        border-radius: 24px !important;
      }
    }
  }
}

</style>

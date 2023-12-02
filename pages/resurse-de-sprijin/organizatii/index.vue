<template>
  <div class="organisations-page">
    <div class="organisations-content">
      <home-button to="/resurse-de-sprijin" text="Resurse de sprijin" />

      <div class="mt-8">
        <page-title>Organizații</page-title>
      </div>

      <div class="mt-12">
        <div v-if="loading" class="loading-container">
          <v-row>
            <v-col cols="6">
              <v-skeleton-loader
                max-height="512px"
                type="avatar, heading, paragraph, paragraph, button"
              />
            </v-col>
            <v-col cols="6">
              <v-skeleton-loader
                max-height="512px"
                type="avatar, heading, paragraph, paragraph, button"
              />
            </v-col>
          </v-row>
        </div>

        <div v-else>
          <v-row>
            <v-col
              v-for="(organisation, i) in organisations"
              :key="`organisation_${i}`"
              class="py-0 organisation-col"
              cols="12"
              md="6"
            >
              <v-card class="organisation-card" height="512px">
                <v-img
                  v-if="organisation.upload"
                  :src="organisation.upload.dataUrl"
                  class="organisation-image"
                />
                <div v-else class="organisation-image" />

                <v-card-text class="pa-0 organisation-card-content">
                  <span class="organisation-name" data-listen-text>
                    {{ organisation.name }}
                  </span>
                  <span class="organisation-description" data-listen-text>
                    {{ organisation.short_content }}
                  </span>
                </v-card-text>

                <v-card-actions>
                  <v-btn block color="#FBBF24" height="50px" data-listen-text @click="goToOrganisation(organisation.id)">
                    Vezi mai mult
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
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
      organisations: [],
    }
  },
  async mounted() {
    await this.getResources()
  },
  methods: {
    async getResources() {
      try {
        const organisations = await this.$store.dispatch('resources/getResources', 'organisation')
        this.organisations = organisations
      } catch (error) {
      } finally {
        this.loading = false
      }
    },
    goToOrganisation(id) {
      this.$router.push(`/resurse-de-sprijin/organizatii/${id}`)
    }
  }
}

</script>

<style lang="scss">

.organisations-page {
  .organisations-content {
    max-width: 740px;
    margin: 20px auto 50px;

    .organisation-col {
      margin-bottom: 32px;

      .organisation-card {
        padding: 32px;
        height: 512px;
        border-radius: 24px !important;
        box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.10) !important;

        .organisation-image {
          width: 96px;
          height: 96px;
          border-radius: 0;
          margin-bottom: 32px;
          background: #EDEDED;
        }

        .organisation-card-content {
          height: 252px;
          overflow: hidden;

          .organisation-name {
            display: block;
            color: #000;
            font-size: 24px;
            font-weight: 700;
            line-height: 28px;
            font-style: normal;
            text-transform: uppercase;
            font-family: "Titillium Web", sans-serif;
          }

          .organisation-description {
            display: block;
            margin-top: 8px;
            color: #6C7B8A;
            font-size: 14px;
            font-weight: 400;
            line-height: 28px;
            font-style: normal;
            text-transform: uppercase;
            font-family: "Titillium Web", sans-serif;
          }
        }

        .v-card__actions {
          padding: 0;
          margin-top: 24px;
        }
      }
    }

    .loading-container {
      .v-skeleton-loader__avatar {
        width: 96px;
        height: 96px;
        border-radius: 0;
      }

      .v-skeleton-loader__heading {
        width: 75%;
        margin-left: 0;
        margin-top: 32px;
        margin-bottom: 32px;
      }

      .v-skeleton-loader__paragraph {
        padding-left: 0;
      }

      .v-skeleton-loader__button {
        width: 100%;
        height: 50px;
        margin-top: 32px;
      }
    }
  }
}

@media #{map-get($display-breakpoints, 'md-and-down')} {
  .organisations-page {
    .organisations-content {
      width: auto !important;
      margin-top: 180px !important;
      margin-left: 40px !important;
      margin-right: 40px !important;
    }
  }
}

@media #{map-get($display-breakpoints, 'xs-only')} {
  .organisations-page {
    .organisations-content {
      margin-left: 20px !important;
      margin-right: 20px !important;
      margin-top: 40px !important;
    }
  }
}

</style>

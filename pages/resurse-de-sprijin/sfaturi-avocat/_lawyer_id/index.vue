<template>
  <div class="lawyer-page">
    <div class="lawyer-content">
      <home-button to="/resurse-de-sprijin/sfaturi-avocat" text="Sfaturi avocat" />

      <div v-if="loading" class="mt-6">
        <v-skeleton-loader type="heading, card" />
      </div>

      <div v-else-if="lawyer">
        <div class="title-container">
          <page-title>{{ lawyer.name }}</page-title>
        </div>

        <div v-if="lawyer.content" class="content-container">
          <div class="content" v-html="lawyer.content" />
        </div>

        <div v-if="lawyer.short_content" class="article-expand-container">
          <div class="article-expand-content">
            <div class="d-flex align-center toggle-expand" @click="expanded = !expanded">
              <v-icon v-if="!expanded" color="#1F2937" class="mr-4">
                mdi-chevron-down
              </v-icon>
              <v-icon v-else color="#1F2937" class="mr-4">
                mdi-chevron-up
              </v-icon>
              <span>Citește textul în format accesibilizat</span>
            </div>

            <div v-if="expanded" class="expanded-content content" v-html="lawyer.short_content" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  auth: false,
  head: {
    title: 'Sfaturi avocat'
  },
  data() {
    return {
      lawyer: null,
      loading: true,
      expanded: false,
    }
  },
  async mounted() {
    await this.getLawyer()
  },
  methods: {
    async getLawyer() {
      try {
        const id = this.$route.params.lawyer_id
        const lawyer = await this.$store.dispatch('resources/getResource', id)

        this.lawyer = lawyer
        this.loading = false
      } catch (error) {
        this.loading = false
      }
    }
  }
}

</script>

<style lang="scss">

.lawyer-page {
  .lawyer-content {
    max-width: 740px;
    margin: 20px auto 50px;

    .v-skeleton-loader__heading {
      height: 50px;
      margin-bottom: 20px;
    }

    .title-container {
      margin-top: 24px;
    }

    .content-container {
      margin-top: 43px;
    }

    .content {
      color: $gray700;
      font-size: 20px;
      font-weight: 400;
      line-height: 32px;
      font-style: normal;
      text-transform: uppercase;
      font-family: Inter, sans-serif;

      img {
        border-radius: 8px;
        box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.05), 0px 10px 15px 0px rgba(0, 0, 0, 0.10);
      }
    }

    .article-expand-container {
      margin-top: 72px;

      .article-expand-content {
        padding: 14px 8px;
        border-top: 1px solid $gray800;
        border-bottom: 1px solid $gray800;

        .toggle-expand {
          cursor: pointer;
          color: $gray800;
          font-size: 20px;
          font-weight: 600;
          line-height: 32px;
          font-style: normal;
          text-transform: uppercase;
          font-family: Inter, sans-serif;
        }

        .expanded-content {
          margin: 21px 50px 0 50px;
        }
      }
    }
  }
}

</style>

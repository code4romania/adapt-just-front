<template>
  <div class="lawyer-page">
    <div class="lawyer-content">
      <home-button to="/resurse-de-sprijin" text="Resurse de sprijin" />

      <div class="mt-8">
        <page-title>Sfaturi avocat</page-title>
      </div>

      <div class="mt-8">
        <div v-if="loading">
          <v-skeleton-loader
            type="image"
            max-width="600px"
            style="margin-bottom: 32px;"
          />
          <v-skeleton-loader
            type="image"
            max-width="600px"
          />
        </div>

        <div v-else>
          <resource-card
            v-for="(lawyer, i) in lawyers"
            :key="`lawyer_${i}`"
            :title="lawyer.name"
            button-text="Citește mai mult"
            :to="`/resurse-de-sprijin/sfaturi-avocat/${lawyer.id}`"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import ResourceCard from '~/components/resources/ResourceCard'

export default {
  auth: false,
  head: {
    title: 'Sfaturi avocat'
  },
  components: {
    ResourceCard,
  },
  data() {
    return {
      lawyers: [],
      loading: true,
    }
  },
  async mounted() {
    await this.getResources()
  },
  methods: {
    async getResources() {
      try {
        const lawyers = await this.$store.dispatch('resources/getResources', 'lawyer')
        this.lawyers = lawyers
      } catch (error) {
      } finally {
        this.loading = false
      }
    },
  }
}

</script>

<style lang="scss">

.lawyer-page {
  .lawyer-content {
    max-width: 740px;
    margin: 20px auto 50px;

    .resource-card {
      max-width: 600px !important;
      margin-bottom: 32px !important;
    }
  }
}

</style>

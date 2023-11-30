<template>
  <div class="resource-page">
    <div class="resource-content">
      <home-button to="/resurse-de-sprijin" text="Resurse de sprijin" />

      <div class="mt-8">
        <page-title>Numere de telefon</page-title>
        <span class="subtitle">
          Apasă pe numărul de telefon ca să suni
        </span>
      </div>

      <div class="mt-12">
        <v-row v-if="loading">
          <v-col cols="6">
            <v-skeleton-loader type="image" max-height="120px" />
          </v-col>
          <v-col cols="6">
            <v-skeleton-loader type="image" max-height="120px" />
          </v-col>
        </v-row>

        <v-row v-else class="phone-list">
          <v-col
            v-for="(phone, i) in phoneNumbers"
            :key="`phone_${i}`"
            class="py-0 phone-col"
            cols="6"
          >
            <v-card
              class="phone-card"
              @click="callPhone(phone.phone)"
            >
              <v-card-text class="pa-0">
                <span class="phone-name">
                  {{ phone.name }}
                </span>
                <span class="phone-number">
                  {{ phone.phone }}
                </span>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  auth: false,
  head: {
    title: 'Numere de telefon'
  },
  data() {
    return {
      loading: true,
      phoneNumbers: [],
    }
  },
  async mounted() {
    await this.getResources()
  },
  methods: {
    async getResources() {
      try {
        const phoneNumbers = await this.$store.dispatch('resources/getResources', 'phone_number')
        this.phoneNumbers = phoneNumbers
      } catch (error) {
      } finally {
        this.loading = false
      }
    },
    callPhone(phone) {
      window.open(`tel:${phone}`)
    }
  }
}

</script>

<style lang="scss">

.resource-page {
  .resource-content {
    max-width: 740px;
    margin: 20px auto 50px;

    .subtitle {
      display: block;
      color: $gray700;
      font-size: 20px;
      margin-top: 10px;
      font-weight: 400;
      line-height: 28px;
      font-style: normal;
      text-transform: uppercase;
      font-family: Inter, sans-serif;
    }

    .phone-list {
      .phone-col {
        margin-bottom: 60px;

        .phone-card {
          height: 120px;
          cursor: pointer;
          border-radius: 8px;
          padding: 24px !important;
          box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.06), 0px 1px 3px 0px rgba(0, 0, 0, 0.10) !important;

          .phone-name {
            display: block;
            color: $gray800;
            font-size: 16px;
            font-weight: 500;
            line-height: 20px;
            font-style: normal;
            text-transform: uppercase;
            font-family: Inter, sans-serif;
          }

          .phone-number {
            display: block;
            color: $gray900;
            font-size: 30px;
            font-weight: 600;
            margin-top: 16px;
            line-height: 36px;
            font-style: normal;
            font-family: Inter, sans-serif;
          }
        }
      }
    }
  }
}

</style>

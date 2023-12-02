<template>
  <div class="landing-page">
    <hero-section @more="scrollNext" />

    <div id="home-info">
      <div class="home-section">
        <div class="d-flex">
          <div>
            <h2 class="section-title" data-listen-text>Nu știi dacă trebuie să ceri ajutor?</h2>
            <div class="section-line" />
          </div>
        </div>
        <div class="mt-4">
          <h3 class="section-subtitle" data-listen-text>
            Află mai multe despre:
          </h3>
        </div>

        <div class="articles-container">
          <v-row>
            <v-col
              v-for="article in homeArticles"
              :key="`article_${article.id}`"
              class="mb-8"
              cols="12"
              sm="12"
              md="6"
              lg="4"
            >
              <article-card
                :article="article"
                :show-image="false"
              />
            </v-col>
          </v-row>
        </div>
      </div>

      <div class="separator" />

      <div class="home-section">
        <div class="d-flex">
          <div>
            <h2 class="section-title" data-listen-text>Resurse de sprijin</h2>
            <div class="section-line" />
          </div>
        </div>

        <div class="resources-container">
          <v-row>
            <v-col cols="12" sm="12" md="6" lg="4">
              <resource-card
                title="Numere de telefon"
                button-text="Citește mai mult"
                to="/resurse-de-sprijin/numere-de-telefon"
                icon="/images/website/icons/phone-numbers-icon.svg"
              />
            </v-col>
              
            <v-col cols="12" sm="12" md="6" lg="4" :class="{'mt-8': $vuetify.breakpoint.smAndDown}">
              <resource-card
                title="Organizații"
                button-text="Citește mai mult"
                to="/resurse-de-sprijin/organizatii"
                icon="/images/website/icons/organisations-icon.svg"
              />
            </v-col>
              
            <v-col cols="12" sm="12" md="6" lg="4" :class="{'mt-8': $vuetify.breakpoint.mdAndDown}">
              <resource-card
                title="Sfaturi avocat"
                button-text="Citește mai mult"
                to="/resurse-de-sprijin/sfaturi-avocat"
                icon="/images/website/icons/lawyer-icon.svg"
              />
            </v-col>
          </v-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { mapState } from 'vuex'
import HeroSection from '/components/landing/HeroSection'
import ArticleCard from '~/components/articles/ArticleCard'
import ResourceCard from '~/components/resources/ResourceCard'

export default {
  auth: false,
  head: {
    titleTemplate: null
  },
  components: {
    HeroSection,
    ArticleCard,
    ResourceCard,
  },
  computed: {
    ...mapState('articles', ['articles']),
    homeArticles() {
      return this.articles.slice(0, 3)
    }
  },
  async mounted() {
    await this.getArticles()
  },
  methods: {
    scrollNext() {
      const nextSection = document.getElementById('home-info');

      nextSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    },
    async getArticles() {
      try {
        await this.$store.dispatch('articles/getArticles')
        this.loading = false
      } catch (error) {
        this.loading = false
      }
    }
  },
}

</script>

<style lang="scss">

.landing-page {
  .separator {
    height: 1px;
    width: 100%;
    max-width: 1060px;
    margin: 30px auto;
    background-color: #DBDBDB;
  }

  #home-info {
    scroll-margin: 81px 0 0 0;

    .home-section {
      width: 100%;
      padding-top: 81px;
      margin: 0 auto 34px;
      max-width: 1060px;

      .section-title {
        color: $gray700;
        font-size: 32px;
        font-weight: 600;
        line-height: 38px;
        font-style: normal;
        text-transform: uppercase;
        font-family: "Inter", sans-serif;
      }

      .section-subtitle {
        color: $gray500;
        font-size: 24px;
        font-weight: 600;
        line-height: 28px;
        font-style: normal;
        text-transform: uppercase;
        font-family: "Inter", sans-serif;
      }

      .section-line {
        width: 100%;
        height: 10px;
        margin-top: 4px;
        background-color: $yellow300;
      }

      .articles-container {
        margin-top: 40px;
      }

      .resources-container {
        margin-top: 100px;

        .resource-card {
          margin-bottom: 0 !important;
        }
      }
    }
  }
}

@media #{map-get($display-breakpoints, 'md-and-down')} {
  .landing-page {
    .home-section {
      width: auto !important;
      margin-left: 40px !important;
      margin-right: 40px !important;
    }
  }
}

@media #{map-get($display-breakpoints, 'xs-only')} {
  .landing-page {
    .home-section {
      margin-left: 20px !important;
      margin-right: 20px !important;
    }
  }
}

</style>

<template>
  <div class="articles-page">
    <div class="articles-content">
      <div class="title-container">
        <page-title>
          Informații
        </page-title>

        <div class="subtitle" data-listen-text>
          În caz că nu ești sigur că ai nevoie de ajutor,<br />citește informații despre tipurile de abuz și<br />lucrurile la care trebuie să fii atent
        </div>
      </div>

      <div class="articles-container">
        <div v-if="loading" class="loading-container">
          <v-row>
            <v-col cols="6">
              <v-skeleton-loader type="avatar, article, button" />
            </v-col>
            <v-col cols="6">
              <v-skeleton-loader type="avatar, article, button" />
            </v-col>
          </v-row>
        </div>

        <div v-else>
          <articles :articles="articles" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { mapState } from 'vuex'
import Articles from '~/components/articles/Articles'

export default {
  auth: false,
  head: {
    title: 'Informații'
  },
  components: {
    Articles,
  },
  data() {
    return {
      loading: true,
    }
  },
  computed: {
    ...mapState('articles', [
      'articles',
    ]),
  },
  async mounted() {
    await this.getArticles()
  },
  methods: {
    async getArticles() {
      try {
        await this.$store.dispatch('articles/getArticles')
        this.loading = false
      } catch (error) {
        this.loading = false
      }
    }
  }
}

</script>

<style lang="scss">

.articles-page {
  .articles-content {
    margin: 0 auto;
    max-width: 740px;

    .title-container {
      margin-top: 40px;

      .subtitle {
        color: $gray700;
        font-size: 20px;
        font-weight: 400;
        margin-top: 20px;
        line-height: 28px;
        text-transform: uppercase;
        font-family: Inter, sans-serif;
      }
    }

    .articles-container {
      margin-top: 80px;

      .loading-container {
        .v-skeleton-loader__avatar {
          border-radius: 12px;
        }

        .v-skeleton-loader__text {
          width: 100%;
          max-width: 100%;
        }

        .v-skeleton-loader__button {
          width: 100%;
        }
      }
    }
  }
}

@media #{map-get($display-breakpoints, 'md-and-down')} {
  .articles-page {
    .articles-content {
      width: auto !important;
      margin-left: 40px !important;
      margin-right: 40px !important;

      .title-container {
        margin-top: 160px !important;
      }
    }
  }
}

@media #{map-get($display-breakpoints, 'xs-only')} {
  .articles-page {
    .articles-content {
      margin-left: 20px !important;
      margin-right: 20px !important;

      .title-container {
        margin-top: 40px !important;
      }
    }
  }
}

</style>

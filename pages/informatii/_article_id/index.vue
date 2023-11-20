<template>
  <div class="article-page">
    <div class="article-content">
      <home-button to="/informatii" text="Informații" />

      <div v-if="loading" class="mt-6">
        <v-skeleton-loader type="heading, card" />
      </div>

      <div v-else-if="article">
        <div class="title-container">
          <page-title>{{ article.name }}</page-title>
        </div>

        <div v-if="article.content" class="content-container">
          <div class="content" v-html="article.content" />
        </div>

        <div v-if="article.short_content" class="article-expand-container">
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

            <div v-if="expanded" class="expanded-content content" v-html="article.short_content" />
          </div>
        </div>

        <div class="complaint-container">
          <h1 class="complaint-text">
            Ai pățit și tu asta?
          </h1>
          <next-button
            text="Cere ajutor"
            @click.native="$router.push('/cere-ajutor')"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  auth: false,
  head: {
    title: 'Informații'
  },
  data() {
    return {
      loading: true,
      article: null,
      expanded: false,
    }
  },
  async mounted() {
    await this.getArticle()
  },
  methods: {
    async getArticle() {
      try {
        const articleId = this.$route.params.article_id
        const article = await this.$store.dispatch('articles/getArticle', articleId)

        this.article = article
        this.loading = false
      } catch (error) {
        this.loading = false
      }
    }
  }
}

</script>

<style lang="scss">

.article-page {
  .article-content {
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

      p {
        margin-bottom: 0;
      }

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

    .complaint-container {
      margin-top: 86px;

      .complaint-text {
        color: $gray900;
        font-size: 32px;
        font-weight: 600;
        line-height: 60px;
        font-style: normal;
        margin-bottom: 17px;
        letter-spacing: -0.16px;
        text-transform: uppercase;
        font-family: Inter, sans-serif;
      }
    }
  }
}

</style>

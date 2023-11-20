<template>
  <v-row class="articles-list">
    <v-col
      v-for="article in articles"
      :key="`article_${article.id}`"
      class="py-8"
      cols="6"
    >
      <v-card class="article-card" height="308px">
        <v-img
          v-if="article.upload"
          :src="article.upload.dataUrl"
          class="article-image"
        />
        <div v-else class="article-image" />

        <v-card-title class="pa-0 px-6 mb-4">
          {{ article.name }}
        </v-card-title>

        <v-card-text class="pa-0 px-6">
          <div v-html="article.short_content" class="article-content" />
        </v-card-text>
        <v-card-actions>
          <v-btn text block color="primary" :to="`/informatii/${article.id}`">
            Citește mai mult
            <v-icon right>mdi-arrow-right</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>

export default {
  props: {
    articles: {
      type: Array,
      required: true,
      default: () => [],
    },
  }
}

</script>

<style lang="scss">

.articles-list {
  .article-card {
    height: 308px;
    border-radius: 12px;
    padding: 64px 0 0 0;

    .article-image {
      left: 24px;
      top: -32px;
      width: 64px;
      height: 64px;
      position: absolute;
      border-radius: 12px;
      background-color: #D1D5DB;
      box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.10);
    }

    .v-card-title {
      color: $gray900;
      font-size: 20px;
      font-weight: 500;
      line-height: 28px;
      font-style: normal;
      font-family: Inter, sans-serif;
    }

    .v-card__text {
      height: 96px;

      .article-content {
        height: 96px;
        font-size: 14px;
        color: $gray500;
        overflow: hidden;
        font-weight: 400;
        line-height: 24px;
        font-style: normal;
        text-transform: uppercase;
        font-family: Inter, sans-serif;
      }
    }

    .v-card__actions {
      padding: 0;
      margin-top: 29px;
      background: #F9FAFB;

      .v-btn {
        height: 72px;
        padding: 0 24px;
        justify-content: flex-start;

        .v-btn__content {
          font-size: 16px;
          font-weight: 400;
          line-height: 24px;
          font-style: normal;
          font-family: Inter, sans-serif;
        }
      }
    }
  }
}

</style>

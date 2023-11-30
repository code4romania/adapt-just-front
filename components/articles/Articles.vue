<template>
  <v-row class="articles-list">
    <v-col
      v-for="article in articles"
      :key="`article_${article.id}`"
      class="py-8"
      cols="6"
    >
      <article-card :article="article" />
    </v-col>
  </v-row>
</template>

<script>

import ArticleCard from './ArticleCard'

export default {
  components: {
    ArticleCard,
  },
  props: {
    articles: {
      type: Array,
      required: true,
      default: () => [],
    },
  }
}

</script>

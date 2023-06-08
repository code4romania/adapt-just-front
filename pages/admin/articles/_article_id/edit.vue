<template>
  <dashboard-page>
    <template #navigation>
      <ui-form-back-btn to="/admin/articles"/>
    </template>
    <template #title>Moficiare articol</template>
    <template #actions>
    </template>
    <template #workspace>
      <v-row>
        <v-col>
          <v-skeleton-loader
            class="mx-auto"
            type="card"
            v-if="loading"
          ></v-skeleton-loader>
          <articles-form
            v-else
            :article="article"
            @success="onSuccess" />
        </v-col>
      </v-row>

    </template>
  </dashboard-page>
</template>

<script>
import {mapState} from "vuex";
export default {
  layout: 'dashboard',
  meta: {
    permission: 'Update - articles',
  },
  data() {
    return {
      loading: true
    }
  },
  computed:{
    ...mapState('articles', ['article'])
  },
  async fetch() {
    this.loading = true
    await this.$store.dispatch('articles/show', {id: this.$route.params.article_id});
    this.loading = false
  },
  methods:{
    onSuccess(){
      this.$router.push('/admin/articles')
    }
  }
}
</script>

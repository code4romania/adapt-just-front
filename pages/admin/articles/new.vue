<template>
  <dashboard-page>
    <template #navigation>
      <ui-form-back-btn to="/admin/articles"/>
    </template>
    <template #title>Adaugare articol nou </template>
    <template #workspace>
      <v-row>
        <v-col>
          <articles-form :article="article" @success="onSuccess" />
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
    permission: 'Create - articles',
  },
  computed:{
    ...mapState('articles', ['article'])
  },
  async beforeCreate() {
    await this.$store.commit('articles/resetState');
  },

  methods:{
    onSuccess(){
      this.$router.push('/admin/articles')
    }
  }
}
</script>

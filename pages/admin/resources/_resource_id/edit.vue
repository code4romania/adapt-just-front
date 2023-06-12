<template>
  <dashboard-page>
    <template #navigation>
      <ui-form-back-btn to="/admin/resources"/>
    </template>
    <template #title>Moficiare resursa de sprijin</template>
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
          <resources-form
            v-else
            :resource="resource"
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
    permission: 'Update - resources',
  },
  data() {
    return {
      loading: true
    }
  },
  computed:{
    ...mapState('resources', ['resource'])
  },
  async fetch() {
    this.loading = true
    await this.$store.dispatch('resources/show', {id: this.$route.params.resource_id});
    this.loading = false
  },
  methods:{
    onSuccess(){
      this.$router.push('/admin/resources')
    }
  }
}
</script>

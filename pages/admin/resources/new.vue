<template>
  <dashboard-page>
    <template #navigation>
      <ui-form-back-btn to="/admin/articles"/>
    </template>
    <template #title>Adaugare resursa de sprijin </template>
    <template #workspace>
      <v-row>
        <v-col>
          <resources-form :resource="resource" @success="onSuccess" />
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
    permission: 'Create - resources',
  },
  computed:{
    ...mapState('resources', ['resource'])
  },
  async beforeCreate() {
    await this.$store.commit('resources/resetState');
  },

  methods:{
    onSuccess(){
      this.$router.push('/admin/resources')
    }
  }
}
</script>

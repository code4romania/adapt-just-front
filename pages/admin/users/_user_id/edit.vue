<template>
  <dashboard-page>
    <template #navigation>
      <ui-form-back-btn to="/admin/users"/>
    </template>
    <template #title>Moficiare utilizator</template>
    <template #actions>
    </template>
    <template #workspace>
      <v-row>
        <v-col>
          <users-form :user="user" @success="onSuccess" />
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
    permission: 'Update - users',
  },
  computed:{
    ...mapState('users', ['user'])
  },
  async fetch() {
    await this.$store.dispatch('users/show', {id: this.$route.params.user_id});
  },
  methods:{
    onSuccess(){
      this.$router.push('/admin/users')
    }
  }
}
</script>

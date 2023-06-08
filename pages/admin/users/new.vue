<template>
  <dashboard-page>
    <template #navigation>
      <ui-form-back-btn to="/admin/users"/>
    </template>
    <template #title>Adaugare utilizator nou </template>
    <template #actions>
<!--      <v-btn  outlined to="/users" class="pl-1">-->
<!--        <v-icon>mdi-chevron-left</v-icon>-->
<!--        Back-->
<!--      </v-btn>-->
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
    permission: 'Create - users',
  },
  computed:{
    ...mapState('users', ['user'])
  },
  async beforeCreate() {
    await this.$store.commit('users/resetState');
  },

  methods:{
    onSuccess(){
      this.$router.push('/admin/users')
    }
  }
}
</script>

<template>
  <dashboard-page>
    <template #title>Utilizatori</template>
    <template #actions>
      <v-btn class="text-none pl-2" color="primary" to="/admin/users/new">
        <v-icon>mdi-plus</v-icon>
        Adaugare utilizator
      </v-btn>
    </template>
    <template #workspace>
      <users-list/>
    </template>
  </dashboard-page>
</template>

<script>

export default {
  layout: 'dashboard',
  meta: {
    permission: 'ViewAny - users',
  },
  data: () => ({

  }),
  computed:{
  }
}
</script>

<template>
  <dashboard-page>
    <template #title>Gestionare articole</template>
    <template #actions>
      <v-btn class="text-none pl-2" color="primary" to="/admin/articles/new">
        <v-icon>mdi-plus</v-icon>
        Adaugare articol
      </v-btn>
    </template>
    <template #workspace>
      <articles-list/>
    </template>
  </dashboard-page>
</template>

<script>

export default {
  layout: 'dashboard',
  meta: {
    permission: 'ViewAny - articles',
  },
  data: () => ({

  }),
  computed:{
  }
}
</script>

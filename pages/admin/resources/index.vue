<template>
  <dashboard-page>
    <template #title>Gestionare resurse de sprijin</template>
    <template #actions>
      <v-btn class="text-none pl-2" color="primary" to="/admin/resources/new">
        <v-icon>mdi-plus</v-icon>
        Adaugare resursa
      </v-btn>
    </template>
    <template #workspace>
      <resources-list/>
    </template>
  </dashboard-page>
</template>

<script>

export default {
  layout: 'dashboard',
  meta: {
    permission: 'ViewAny - resources',
  },
  data: () => ({

  }),
  computed:{
  }
}
</script>

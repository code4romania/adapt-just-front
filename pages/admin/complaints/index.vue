<template>
  <dashboard-page>
    <template #title>Raportări</template>
    <template #actions>
<!--      <v-btn class="text-none pl-2" color="primary">-->
<!--        <v-icon>mdi-download</v-icon>-->
<!--        Descarca tabel-->
<!--      </v-btn>-->
    </template>
    <template #workspace>
      <complaints-list/>
    </template>
  </dashboard-page>
</template>

<script>

export default {
  layout: 'dashboard',
  meta: {
    permission: 'ViewAny - complaints',
  },
  data: () => ({

  }),
  computed:{
  }
}
</script>

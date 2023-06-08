<template>
  <v-data-table
    :headers="headers"
    :items="items"
    :loading="loading"
    :page.sync="page"
    :items-per-page="itemsPerPage"
    @page-count="pageCount = $event"
  >
    <template v-slot:item="{ item }">
      <tr>
        <td>{{ $moment(item.created_at).format('MM/DD/YYYY HH:mm') }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.city }}</td>
        <td>{{ item.location_name }}</td>
        <td>{{ item.type }}</td>
        <td style="width: 120px; text-align: right">
          <v-btn
            plain
            text
            :to="`/complaints/${item.id}/view`"
          >
            Vezi raportare
          </v-btn>
        </td>
      </tr>
    </template>
    <template v-slot:no-data>
      Empty list
    </template>
  </v-data-table>
</template>

<script>

export default {
  data: () => ({
    loading: false,
    page: 1,
    pageCount: 0,
    itemsPerPage: 10,
    headers: [
      {text: 'Data', value: 'created_at'},
      {text: 'Nume', value: 'name'},
      {text: 'Oras', value: 'city'},
      {text: 'Centru', value: 'location_name'},
      {text: 'Tip raportare', value: 'type'},
      {text: 'Actions', value: false},
    ],
    items: [],
  }),
  computed: {

  },
  mounted() {
    this.getDataFromApi();
  },
  methods: {
    async getDataFromApi() {
      this.loading = true
      await this.$store.dispatch('complaints/get', {})
        .then((data) => {
          this.items = data.data;
        })

      this.loading = false;
    }
  }
}
</script>

<style lang="scss">
</style>


<template>
  <ui-table-list
      :headers="headers"
      :items="items"
      :loading="loading"
      :filters="initialFilters"
      :sort="initialSort"
      :items-per-page="itemsPerPage"
      :totalItems="total"
      @getDataFromApi="getDataFromApi"
  >
    <template v-slot:item="{ item }">
      <tr>
        <td>{{ $moment(item.created_at).format('DD-MM-YYYY HH:mm') }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.city }}</td>
        <td>{{ item.location_name }}</td>
        <td>{{ item.type_label }}</td>
        <td style="width: 120px; text-align: right">
          <v-btn
            plain
            text
            :to="`/admin/complaints/${item.id}/view`"
            class="text-none"
            color="primary"
          >
            Vezi raportare
          </v-btn>
        </td>
      </tr>
    </template>
    <template v-slot:no-data>
      Empty list
    </template>
  </ui-table-list>
</template>

<script>

export default {
  data: () => ({
    loading: false,
    page: 1,
    pageCount: 0,
    total: 0,
    initialFilters: [],
    initialSort: {},
    itemsPerPage: 10,
    headers: [
      {
        text: 'Data',
        value: 'created_at',
        filter: {
          type: 'date'
        }
      },
      {
        text: 'Nume',
        value: 'name',
        sortable: true,
        filter: {
          type: 'string'
        }
      },
      {
        text: 'Oraș',
        value: 'city',
        sortable: true,
        filter: {
          type: 'string'
        }
      },
      {
        text: 'Centru',
        value: 'location_name',
        sortable: true,
        filter: {
          type: 'string'
        }
      },
      {
        text: 'Tip raportare',
        value: 'type',
        filter: {
          type: 'select',
          options: [
            {
              text: 'Abuz',
              value: 'hurt'
            },
            {
              text: 'Cerere relocare',
              value: 'move'
            },
            {
              text: 'Cerere reexaminare',
              value: 'evaluation'
            }
          ]
        }
      },
      {text: 'Acțiuni', value: false},
    ],
    items: [],
  }),
  computed: {

  },
  mounted() {
    this.getDataFromApi();
  },
  methods: {
    async getDataFromApi(params = {}) {
      this.loading = true

      let data = { ...params }

      if (params.itemsPerPage !== -1) {
        data.page_size = params.itemsPerPage
      }
      delete data.itemsPerPage

      await this.$store.dispatch('complaints/get', data)
          .then((data) => {
            this.items = data.data;
            this.total = data?.meta?.total;
          })

      this.loading = false;
    }
  }
}
</script>

<style lang="scss">
</style>


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
        <td>{{ item.name }}</td>
        <td>{{ item.type_label }}</td>
        <td>
          <v-chip v-if="item.status === 'active'" small color="success"> &#9679; Publicat</v-chip>
          <v-chip v-else small>&#9679; Draft</v-chip>
        </td>
        <td>{{ item.published_at ? $moment(item.published_at).format('DD-MM-YYYY HH:mm') : ''}}</td>
        <td style="width: 120px; text-align: right">
          <v-menu
            bottom
            left
            offset-y
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                icon
                v-bind="attrs"
                v-on="on"
              >
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </template>

            <v-list dense>
              <v-list-item
                v-if="$user.hasPermission('View - resources')"
                :to="`/admin/resources/${item.id}/view`"
              >
                <v-list-item-icon>
                  <v-icon small>mdi-eye</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>Vizualizeaza</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item
                v-if="$user.hasPermission('Update - resources')"
                :to="`/admin/resources/${item.id}/edit`"
              >
                <v-list-item-icon>
                  <v-icon small>mdi-pencil</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>Modifica</v-list-item-title>
                </v-list-item-content>
              </v-list-item>

              <v-list-item
                v-if="$user.hasPermission('Delete - resources')"
                @click="deleteItem(item)"
                :loading="item.loadingDelete"
              >
                <v-list-item-icon>
                  <v-icon small>mdi-delete</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>Sterge</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-menu>
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
        text: 'Nume',
        value: 'name',
        sortable: true,
        filter: {
          type: 'string'
        }
      },
      {
        text: 'Categorie',
        value: 'type',
        sortable: true,
        filter: {
          type: 'select',
          options: [
            {
              text: 'Organizatie',
              value: 'organisation'
            },
            {
              text: 'Numar de telefon',
              value: 'phone_number'
            },
            {
              text: 'Sfaturi avocat',
              value: 'lawyer'
            },
          ]
        }
      },
      {
        text: 'Status',
        value: 'status',
        filter: {
          type: 'select',
          options: [
            {
              text: 'Activ',
              value: 'active'
            },
            {
              text: 'Draft',
              value: 'draft'
            }
          ]
        }
      },
      {
        text: 'Data publicarii',
        value: 'published_at',
        filter: {
          type: 'date'
        }
      },
      {text: 'Actions', value: false},
    ],
    items: [],
  }),
  computed: {

  },
  mounted() {
    //this.getDataFromApi();
  },
  methods: {
    async getDataFromApi(params = {}) {
      this.loading = true

      let data = { ...params }

      if (params.itemsPerPage !== -1) {
        data.page_size = params.itemsPerPage
      }
      delete data.itemsPerPage

      await this.$store.dispatch('resources/get', data)
        .then((data) => {
          this.items = data.data;
          this.total = data?.meta?.total;
        })

      this.loading = false;
    },
    deleteItem(item) {
      this.$confirm(
        {
          message: 'Esti sigur ca vrei sa stergi acesta resursa?',
          button: {
            no: 'Nu',
            yes: 'Da'
          },
          callback: async confirm => {
            this.loading = true;
            if (confirm) {
              try {
                await this.$store.dispatch('resources/delete', { id: item.id })
                await this.getDataFromApi();
                const message = 'Resursa a fost stersa cu succes.';
                const snack = { color: 'success', message: message }
                this.$store.commit('snackbar/setSnack', snack);
              } catch (e) {
                this.$form.handleError(e);
              }
            }
            this.loading = false;
          }
        }
      )
    }
  }
}
</script>

<style lang="scss">
</style>


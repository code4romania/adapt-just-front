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
        <td>{{ item.id }}</td>
        <td>{{ item.first_name }}</td>
        <td>{{ item.last_name }}</td>
        <td>{{ item.email }}</td>
        <td>{{ $moment(item.created_at).format('MM/DD/YYYY HH:mm') }}</td>
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
                v-if="$user.hasPermission('Update - users')"
                :to="`/admin/users/${item.id}/edit`"
              >
                <v-list-item-icon>
                  <v-icon small>mdi-pencil</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>Modifica</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item
                v-if="$user.hasPermission('Delete - users') && $auth.user.id !== item.id"
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

<!--          <v-btn-->

<!--            icon-->
<!--            :to="`/users/${item.id}/edit`"-->
<!--          >-->
<!--            <v-icon small color="primary">-->
<!--              mdi-account-alert-->
<!--            </v-icon>-->
<!--          </v-btn>-->
<!--          <v-btn-->

<!--            icon-->
<!--            @click="deleteItem(item)"-->
<!--            :loading="item.loadingDelete"-->
<!--          >-->
<!--            <v-icon small color="primary">-->
<!--              mdi-delete-->
<!--            </v-icon>-->
<!--          </v-btn>-->
        </td>
      </tr>
    </template>
    <template v-slot:no-data>
      Empty list
    </template>
  </v-data-table>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: 'UsersList',
  data: () => ({
    loading: false,
    page: 1,
    pageCount: 0,
    itemsPerPage: 10,
    headers: [
      {text: 'ID', value: 'id'},
      {text: 'Nume', value: 'first_name'},
      {text: 'Prenume', value: 'last_name'},
      {text: 'Email', value: 'email'},
      {text: 'Created', value: 'created_at'},
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
      await this.$store.dispatch('users/get', {role: this.role, page_size: 1000})
        .then((data) => {
          this.items = data.data;
        })

      this.loading = false;
    },
    deleteItem(item) {
      this.$set(item, 'loadingDelete', true);
      this.$confirm(
        {
          message: 'Are you sure you want to delete this user?',
          button: {
            no: 'No',
            yes: 'Yes'
          },
          callback: async confirm => {
            this.loading = true;
            if (confirm) {
              await this.$store.dispatch('users/delete', { id: item.id })
                .then( async (response) => {
                  await this.getDataFromApi();
                  const message = 'User successfully deleted';
                  const snack = { color: 'success', message: message }
                  this.$store.commit('snackbar/setSnack', snack);

                })
                .catch( (error) => {
                  const message = error.response?.data?.message || 'Invalid data';
                  const snack = { color: 'error', message: message }
                  this.$store.commit('snackbar/setSnack', snack);
                });
            }
            this.loading = false;
            item.loadingDelete = false;
          }
        }
      )
    },
  }
}
</script>

<style lang="scss">
</style>


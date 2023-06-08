<template>
  <div>
    <ValidationObserver ref="form" v-slot="{ invalid, validated, handleSubmit, validate }">
      <v-card class="brand-form">
        <v-list>
          <v-list-item link>
            <v-list-item-content>
              <v-list-item-title class="text-h6">
                {{ user.full_name }}
              </v-list-item-title>
              <v-list-item-subtitle>{{ user.email }}</v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-action>
              <v-btn color="primary" @click="submit">
                Save permissions
              </v-btn>
            </v-list-item-action>
          </v-list-item>
        </v-list>

        <v-card-text>
          <v-text-field
            v-model="search"
            outlined
            placeholder="Filter permissions"
          >
          </v-text-field>
          <v-form>
            <v-skeleton-loader
              v-if="loadingForm"
              class="mx-auto"
              type="table-thead, table-tbody"
            ></v-skeleton-loader>
            <v-simple-table v-else dense>
              <template v-slot:default>
                <thead class="bg--primary">
                  <tr>
                    <th class="text-left"></th>
                    <th class="text-left">MODULE</th>
                    <th class="text-left">PERMISSION</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="item in permissions"
                    :key="`permission_row_${item.id}`"
                  >
                    <td class="py-2">
                      <v-checkbox
                        class="mt-0"
                        hide-details
                        v-model="selectedPermissions"
                        :value="item.id"
                      />
                    </td>
                    <td class="text-capitalize">{{ moduleText(item.module) }}</td>
                    <td class="text-capitalize">{{ item.label }}</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer/>
        </v-card-actions>
      </v-card>
    </ValidationObserver>
  </div>
</template>

<script>
export default {
  props:{
    user:{
      type: [Object],
      required: true
    }
  },
  data: () => ({
    loadingForm: false,
    loading: false,
    search: '',
    selectedPermissions: []
  }),
  async fetch() {
    this.loadingForm = true
    await this.$store.dispatch('user_permissions/form')
    this.loadingForm = false
  },
  computed:{
    permissions(){
      const pp = this.$store.state.user_permissions?.form?.permissions ?? [];
      if( this.search.trim() ) {
        return pp.filter((item) => {
          return item.name.toLowerCase().includes(this.search.toLowerCase())
        })
      }
      return pp
    }
  },
  mounted() {
    this.selectedPermissions = this.user.permissions.map( p => p.id)
  },
  methods:{
    moduleText(text){
      return text.replaceAll('_', ' ');
    },
    permissionNameText(text){
      const p = text.split(' - ');
      if( p.length ){
        return this.moduleText(p[0]);
      }
      return text
    },
    async submit(){
      this.loading      = true;
      const result = await this.$refs.form.validate();
      if (!result) {
        this.loading = false;
        return false;
      }
      await this.$store.dispatch('user_permissions/update', { id : this.user.id, permissions: this.selectedPermissions })
        .then( (response) => {
          this.$emit('success');
        })
        .catch( (error) => {
          const errors = error.response?.data?.errors || null;
          if (errors) {
            this.$refs.form.setErrors(errors);
          }

          const message = error.response?.data?.message || 'Invalid data';
          const snack = { color: 'error', message: message }
          this.$store.commit('snackbar/setSnack', snack);

        });
      this.loading = false
    }
  }
}
</script>

<style lang="scss">
  .brand-form.v-card{
  }
</style>


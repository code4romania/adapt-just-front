<template>
  <div>
    <v-data-table
      hide-default-header
      :headers="headers"
      :items="items"
      :loading="loading"
      :items-per-page="itemsPerPage"
      :options.sync="options"
      :server-items-length="totalItems"
      :disable-filtering="true"
      class="elevation-1"
    >
      <template v-slot:header="header">
        <thead v-if="header.props" class="v-data-table-header">
          <tr v-if="header.props.headers && header.props.headers.length">
            <th
              v-for="header in header.props.headers"
              class="text-start cursor-pointer th-custom"
              :class="{'text-bold': hoveredItem === header}"
              @click="sortToggle(sortColumn(header))"
              @mouseover="hoveredItem = header"
              @mouseleave="hoveredItem = null"
              v-click-outside="{ handler: onClickOutside }"
              :style="header.style"
            >
              <v-row no-gutters>
                <span class="custom-header">
                  <span>{{ header.text }}</span>
                  <span class="header-actions-placeholder">
                    <template v-if="header.filter">
                      <v-menu offset-y :close-on-content-click="false">
                        <template v-slot:activator="{ on, attrs }">
                        <span
                          v-bind="attrs"
                          v-on="on"
                          @click="isOpen = filterColumn(header)"
                        >
                          <v-badge dot overlap bordered :value="hasFilter(filterColumn(header))">
                          <v-icon small>
                            mdi-filter
                          </v-icon>
                        </v-badge>
                        </span>
                        </template>
                        <v-card class="filter-card">
                          <v-card-text>
                            <ui-table-list-filters
                              :label="header.text"
                              :type="header.filter.type"
                              :options="header.filter.options ?? []"
                              :value="filterValue(filterColumn(header))"
                              :place-holder="header.filter.placeHolder ? header.filter.placeHolder : ''"
                              @changeFilter="changeFilter(filterColumn(header), $event)"
                            />
                          </v-card-text>
                        </v-card>
                      </v-menu>
                    </template>
                    <v-icon v-if="header.sortable && ((sortData && sortData.column && sortData.column === sortColumn(header)) || hoveredItem === header)" small>
                      {{ sortData.type === 'desc' ? 'mdi-arrow-down' : 'mdi-arrow-up' }}
                    </v-icon>
                  </span>
                </span>
              </v-row>
            </th>
          </tr>
        </thead>
      </template>

      <template v-slot:item="{ item }">
        <slot name="item" :item="item"/>
      </template>
      <template v-slot:no-data>
        Empty list
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  props: {
    headers: {
      type: Array,
      default: () => ([])
    },
    items: {
      type: Array,
      default: () => ([])
    },
    loading: {
      type: Boolean,
      default: false
    },
    filters: {
      type: Array,
      default: () => ([])
    },
    sort: {
      type: Object,
      default: () => ({})
    },
    itemsPerPage: {
      type: Number,
      default: 10
    },
    totalItems: {
      type: Number,
      default: 0
    }
  },
  data: () => ({
    hoveredItem: null,
    isOpen: false,
    total: 0,
    options: {},
    filterData: [],
    sortData: {}
  }),
  watch: {
    options: {
      deep: true,
      handler (newVal, oldVal) {
        if (!_.isEqual(JSON.stringify(newVal), JSON.stringify(oldVal))) {
          let data = newVal
          if (this.filterData && this.filterData.length) {
            this.filterData.forEach(it => {
              let localCol = Object.keys(it)
              let localVal = Object.values(it)
              if (localCol && localCol[0] && localVal && localVal[0]) {
                data[localCol[0]] = localVal[0]
              }
            })
          }
          this.$emit('getDataFromApi', data)
        }
      },
    },
  },
  created() {
    let filters = []
    this.filters.forEach((it) => {
      let localCol = Object.keys(it)
      filters.push({[`filter[${localCol[0]}]`]: it[localCol[0]]})
    })
    this.filterData = filters

    this.initialManageSort(this.sort)
  },
  methods: {
    onClickOutside() {
      if (this.isOpen && !this.hoveredItem) {
        this.isOpen = null
      }
    },

    filterValue(col) {
      const filter = this.localFilterCol(col)
      return filter && Object.values(filter) && Object.values(filter)[0] ? Object.values(filter)[0] : null
    },

    hasFilter(col) {
      return !!this.localFilterCol(col)
    },

    filterColumn(h) {
      return h.filter && h.filter.col ? `filter[${h.filter.col}]` : `filter[${h.value}]`
    },

    sortColumn(h) {
      return h.filter && h.filter.col ? h.filter.col : h.value
    },

    localFilterCol(col) {
      return this.filterData.find((it) => {
        let localCol = Object.keys(it)
        return localCol && localCol[0] && localCol[0] === col
      })
    },

    changeFilter(column, value) {

      if (_.isArray(value) && value.length > 1 && !value.filter(n => n).length) {
        value = null
      }

      if (_.isEmpty(value) && this.options && Object.keys(this.options).includes(column)) {
        delete this.options[column]
      } else {
        this.options[column] = value
      }

      const itemIndex = this.filterData.indexOf(this.localFilterCol(column))
      if (itemIndex !== -1) {
        this.filterData.splice(itemIndex, 1)
      }

      if (!_.isEmpty(value)) {
        this.filterData.push({[column]: value})
      }

      Object.entries(this.options).forEach(([key, value]) => this.options[key] = value)
      this.options.page = 1;
      this.$emit('getDataFromApi', this.options)
    },

    initialManageSort({column, type}) {
      this.sortData = {column: column, type: type}
      if (type === 'asc') {
        this.options.sort = column
      } else if (type === 'desc') {
        this.options.sort = `-${column}`
      }
    },

    sortToggle(column) {
      if (column) {
        if (!this.options?.sort) {
          this.options.sort = column
          this.sortData = {column: column, type: 'asc'}
        } else if (this.options?.sort === column) {
          this.options.sort = `-${column}`
          this.sortData = {column: column, type: 'desc'}
        } else {
          delete this.options.sort
          this.sortData = {}
        }

        this.$emit('getDataFromApi', this.options)
      }
    }
  }
}
</script>

<style lang="scss">
.th-custom {
  //white-space: nowrap;
}
.v-data-table-header{
  background-color: #EFF0F3;
}
.custom-header {
  width: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  //min-width: 100px;
  .header-actions-placeholder {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-items: center;
    //flex-direction: column;
    min-width: 35px;
    max-height: 20px;
    margin-left: 15px;
  }
  th{
    vertical-align: top;
  }
}
.cursor-pointer {
  cursor: pointer;
}
.text-bold {
  color: black !important;
}
.filter-card{
  max-width: 400px;
}
</style>

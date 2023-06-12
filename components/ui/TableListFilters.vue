<template>
  <div v-if="filterTypes.includes(type)">
    <ui-form-label>{{ label }}</ui-form-label>
    <v-row no-gutters justify="center" align="center" class="flex-nowrap">
      <v-col>
        <template v-if="(type === 'selectMultiple') || (type === 'select')">
          <v-select
            v-model="filterModel"
            :items="options"
            :placeholder="placeHolder"
            :item-value="optionsHasObject ? 'value' : false"
            :item-text="optionsHasObject ? 'text' : false"
            :multiple="type === 'selectMultiple'"
            outlined
            dense
            hide-details
            clearable
          >
            <template v-if="Array.isArray(filterModel)" v-slot:selection="{ item, index }">
              <v-chip v-if="filterModel?.length < 2" small>{{ item.text }}</v-chip>
              <v-chip v-else-if="index === 0" small>{{ filterModel?.length }} items selected</v-chip>
            </template>
          </v-select>
        </template>
        <template v-if="(type === 'number') || (type === 'string')">
          <v-text-field
            v-model="filterModel"
            outlined
            dense
            hide-details
            clearable
            :type="type === 'number' ? 'number' : 'text'"
          />
        </template>
        <template v-if="(type === 'date')">
          <v-col>
            <v-menu
              ref="start_date_filter_menu"
              offset-y
              min-width="auto"
              :close-on-content-click="false"
              v-model="dateMenu[`start_date_filter_menu`]"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="filterModel[0]"
                  label="Data de start"
                  append-icon="mdi-calendar"
                  v-bind="attrs"
                  v-on="on"
                  outlined
                  dense
                  hide-details
                  clearable
                  readonly
                />
              </template>
              <v-date-picker
                v-model="filterModel[0]"
                no-title
                @input="dateMenu[`start_date_filter_menu`] = false"
              ></v-date-picker>
            </v-menu>
          </v-col>
          <v-col>
            <v-menu
              ref="end_date_filter_menu"
              offset-y
              min-width="auto"
              :close-on-content-click="false"
              v-model="dateMenu[`end_date_filter_menu`]"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="filterModel[1]"
                  label="Data de sfarsit"
                  append-icon="mdi-calendar"
                  v-bind="attrs"
                  v-on="on"
                  outlined
                  dense
                  hide-details
                  clearable
                  readonly
                />
              </template>
              <v-date-picker
                v-model="filterModel[1]"
                no-title
                @input="dateMenu[`end_date_filter_menu`] = false"
              ></v-date-picker>
            </v-menu>
          </v-col>
        </template>
      </v-col>
      <v-col cols="auto">
        <div class="mb-2">
          <v-btn class="ml-4" min-width="100px" color="primary" @click="$emit('changeFilter', filterModel)">Aplica</v-btn>
        </div>
<!--        <div>-->
<!--          <v-btn class="ml-4" min-width="100px" outlined @click="$emit('changeFilter', {})">Sterge</v-btn>-->
<!--        </div>-->

      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: null
    },
    type: {
      type: String,
      default: null
    },
    options: {
      type: Array,
      default: () => ([])
    },
    value: {
      type: [Object, Array, String, Number],
      default: null
    },
    placeHolder:{
      type: [String],
      default: null
    }
  },
  data: () => ({
    filterTypes: ['selectMultiple', 'select', 'string', 'number', 'date'],
    filterModel: {},
    dateMenu:{}
  }),
  computed: {
    getEndDate() {
      return new Date().toISOString().substr(0, 10)
    },
    optionsHasObject() {
      return this.options.length && _.isObject(this.options[0])
    }
  },
  mounted() {
    if (this.type === 'date') {
      this.filterModel = this.value && this.value.length ? [this.value[0] ?? null, this.value[1] ?? null] : [null, null]
    } else {
      this.filterModel = this.value || null
    }
  },
}
</script>

<style scoped>
</style>

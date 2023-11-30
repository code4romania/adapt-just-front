<template>
  <v-list
    class="locations-list pt-0"
    dense
  >
    <v-list-item-group>
      <v-list-item
        v-for="loc in locations"
        :key="`location_${loc.id}`"
        @click="handleChange(loc)"
      >
        <template v-slot:default>
          <v-list-item-action>
            <div class="check" :class="{ 'check--active': loc.id === location?.id }" />
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title>
              <span v-if="!search">{{ loc.name }}</span>
              <span v-else v-html="loc.name.replace(new RegExp(search, 'gi'), '<b>$&</b>')" />
            </v-list-item-title>
          </v-list-item-content>
        </template>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>

<script>

export default {
  props: {
    search: {
      type: String,
      default: '',
    },
    location: {
      type: Object,
      default: null,
    },
    locations: {
      type: Array,
      default: () => [],
    },
    section: {
      type: String,
      default: 'location',
    },
  },
  methods: {
    handleChange(location) {
      let action = 'complaint/setLocation'
      if (this.section === 'locationTo') {
        action = 'complaint/setLocationTo'
      }

      if (location.id === this.location?.id) {
        this.$store.commit(action, null)
        return
      }

      this.$store.commit(action, location)
      if (this.section === 'locationTo') {
        this.$store.commit('complaint/setLocationToType', '')
      }

      this.$emit('change')
    }
  }
}

</script>

<style lang="scss">

.locations-list {
  .v-list-item {
    border-radius: 6px;
    padding-left: 17px;
    padding-right: 17px;
    margin-bottom: 10px;
    background-color: #FFF;
    border: 1px solid $gray200;

    &.v-list-item--active {
      &:before {
        opacity: 0;
      }
    }

    .v-list-item__action {
      margin-right: 12px;
    }

    .v-list-item__content {
      padding: 17px 0;
      
      .v-list-item__title {
        color: $gray900;
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        font-style: normal;
        text-transform: uppercase;
        font-family: 'Encode Sans', sans-serif;
      }
    }

    .check {
      width: 16px;
      height: 16px;
      border-radius: 8px;
      background: #FFF;
      border: 1px solid $gray300;

      &.check--active {
        border: 1px solid $yellow600;
        background-color: $yellow600;

        &:after {
          content: '';
          width: 6px;
          height: 6px;
          display: block;
          margin-top: 50%;
          margin-left: 50%;
          border-radius: 3px;
          background-color: #FFF;
          transform: translate(-50%, -50%);
        }
      }
    }
  }
}

</style>

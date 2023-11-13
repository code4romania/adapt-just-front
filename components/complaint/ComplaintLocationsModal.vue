<template>
  <v-dialog
    width="928"
    scrollable
    persistent
    v-model="dialog"
    content-class="complaint-locations-modal"
    :fullscreen="$vuetify.breakpoint.smAndDown"
  >
    <v-card flat>
      <v-card-title>
        <v-spacer />
        <v-btn icon color="#111827" @click="$emit('close')">
          <v-icon>
            mdi-close
          </v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text height="600px">
        <div>
          <span class="locations-title">
            Scrie în chenar <span class="font-weight-bold">localitatea</span> sau <span class="font-weight-bold">numele spitalului</span> pentru a găsi locația unde te afli:
          </span>
        </div>

        <div class="mt-8">
          <v-text-field
            v-model="search"
            flat
            outlined
            hide-details
            color="#D1D5DB"
            class="search-input"
            background-color="#FFF"
            append-icon="mdi-magnify"
            placeholder="Caută în listă"
            :class="{ 'search-input--active': search }"
          />
        </div>

        <div class="mt-8 mr-6 d-flex justify-end">
          <span class="results-text">
            {{ filterLocations.length }} rezultate
          </span>
        </div>

        <div class="mt-3">
          <complaint-locations-list
            :search="search"
            :location="location"
            :locations="filterLocations"
          />
        </div>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>

import { mapState } from 'vuex'
import ComplaintLocationsList from './ComplaintLocationsList'

export default {
  components: {
    ComplaintLocationsList,
  },
  props: {
    location: {
      type: Object,
      default: null,
    },
    visible: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      search: '',
      dialog: this.visible,
    }
  },
  computed: {
    ...mapState('complaint', ['locations']),
    filterLocations() {
      const search = this.search;
      const location = this.location;
      let locations = [...this.locations];

      if (location?.id) {
        locations = locations.filter(l => l.id !== location.id);
        locations.unshift(location);
      }

      if (!search) {
        return locations;
      }

      const s = search.trim().toLowerCase();

      return locations.filter(
        l => {
          const name = `${l.name} ${l.city_name}`.toLowerCase();
          const label = `${l.label}, ${l.city_label}`.toLowerCase();
          
          return name.includes(s) || label.includes(s);
        }
      );
    }
  },
  watch: {
    visible(val) {
      this.dialog = val;
    }
  },
}

</script>

<style lang="scss">

.complaint-locations-modal {
  .v-card {
    border-radius: 8px !important;
    border: 2px solid $yellow600 !important;
    background: linear-gradient(180deg, #FDFCF8 58.56%, #FFF 100%) !important;

    .v-card__text {
      margin-top: 40px;
      min-height: 600px;
      padding-left: 80px;
      padding-right: 80px;

      .locations-title {
        color: #333;
        font-size: 20px;
        font-weight: 500;
        line-height: 150%;
        font-style: normal;
        text-transform: uppercase;
        font-family: Inter, sans-serif;
      }

      .search-input {
        width: 50%;

        input {
          text-transform: uppercase;
        }
      }

      .results-text {
        color: $gray600;
        font-size: 16px;
        font-weight: 500;
        line-height: 150%;
        font-style: normal;
        text-transform: uppercase;
      }
    }
  }
}

</style>

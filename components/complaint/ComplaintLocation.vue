<template>
  <div>
    <form-stepper
      :step="3"
      :steps="steps"
    />

    <div class="title-container form-title">
      <page-title>
        {{ title }}
      </page-title>

      <span class="subtitle">
        Alege numele localității și al spitalului sau al centrului:
      </span>
    </div>

    <div class="form-container">
      <div class="d-flex align-center">
        <complaint-location-button
          :location="location"
          @click="showLocations = true"
        />
        <record-button />
      </div>
      <record-text />
    </div>

    <form-actions
      :next-enabled="nextEnabled"
      @next="$emit('next')"
      @back="$emit('back')"
    />

    <complaint-locations-modal
      :location="location"
      :visible="showLocations"
      @close="showLocations = false"
    />
  </div>
</template>

<script>

import { mapState } from 'vuex'
import { getDistance } from '~/util/geolocation'
import ComplaintLocationsModal from './ComplaintLocationsModal'
import ComplaintLocationButton from './ComplaintLocationButton'

export default {
  components: {
    ComplaintLocationsModal,
    ComplaintLocationButton,
  },
  props: {
    location: {
      type: Object,
      default: null,
    },
    steps: {
      type: Number,
      default: 0,
    },
    victim: {
      type: String,
      default: '',
    },
    lat: {
      type: Number,
      default: null,
      required: false,
    },
    lng: {
      type: Number,
      default: null,
      required: false,
    },
  },
  data() {
    return {
      showLocations: false,
    }
  },
  computed: {
    ...mapState('complaint', ['locations']),
    nextEnabled() {
      return !!this.location
    },
    title() {
      if (this.victim === 'other') {
        return 'Unde s-a petrecut incidentul?'
      }

      return 'Unde te afli acum?'
    }
  },
  mounted() {
    if (this.lat && this.lng && !this.location) {
      this.checkLocation()
    }
  },
  methods: {
    checkLocation() {
      let min = 100000
      let location = null

      this.locations.forEach((item) => {
        const { lat, lng } = item

        if (!lat || !lng) {
          return
        }

        const distance = getDistance(
          this.lat,
          this.lng,
          lat,
          lng,
        )

        if (distance < min && distance < 3) {
          min = distance
          location = item
        }
      })

      if (location) {
        this.$store.commit('complaint/setLocation', location)
      }
    }
  }
}

</script>

<template>
  <div>
    <form-stepper
      :step="2"
      :steps="steps"
    />

    <div class="title-container form-title">
      <page-title>
        Unde te afli acum?
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
  },
  data() {
    return {
      showLocations: false,
    }
  },
  computed: {
    nextEnabled() {
      return !!this.location
    }
  },
}

</script>

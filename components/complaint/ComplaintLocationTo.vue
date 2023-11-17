<template>
  <div class="complaint-location-to">
    <form-stepper
      :step="4"
      :steps="steps"
    />

    <div class="title-container form-title">
      <page-title>
        Unde vrei să te muți?
      </page-title>

      <span class="subtitle">
        Alege numele localității și al spitalului sau al centrului în care vrei să te muți
      </span>
    </div>

    <div class="form-container">
      <complaint-location-button
        :location="locationTo"
        @click="showLocations = true"
      />

      <div class="mt-6">
        <form-radio-button
          title="Nu știu"
          :active="locationToType === 'none'"
          @click="handleChange('none')"
        />
      </div>

      <div class="record-container">
        <record-text />
        <div class="mt-6">
          <record-button />
        </div>
      </div>
    </div>

    <form-actions
      @next="$emit('next')"
      @back="$emit('back')"
    />

    <complaint-locations-modal
      section="locationTo"
      :location="locationTo"
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
    steps: {
      type: Number,
      default: 0,
    },
    locationTo: {
      type: Object,
      default: null,
    },
    locationToType: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      showLocations: false,
    }
  },
  methods: {
    handleChange(locationToType) {
      this.$store.commit('complaint/setLocationToType', locationToType)
      if (this.locationTo) {
        this.$store.commit('complaint/setLocationTo', null)
      }
    }
  }
}

</script>

<style lang="scss">

.complaint-location-to {
  .complaint-location-button {
    width: 100% !important;
    height: 98px !important;
  }

  .record-container {
    display: flex;
    margin-top: 80px;
    align-items: center;
    flex-direction: column;

    .record-button {
      margin-left: 0 !important;
    }
  }
}

</style>

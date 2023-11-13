<template>
  <div class="complaint-location">
    <form-stepper
      :step="2"
      :steps="6"
    />

    <div class="title-container">
      <page-title>
        Unde te afli acum?
      </page-title>

      <span class="subtitle">
        Alege numele localității și al spitalului sau al centrului:
      </span>
    </div>

    <div class="form-content">
      <div class="d-flex align-center">
        <complaint-location-button
          :location="location"
          @click="showLocations = true"
        />
        <record-button />
      </div>
      <record-text />
    </div>

    <div class="actions-container">
      <back-button @click="handleBack" />
      <next-button
        :disabled="!nextEnabled"
        @click="$emit('next')"
      />
    </div>

    <complaint-locations-modal
      :location="location"
      :visible="showLocations"
      @close="showLocations = false"
    />
  </div>
</template>

<script>

import PageTitle from '/components/shared/text/PageTitle'
import RecordText from '/components/shared/text/RecordText'
import FormStepper from '/components/shared/form/FormStepper'
import BackButton from '/components/shared/buttons/BackButton'
import NextButton from '/components/shared/buttons/NextButton'
import RecordButton from '/components/shared/buttons/RecordButton'

import ComplaintLocationsModal from './ComplaintLocationsModal'
import ComplaintLocationButton from './ComplaintLocationButton'

export default {
  components: {
    PageTitle,
    RecordText,
    NextButton,
    BackButton,
    FormStepper,
    RecordButton,
    ComplaintLocationsModal,
    ComplaintLocationButton,
  },
  props: {
    location: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      showLocations: false,
    }
  },
  computed: {
    nextEnabled() {
      return !!this.location;
    }
  },
  methods: {
    handleBack() {
      this.$store.commit('complaint/setLocation', null);
      this.$emit('back');
    }
  },
}

</script>

<style lang="scss">

.complaint-location {
  .title-container {
    margin-top: 72px !important;

    .subtitle {
      color: $gray700;
      font-size: 24px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      text-transform: uppercase;
      font-variant: all-small-caps;
      font-family: Inter, sans-serif;
    }
  }

  .form-content {
    margin-top: 48px;
  }
}

</style>

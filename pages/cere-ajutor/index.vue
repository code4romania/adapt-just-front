<template>
  <div class="complaint-page">
    <div class="complaint-content">
      <home-button v-if="showHomeButton" />

      <complaint-victim
        v-show="section === 'victim'"
        :victim="victim"
        @next="handleVictimNext"
      />

      <complaint-type
        v-show="section === 'type'"
        :type="type"
        :victim="victim"
        @back="section = 'victim'"
        @next="section = 'disclaimer'"
      />

      <complaint-disclaimer
        v-show="section === 'disclaimer'"
        @next="section = 'data'"
        @back="handleDisclaimerBack"
      />

      <complaint-data
        v-show="section === 'data'"
        @back="section = 'disclaimer'"
        @next="section = 'name'"
      />

      <complaint-name
        v-show="section === 'name'"
        :name="name"
        :steps="steps"
        @next="section = 'cnp'"
        @back="section = 'data'"
      />

      <complaint-cnp
        v-show="section === 'cnp'"
        :cnp="cnp"
        :steps="steps"
        :id-card-upload="idCardUpload"
        @back="section = 'name'"
        @next="section = 'location'"
      />

      <complaint-location
        v-show="section === 'location'"
        :lat="lat"
        :lng="lng"
        :steps="steps"
        :victim="victim"
        :location="location"
        @back="section = 'cnp'"
        @next="handleLocationNext"
      />

      <complaint-details
        v-show="section === 'details'"
        :steps="steps"
        :reason="reason"
        :details="details"
        @back="section = 'location'"
        @next="section = 'proof'"
      />

      <complaint-proof
        v-show="section === 'proof'"
        :steps="steps"
        :proof-type="proofType"
        @next="handleProofNext"
        @back="handleProofBack"
      />

      <complaint-uploads
        v-show="section === 'uploads'"
        :steps="steps"
        :uploads="uploads"
        @back="section = 'proof'"
        @next="section = 'preview'"
      />

      <complaint-location-to
        v-show="section === 'locationTo'"
        :steps="steps"
        :locationTo="locationTo"
        :locationToType="locationToType"
        @back="section = 'location'"
        @next="section = 'movingReason'"
      />

      <complaint-moving-reason
        v-show="section === 'movingReason'"
        :steps="steps"
        :reason="reason"
        @next="section = 'preview'"
        @back="section = 'locationTo'"
      />

      <complaint-other-reason
        v-show="section === 'otherReason'"
        :steps="steps"
        :reason="reason"
        @next="section = 'proof'"
        @back="section = 'location'"
      />

      <complaint-preview
        v-show="section === 'preview'"
        :steps="steps"
        @back="handlePreviewBack"
        @next="section = 'signature'"
      />

      <complaint-signature
        v-show="section === 'signature'"
        :steps="steps"
        :signature="signature"
        @back="section = 'preview'"
        @next="section = 'success'"
      />

      <complaint-success
        v-show="section === 'success'"
        :steps="steps"
      />
    </div>
  </div>
</template>

<script>

import { mapState, mapGetters } from 'vuex'

import ComplaintCnp from '/components/complaint/ComplaintCnp'
import ComplaintType from '/components/complaint/ComplaintType'
import ComplaintData from '/components/complaint/ComplaintData'
import ComplaintName from '/components/complaint/ComplaintName'
import ComplaintProof from '/components/complaint/ComplaintProof'
import ComplaintVictim from '/components/complaint/ComplaintVictim'
import ComplaintDetails from '/components/complaint/ComplaintDetails'
import ComplaintUploads from '/components/complaint/ComplaintUploads'
import ComplaintPreview from '/components/complaint/ComplaintPreview'
import ComplaintSuccess from '/components/complaint/ComplaintSuccess'
import ComplaintLocation from '/components/complaint/ComplaintLocation'
import ComplaintSignature from '/components/complaint/ComplaintSignature'
import ComplaintLocationTo from '/components/complaint/ComplaintLocationTo'
import ComplaintDisclaimer from '/components/complaint/ComplaintDisclaimer'
import ComplaintOtherReason from '/components/complaint/ComplaintOtherReason'
import ComplaintMovingReason from '/components/complaint/ComplaintMovingReason'

export default {
  auth: false,
  head: {
    title: 'Cere ajutor'
  },
  components: {
    ComplaintCnp,
    ComplaintType,
    ComplaintData,
    ComplaintName,
    ComplaintProof,
    ComplaintVictim,
    ComplaintDetails,
    ComplaintUploads,
    ComplaintPreview,
    ComplaintSuccess,
    ComplaintLocation,
    ComplaintSignature,
    ComplaintLocationTo,
    ComplaintDisclaimer,
    ComplaintOtherReason,
    ComplaintMovingReason,
  },
  data() {
    return {
      section: 'victim',
    }
  },
  computed: {
    ...mapState('complaint', [
      'victim',
      'type',
      'name',
      'cnp',
      'idCardUpload',
      'lat',
      'lng',
      'location',
      'locationTo',
      'locationToType',
      'details',
      'reason',
      'proofType',
      'uploads',
      'signature'
    ]),
    ...mapGetters('complaint', ['getSteps']),
    steps() {
      return this.getSteps()
    },
    showHomeButton() {
      const sections = ['victim', 'type', 'disclaimer', 'data']
      return sections.includes(this.section)
    }
  },
  async mounted() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const lat = position.coords.latitude
          const lng = position.coords.longitude

          this.$store.commit('complaint/setCoords', { lat, lng })
          await this.$store.dispatch('complaint/getLocations')
        },
        async (error) => {
          await this.$store.dispatch('complaint/getLocations')
        }
      )
    }
  },
  methods: {
    handleVictimNext() {
      if (this.victim === 'other') {
        this.section = 'disclaimer'
      } else {
        this.section = 'type'
      }
    },
    handleDisclaimerBack() {
      if (this.victim === 'other') {
        this.section = 'victim'
      } else {
        this.section = 'type'
      }
    },
    handleLocationNext() {
      const type = this.type
      let section = 'otherReason'

      if (type === 'hurt') {
        section = 'details'
      } else if (type === 'move') {
        section = 'locationTo'
      } else if (type === 'evaluation') {
        section = 'preview'
      }

      this.section = section
    },
    handleProofBack() {
      if (!this.type) {
        this.section = 'otherReason'
      } else {
        this.section = 'details'
      }
    },
    handleProofNext() {
      if (this.proofType === 'yes') {
        this.section = 'uploads'
      } else {
        this.section = 'preview'
      }
    },
    handlePreviewBack() {
      const type = this.type

      if (type === 'move') {
        this.section = 'movingReason'
      } else if (type === 'evaluation') {
        this.section = 'location'
      } else if (this.proofType === 'yes') {
        this.section = 'uploads'
      } else {
        this.section = 'proof'
      }
    }
  },
}

</script>

<style lang="scss">

.complaint-page {
  padding-top: 135px;

  .complaint-content {
    margin: 0 auto;
    max-width: 880px;
    padding-bottom: 80px;

    .title-container {
      margin-top: 40px;

      &.form-title {
        margin-top: 72px !important;
      }

      .subtitle {
        color: $gray700;
        font-size: 24px;
        font-weight: 500;
        font-style: normal;
        line-height: normal;
        text-transform: uppercase;
        font-variant: all-small-caps;
        font-family: Inter, sans-serif;
      }
    }

    .form-container {
      margin-top: 48px;

      .button-container {
        margin-bottom: 24px;

        &:last-child {
          margin-bottom: 0;
        }
      }
    }

    .form-actions {
      display: flex;
      margin-top: 80px;
      align-items: center;
      justify-content: space-between;
    }
  }
}

@media #{map-get($display-breakpoints, 'sm-and-down')} {
  .complaint-page {
    padding-top: 180px !important;

    .complaint-content {
      margin-left: 40px !important;
      margin-right: 40px !important;
    }
  }
}

@media #{map-get($display-breakpoints, 'xs-only')} {
  .complaint-page {
    padding-top: 60px !important;

    .complaint-content {
      margin-left: 20px !important;
      margin-right: 20px !important;
    }

    .form-actions {
      flex-direction: column-reverse;
    }
  }
}

</style>

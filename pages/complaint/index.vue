<template>
  <div class="complaint-page">
    <div class="complaint-content">
      <home-button v-if="showHomeButton" />

      <complaint-victim
        v-if="section === 'victim'"
        :victim="victim"
        @next="section = 'type'"
      />

      <complaint-type
        v-if="section === 'type'"
        :type="type"
        :victim="victim"
        @back="section = 'victim'"
        @next="section = 'disclaimer'"
      />

      <complaint-disclaimer
        v-if="section === 'disclaimer'"
        @back="section = 'type'"
        @next="section = 'data'"
      />

      <complaint-data
        v-if="section === 'data'"
        @back="section = 'disclaimer'"
        @next="section = 'name'"
      />

      <complaint-name
        v-if="section === 'name'"
        :name="name"
        :steps="steps"
        @next="section = 'cnp'"
        @back="section = 'data'"
      />

      <complaint-cnp
        v-if="section === 'cnp'"
        :cnp="cnp"
        :steps="steps"
        :id-card-upload="idCardUpload"
        @back="section = 'name'"
        @next="section = 'location'"
      />

      <complaint-location
        v-if="section === 'location'"
        :steps="steps"
        :location="location"
        @back="section = 'cnp'"
        @next="section = 'details'"
      />

      <complaint-details
        v-if="section === 'details'"
        :steps="steps"
        :reason="reason"
        :details="details"
        @back="section = 'location'"
        @next="section = 'proof'"
      />

      <complaint-proof
        v-if="section === 'proof'"
        :steps="steps"
        :proof-type="proofType"
        @next="handleProofNext"
        @back="section = 'details'"
      />

      <complaint-uploads
        v-if="section === 'uploads'"
        :steps="steps"
        :uploads="uploads"
        @back="section = 'proof'"
        @next="section = 'preview'"
      />

      <complaint-preview
        v-if="section === 'preview'"
        :steps="steps"
        @back="handlePreviewBack"
      />
    </div>
  </div>
</template>

<script>

import { mapState, mapGetters } from 'vuex'
import HomeButton from '/components/shared/buttons/HomeButton'

import ComplaintCnp from '/components/complaint/ComplaintCnp'
import ComplaintType from '/components/complaint/ComplaintType'
import ComplaintData from '/components/complaint/ComplaintData'
import ComplaintName from '/components/complaint/ComplaintName'
import ComplaintProof from '/components/complaint/ComplaintProof'
import ComplaintVictim from '/components/complaint/ComplaintVictim'
import ComplaintDetails from '/components/complaint/ComplaintDetails'
import ComplaintUploads from '/components/complaint/ComplaintUploads'
import ComplaintPreview from '/components/complaint/ComplaintPreview'
import ComplaintLocation from '/components/complaint/ComplaintLocation'
import ComplaintDisclaimer from '/components/complaint/ComplaintDisclaimer'

export default {
  auth: false,
  head: {
    title: 'Cere ajutor'
  },
  components: {
    HomeButton,
    ComplaintCnp,
    ComplaintType,
    ComplaintData,
    ComplaintName,
    ComplaintProof,
    ComplaintVictim,
    ComplaintDetails,
    ComplaintUploads,
    ComplaintPreview,
    ComplaintLocation,
    ComplaintDisclaimer,
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
      'location',
      'details',
      'reason',
      'proofType',
      'uploads',
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
    await this.$store.dispatch('complaint/getLocations')
  },
  methods: {
    handleProofNext() {
      if (this.proofType === 'yes') {
        this.section = 'uploads'
      } else {
        this.section = 'preview'
      }
    },
    handlePreviewBack() {
      if (this.proofType === 'yes') {
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

</style>

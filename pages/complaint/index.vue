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
        @back="section = 'data'"
        @next="section = 'location'"
      />

      <complaint-location
        v-if="section === 'location'"
        :location="location"
        @back="section = 'name'"
        @next="section = 'details'"
      />

      <complaint-details
        v-if="section === 'details'"
        :details="details"
        @back="section = 'location'"
        @next="section = 'proof'"
      />

      <complaint-proof
        v-if="section === 'proof'"
        @back="section = 'details'"
      />
    </div>
  </div>
</template>

<script>

import { mapState } from 'vuex'
import HomeButton from '/components/shared/buttons/HomeButton'
import ComplaintType from '/components/complaint/ComplaintType'
import ComplaintData from '/components/complaint/ComplaintData'
import ComplaintName from '/components/complaint/ComplaintName'
import ComplaintProof from '/components/complaint/ComplaintProof'
import ComplaintVictim from '/components/complaint/ComplaintVictim'
import ComplaintDetails from '/components/complaint/ComplaintDetails'
import ComplaintLocation from '/components/complaint/ComplaintLocation'
import ComplaintDisclaimer from '/components/complaint/ComplaintDisclaimer'

export default {
  auth: false,
  head: {
    title: 'Cere ajutor'
  },
  components: {
    HomeButton,
    ComplaintType,
    ComplaintData,
    ComplaintName,
    ComplaintProof,
    ComplaintVictim,
    ComplaintDetails,
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
      'location',
      'details',
    ]),
    showHomeButton() {
      const sections = ['victim', 'type', 'disclaimer', 'data'];
      return sections.includes(this.section);
    }
  },
  async mounted() {
    await this.$store.dispatch('complaint/getLocations');
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

    .actions-container {
      display: flex;
      margin-top: 80px;
      align-items: center;
      justify-content: space-between;
    }
  }
}

</style>

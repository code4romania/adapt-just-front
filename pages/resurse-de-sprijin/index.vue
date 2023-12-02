<template>
  <div class="resources-page">
    <div class="resources-content">
      <div class="title-container">
        <page-title>
          Resurse de sprijin
        </page-title>
      </div>

      <div>
        <resource-card
          title="Numere de telefon"
          to="/resurse-de-sprijin/numere-de-telefon"
          icon="/images/website/icons/phone-numbers-icon.svg"
        />

        <resource-card
          title="Organizații"
          to="/resurse-de-sprijin/organizatii"
          icon="/images/website/icons/organisations-icon.svg"
        />

        <resource-card
          title="Sfaturi avocat"
          to="/resurse-de-sprijin/sfaturi-avocat"
          icon="/images/website/icons/lawyer-icon.svg"
        />
      </div>
    </div>
  </div>
</template>

<script>

import ResourceCard from '~/components/resources/ResourceCard'

export default {
  auth: false,
  head: {
    title: 'Resurse de sprijin'
  },
  components: {
    ResourceCard,
  },
}

</script>

<style lang="scss">

.resources-page {
  .resources-content {
    margin: 0 auto;
    max-width: 740px;

    .title-container {
      margin-top: 40px;
      margin-bottom: 80px;
    }
  }
}

@media #{map-get($display-breakpoints, 'md-and-down')} {
  .resources-page {
    .resources-content {
      width: auto !important;
      margin-left: 40px !important;
      margin-right: 40px !important;

      .title-container {
        margin-top: 160px !important;
      }
    }
  }
}

@media #{map-get($display-breakpoints, 'xs-only')} {
  .resources-page {
    .resources-content {
      margin-left: 20px !important;
      margin-right: 20px !important;

      .title-container {
        margin-top: 40px !important;
      }
    }
  }
}

</style>

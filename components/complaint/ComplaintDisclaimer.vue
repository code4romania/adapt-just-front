<template>
  <div class="complaint-disclaimer">
    <div class="title-container">
      <div class="d-flex align-center">
        <v-img
          src="/images/website/icons/alert-icon.png"
          width="40px"
          height="36px"
          max-width="40px"
        />

        <span class="title-text" data-listen-text>
          Atenție!
        </span>
      </div>
    </div>

    <div class="form-container">
      <p class="disclaimer-text" data-listen-text>
        Înainte de a completa reclamația, este important să știi că informațiile pe care le vei furniza vor fi transmise către URMĂTOARELE entități: <span class="font-weight-bold">{{ institutions }}</span>
      </p>
      <p class="disclaimer-text" data-listen-text>
        Dacă ai întrebări sau îngrijorări în legătură cu acest proces, te rugăm să ceri ajutorul unei persoane în care ai încredere. Este important să înțelegi că informațiile pe care le furnizezi vor fi tratate cu confidențialitate și respect față de drepturile tale.
      </p>
    </div>

    <form-actions
      @next="$emit('next')"
      @back="$emit('back')"
    />
  </div>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('complaint', ['getInstitutions']),
    institutions() {
      return this.getInstitutions()
    },
  }
}

</script>

<style lang="scss">

.complaint-disclaimer {
  .title-text {
    color: $gray900;
    font-size: 48px;
    font-weight: 800;
    line-height: 60px;
    margin-left: 20px;
    font-style: normal;
    letter-spacing: -0.24px;
    text-transform: uppercase;
    font-family: Inter, sans-serif;
  }

  .disclaimer-text {
    color: $gray900;
    font-size: 24px;
    font-weight: 500;
    line-height: 43px;
    font-style: normal;
    margin-bottom: 40px;
    letter-spacing: -0.12px;
    text-transform: uppercase;
    font-family: Inter, sans-serif;
  }
}

@media #{map-get($display-breakpoints, 'sm-and-down')} {

  .complaint-disclaimer {
    .disclaimer-text {
      font-size: 20px !important;
      line-height: 30px !important;
    }
  }
}

</style>

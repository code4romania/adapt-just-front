<template>
  <div class="complaint-preview">
    <form-stepper
      :step="step"
      :steps="steps"
    />

    <div class="title-container form-title">
      <page-title>
        Plângerea ta
      </page-title>

      <span class="subtitle" data-listen-text>
        Verifică conținutul plângerii și când ești sigur/ă că vrei să o trimiți, apasă <span class="font-weight-bold">Trimite.</span><br />
        Odată trimisă, ea va ajunge direct la <span class="font-weight-bold">{{ institutions }}</span>
      </span>
    </div>

    <div class="form-container">
      <div class="preview-container">
        <div class="preview-text">
          <span data-listen-text>Mă numesc <span class="highlight-text">{{ name }}</span></span>
          <span v-if="cnp" data-listen-text>, CNP <span class="highlight-text">{{ cnp }}</span></span>
          <span v-if="victim === 'other'" data-listen-text>&nbsp;și declar că în <span class="font-weight-bold">{{ location.name }}</span>&nbsp;s-au întâmplat următoarele</span>
          <span v-else data-listen-text>
            , mă aflu
            <span v-if="location?.city_label">&nbsp;în <span class="font-weight-bold">{{ location.city_label }}</span>&nbsp; în <span class="font-weight-bold">{{ location.name }}</span>&nbsp;și declar că:</span>
          </span>
        </div>

        <div class="preview-text mt-4">
          <div v-for="(detail, i) in details" :key="`detail_${i}`" class="preview-detail">
            <div class="detail-bullet" />
            <span class="highlight-text" data-listen-text>{{ detailsText(detail) }}</span>
            <span v-if="i !== details.length - 1">;</span>
          </div>

          <div v-if="victim === 'other'" class="preview-detail">
            <div class="detail-bullet" />
            <span class="font-weight-bold" data-listen-text>{{ reason }}</span>
          </div>
        </div>

        <div v-if="type === 'move' && reason" class="mb-5 preview-text">
          <span data-listen-text>Motivul pentru care vreau să mă mut este <span class="font-weight-bold">{{ reason }}</span></span>
        </div>

        <div class="preview-text mt-4">
          <span data-listen-text>Solicit ca datele mele personale să nu devină publice ca urmare a acestei plângeri, a cărei soluționare o cer.</span>
        </div>

        <div v-if="uploads.length > 0" class="preview-text mt-5">
          <span>Am atașat plângerii următoarele dovezi:</span>
          <span data-listen-text style="display: none">
            Am atașat plângerii {{ uploads.length }} {{ uploads.length === 1 ? 'fișier' : 'fișiere' }} cu dovezi
          </span>
          <div class="mt-4">
            <div v-for="(upload, i) in uploads" :key="`upload_${i}`" class="preview-detail">
              <div class="detail-bullet" />
              <span class="highlight-text">{{ upload.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <form-actions
      @back="$emit('back')"
      @next="$emit('next')"
    />
  </div>
</template>

<script>

import { mapState, mapGetters } from 'vuex'

const options = {
  beaten: 'Am fost bătut/ă',
  abused: 'Am fost violat/ă',
  sedated: 'Am fost sedat/ă',
  punished: 'Am fost legat/ă',

  move: 'Vreau să fiu mutat/ă la',
  evaluation: 'Vreau să fiu evaluat/ă din nou',
}

export default {
  props: {
    steps: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    ...mapState('complaint', [
      'cnp',
      'type',
      'name',
      'reason',
      'victim',
      'details',
      'uploads',
      'location',
      'locationTo',
    ]),
    ...mapGetters('complaint', ['getInstitutions']),
    step() {
      return this.steps - 2
    },
    institutions() {
      return this.getInstitutions()
    },
  },
  methods: {
    detailsText(detail) {
      if (detail === 'other') {
        return this.reason
      }

      let text = options?.[detail] || ''
      if (text && this.type === 'move') {
        if (this.location) {
          text = `${text} ${this.location.name}`
        } else {
          text = `${text} alt centru`
        }
      }

      return text
    }
  }
}

</script>

<style lang="scss">

.complaint-preview {
  .preview-container {
    height: 510px;
    overflow-y: auto;
    padding: 40px 20px;
    border-radius: 4px;
    background: #FFF;
    border: 1px solid $yellow500;
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.06), 0px 1px 3px 0px rgba(0, 0, 0, 0.10);

    .preview-text {
      color: $gray900;
      font-size: 20px;
      font-weight: 500;
      font-style: normal;
      line-height: normal;
      letter-spacing: 0.3px;
      text-transform: uppercase;
      font-family: "Encode Sans", sans-serif;

      .highlight-text {
        font-weight: 700;
        color: $yellow600;
      }
    }

    .preview-detail {
      display: flex;
      align-items: center;
      margin-bottom: 10px;

      .detail-bullet {
        width: 8px;
        height: 8px;
        margin: 0 15px 0 10px;
        border-radius: 50%;
        background-color: $gray900;
      }
    }
  }
}

</style>

<template>
  <div class="hero-section">
    <div class="shape1" />
    <div class="shape2" />
    <div class="shape3" />
    <div class="shape4" />
    <div class="shape5" />

    <v-row no-gutters style="height: 100%; z-index: 1;">
      <v-col
        cols="7"
        class="d-flex align-center justify-end"
      >
        <div class="mr-12">
          <PageTitle>
            Cum te putem ajuta?
          </PageTitle>

          <p class="help-text">
            Dacă ție sau cuiva din jurul tău <br />i s-a întâmplat ceva rău, <br />poți cere <span class="font-weight-bold">ajutor acum</span>.
          </p>

          <next-button
            text="Cere ajutor"
            @click.native="$router.push('/complaint')"
          />
        </div>
      </v-col>

      <v-col
        cols="5"
        class="d-flex align-center"
      >
        <div>
          <v-img
            src="/images/website/hero.svg"
            alt="Hero"
            width="334px"
            height="404px"
          />
        </div>
      </v-col>
    </v-row>

    <v-row no-gutters>
      <v-col class="text-center">
        <v-btn text class="show-more" @click.native="$emit('more')">
          Află mai multe

          <v-img
            src="/images/website/icons/arrow-down.svg"
            alt="Arrow down"
            width="24px"
            height="24px"
            class="ml-1"
          />
        </v-btn>
      </v-col>
    </v-row>

    <div class="separator" />
  </div>
</template>

<script>

import PageTitle from '/components/shared/text/PageTitle'
import NextButton from '/components/shared/buttons/NextButton'

export default {
  components: {
    PageTitle,
    NextButton,
  },
}

</script>

<style lang="scss">

.hero-section {
  display: flex;
  position: relative;
  flex-direction: column;
  height: calc(100vh - 111px);
  background: linear-gradient(180deg, #FDFCF8 58.56%, #FFF 100%);

  .shape1 {
    left: 0;
    top: 0;
    position: absolute;
    width: 171.906px;
    height: 228.62px;
    transform: rotate(123.699deg);
    flex-shrink: 0;
    fill: rgba(252, 211, 77, 0.30);
    filter: blur(75px);
  }

  .shape2 {
    position: absolute;
    left: -20px;
    bottom: 69px;
    width: 402px;
    height: 398px;
    flex-shrink: 0;
    filter: blur(75px);
    border-radius: 402px;
    background: rgba(254, 243, 199, 0.50);
  }

  .shape3 {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 156px;
    height: 467px;
    flex-shrink: 0;
    transform: translate(-50%, -50%);

    border-radius: 467px;
    background: #FFFBEB;
    filter: blur(75px);
  }

  .shape4 {
    width: 332.424px;
    height: 299.351px;
    transform: rotate(40.1deg);
    flex-shrink: 0;
    fill: rgba(245, 158, 11, 0.10);
    filter: blur(75px);
    position: absolute;
    top: 0;
    right: 0;
  }

  .shape5 {
    width: 173.748px;
    height: 165.453px;
    transform: rotate(40.1deg);
    flex-shrink: 0;
    fill: rgba(245, 158, 11, 0.10);
    filter: blur(75px);
    position: absolute;
    bottom: 0;
    right: 0;
  }

  .help-text {
    color: $gray700;
    font-size: 20px;
    font-weight: 400;
    line-height: 28px;
    font-style: normal;
    margin-top: 1.25rem;
    margin-bottom: 2rem;
    text-transform: uppercase;
    font-family: Inter, sans-serif;
  }

  .show-more {
    padding: 0.5rem 1rem !important;

    .v-btn__content {
      font-weight: 600;
      line-height: 28px;
      color: $yellow600;
      font-size: 1.25rem;
      font-style: normal;
      font-family: Inter, sans-serif;
      text-decoration-line: underline;
    }
  }

  .separator {
    height: 1px;
    width: 100%;
    max-width: 1060px;
    margin: 30px auto;
    background-color: #DBDBDB;
  }
}

</style>

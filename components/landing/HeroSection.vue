<template>
  <div class="hero-section">
<!--    <div class="shape1" />-->
<!--    <div class="shape2" />-->
<!--    <div class="shape3" />-->
<!--    <div v-if="$vuetify.breakpoint.mdAndUp" class="shape4" />-->
<!--    <div v-if="$vuetify.breakpoint.mdAndUp" class="shape5" />-->

    <v-row no-gutters style="height: 100%; z-index: 1;">
      <v-col
        cols="12"
        sm="7"
        class="d-flex align-center justify-end"
        :class="{
          'justify-center': $vuetify.breakpoint.xsOnly,
        }"
      >
        <div
          :class="{
            'mx-12': $vuetify.breakpoint.mdAndUp,
            'mx-6': $vuetify.breakpoint.smAndDown,
          }"
        >
          <PageTitle>
            Cum te putem ajuta?
          </PageTitle>

          <p class="help-text" data-listen-text>
            Dacă ție sau cuiva din jurul tău <br />i s-a întâmplat ceva rău, <br />poți cere <span class="font-weight-bold">ajutor acum</span>.
          </p>

          <next-button
            text="Cere ajutor"
            @click.native="$router.push('/cere-ajutor')"
          />
        </div>
      </v-col>

      <v-col
        cols="12"
        sm="5"
        class="d-flex align-center"
        :class="{
          'justify-center': $vuetify.breakpoint.xsOnly,
        }"
      >
        <div>
          <v-img
            src="/images/website/hero.svg"
            alt="Hero"
            width="334px"
            height="404px"
            class="hero-image"
          />
        </div>
      </v-col>
    </v-row>

    <v-row no-gutters>
      <v-col class="text-center">
        <v-btn text class="show-more" data-listen-text @click.native="$emit('more')">
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

export default {}

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
    flex-shrink: 0;
    width: 171.906px;
    height: 228.62px;
    position: absolute;
    filter: blur(75px);
    //transform: rotate(123.699deg);
    fill: rgba(252, 211, 77, 0.30);
  }

  .shape2 {
    position: absolute;
    left: 0px;
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
    top: 0;
    right: 0;
    flex-shrink: 0;
    width: 332.424px;
    height: 299.351px;
    filter: blur(75px);
    position: absolute;
    //transform: rotate(40.1deg);
    fill: rgba(245, 158, 11, 0.10);
  }

  .shape5 {
    right: 0;
    bottom: 0;
    flex-shrink: 0;
    width: 173.748px;
    height: 165.453px;
    filter: blur(75px);
    position: absolute;
    //transform: rotate(40.1deg);
    fill: rgba(245, 158, 11, 0.10);
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

  .hero-image {
    width: 334px;
    height: 404px;
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
}

@media #{map-get($display-breakpoints, 'xs-only')} {
  .hero-section {
    .hero-image {
      width: 207px !important;
      height: 250px !important;
    }
  }
}

</style>

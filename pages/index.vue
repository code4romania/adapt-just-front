<template>
  <div class="landing-page">
    <hero-section @more="scrollNext" />

    <div id="next-section" style="height: 100vh; background-color: #FFF;" />
  </div>
</template>

<script>

import HeroSection from '/components/landing/HeroSection'

export default {
  auth: false,
  layout: 'default',
  head: {
    titleTemplate: null
  },
  components: {
    HeroSection,
  },
  methods: {
    scrollNext() {
      const nextSection = document.getElementById('next-section');

      nextSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }
}

</script>

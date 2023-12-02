<template>
  <h1 class="page-title" data-listen-text>
    <slot></slot>
  </h1>
</template>

<script>

export default {
  name: 'PageTitle',
}

</script>

<style lang="scss" scoped>

.page-title {
  color: $gray900;
  font-size: 3rem;
  font-weight: 800;
  line-height: 60px;
  font-style: normal;
  letter-spacing: -0.24px;
  text-transform: uppercase;
  font-family: Inter, sans-serif;
}

@media #{map-get($display-breakpoints, 'sm-and-down')} {
  .page-title {
    font-size: 2.5rem;
    line-height: 48px;
  }
}

@media #{map-get($display-breakpoints, 'sm-and-down')} {
  .page-title {
    font-size: 36px !important;
  }
}

</style>

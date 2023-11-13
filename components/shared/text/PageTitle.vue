<template>
  <h1 class="page-title">
    <slot></slot>
  </h1>
</template>

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

</style>

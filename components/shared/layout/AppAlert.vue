<template>
  <div class="app-alert">
    <span class="alert-message">
      Dacă ești într-o situație de urgență și viața cuiva este în pericol, <span class="font-weight-bold" @click="callEmergency">sună la 112</span>
    </span>
  </div>
</template>

<script>

export default {
  name: 'AppAlert',
  methods: {
    callEmergency() {
      window.open('tel:112', '_blank')
    }
  }
}

</script>

<style lang="scss" scoped>

.app-alert {
  top: 0;
  width: 100%;
  z-index: 100;
  display: flex;
  position: fixed;
  padding: 0 20px;
  align-items: center;
  height: $alert-height;
  justify-content: center;
  background-color: $yellow400;

  .alert-message {
    color: $gray900;
    font-size: 1.25rem;
    text-transform: uppercase;
    font-family: Inter, sans-serif;

    span {
      text-decoration-line: underline;

      &:hover {
        cursor: pointer;
      }
    }
  }
}

@media #{map-get($display-breakpoints, 'sm-and-down')} {
  .app-alert {
    height: $alert-height-sm;

    .alert-message {
      font-size: 1rem;
      text-align: center;
    }
  }
}

@media #{map-get($display-breakpoints, 'xs-only')} {
  .app-alert {
    .alert-message {
      font-size: 0.9rem;
    }
  }
}

</style>

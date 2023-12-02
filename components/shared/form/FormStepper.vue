<template>
  <div class="form-stepper">
    <span class="stepper-text" data-listen-text>
      Pasul {{ step }} din {{ steps }}
    </span>

    <div class="stepper-steps">
      <div
        v-for="i in steps"
        :key="i"
        class="stepper-step"
        :class="{
          'current': i === step,
          'completed': i < step,
        }"
      />
    </div>
  </div>
</template>

<script>

export default {
  props: {
    step: {
      default: 1,
      type: Number,
      required: true,
    },
    steps: {
      default: 1,
      type: Number,
      required: true,
    },
  }
}

</script>

<style lang="scss">

.form-stepper {
  display: flex;
  align-items: center;

  .stepper-text {
    color: $gray900;
    font-size: 24px;
    font-weight: 500;
    line-height: 32px;
    font-style: normal;
    text-transform: uppercase;
    font-family: Inter, sans-serif;
  }

  .stepper-steps {
    display: flex;
    margin-left: 32px;
    align-items: center;

    .stepper-step {
      width: 10px;
      height: 10px;
      margin-right: 20px;
      border-radius: 5px;
      position: relative;
      background-color: $gray200;

      &.completed {
        background-color: $yellow600;
      }

      &.current {
        width: 20px;
        height: 20px;
        display: flex;
        border-radius: 10px;
        align-items: center;
        justify-content: center;
        background-color: $yellow200;

        &:after {
          content: '';
          width: 10px;
          height: 10px;
          border-radius: 5px;
          background-color: $yellow600;
        }
      }
    }
  }
}

@media #{map-get($display-breakpoints, 'xs-only')} {
  .form-stepper {
    flex-direction: column;
  }
}

</style>

<template>
  <div class="complaint-data">
    <p class="complaint-data-text" data-listen-text>
      Urmează să completezi informații despre tine.
    </p>
    <p class="complaint-data-text underline" data-listen-text style="font-weight: 600;">
      Nu te îngrijora !
    </p>
    <p class="complaint-data-text" data-listen-text>
      Prin mesajul tău, vom spune autorităților <span style="font-weight: 700;">să aibă grijă</span><br /> de datele tale pentru ca tu să fii în siguranță.
    </p>

    <form-actions
      @next="$emit('next')"
      @back="$emit('back')"
    />
  </div>
</template>

<style lang="scss">

.complaint-data {
  margin-top: 76px;

  .complaint-data-text {
    color: $gray900;
    font-size: 24px;
    font-weight: 500;
    font-style: normal;
    margin-bottom: 40px;
    line-height: 132.023%;
    text-transform: uppercase;
    font-variant: all-small-caps;
    font-family: Inter, sans-serif;

    &.underline {
      text-decoration: underline;
      text-decoration-thickness: 10px;
      text-decoration-color: $yellow400;
    }
  }
}

</style>


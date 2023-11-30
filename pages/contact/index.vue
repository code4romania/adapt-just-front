<template>
  <div class="contact-page">
    <div class="contact-content">
      <div class="title-container">
        <page-title>
          Contact
        </page-title>

        <div class="mt-6">
          <span class="subtitle">
            Completează formularul de contact pentru a ne transmite feedback sau orice alte întrebări pe care le ai vizavi de platformă.
          </span>
          <span class="subtitle mt-6">
            De asemenea, ne poți scrie la adresa <span class="font-weight-bold">TBD</span>
          </span>
        </div>
      </div>

      <div class="form-container">
        <contact-form />
      </div>
    </div>
  </div>
</template>

<script>

import ContactForm from '~/components/contact/ContactForm'

export default {
  auth: false,
  head: {
    title: 'Contact'
  },
  components: {
    ContactForm
  }
}

</script>

<style lang="scss">

.contact-page {
  .contact-content {
    margin: 0 auto;
    max-width: 768px;
    margin-bottom: 50px;

    .title-container {
      margin-top: 117px;

      .subtitle {
        display: block;
        color: #111827;
        font-size: 20px;
        font-weight: 400;
        line-height: 28px;
        font-style: normal;
        text-transform: uppercase;
        font-family: Inter, sans-serif;
      }
    }

    .form-container {
      margin-top: 40px;
    }
  }
}

</style>

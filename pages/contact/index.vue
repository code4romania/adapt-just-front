<template>
  <div class="contact-page">
    <div class="contact-content">
      <div class="title-container">
        <page-title>
          Contact
        </page-title>

        <div class="mt-6">
          <span class="subtitle" data-listen-text>
            Completează formularul de contact pentru a ne transmite feedback sau orice alte întrebări pe care le ai vizavi de platformă.
          </span>
          <span class="subtitle mt-6" data-listen-text>
            De asemenea, ne poți scrie la adresa <span class="font-weight-bold">office@crj.ro</span>
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

@media #{map-get($display-breakpoints, 'md-and-down')} {
  .contact-page {
    .contact-content {
      width: auto !important;
      margin-left: 40px !important;
      margin-right: 40px !important;

      .title-container {
        margin-top: 180px !important;
      }
    }
  }
}

@media #{map-get($display-breakpoints, 'xs-only')} {
  .contact-page {
    .contact-content {
      margin-left: 20px !important;
      margin-right: 20px !important;

      .title-container {
        margin-top: 40px !important;
      }
    }
  }
}

</style>

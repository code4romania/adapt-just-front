<template>
  <v-dialog
    width="928"
    scrollable
    persistent
    v-model="dialog"
    content-class="complaint-emails-modal"
    :fullscreen="$vuetify.breakpoint.smAndDown"
  >
    <v-card flat>
      <div class="emails-header">
        <div class="d-flex align-center">
          <v-spacer />
          <v-btn icon color="#111827" @click="$emit('close')">
            <v-icon>
              mdi-close
            </v-icon>
          </v-btn>
        </div>

        <div class="emails-header-content">
          <div>
            <span class="emails-title">
              Adresele de email care vor primi plângerea ta
            </span>
          </div>
        </div>
      </div>

      <v-card-text height="600px" class="mt-3">
        <v-list>
          <v-list-item
            v-for="(email, i) in emails"
            :key="`email_${i}`"
          >
            <v-list-item-content>
              <v-list-item-title>
                <span style="text-transform: uppercase;">{{ email }}</span>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>

export default {
  props: {
    emails: {
      type: Array,
      default: () => [],
    },
    visible: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      dialog: this.visible,
    }
  },
  watch: {
    visible(val) {
      this.dialog = val
    }
  },
}

</script>

<style lang="scss">

.complaint-emails-modal {
  .v-card {
    border-radius: 8px !important;
    border: 2px solid $yellow600 !important;

    .emails-header {
      padding: 27px 25px 0 25px;

      .emails-header-content {
        margin: 50px 55px 0 55px;

        .emails-title {
          color: #333;
          font-size: 20px;
          font-weight: 500;
          line-height: 150%;
          font-style: normal;
          text-transform: uppercase;
          font-family: Inter, sans-serif;
        }

        .search-input {
          width: 50%;

          input {
            text-transform: uppercase;
          }
        }

        .results-text {
          color: $gray600;
          font-size: 16px;
          font-weight: 500;
          line-height: 150%;
          font-style: normal;
          text-transform: uppercase;
        }
      }
    }

    .v-card__text {
      padding-left: 80px;
      padding-right: 80px;
    }
  }
}

@media #{map-get($display-breakpoints, 'sm-and-down')} {
  .complaint-emails-modal {
    .emails-header-content {
      margin: 50px 30px 0 30px !important;

      .search-input {
        width: 75% !important;
      }
    }

    .v-card__text {
      padding-left: 50px !important;
      padding-right: 50px !important;
    }
  }
}

@media #{map-get($display-breakpoints, 'xs-only')} {
  .complaint-emails-modal {
    .emails-header-content {
      margin-left: 0 !important;
      margin-right: 0 !important;

      .search-input {
        width: 100% !important;
      }
    }

    .v-card__text {
      padding-left: 20px !important;
      padding-right: 20px !important;
    }
  }
}

</style>

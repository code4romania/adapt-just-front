<template>
  <div class="app-footer">
    <div class="line" />
    <div class="footer-content">
      <v-row>
        <v-col cols="12" lg="7" class="d-flex left-col">
          <div :class="{ 'd-flex flex-column align-center': $vuetify.breakpoint.xsOnly }">
            <div class="footer-text" style="margin-bottom: 30px;">
              Un proiect realizat de
            </div>
            <a href="https://www.crj.ro" target="_blank">
              <v-img
                src="/images/website/partners/crj.png"
                width="134px"
                height="94px"
              />
            </a>
          </div>

          <div
            :style="{
              'margin-top': $vuetify.breakpoint.xsOnly ? '50px' : '0',
              'margin-left': $vuetify.breakpoint.xsOnly ? '0' : '48px',
            }"
            :class="{ 'd-flex flex-column align-center': $vuetify.breakpoint.xsOnly }"
          >
            <div class="footer-text" style="margin-bottom: 30px;">
              Proiectat de
            </div>
            <a href="https://www.code4.ro/ro" target="_blank">
              <v-img
                src="/images/website/partners/c4r.png"
                width="168px"
                height="52px"
              />
            </a>
          </div>

          <div
            :style="{
              'margin-top': $vuetify.breakpoint.xsOnly ? '50px' : '0',
              'margin-left': $vuetify.breakpoint.xsOnly ? '0' : '71px',
            }"
            :class="{ 'd-flex flex-column align-center': $vuetify.breakpoint.xsOnly }"
          >
            <div class="footer-text" style="margin-bottom: 30px;">
              Cu sprijinul
            </div>
            <a href="https://www.mpublic.ro" target="_blank">
              <v-img
                contain
                src="/images/website/partners/ministerul-public.png"
                width="150px"
                height="auto"
              />
            </a>
          </div>
          <div
            :style="{
              'margin-top': $vuetify.breakpoint.xsOnly ? '50px' : '0',
              'margin-left': $vuetify.breakpoint.xsOnly ? '0' : '71px',
            }"
            :class="{ 'd-flex flex-column align-center': $vuetify.breakpoint.xsOnly }"
          >
            <div class="footer-text" style="margin-bottom: 30px;">
              Partener media
            </div>
            <a href="https://stareanatiei.ro" target="_blank">
              <v-img
                src="/images/website/partners/partener-media.svg"
                width="60px"
                height="auto"
              />
            </a>
          </div>
        </v-col>

        <v-col cols="12" lg="5" class="right-col">
          <div class="footer-app-text text-right" style="margin-bottom: 10px;">
            Descarcă aplicația
          </div>
          <div class="d-flex justify-end">
            <div>
              <a href="https://apps.apple.com/us/app/ceasul-bun/id6451291309" target="_blank">
                <v-img
                  src="/images/website/app-store.svg"
                  width="150px"
                  height="50px"
                />
              </a>
            </div>
            <div style="margin-left: 20px;">
              <a href="https://play.google.com/store/apps/details?id=com.adaptjust&hl=ro&gl=US" target="_blank">
                <v-img
                  src="/images/website/google-play.svg"
                  width="168px"
                  height="50px"
                />
              </a>
            </div>
          </div>

          <div class="footer-links">
            <v-btn
              text
              plain
              color="#333"
              to="/cere-ajutor"
              class="footer-link mr-4"
            >
              Cere ajutor
            </v-btn>
            <v-btn
              text
              plain
              color="#333"
              class="footer-link mr-4"
              to="/resurse-de-sprijin"
            >
              Resurse de sprijin
            </v-btn>
            <v-btn
              text
              plain
              color="#333"
              to="/despre"
              class="footer-link mr-4"
            >
              Despre proiect
            </v-btn>
            <v-btn
              text
              plain
              color="#333"
              class="footer-link"
              to="/termeni-si-conditii"
            >
              Termeni și condiții
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<style lang="scss">

.app-footer {
  margin-top: 100px;

  .line {
    height: 14px;
    background-color: $yellow400;
  }

  .footer-content {
    margin: 74px 72px 50px;

    .footer-text {
      color: $gray900;
      font-size: 20px;
      font-weight: 600;
      font-style: normal;
      line-height: normal;
      font-family: "Source Sans Pro", sans-serif;
    }

    .footer-app-text {
      color: $gray600;
      font-size: 20px;
      font-weight: 600;
      line-height: 28px;
      font-style: normal;
      text-transform: uppercase;
      font-family: "Source Sans Pro", sans-serif;
    }

    .footer-links {
      display: flex;
      margin-top: 43px;
      justify-content: flex-end;

      .footer-link {
        padding: 0;

        .v-btn__content {
          color: $gray600;
          font-size: 16px;
          font-weight: 600;
          line-height: 24px;
          text-align: center;
          font-style: normal;
          opacity: 1 !important;
          text-transform: uppercase;
          font-family: "Source Sans Pro", sans-serif;
        }
      }
    }
  }
}

@media #{map-get($display-breakpoints, 'md-and-down')} {
  .app-footer {
    .left-col {
      justify-content: space-around;
    }

    .right-col {
      display: flex;
      align-items: center;
      flex-direction: column;
    }
  }
}

@media #{map-get($display-breakpoints, 'sm-and-down')} {
  .app-footer {
    .footer-content {
      margin: 74px 20px 50px;
    }
  }
}

@media #{map-get($display-breakpoints, 'xs-only')} {
  .app-footer {
    margin-bottom: 30px;

    .left-col {
      align-items: center;
      flex-direction: column;

      .footer-text {
        text-align: center;
      }
    }

    .footer-links {
      flex-direction: column;
    }
  }
}

</style>

<template>
  <div class="app-footer">
    <div class="line" />
    <div class="footer-content">
      <v-row>
        <v-col cols="7" class="d-flex">
          <div>
            <div class="footer-text" style="margin-bottom: 13px;">
              Un proiect realizat de
            </div>
            <v-img
              src="/images/website/partners/crj.png"
              width="134px"
              height="94px"
            />
          </div>
          <div style="margin-left: 48px;">
            <div class="footer-text" style="margin-bottom: 35px;">
              Proiectat de
            </div>
            <v-img
              src="/images/website/partners/c4r.png"
              width="168px"
              height="52px"
            />
          </div>
          <div style="margin-left: 71px;">
            <div class="footer-text">
              Cu sprijinul
            </div>
            <v-img
              src="/images/website/partners/ministerul-public.png"
              width="150px"
              height="150px"
            />
          </div>
        </v-col>

        <v-col cols="5">
          <div class="footer-app-text text-right" style="margin-bottom: 10px;">
            Descarcă aplicația
          </div>
          <div class="d-flex justify-end">
            <div>
              <v-img
                src="/images/website/app-store.svg"
                width="150px"
                height="50px"
              />
            </div>
            <div style="margin-left: 20px;">
              <v-img
                src="/images/website/google-play.svg"
                width="168px"
                height="50px"
              />
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
              class="footer-link"
            >
              Despre proiect
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

</style>

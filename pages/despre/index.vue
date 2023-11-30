<template>
  <div class="about-page">
    <div class="about-content">
      <div class="title-container">
        <page-title>
          Despre proiect
        </page-title>
      </div>

      <div class="content-container">
        <p class="content-text">
          Proiectul este implementat de Centrul de Resurse Juridice în parteneriat cu Ministerul Public - Parchetul de pe lângă Înalta Curte de Casaţie şi Justiţie și beneficiază de un grant în valoare de 1.324.994 € oferit de Islanda, Liechtenstein și Norvegia prin Granturile SEE în cadrul Programului Dezvoltare locală. Obiectivul proiectului este de a facilita accesul la justiție al persoanelor cu dizabilități intelectuale și/ sau cu probleme de sănătate mintală.
        </p>
        <p class="content-text">
          Proiect realizat cu sprijinul financiar al Granturilor SEE 2014 - 2021. Conținutul acestuia (text, fotografii, video) nu reflectă opinia oficială a Operatorului de Program, a Punctului Național de Contact sau a Oficiului Mecanismului Financiar. Informațiile și opiniile exprimate reprezintă responsabilitatea exclusivă a autorului/autorilor. Pentru informaţii oficiale despre Granturile SEE sau Norvegiene, accesaţi www.eeagrants.ro.
        </p>

        <div class="content-expand-container">
          <div class="content-expand-content">
            <div class="d-flex align-center toggle-expand" @click="expanded = !expanded">
              <v-icon v-if="!expanded" color="#1F2937" class="mr-4">
                mdi-chevron-down
              </v-icon>
              <v-icon v-else color="#1F2937" class="mr-4">
                mdi-chevron-up
              </v-icon>
              <span>Citește textul în format accesibilizat</span>
            </div>

            <div v-if="expanded" class="expanded-content">
              <div class="d-flex align-center">
                <div>
                  <v-img
                    width="106px"
                    height="106px"
                    src="/images/website/icons/info-icon.svg"
                  />
                </div>
                <span class="expand-section-title">Descriere</span>
              </div>
              <p class="content-text">
                Proiectul <span class="font-weight-bold">Ceasul Bun</span> este un proiect derulat de organizația Centrul de Resurse Juridice (CRJ) în parteneriat cu Ministerul Public - Parchetul de pe lângă Înalta Curte de Casaţie şi Justiţie.
              </p>
              <p class="content-text">
                <span class="font-weight-bold">Ceasul Bun</span> este un proiect prin care ne dorim că persoanele cu dizabiltăți intelectuale și/ sau cu probleme de sănătate mintală să poată avea acces mai ușor la justiție.
              </p>

              <div class="d-flex align-center">
                <div>
                  <v-img
                    width="106px"
                    height="106px"
                    src="/images/website/icons/money-icon.svg"
                  />
                </div>
                <span class="expand-section-title ml-3">Finanțare</span>
              </div>
              <p class="content-text">
                Proiectul beneficiază de o finanțare (bani) în valoare de <span class="font-weight-bold">1.324.994 €</span> oferită de mai multe țări: Islanda, Liechtenstein și Norvegia prin Granturile SEE în cadrul Programului Dezvoltare locală.
              </p>
            </div>
          </div>

          <div class="about-partners">
            <div>
              <span class="partners-title">
                Finanțare și parteneri
              </span>
            </div>

            <div class="partners-content">
              <div>
                <span class="partners-section-title">
                  Finanțatori:
                </span>
              </div>
              <div class="d-flex align-center">
                <div>
                  <v-img
                    width="162px"
                    height="162px"
                    src="/images/website/partners/iln-grants.png"
                  />
                </div>
                <div style="margin-left: 53px;">
                  <v-img
                    width="162px"
                    height="162px"
                    src="/images/website/partners/frds.png"
                  />
                </div>
              </div>

              <div style="margin-top: 46px;">
                <div class="d-flex">
                  <div>
                    <div>
                      <span class="partners-section-subtitle">
                        Proiect derulat de:
                      </span>
                    </div>
                    <v-img
                      width="174px"
                      height="122px"
                      src="/images/website/partners/crj.png"
                    />
                  </div>
                  <div style="margin-left: 100px;">
                    <div>
                      <span class="partners-section-subtitle">
                        În parteneriat cu:
                      </span>
                    </div>
                    <v-img
                      width="166px"
                      height="166px"
                      src="/images/website/partners/ministerul-public.png"
                    />
                  </div>
                </div>
              </div>

              <div style="margin-top: 50px;">
                <div>
                  <span class="partners-section-subtitle">
                    Dezvoltat cu sprijinul:
                  </span>
                </div>
                <div style="margin-top: 46px;">
                  <v-img
                    width="174px"
                    height="53px"
                    src="/images/website/partners/c4r.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  auth: false,
  head: {
    title: 'Despre'
  },
  data() {
    return {
      expanded: false,
    }
  }
}

</script>

<style lang="scss">

.about-page {
  .about-content {
    margin: 0 auto;
    max-width: 740px;
    margin-bottom: 50px;

    .title-container {
      margin-top: 40px;
    }

    .content-container {
      margin-top: 33px;

      .content-text {
        color: $gray900;
        font-size: 24px;
        font-weight: 400;
        font-style: normal;
        line-height: normal;
        letter-spacing: 0.48px;
        font-variant: all-small-caps;
        font-family: "Encode Sans", sans-serif;
      }

      .about-partners {
        margin-top: 95px;

        .partners-title {
          color: $gray900;
          font-size: 36px;
          font-weight: 800;
          line-height: 60px;
          font-style: normal;
          letter-spacing: -0.18px;
          text-transform: uppercase;
          font-family: Inter, sans-serif;
        }

        .partners-content {
          margin: 28px 20px 0;

          .partners-section-title {
            color: $gray900;
            font-size: 24px;
            font-weight: 700;
            font-style: normal;
            line-height: normal;
            letter-spacing: 0.48px;
            text-transform: uppercase;
            font-family: "Encode Sans", sans-serif;
          }

          .partners-section-subtitle {
            color: $gray900;
            font-size: 20px;
            font-weight: 700;
            font-style: normal;
            line-height: normal;
            letter-spacing: 0.4px;
            text-transform: uppercase;
            font-family: "Encode Sans", sans-serif;
          }
        }
      }

      .content-expand-container {
        margin-top: 72px;

        .content-expand-content {
          padding: 14px 8px;
          border-top: 1px solid $gray800;
          border-bottom: 1px solid $gray800;

          .toggle-expand {
            cursor: pointer;
            color: $gray800;
            font-size: 20px;
            font-weight: 600;
            line-height: 32px;
            font-style: normal;
            text-transform: uppercase;
            font-family: Inter, sans-serif;
          }

          .expanded-content {
            margin-top: 16px;

            .expand-section-title {
              color: #000;
              font-size: 32px;
              font-style: normal;
              font-weight: 700;
              line-height: normal;
              letter-spacing: 0.64px;
              font-variant: all-small-caps;
              font-family: "Encode Sans", sans-serif;
            }
          }
        }
      }
    }
  }
}

</style>

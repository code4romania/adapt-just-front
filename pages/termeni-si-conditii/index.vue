<template>
  <div class="terms-conditions-page">
    <div class="terms-conditions-content">
      <div class="title-container">
        <page-title>
          Termeni și condiții
        </page-title>
      </div>

      <div class="content-container">
        <p class="content-text" data-listen-text>
          Termenii și Condițiile generale de utilizare stabilesc termenii și condițiilegenerale de utilizare a aplicației Ceasul Bun de către potențialii vizitatori saubeneficiari."Ceasul Bun" (în continuare denumit "aplicația", ”Ceasul Bun”) este o aplicațiededicată ajutorării persoanelor instituționalizate sau persoanelor care lucreazăîn centre rezidențiale, unități medicale, instituții psihiatrice sau alte astfel deinstituții pentru a raporta situații de abuz fizic, psihologic sau neglijență.
        </p>
        <p class="content-text" data-listen-text>
          Ca urmare a faptului că persoanele cu dizabilități constituie grupul principal deutilizatori, aplicația este accesibilizată în termeni de vocabular și navigare.Dincolo de procesul ușor de parcurs și componente simple, aplicația are integratcititor de ecran în interfața sa și o funcție de înregistrare care transformă discursul în text.
        </p>
        <p class="content-text" data-listen-text>
          Asociația Code for Romania este o persoană juridică, având sediul în Mun.București, Piața Alba Iulia nr. 7, bloc I6, etaj 1, ap. 6, înregistrată în registrulspecial, Partea A, secțiunea I 67/06.07.2016.
        </p>

        <h1 class="content-text font-weight-bold" data-listen-text>1. Obiectivul aplicației</h1>
        <ul class="content-list">
          <li data-listen-text>Obiectivul Ceasul Bun este să ajute persoanele instituționalizate să raporteze abuzuri.</li>
          <li data-listen-text>Aplicație permite utilizatorilor să transmită rapoarte și sesizări care sunt transferate direct către autoritățile competente</li>
          <li data-listen-text>Aplicația permite utilizatorilor să consulte resurse despre cum pot raporta abuzuri și ce servicii au la dispoziție precum și ghiduri utile</li>
        </ul>

        <h1 class="content-text font-weight-bold" data-listen-text>2. Date personale</h1>
        <p class="content-text " data-listen-text>
          Completând formularele puse la dispoziție în paginile aplicației putem colecta următoarele date personale:
        </p>
        <ul class="content-list">
          <li data-listen-text>Nume și prenume</li>
          <li data-listen-text>Informații de localizare</li>
          <li data-listen-text>Fișiere pe care utilizatorul alege să le încarce</li>
        </ul>
        <h1 class="content-text font-weight-bold" data-listen-text>3. Scop și temei</h1>
        <p class="content-text " data-listen-text>
          Code for Romania procesează date cu caracter personal doar în interesul utilizatorilor care doresc să trimită o plângere sau o sesizare către autoritățile competente.
        </p>
        <h1 class="content-text font-weight-bold" data-listen-text>
          4. Durata stocării
        </h1>
        <p class="content-text" data-listen-text>
          Datele personale furnizate sunt stocate temporar pe durata funcționării aplicației.
        </p>
        <h1 class="content-text font-weight-bold" data-listen-text>
          5. Transmiterea Datelor personale către terți
        </h1>
        <p class="content-text" data-listen-text>
          Code for Romania nu va furniza datele personale către terți care nu sunt listați în directorul de instituții al aplicației. Datele pot fi furnizate către instituții sau autorități publice, precum și altor organe abilitate ale statului, în baza și în limitele prevederilor legale, ca urmare a unor cereri expres formulate de acestea.
        </p>
        <h1 class="content-text font-weight-bold" data-listen-text>
          6. Drepturile tale
        </h1>
        <p class="content-text" data-listen-text>
          În calitate de utilizator al aplicației, potrivit Legii nr. 679/2016, precum și, începând cu 25 mai 2018, potrivit Regulamentului General privind protecția datelor, ai următoarele drepturi:
        </p>
        <ul class="content-list">
          <li data-listen-text>Dreptul la informare cu privire la prelucrarea datelor personale de către Code for Romania;</li>
          <li data-listen-text>Dreptul de acces la datele personale, la cerere și în mod gratuit pentru o solicitare pe an; Dreptul de intervenție, rectificarea, ștergerea sau portabilitatea datelor personale, la cerere și în mod gratuit;</li>
          <li data-listen-text>Dreptul de a te adresa Autorității Naționale de Supraveghere privind Prelucrarea Datelor cu Caracter Personal (cu sediul în București, sector 1, B-dul G-ral. Gheorghe Magheru, www.dataprotection.ro) sau justiției, pentru apărarea oricăror drepturi garantate de lege;</li>
          <li data-listen-text>Dreptul la opoziție și procesul decizional individual automatizat;</li>
          <li data-listen-text>Începând cu 25 mai 2018, potrivit Regulamentului general privind protecția datelor, dreptul la restricționarea prelucrării.</li>
        </ul>
        <h1 class="content-text font-weight-bold" data-listen-text>
          7. Securitate și confidențialitate
        </h1>
        <p class="content-text " data-listen-text>
          Protecția informațiilor în cursul prelucrării datelor tale personale este o preocupare majoră a Code for Romania, de aceea toate datele personale
        </p>
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

.terms-conditions-page {
  .terms-conditions-content {
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

      .content-list{
        text-transform: uppercase;
        color: $gray900;
        font-size: 24px;
        font-weight: 400;
        font-style: normal;
        line-height: normal;
        letter-spacing: 0.48px;
        font-variant: all-small-caps;
        font-family: "Encode Sans", sans-serif;
      }
    }
  }
}

@media #{map-get($display-breakpoints, 'md-and-down')} {
  .terms-conditions-page {
    .terms-conditions-content {
      width: auto !important;
      margin-top: 180px !important;
      margin-left: 40px !important;
      margin-right: 40px !important;
    }
  }
}

@media #{map-get($display-breakpoints, 'xs-only')} {
  .terms-conditions-page {
    .terms-conditions-content {
      margin-left: 20px !important;
      margin-right: 20px !important;
      margin-top: 40px !important;
    }
  }
}

</style>

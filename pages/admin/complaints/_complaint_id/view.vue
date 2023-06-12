<template>
  <div class="complaint-view-card">
    <v-row>
      <v-col cols="12" md="10">
        <ui-form-card v-if="!loading">
          <template #title>
            Raportare abuz
          </template>
          <template #subtitle>
            16.06.2023
          </template>
          <template>
            <v-row>
              <v-col cols="12" md="6">
                <label class="complaint-label">Pentru cine a fost raportat</label>
                <div>Pentru propria persoana</div>
              </v-col>
              <v-col cols="12" md="6">
                <label class="complaint-label">Numar de inregistrare plangere</label>
                <div>SRP 15/22.10.2023</div>
              </v-col>
              <v-col cols="12" md="6">
                <label class="complaint-label">Nume si prenume</label>
                <div>Emilia Eminovici</div>
              </v-col>
              <v-col cols="12" md="6">
                <label class="complaint-label">Oras</label>
                <div>Bacau</div>
              </v-col>
              <v-col cols="12" md="6">
                <label class="complaint-label">Centru</label>
                <div>Centrul de zi “Ioana Stoenescu”</div>
              </v-col>
              <v-col cols="12" md="6">
                <label class="complaint-label">Tip centru</label>
                <div> Centru de zi</div>
              </v-col>
              <v-col cols="12">
                <label class="complaint-label">Email transmis</label>
                <p>
                  Subsemnatul/a Emilia Eminovici, mă aflu în orașul Bacău, în Centrul de zi “Ioana Stoenescu”, de tipul Centru de zi și declar că:

                  Am fost bătut/ă;
                  Nu am primit mâncare;
                  Am fost închis/ă în cameră.

                  Vă rog să luați măsurile necesare. Va solicit confirmarea primirii si numarul de inregistrare al acestei cereri.
                </p>
              </v-col>
              <v-col cols="12">
                <label class="complaint-label">Atasamente</label>
                <v-list one-line class="attachment-list">
                  <template v-for="(item, index) in complaint?.uploads">
                    <v-list-item>
                      <v-list-item-content>
                        <v-list-item-title class="text--primary">{{ item.name }}</v-list-item-title>
                      </v-list-item-content>

                      <v-list-item-action>

                        <v-btn
                          text
                          plain
                          color="primary"
                          class="text-none"
                          :href="item.dataUrl"
                          target="_blank"
                        >
                          Vizualizeaza
                        </v-btn>
                      </v-list-item-action>
                    </v-list-item>

                  </template>
                </v-list>
              </v-col>
              <v-col cols="12">
                <label class="complaint-label">Emailul a fost transmis catre</label>
                <div>
                  <div>Secția de Poliție 7 Bacău politiebacau@gov.ro</div>
                  <div>DGASPC Bacău dgaspc_bacau@gov.ro</div>
                </div>
              </v-col>
            </v-row>
          </template>
        </ui-form-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import {mapState} from "vuex";
export default {
  layout: 'dashboard',
  meta: {
    permission: 'ViewAny - complaints',
  },
  data() {
    return {
      loading: true,
      complaint: {}
    }
  },
  async fetch() {
    this.loading = true
    try{
      this.complaint = await this.$store.dispatch('complaints/show', {id: this.$route.params.complaint_id});
    } catch (e) {
      this.$form.handleError(e)
    }

    this.loading = false
  },
  methods:{

  }
}
</script>

<style lang="scss">
.complaint-view-card{
  .complaint-label{
    color: #6B7280;
    font-size: 14px;
    font-weight: 600;
  }
  .attachment-list{
    border: 1px solid #ddd;
    border-radius: 10px;
  }
}
</style>

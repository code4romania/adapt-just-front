<template>
  <div class="complaint-view-card">
    <v-row>
      <v-col cols="12" md="10">
        <ui-form-card v-if="!loading">
          <template #title>
            <span v-if="complaint?.type === 'hurt'">Raportare abuz</span>
            <span v-if="complaint?.type === 'move'">Cerere relocare</span>
            <span v-if="complaint?.type === 'evaluation'">Cerere reexaminare</span>
          </template>
          <template #subtitle>
            {{ complaint.created_at }}
          </template>
          <template>
            <v-row>
              <v-col cols="12" md="6">
                <label class="complaint-label">Pentru cine a fost raportat</label>
                <div v-if="complaint.victim === 'me'">Pentru propria persoana</div>
                <div v-if="complaint.victim === 'other'">Pentru altcineva</div>
              </v-col>
              <v-col cols="12" md="6">
                <label class="complaint-label">Numar de inregistrare plangere</label>
                <v-text-field
                    outlined
                    dense
                    v-model="complaint.register_number"
                    :disabled="!editMode"
                    :loading="loadingSaveRegisterNumber"
                >
                  <template #append>
                      <v-icon v-if="!editMode" @click="editMode = true">mdi-pencil</v-icon>
                      <v-icon v-if="editMode" @click="saveRegisterNumber">mdi-check</v-icon>
                  </template>
                </v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <label class="complaint-label">Nume si prenume</label>
                <div>{{ complaint.name }}</div>
              </v-col>
              <v-col cols="12" md="6">
                <label class="complaint-label">Oras</label>
                <div>{{  complaint.city_name }} {{ complaint.county_name }}</div>
              </v-col>
              <v-col cols="12" md="6">
                <label class="complaint-label">Centru</label>
                <div>{{ complaint.location_name }}</div>
              </v-col>
              <v-col cols="12" md="6">
                <label class="complaint-label">Tip centru</label>
                <div>{{ complaint?.location?.type }}</div>
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
                <div v-if="complaint.proof_type === 'later' ">Am dovezi si le pot oferi la cerere</div>
                <div v-if="complaint.proof_type === 'no'">Nu am dovezi</div>
                <v-list v-if="complaint.proof_type === 'yes'" one-line class="attachment-list">
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
      loadingSaveRegisterNumber: false,
      complaint: {},
      editMode: false
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
    async saveRegisterNumber() {
      this.loadingSaveRegisterNumber = true
      this.editMode = false;
      try {
        await this.$store.dispatch('complaints/update', {
          id : this.complaint.id,
          register_number: this.complaint.register_number
        })
        const snack = { color: 'success', message:  'Numarul de inregistrare a fost actualizat cu succes'}
        this.$store.commit('snackbar/setSnack', snack)

      } catch (e) {
        this.$form.handleError(e)
      }

      this.loadingSaveRegisterNumber = false
    }
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

<template>

  <dashboard-page>
    <template #navigation>
      <ui-form-back-btn to="/admin/complaints"/>
    </template>
    <template #title>Vizualizare Raportare</template>
    <template #workspace>
      <v-row>
        <v-col>
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

                        <label class="complaint-label">CNP</label>
                        <div>{{ complaint.cnp }}</div>
                      </v-col>
                      <v-col cols="12" md="6">
                        <label class="complaint-label">Oraș</label>
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
                      <v-col cols="12" md="6">
                        <label class="complaint-label">Locatie pe harta</label>
                        <div>
                          <a v-if="complaint.lat" target="_blank" :href="`https://www.google.com/maps/place/${complaint.lat},${complaint.lng}`">Vezi locatia pe harta</a>
                          <div v-else> Indisponibila </div>
                        </div>
                      </v-col>
                      <v-col cols="12">
                        <div style="border: 1px solid #dddddd; border-radius: 10px" class="pa-4">
                          <div v-html="complaint.email_sent">
                          </div>
                          <div v-if="complaint.victim === 'me'" class="mb-4 mt-4">
                            <div class="mb-4">
                              Subsemnata/Subsemnatul {{ complaint.name }}
                              <span v-if="complaint.county_name || complaint.location_name">, mă aflu în</span>
                              <span v-if="complaint.county_name">{{ complaint.county_name }}</span>
                              <span v-if="complaint.location_name">în {{ complaint.location_name }}</span>
                              , și declar că:
                            </div>

                            <div v-if="complaint.type === 'hurt'" class="mb-4">
                              <ul>
                                <li v-for="d in complaint.detail_labels">{{ d }}</li>
                              </ul>
                            </div>

                            <div v-if="complaint.type === 'move'" class="mb-4">
                              <ul>
                                <li>
                                  Vreau sa fiu mutat/a la
                                  <span v-if="complaint.location_to_name">{{ complaint.location_to_name }}</span>
                                  <span v-else>alt centru</span>
                                </li>
                              </ul>
                              <div class="mt-4" v-if="complaint.reason">Motivul pentru care vreau să mă mut este: <strong>{{ complaint.reason }}</strong></div>
                            </div>

                            <div v-if="complaint.type === 'evaluation'" class="mb-4">
                              <ul>
                                <li>Vreau să fiu evaluat/ă din nou la judecător</li>
                              </ul>
                            </div>
                          </div>
                          <div v-if="complaint.victim === 'other'" class="mb-4 mt-4">
                            <div>
                              Subsemnata/Subsemnatul {{ complaint.name }}, declar ca
                              <span v-if="complaint.county_name">{{ complaint.county_name }} </span>
                              <span v-if="complaint.location_name">în {{ complaint.location_name }}</span>
                              s-au întâmplat următoarele
                            </div>
                            <div>
                              <ul>
                                <li>{{ complaint.reason }}</li>
                              </ul>
                            </div>
                          </div>

                          <div v-if="complaint.proof_type === 'later' || complaint.proof_type === 'yes'" class="mb-4">
                            <label class="complaint-label">Atasamente</label>
                            <div v-if="complaint.proof_type === 'later'">Am dovezi si le pot oferi la cerere</div>
                            <div v-if="complaint.proof_type === 'yes'">
                              <div v-for="item in complaint.uploads">
                                <a :href="item.dataUrl">{{item.name}}</a>
                              </div>

                            </div>
                          </div>
                          <div>
                            <label class="complaint-label">Emailul a fost transmis la data {{ complaint.sent_at }} catre</label>
                            <div>
                              <div>
                                <label>Denumirea instituții: </label>
                                <ul>
                                  <li v-for="(sti,index) in complaint.sent_to_institutions">
                                    {{ sti }}
                                  </li>
                                </ul>
                              </div>
                              <div>
                                <span>Adrese de email:</span>
                                <ul>
                                  <li v-for="(stm,index) in complaint.sent_to_emails">
                                    {{ stm }}
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </v-col>
                    </v-row>
                  </template>
                </ui-form-card>
              </v-col>
            </v-row>
          </div>
        </v-col>
      </v-row>
    </template>

  </dashboard-page>

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

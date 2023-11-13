const initialState = {
  cnp: '',
  name: '',
  type: '',           // hurt, move, evaluation
  lat: null,
  lng: null,
  victim: '',         // me, other
  reason: '',
  details: [],
  uploads: [],
  proofType: '',      // yes, later, no
  signature: null,
  location: null,
  locationTo: null,
  locationToType: '', // location, none
  idCardUpload: null,

  locations: [],
};

const state = () => ({
  ...initialState
});

const mutations = {
  setVictim(state, victim) {
    state.victim = victim;
  },
  setType(state, type) {
    state.type = type;
  },
  setName(state, name) {
    state.name = name;
  },
  setLocation(state, location) {
    state.location = location;
  },
  setDetails(state, details) {
    state.details = details;
  },
  setLocations(state, locations) {
    state.locations = locations;
  }
};

const actions = {
  async getLocations ({ commit }) {
    return this.$axios.get(`/api/public/locations`)
      .then(result => result.data)
      .then(response => commit('setLocations', response.data))
  },
  async getInstitutions ({ commit }, params) {
    return this.$axios.get(`/api/public/complaints/institutions/list`, { params })
      .then(result => result.data)
  },
};

export default {
  state,
  actions,
  mutations,
};

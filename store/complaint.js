import getAgencies from '~/util/agencies'

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
  institutions: [],
}

const state = () => ({
  ...initialState
})

const getters = {
  getSteps: state => () => {
    let steps = 9

    switch (state.type) {
      case 'move':
        steps = 8
        break
      case 'evaluation':
        steps = 6
        break
      default:
        break
    }

    return steps
  },
  getInstitutions: state => () => {
    if (!state.institutions.length) {
      return getAgencies(state.victim, state.type)
    }

    return state.institutions.join(', ')
  },
}

const mutations = {
  setVictim(state, victim) {
    const { locations } = state

    if (victim !== state.victim) {
      state = Object.assign(state, initialState, { locations })
    }

    state.victim = victim
  },
  setType(state, type) {
    const {
      victim,
      locations,
    } = state

    if (type !== state.type) {
      state = Object.assign(state, initialState, { victim, locations })
    }

    state.type = type
  },
  setName(state, name) {
    state.name = name
  },
  setLocation(state, location) {
    state.location = location
  },
  setDetails(state, details) {
    state.details = details
  },
  setProofType(state, proofType) {
    state.proofType = proofType
  },
  setLocations(state, locations) {
    state.locations = locations
  },
  setInstitutions(state, institutions) {
    state.institutions = institutions
  },
}

const actions = {
  async getLocations ({ commit }) {
    return this.$axios.get(`/api/public/locations`)
      .then(result => result.data)
      .then(response => commit('setLocations', response.data))
  },
  async getInstitutions ({ commit }, params) {
    return this.$axios.get(`/api/public/complaints/institutions/list`, { params })
      .then(result => commit('setInstitutions', result.data))
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}

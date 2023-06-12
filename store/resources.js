const initialState = {
  resource: {
    type: 'organisation',
    name: '',
    status: 'draft',
    phone: '',
    content: '',
    short_content: '',
    published_at: '',
    upload_id: null,
    upload: null
  }
};

const state = () => ({
  ...initialState
})

const mutations = {
  resetState (state) {
    state.resource = JSON.parse(JSON.stringify(initialState.resource))
  },
  setResource (state, form) {
    state.resource = form
  },
}

const actions = {
  async get ({ commit }, params) {
    return this.$axios.get(`/api/resources`, { params })
      .then(result => result?.data)
  },
  async show ({ commit }, params) {
    return this.$axios.get(`/api/resources/${params.id}`)
      .then((res) => {
          commit('setResource', res.data.data)
      })
  },
  create ({ commit }, params) {
    return this.$axios.post(`/api/resources`, params)
  },
  update ({ commit }, params) {
    return this.$axios.put(`/api/resources/${params.id}`, params)
  },
  delete ({ commit }, params) {
    return this.$axios.delete(`/api/resources/${params.id}`)
  }
}

export default {
  state,
  actions,
  mutations
}

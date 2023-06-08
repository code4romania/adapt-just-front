const initialState = {
  complaint: {}
};

const state = () => ({
  ...initialState
})

const mutations = {

}

const actions = {
  async get ({ commit }, params) {
    return this.$axios.get(`/api/complaints`, { params })
      .then(result => result.data)
  },
  async show ({ commit }, params) {
    await this.$axios.get(`/api/complaints/${params.id}`)
      .then(result => result.data)
  },
  update ({ commit }, params) {
    return this.$axios.put(`/api/complaints/${params.id}`, params)
  }
}

export default {
  state,
  actions,
  mutations
}

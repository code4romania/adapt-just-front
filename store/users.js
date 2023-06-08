const initialState = {
  user: {
    first_name: '',
    last_name: '',
    email: '',
    permissions: []
  }
};

const state = () => ({
  ...initialState
})

const mutations = {
  set (state, items) {
    state.list = items
  },
  setUser (state, form) {
    state.user = form
  },
  resetState (state) {
    state.user = JSON.parse(JSON.stringify(initialState.user))
  }
}

const actions = {
  async get ({ commit }, params) {
    return this.$axios.get(`/api/users`, { params })
      .then(result => result.data)
  },
  async show ({ commit }, params) {
    await this.$axios.get(`/api/users/${params.id}`)
      .then((res) => {
          commit('setUser', res.data.data)
      })
  },
  form ({ commit }) {
    return this.$axios.get(`/api/users/form/data`)
  },

  async set ({ commit }, items) {
    await commit('set', items)
  },
  create ({ commit }, params) {
    return this.$axios.post(`/api/users`, params)
  },
  update ({ commit }, params) {
    return this.$axios.put(`/api/users/${params.id}`, params)
  },
  delete ({ commit }, params) {
    return this.$axios.delete(`/api/users/${params.id}`)
  },
  setupPassword ({ commit }, params) {
    return this.$axios.post(`/api/setup-password/${params.id}/${params.hash}`, params.login, { params: params.query })
  },
  updateProfile ({ commit }, params) {
    return this.$axios.post(`/api/update-profile`, params)
  },
  changeEmail ({ commit }, params) {
    return this.$axios.post(`/api/change-email`, params)
  },
  changePassword ({ commit }, params) {
    return this.$axios.post(`/api/change-password`, params)
  },
  forgotPassword ({ commit }, params) {
    return this.$axios.post(`/api/forgot-password`, params)
  },
  resetPassword ({ commit }, params) {
    return this.$axios.post(`/api/reset-password`, params)
  },

  async formPermissions ({ commit }, params) {
    return this.$axios.get(`/api/user-permissions/form`, { params })
      .then(result => result.data)
  },

}

export default {
  state,
  actions,
  mutations
}

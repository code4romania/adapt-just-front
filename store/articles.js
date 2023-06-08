const initialState = {
  article: {
    name: '',
    status: 'draft',
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
    state.article = JSON.parse(JSON.stringify(initialState.article))
  },
  setArticle (state, form) {
    state.article = form
  },
}

const actions = {
  async get ({ commit }, params) {
    return this.$axios.get(`/api/articles`, { params })
      .then(result => result?.data)
  },
  async show ({ commit }, params) {
    return this.$axios.get(`/api/articles/${params.id}`)
      .then((res) => {
          commit('setArticle', res.data.data)
      })
  },
  create ({ commit }, params) {
    return this.$axios.post(`/api/articles`, params)
  },
  update ({ commit }, params) {
    return this.$axios.put(`/api/articles/${params.id}`, params)
  },
  delete ({ commit }, params) {
    return this.$axios.delete(`/api/articles/${params.id}`)
  }
}

export default {
  state,
  actions,
  mutations
}

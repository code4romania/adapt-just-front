const initialState = {

};

const state = () => ({
  ...initialState
})

const mutations = {

}

const actions = {
  send ({ commit }, params) {
    return this.$axios.post(`/api/public/contact/send`, params)
  }
}

export default {
  state,
  actions,
  mutations
}

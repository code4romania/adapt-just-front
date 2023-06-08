const initialState = {
  complaint: {}
};

const state = () => ({
  ...initialState
})

const mutations = {

}

const actions = {
  create ({ commit }, params) {
    const formData = new FormData();
    formData.append("file", params.file);
    return this.$axios.post(`/api/uploads`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
      .then(result => result?.data?.data)
  }
}

export default {
  state,
  actions,
  mutations
}

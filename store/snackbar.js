export const state = () => ({
  snack: {}
});

export const mutations = {
  setSnack(state, showSnack) {
    state.snack = {...showSnack};
  },
  resetState(state) {
    Object._.assign(state, {});
  }
};

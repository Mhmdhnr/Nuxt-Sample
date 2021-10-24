export const state = () => ({
  fa: true,
});

export const mutations = {
  fa(state, bool) {
    state.fa = bool;
  },
};
export const getters = {
  fa: (state) => {
    return state.fa
  }
}

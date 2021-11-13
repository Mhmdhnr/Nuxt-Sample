export const state = () => ({
  fa: true,
  api: '',
});

export const mutations = {
  fa(state, bool) {
    state.fa = bool;
  },
  api(state, el) {
    state.api = el;
  },
};
export const getters = {
  fa: (state) => {
    return state.fa
  },
  api: (state) => {
    return state.api
  }
};



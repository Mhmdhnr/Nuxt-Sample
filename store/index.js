export const state = () => ({
  fa: true,
  api: '',
  theme: 'light',
});

export const mutations = {
  fa(state, bool) {
    state.fa = bool;
  },
  api(state, el) {
    state.api = el;
  },
  theme(state, el) {
    state.theme = el;
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



import apiServices from "../api/apiServices";

export const state = () => ({
  fa: true,
  api: '',
  theme: 'light',
  loadingMessage: {
    fa: 'در حال بارگذاری...',
    en: 'Loading...',
  },
  needSignIn: false,
  signedIn: null,
  user: {}
});

export const mutations = {
  fa(state, bool) {
    state.fa = bool;
  },
  needSignIn(state, bool) {
    state.needSignIn = bool;
  },
  signedIn(state, bool) {
    state.signedIn = bool;
  },
  api(state, el) {
    state.api = el;
  },
  loadingMessage(state, el) {
    state.loadingMessage = el;
  },
  theme(state, el) {
    state.theme = el;
  },
  user(state, payload) {
    state.user = payload;
  },
};
// export const getters = {
//   fa: (state) => {
//     return state.fa
//   },
//   api: (state) => {
//     return state.api
//   },
// };




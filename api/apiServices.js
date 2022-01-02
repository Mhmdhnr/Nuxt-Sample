import axios from 'axios';

let store;
if (process.browser) {
  window.onNuxtReady(({$store}) => {
    store = $store
  })
}

// const API_URL = 'https://flask-restful-nuxt.herokuapp.com';
const API_URL = 'http://127.0.0.1:5000';
let axi = axios.create({
  headers: {
    'Content-Type' : 'application/json',
    // 'Access-Control-Allow-Origin' : '*',
    // 'Access-Control-Allow-Credentials' : 'true',
    // 'Access-Control-Allow-Headers' : 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
    // 'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT'
  },
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
  withCredentials: true,
});
export default {
  name: 'apiServices',

  data() {
    return {}
  },

  mounted() {
  },
  methods: {
    async toPromise(url, method, data) {
      if (method === 'post') {
        return await new Promise((resolve1, reject1) =>
          axi.post(url, data)
            .then(response => {
              if (!response || response.data.type === 'error') {
                reject1(response);
              } else {
                resolve1(response.data);
              }
            })
            .then(response => {
              return response;
          })
            .catch (error => {
              if(error.response.status === 401) {
                console.log("4011111111111111");
                store.commit('needSignIn', true);
              }
            }
            // () => this.toPromise(url, method, data)
          )
        )
      }
      return await new Promise((resolve, reject) =>
        axi.get(url)
          .then(response => {
            // console.log(response);
            if (!response || response.status === 401) {
              reject(response);
            } else {
              resolve(response.data);
            }
          })
          .then(response => {
            return response;
        })
          .catch (error => {
          if(error.response.status === 401) {
            console.log("4011111111111111");
            store.commit('needSignIn', true);
          }
        }
          // () => this.toPromise(url, method, data)
        )
      )
    },
    async getRandomXY(count) {
      const url = `${API_URL}/get_random_x_y/${count}`;
      return await this.toPromise(url);
    },
    async getRandomNames(count) {
      const url = `${API_URL}/get_random_names/${count}`;
      return await this.toPromise(url);
    },
    async getTest(id) {
      const url = `${API_URL}/get_test/${id}`;
      return await this.toPromise(url);
    },
    async sendVerificationToken(phoneNumber) {
      const url = `${API_URL}/send_token?phone_number=${phoneNumber}`;
      return await this.toPromise(url, 'post');
    },
    async signInUp(phoneNumber, token) {
      const url = `${API_URL}/sign?phone_number=${phoneNumber}&token=${token}`;
      return await this.toPromise(url, 'post');
    },
    async signOut() {
      const url = `${API_URL}/sign_out`;
      return await this.toPromise(url, 'get');
    },
    async userInfo() {
      const url = `${API_URL}/info`;
      return await this.toPromise(url, 'get');
    },
    async postRavenResponse(clientAnswers) {
      console.log(clientAnswers);
      let jsonString = JSON.stringify(clientAnswers);
      console.log(jsonString);
      const url = `${API_URL}/post_raven_response?clientAnswers=${jsonString}`;
      return await this.toPromise(url, 'post', clientAnswers);
    },
    async postMBTIResponse(clientAnswers) {
      console.log(clientAnswers);
      let jsonString = JSON.stringify(clientAnswers);
      console.log(jsonString);
      const url = `${API_URL}/post_mbti_response?clientAnswers=${jsonString}`;
      return await this.toPromise(url, 'post', clientAnswers);
    },
    async postHollandResponse(clientAnswers) {
      console.log(clientAnswers);
      let jsonString = JSON.stringify(clientAnswers);
      console.log(jsonString);
      const url = `${API_URL}/post_holland_response?clientAnswers=${jsonString}`;
      return await this.toPromise(url, 'post', clientAnswers);
    },
    async postJohnsonResponse(clientAnswers) {
      console.log(clientAnswers);
      let jsonString = JSON.stringify(clientAnswers);
      console.log(jsonString);
      const url = `${API_URL}/post_johnson_response?clientAnswers=${jsonString}`;
      return await this.toPromise(url, 'post', clientAnswers);
    },
  }
}

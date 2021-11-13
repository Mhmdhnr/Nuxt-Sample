import axios from 'axios';


// const API_URL = 'https://flask-restful-nuxt.herokuapp.com';
const API_URL = 'http://127.0.0.1:5000';
let axi = axios.create({
  headers: {
    'Content-Type' : 'application/json',
    // 'Access-Control-Allow-Origin' : '*',
    // 'Access-Control-Allow-Credentials' : 'true',
    // 'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT'
  },
  // xsrfCookieName: 'XSRF-TOKEN',
  // xsrfHeaderName: 'X-XSRF-TOKEN',
  // withCredentials: true,
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
      // console.log(store)
      // store.commit('api', 'pending');
      if (method === 'post') {
        return await new Promise((resolve1, reject1) =>
          axi.post(url, data)
            .then(response => {
              // if (!response || response.data.type === 'error') {
              if (!response) {
                reject1(response);
              } else {
                resolve1(response.data);
              }
            }).then(response => {
            return response;
          }).catch(
            // () => this.toPromise(url, method, data)
          )
        )
      }
      return await new Promise((resolve1, reject1) =>
        axi.get(url)
          .then(response => {
            if (!response || response.data.type === 'error') {
              reject1(response);
            } else {
              resolve1(response.data)
            }
          }).then(response => {
          return response
        }).catch(
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
    async postRavenResponse(clientAnswers) {
      let jsonString = JSON.stringify(clientAnswers);
      console.log(jsonString);
      const url = `${API_URL}/post_raven_response?clientAnswers=${jsonString}`;
      return await this.toPromise(url, 'post', clientAnswers);
    },
  }
}

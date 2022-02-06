<template>
  <div class="flex flex-column">
    <Slider v-bind:slider="slider[4]" />
    <div>
      <div v-show="!this.ageSubmitted" class="age-main flex flex-column">
        <span v-if="this.fa" >لطفا سن خود را انتخاب کنید.</span>
        <span v-if="!this.fa" >Please select your age.</span>
        <div class="age-inputs flex flex-row">
          <div v-for="n in 10" class="age">
            <input class="age-input" :id="`age${n + 8}`" type="radio" v-bind:value="n + 8" v-model="age">
            <label v-if="n + 8 !== 18" class="age-label" v-on:click="check(n + 8)">
              <span>{{n + 8}}</span>
            </label>
            <label v-if="n + 8 === 18"  class="age-label" v-on:click="check(n + 8)">
              <span>+18</span>
            </label>
          </div>
        </div>
        <button @click="submitAge()" disabled class="age-submit">
          <span class="age-submit-text" v-if="this.fa">تایید</span>
          <span class="age-submit-text" v-if="!this.fa">Confirm</span>
        </button>
      </div>
      <TestR v-show="ageSubmitted" :mustAnsweredAll="false" v-on:submit="submit" testId="2"/>
<!--      <Test v-show="ageSubmitted" :mustAnsweredAll="false" v-on:submit="submit" testId="2"/>-->
    </div>
  </div>
</template>

<script>
    import {mapState} from 'vuex'
    import apiServices from "../../api/apiServices";
    import {slider} from "../../data/data";
    import Slider from "../../components/fun/Slider";
    import Loading from "../../components/fun/Loading";
    import TestR from "../../components/test/TestR";
    export default {
        name: "Raven",
        components: {TestR, Loading, Slider},
        data() {
            return {
                slider: slider,
                age: 0,
                ageSubmitted: false,
            }
        },
        computed: mapState(['fa','api']),
        methods: {
            submit({choices}) {
                this.$store.commit('loadingMessage' , {fa: 'در حال محاسبه نتایج آزمون ...', en: 'Calculating test result ...'});
                this.$store.commit('api', 'pending');
                apiServices.methods.postRavenResponse({choices, age: this.age}).then(response => {
                    this.$store.commit('api', 'done');
                    console.log(response);
                    this.$router.push({name:'tests-results-RavenResult', params:{iq: response.iq, age: response.age, correct: response.correct}});
                })
            },
            check(n) {
                let submit = document.getElementsByClassName("age-submit")[0];
                if (document.getElementById("age" + n).checked === true) {
                    document.getElementById("age" + n).checked = false;
                    this.age = 0;
                    submit.enabled = false;
                    submit.disabled = true;
                }
                else {
                    for (let n = 9; n <= 18; n++) {
                        document.getElementById("age" + n).checked = false
                    }
                    document.getElementById("age" + n).checked = true;
                    this.age = n;
                    submit.disabled = false;
                    submit.enabled = true;
                }
            },
            submitAge(){
                this.ageSubmitted = true
            }
        }
    }
</script>

<style scoped>
  .age-main {
    width: 1080px;
    padding: 2vh;
    height: 300px;
    justify-content: space-around;
  }
  .age {
    position: relative;
    width: 4vw;
    height: 2.5vw;
    margin: 5px;
  }
  .age-inputs {
    width: 50vw;
    justify-content: space-around;
  }
  .age-label {
    position: absolute;
    display: flex;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    border-radius: 4px;
    cursor: pointer;
    padding: 1vh 2vw;
    z-index: 1;
    font-size: 0.8em;
    box-shadow: 0 0 4px 1px rgba(100,100,100,0.2);
    color: var(--text-color);
    justify-content: center;
  }
  .age-input {
    display: none;
  }
  .age-input:checked ~ .age-label {
    background-color: var(--primary-color);
  }
  .age-input:checked ~ .age-label > span {
    color: var(--bg-color);
  }
  .age-submit {
    width: 250px;
    height: 60px;
    background-color: var(--bg-color);
    overflow: hidden;
    position: relative;
    border: none;
    border-radius: 5px;
    box-shadow: 0 2px 10px 3px rgba(100,100,100,0.4);
  }
  .age-submit:disabled {
    background-color: var(--contrast-color);
  }
  .age-submit::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    -webkit-transform: translateX(-70%) rotate(45deg);
    -webkit-transition: all 300ms ease-in-out ;
    width: 110%;
    height: 110%;
    background-color: var(--primary-color);
  }
  .age-submit::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    -webkit-transform: translateX(62%) rotate(45deg);
    -webkit-transition: all 300ms ease-in-out ;
    width: 110%;
    height: 110%;
    background-color: var(--primary-color);
  }
  .age-submit:enabled:hover:after {
    -webkit-transform: translateX(0) rotate(0);
  }
  .age-submit:enabled:hover:before {
    -webkit-transform: translateX(0) rotate(0);
  }
  .age-submit-text {
    color: var(--primary-color);
    -webkit-animation: toBlack 600ms ease-in-out;
    font-size: 1rem;
    position: relative;
    z-index: 1000;
  }
  .age-submit:enabled:hover .age-submit-text {
    -webkit-animation: toWhite 400ms ease-in-out forwards;
  }

  @media screen and (max-width: 864px) {
    .age-main {
      width: 100vw;
      padding: 2vh;
      height: 300px;
      justify-content: space-evenly;
    }
    .age {
      position: relative;
      width: 8vw;
      height: 9vw;
      margin: 2px;
    }
    .age-inputs {
      width: 100vw;
      justify-content: center;
    }
    .age-label {
      position: absolute;
      display: flex;
      width: 100%;
      height: 100%;
      top: 0;
      right: 0;
      border-radius: 4px;
      cursor: pointer;
      padding: 1vh 2vw;
      z-index: 1;
      font-size: 0.8em;
      box-shadow: 0 0 4px 1px rgba(100,100,100,0.2);
      color: var(--text-color);
      justify-content: center;
    }
    .age-input {
      display: none;
    }
    .age-input:checked ~ .age-label {
      background-color: var(--primary-color);
    }
    .age-input:checked ~ .age-label > span {
      color: var(--bg-color);
    }
  }
</style>

<template>
  <div class="test">
    <Loading v-show="this.api === 'pending'" />
    <div v-show="this.api === 'done'" class="test flex">
<!--    <div class="test flex">-->
      <div class="test-head flex flex-row">
        <span v-if="this.fa" class="title">{{this.test.name_fa}}</span>
        <span v-if="!this.fa" class="title">{{this.test.name_en}}</span>
        <div v-show="this.test.time !== 0" class="timer">
          <span id="time">
            <span v-if="this.fa">زمان آزمون</span>
            <span v-if="!this.fa">Test time </span>
            {{this.test.time}}
            <span v-if="this.fa">دقیقه</span>
            <span v-if="!this.fa">Minutes</span>
          </span>
        </div>
      </div>
      <Question :id="`q${question.id}`" v-on:selected="select" v-for="question in test.questions" v-bind:question="question" />
      <div class="hint">
        <div v-if="!this.allAnswered"  v-on:click="unAnswered()">
          <span v-if="this.fa"> به تمام سوالات پاسخ نداده اید (کلیک کنید) </span>
          <span v-if="!this.fa"> You have not answered all questions </span>
        </div>
        <div v-if="this.allAnswered">
          <span v-if="this.fa"> به تمام سوالات پاسخ داده اید </span>
          <span v-if="!this.fa"> You have answered all questions </span>
        </div>
      </div>
      <button disabled id="submit" v-on:click="submit()" class="btn-border-hover submit">
        <span v-show="this.$store.state.fa" class="btn-border-hover-text"> ارسال آزمون </span>
        <span v-show="!this.$store.state.fa" class="btn-border-hover-text"> Submit </span>
      </button>
    </div>
  </div>
</template>

<script>
    import { mapState } from 'vuex';
    import {slider} from '../data/data.js';
    import apiServices from "../api/apiServices";
    import Question from "./Question";
    import Slider from "./Slider";
    import AnimatedWaves from "./AnimatedWaves";
    import Loading from "./Loading";
    export default {
        name: "Test",
        components: {Loading, AnimatedWaves, Slider, Question},
        props:['testId', 'mustAnsweredAll'],
        data() {
            return {
                allAnswered: false,
                timerStarted: false,
                test: {},
                slider: slider,
                choicesArray: [],
            }
        },
        computed: mapState(['api','fa']),
        mounted() {
            let submit = document.getElementById('submit');
            if(!this.mustAnsweredAll) {
                submit.disabled = false;
                submit.enabled = true;
            }
            this.$store.commit('loadingMessage' , {fa: 'در حال بارگزاری آزمون شما ...', en: 'Loading your test ...'});
            this.$store.commit('api', 'pending');
            apiServices.methods.getTest(this.testId).then(response => {
              console.log("from test");
              this.test = response;
              this.$store.commit('api', 'done');
              this.choicesArray = Array(this.test.questions.length).fill(0);
              let lastTestId = localStorage.getItem('responsesTestId') ? localStorage.getItem('responsesTestId') : 0;
              if(lastTestId !== this.test.id.toString()){
                  localStorage.setItem('testResponse', JSON.stringify(this.choicesArray))
              } else {
                  this.choicesArray = JSON.parse(localStorage.getItem('testResponse'));
                  this.allAnswered = this.choicesArray.filter(no => no !== 0).length === this.test.questions.length;
                  let submit = document.getElementById('submit');
                  if (!this.allAnswered) {
                      if(this.mustAnsweredAll) {
                          submit.enabled = false;
                          submit.disabled = true;
                      }
                      this.$nextTick(function () {
                          this.unAnswered();
                      })
                  } else {
                      submit.disabled = false;
                      submit.enabled = true;
                      submit.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  }
              }
              localStorage.setItem('responsesTestId', this.test.id);
            })
        },
        methods:{
            select({choiceIndex, questionIndex}){
                if (this.test.time !== 0 && !this.timerStarted) {
                    let display = document.querySelector('#time');
                    let time = this.test.time * 60;
                    this.countdownTimer(time, display);
                    // this.countdownTimer(3, display);
                    this.timerStarted = true;
                }
                this.choicesArray[questionIndex - 1] = choiceIndex;
                localStorage.setItem('testResponse', JSON.stringify(this.choicesArray));
                this.allAnswered = this.choicesArray.filter(no => no !== 0).length === this.test.questions.length;
                let submit = document.getElementById('submit');
                if (!this.allAnswered) {
                    if(this.mustAnsweredAll) {
                        submit.enabled = false;
                        submit.disabled = true;
                    }
                    this.unAnswered();
                } else {
                    submit.disabled = false;
                    submit.enabled = true;
                    submit.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            },
            submit(){
                this.$emit('submit', {choices: this.choicesArray})
            },
            unAnswered() {
                let index = this.choicesArray.findIndex(x => x === 0);
                let unAnsweredQuestionId = this.test.questions[index].id;
                document.getElementById("q" + unAnsweredQuestionId.toString()).scrollIntoView({ behavior: 'smooth', block: 'center' });
            },
            countdownTimer(duration, display) {
              let timer = duration, minutes, seconds;
              setInterval(() => {
                  minutes = parseInt(timer / 60, 10);
                  seconds = parseInt(timer % 60, 10);

                  minutes = minutes < 10 ? "0" + minutes : minutes;
                  seconds = seconds < 10 ? "0" + seconds : seconds;

                  display.textContent = minutes + ":" + seconds;

                  if (timer > 0) {
                      timer --
                  } else {
                      this.submit()
                  }
              }, 1000);
    }
        }
    }
</script>

<style scoped>
  .submit {
    margin: 3vh auto;
  }
  .submit:disabled {
    background-color: var(--contrast-color);
  }
  .test-head {
    padding: 2vh 10vw;
    width: 100vw;
    justify-content: space-between;
    background-color: var(--bg-color);
    border-bottom: 1px solid var(--text-color);
  }
  #time > span, #time, .title {
    color: var(--text-color);
  }
  .hint {
    cursor: pointer;
    padding: 4vh 0 0;
    animation: 400ms beat alternate infinite;
    font-size: 0.8em;
  }
  @keyframes beat {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(1.03);
    }
  }
  .test {
    width: 1080px;
    /*height: 100%;*/
    padding: 0;
    flex-direction: column;
    justify-content: center;
  }
  @media screen and (max-width: 864px) {
    .test {
      width: 100vw;
    }
    .submit {
      margin: 3vh auto;
    }
    .test-head {
      padding: 2vh 3vw;
    }
    #time > span, #time, .title {
      font-size: 0.8em;
    }
  }
</style>

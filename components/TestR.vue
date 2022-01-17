<template>
  <div class="test">
    <Loading v-show="this.api === 'pending'" />
    <div v-show="this.api === 'done'" class="test flex">
      <div class="test-progress flex flex-column">
        <div class="test-head flex flex-row">
          <span v-if="this.fa" class="title">{{this.test.name_fa}}</span>
          <span v-if="!this.fa" class="title">{{this.test.name_en}}</span>
          <button v-show="this.alreadyDone" class="text-button" @click="pushToResult()">مشاهده نتیجه قبلی</button>
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
        <div class="stations flex flex-column">
          <div class="st flex">
            <button class="next secondary-btn" @click="currentSection ++" v-show="currentSection !== sectionCount">بخش بعدی</button>
            <button class="pre secondary-btn" @click="currentSection --" v-show="currentSection !== 1">بخش قبلی</button>
            <div class="flex">
              <div class="line"></div>
              <div class="test-progress-stations flex" :id="`st${section.id}`" @click="switchSection(section.index)" v-for="section in test.sections">
                <div>{{section.index}}</div>
  <!--              <div class="bar" :id="`bar${section.id}`"></div>-->
              </div>
              <div class="test-progress-stations test-done flex" >✔</div>
            </div>
          </div>
          <div class="bar"></div>
        </div>
      </div>
      <Section v-show="section.index === currentSection" v-for="section in test.sections" :id="`s${section.id}`" v-on:selected="select" v-on:done="sectionDone" v-bind:section="section" />
      <div class="bottom flex flex-column">

        <div class="hint">
          <div v-if="!this.allAnswered"  v-on:click="unAnswered()">
            <span v-if="this.fa"> به تمام سوالات آزمون پاسخ نداده اید (کلیک کنید) </span>
            <span v-if="!this.fa"> You have not answered all questions </span>
          </div>
          <div v-if="this.allAnswered">
            <span v-if="this.fa"> به تمام سوالات آزمون پاسخ داده اید </span>
            <span v-if="!this.fa"> You have answered all questions </span>
          </div>
        </div>
        <button disabled id="submit" v-on:click="submit()" class="btn-border-hover submit">
          <span v-show="this.$store.state.fa" class="btn-border-hover-text"> محاسبه نتایج </span>
          <span v-show="!this.$store.state.fa" class="btn-border-hover-text"> Submit </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
    import {mapState} from 'vuex';
    import Loading from "./Loading";
    import apiServices from "../api/apiServices";
    import Section from "./Section";

    export default {
        name: "TestR",
        components: {Loading, Section},
        props:['testId', 'mustAnsweredAll', 'navigationPermission'],
        data() {
            return {
                allAnswered: false,
                timerStarted: false,
                test: {},
                sectionCount: 0,
                questionCount: 0,
                choicesArray: [],
                currentSection: null,
                alreadyDone: false,
            }
        },
        watch: {
          currentSection(newValue) {
              let id = this.test.sections[newValue - 1].id;
              for (let st of document.getElementsByClassName('test-progress-stations')) {
                  st.classList.remove('beat');
              }
              document.getElementById("st" + id.toString()).classList.add('beat');
            },
            allAnswered(newValue) {
              let done = document.getElementsByClassName('test-done')[0];
              if(newValue) {
                  done.classList.add('done')
              } else {
                  done.classList.remove('done')
              }
            }

        },
        computed: mapState(['api','fa', 'signedIn']),
        updated() {
            this.handleUserTestResults();
        },
        mounted() {
            this.handleUserTestResults();
            this.observe();
            let bars = document.getElementsByClassName('bar');
            for(let bar of bars) {
                bar.style.width = (600 / this.sectionCount) + "px";
            }
            let submit = document.getElementById('submit');
            if(!this.mustAnsweredAll) {
                submit.disabled = false;
                submit.enabled = true;
            }
            this.$store.commit('loadingMessage' , {fa: 'در حال بارگذاری آزمون شما ...', en: 'Loading your test ...'});
            this.$store.commit('api', 'pending');
            apiServices.methods.getTest(this.testId).then(response => {
                this.test = response;
                this.$store.commit('api', 'done');
                this.sectionCount = this.test.sections.length;
                for (let section of this.test.sections) {
                    this.questionCount += section.questions.length;
                }
                for (let section of this.test.sections) {
                    for (let question of section.questions) {
                        let slot = {
                            questionId: question.id,
                            choice: 0,
                        };
                        this.choicesArray.push(slot);
                    }
                }
                let lastTestId = localStorage.getItem('responsesTestId') ? localStorage.getItem('responsesTestId') : 0;
                if(lastTestId !== this.test.id.toString()){
                    localStorage.setItem('testResponse', JSON.stringify(this.choicesArray))
                } else {
                    this.choicesArray = JSON.parse(localStorage.getItem('testResponse'));
                    this.allAnswered = !this.choicesArray.some(x => x.choice === 0);
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
                this.$nextTick(function () {
                    this.currentSection = 1;
                });
                localStorage.setItem('responsesTestId', this.test.id);
            })
        },
        methods: {
            handleUserTestResults() {
                if (this.signedIn) {
                    apiServices.methods.userTestResults().then(response => {
                        if (parseInt(this.testId) === 1 && response.user_test_result.mbti) {
                            this.alreadyDone = true;
                        }
                        if (parseInt(this.testId) === 2 && response.user_test_result.raven) {
                            this.alreadyDone = true;
                        }
                        if (parseInt(this.testId) === 3 && response.user_test_result.holland) {
                            this.alreadyDone = true;
                        }
                        if (parseInt(this.testId) === 4 && response.user_test_result.johnson) {
                            this.alreadyDone = true;
                        }
                        if (parseInt(this.testId) === 5 && response.user_test_result.glasser) {
                            this.alreadyDone = true;
                        }
                        if (parseInt(this.testId) === 6 && response.user_test_result.stephen) {
                            this.alreadyDone = true;
                        }
                    });
                }
            },
            observe(){
                let scrollY = window.scrollY;
                window.addEventListener('scroll', function(){
                    scrollY = window.scrollY;
                    if(scrollY > 500){
                        document.getElementsByClassName('stations')[0].classList.add('top-fixed')
                    }
                    else {
                        document.getElementsByClassName('stations')[0].classList.remove('top-fixed')
                    }
                });
                window.addEventListener('touchmove', function(){
                    let scrollYMobile = document.getElementsByClassName('nuxt')[0].scrollTop;
                    if(scrollYMobile > 300){
                        document.getElementsByClassName('stations')[0].classList.add('top-fixed')
                    }
                    else {
                        document.getElementsByClassName('stations')[0].classList.remove('top-fixed')
                    }
                });
            },
            select({choiceIndex, questionId}){
                if (this.test.time !== 0 && !this.timerStarted) {
                    let display = document.querySelector('#time');
                    let time = this.test.time * 60;
                    this.countdownTimer(time, display);
                    // this.countdownTimer(3, display);
                    this.timerStarted = true;
                }
                this.choicesArray.find(x => x.questionId === questionId).choice = choiceIndex;
                localStorage.setItem('testResponse', JSON.stringify(this.choicesArray));
                this.allAnswered = !this.choicesArray.some(x => x.choice === 0);
                let bar = document.getElementsByClassName('bar')[0];
                bar.style.width = (100 * this.choicesArray.filter(x => x.choice !== 0).length / this.questionCount).toString() + "vw";
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
            sectionDone({sectionId, done}) {
                let station = document.getElementById("st" + sectionId.toString());
                let bar = document.getElementById("bar" + sectionId.toString());
                if (done) {
                    station.classList.add('done');

                } else {
                    station.classList.remove('done');
                }
            },
            switchSection(sectionIndex) {
              this.currentSection = sectionIndex;
            },
            submit(){
                this.$emit('submit', {choices: this.choicesArray})
            },
            unAnswered() {
                let questionId = this.choicesArray.find(x => x.choice === 0).questionId;
                this.currentSection = this.test.sections.find(x => x.questions.find(y => y.id === questionId)).index;
                this.$nextTick(function () {
                    document.getElementById("q" + questionId.toString()).scrollIntoView({ behavior: 'smooth', block: 'center' });
                });
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
            },
            pushToResult() {
                switch(this.test.id) {
                    case 1:
                        this.$router.push("MBTIResult");
                        break;
                    case 2:
                        this.$router.push("RavenResult");
                        break;
                    case 3:
                        this.$router.push("HollandResult");
                        break;
                    case 4:
                        this.$router.push("JohnsonResult");
                        break;
                    case 5:
                        this.$router.push("GlasserResult");
                        break;
                    case 6:
                        this.$router.push("StephenResult");
                        break;

                }
            }
        },
    }
</script>

<style scoped>
  .top-fixed {
    position: fixed!important;
    top: -10px;
  }
  .bottom {
    position: fixed;
    bottom: 0;
    width: 1080px;
    background-color: var(--bg-color);
    justify-content: center;
    z-index: 10;
    border-top: 1px solid var(--text-color);
  }
  .stations {
    border-bottom: 1px solid var(--text-color);
    background-color: var(--bg-color);
    z-index: 10;
  }
  .st {
    padding: 20px 0;
    width: 100vw;
    justify-content: space-around;
    position: relative;
  }
  .st > div {
    position: relative;
    width: 600px;
    flex-direction: row-reverse;
    justify-content: space-between;
  }
  .next {
    position: absolute;
    right: 20px;
  }
  .pre {
    position: absolute;
    left: 20px;
  }
  .beat {
    animation: 400ms beat alternate infinite;
    border: 2px solid var(--primary-color);
  }
  .secondary-btn {
    background-color: var(--bg-color);
    border: 2px solid var(--primary-color);
    border-radius: 4px;
    width: 100px;
    height: 40px;
    color: var(--primary-color);
    font-size: 0.8em;
  }
  .secondary-btn:hover {
    background-color: var(--primary-color);
    color: var(--bg-color);
  }
  .line {
    position: absolute;
    background-color: var(--primary-color);
    top: calc(50% - 5px);
    left: 2.5%;
    width: 95%;
    height: 10px;
    z-index: -2;
  }
  .bar {
    margin: 0 auto 0 0;
    background-color: var(--primary-color);
    height: 7px;
    transition: all 300ms ease-in-out;
  }
  .test-progress-stations {
    position: relative;
    cursor: pointer;
    width: 40px;
    height: 40px;
    border-radius: 20px;
    background-color: var(--contrast-color);
    justify-content: center;
    z-index: 20;
  }
  .done {
    background-color: var(--primary-color);
    color: var(--bg-color);
  }
  .submit {
    margin: 1vh auto;
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
    padding: 1vh 0 0;
    /*animation: 400ms beat alternate infinite;*/
    font-size: 0.8em;
  }
  @keyframes beat {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(1.07);
    }
  }
  .test {
    position: relative;
    width: 1080px;
    /*height: 100%;*/
    padding: 0;
    flex-direction: column;
    justify-content: center;
  }
  @media screen and (max-width: 864px) {
    .next {
      margin: auto -10px auto auto;
    }
    .pre {
      margin: auto auto auto -10px;
    }
    .test {
      width: 100vw;
    }
    .submit {
      margin: 1vh auto 2vh;
    }
    .test-head {
      padding: 1vh 3vw;
    }
    .st {
      padding: 20px 0;
      width: 100vw;
    }
    .stations {
      border-bottom: 1px solid var(--text-color);
      background-color: var(--bg-color);
      z-index: 10;
    }
    .st > div {
      width: 200px;
    }
    .line, .bar {
      top: calc(50% - 3px);
      height: 6px;
    }
    .secondary-btn {
      width: 60px;
      height: 25px;
      font-size: 0.5em;
    }
    .test-progress-stations {
      width: 25px;
      height: 25px;
      border-radius: 20px;
      font-size: 0.7em;
    }
    .test-head {
      padding: 2vh 10vw;
      width: 100vw;
      justify-content: space-between;
      background-color: var(--bg-color);
      border-bottom: 1px solid var(--text-color);
    }
    .text-button {
      font-size: 0.5em;
    }
    #time > span, #time, .title {
      font-size: 0.8em;
    }
    .title {
      font-size: 0.6em;
    }
    .bottom {
      bottom: var(--main-header-height);
    }
    .top-fixed {
      top: var(--top-header-height)
    }
  }
</style>

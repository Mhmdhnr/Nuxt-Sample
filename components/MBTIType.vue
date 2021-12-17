<template>
  <div class="mbti-types">
    <div class="type-top flex">
      <div class="title-spans">
        <span class="abr">{{typeData.abr}}</span>
        <br>
        <div class="title">
          <span v-if="this.fa">{{typeData.title.fa}}</span>
          <span v-if="!this.fa">{{typeData.title.en}}</span>
          <span v-if="this.fa">({{typeData.title.en}})</span>
        </div>
<!--        <span>{{typeData.whoTheyAre.fa}}</span>-->
      </div>
      <div class="image-box">
        <img class="image" :src="require(`@/assets/images/mbti/${typeData.abr}.png`)" :alt="typeData.abr">
        <div class="sentence">
          <span v-if="this.fa">{{typeData.sentence.fa}}</span>
          <span v-if="!this.fa">{{typeData.sentence.en}}</span>
        </div>
      </div>
    </div>
    <div class="short-des">
      <hr>
      <div class="section-title">
        <span v-if="this.fa">ویژگی ها</span>
        <span v-if="!this.fa">Features</span>
      </div>
      <TypingMachine :subject="typeData.id" delay="800" speed="1500" :forwards="true">
        <span v-if="this.fa" class="typing-span">{{typeData.shortDes.fa}}</span>
        <span v-if="!this.fa" class="typing-span">{{typeData.shortDes.en}}</span>
      </TypingMachine>
      <div v-if="this.fa">
        <hr>
        <span style="color: seagreen">نقاط مثبت</span>
        <TypingMachine v-for="(p, index) in typeData.pros" :subject="p.fa" :delay="1000" speed="1500" :forwards="true" :hideCursor="true">
          <span class="typing-span">☺{{p.fa}}</span>
        </TypingMachine>
        <hr>
        <span style="color: red">نقاط منفی</span>
        <TypingMachine v-for="(c, index) in typeData.cons" :subject="c.fa" :delay="1000" speed="1500" :forwards="true" :hideCursor="true">
          <span class="typing-span">☻{{c.fa}}</span>
        </TypingMachine>
      </div>
      <div v-if="!this.fa">
        <hr>
        <span style="color: seagreen">Pros</span>
        <TypingMachine v-for="(p, index) in typeData.pros" :subject="p.fa" :delay="1000" speed="1500" :forwards="true" :hideCursor="true">
          <span class="typing-span">☺{{p.en}}</span>
        </TypingMachine>
        <hr>
        <span style="color: red">Cons</span>
        <TypingMachine v-for="(c, index) in typeData.cons" :subject="c.fa" :delay="1000" speed="1500" :forwards="true" :hideCursor="true">
          <span class="typing-span">☻{{c.en}}</span>
        </TypingMachine>
      </div>
    </div>
    <hr>
    <div class="section-title">
      <span v-if="this.fa">شغل های مناسب این تیپ</span>
      <span v-if="!this.fa">Suitable Jobs</span>
    </div>
    <div v-if="this.fa" class="jobs">
      <div v-for="job in typeData.suitableJobs" class="job">
        <span >{{job.fa}}</span>
      </div>
    </div>
    <div v-if="!this.fa" class="jobs">
      <div v-for="job in typeData.suitableJobs" class="job">
        <span>{{job.en}}</span>
      </div>
    </div>
    <hr>
    <div class="section-title">
      <span v-if="this.fa">مشهورترین افراد این تیپ</span>
      <span v-if="!this.fa">Most famous people of this type</span>
    </div>
    <div v-if="this.fa" class="famousPeople">
      <div v-for="famous in typeData.famousPeople" class="job">
        <span >{{famous.fa}}</span>
      </div>
    </div>
    <div v-if="!this.fa" class="famousPeople">
      <div v-for="famous in typeData.famousPeople" class="job">
        <span>{{famous.en}}</span>
      </div>
    </div>
    <hr>
    <div class="section-title">
      <span v-if="this.fa">زوج مناسب این تیپ</span>
      <span v-if="!this.fa">Suitable Mate</span>
    </div>
    <div class="types">
      <div class="types" v-if="this.fa">
        <div class="type" v-for="mbtiType in typeData.suitableMates" :id="`mate${mbtiType.abr}`" @click="showType(mbtiType.id)">
          <img class="card-image" :src="require(`@/assets/images/mbti/${mbtiType.abr}.png`)" :alt="mbtiType.abr">
          <span class="title">{{mbtiType.title.fa}}</span>
          <span class="card-abr">{{mbtiType.abr}}</span>
        </div>
      </div>
      <div class="types" v-if="!this.fa">
        <div class="type" v-for="mbtiType in typeData.suitableMates" :id="`mate${mbtiType.abr}`" @click="showType(mbtiType.id)">
          <img class="card-image" :src="require(`@/assets/images/mbti/${mbtiType.abr}.png`)" :alt="mbtiType.abr">
          <span class="title">{{mbtiType.title.en}}</span>
          <span class="card-abr">{{mbtiType.abr}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import {mapState} from 'vuex';
    import TypingMachine from "./TypingMachine";
    export default {
        name: "MBTIType",
        components: {TypingMachine},
        props:['typeData'],
        computed: mapState(['fa']),
        watch: {
          fa(newValue) {
              let sentence = document.getElementsByClassName('sentence')[0];
              let image = document.getElementsByClassName('image')[16];
              if (newValue) {
                  sentence.style.right = 'unset';
                  if(window.screen.width <= 864) {
                      sentence.style.left = '90px';
                  } else {
                      sentence.style.left = '150px';
                  }
                  sentence.style.clipPath = 'polygon(100% 0%,100% 100%,10% 100%,10% 50%,0% 70%,10% 70%,10% 0%)';
                  sentence.style.padding = '1vh 1vw 1vh calc(1vw + 5%)';
                  image.style.transform = 'scaleX(1)'
              } else {
                  sentence.style.left = 'unset';
                  if(window.screen.width <= 864) {
                      sentence.style.right = '90px';
                  } else {
                      sentence.style.right = '150px';
                  }
                  sentence.style.clipPath = 'polygon(0% 0%,0% 100%,90% 100%,90% 50%,100% 70%,90% 70%,90% 0%)';
                  sentence.style.padding = '1vh calc(1vw + 5%) 1vh 1vw';
                  image.style.transform = 'scaleX(-1)'
              }
          }
        },
        mounted() {
            let jobs = document.getElementsByClassName('job');
            let famousPeople = document.getElementsByClassName('famousPeople');
            for(let i = 0; i < jobs.length; i++){
                setTimeout(function () {
                    jobs[i].classList.add('bounce-in')
                }, 1000 + i * 100)
            }
            for(let i = 0; i < famousPeople.length; i++){
                setTimeout(function () {
                    jobs[i].classList.add('bounce-in')
                }, 1000 + i * 100)
            }
            let sentence = document.getElementsByClassName('sentence')[0];
            let image = document.getElementsByClassName('image')[16];
            if (this.fa) {
                sentence.style.right = 'unset';
                if(window.screen.width <= 864) {
                    sentence.style.left = '90px';
                } else {
                    sentence.style.left = '150px';
                }
                sentence.style.clipPath = 'polygon(100% 0%,100% 100%,10% 100%,10% 50%,0% 70%,10% 70%,10% 0%)';
                sentence.style.padding = '1vh 1vw 1vh calc(1vw + 5%)';
                image.style.transform = 'scaleX(1)'
            } else {
                sentence.style.left = 'unset';
                if(window.screen.width <= 864) {
                    sentence.style.right = '90px';
                } else {
                    sentence.style.right = '150px';
                }
                sentence.style.clipPath = 'polygon(0% 0%,0% 100%,90% 100%,90% 50%,100% 70%,90% 70%,90% 0%)';
                sentence.style.padding = '1vh calc(1vw + 5%) 1vh 1vw';
                image.style.transform = 'scaleX(-1)'
            }
        },
        methods: {
            showType(id) {
                console.log(id)
                this.$emit('selectedType', id)
            }
        }
    }
</script>

<style scoped>
  .mbti-types {
    /*background-color: var(--contrast-color);*/
    border: 2px solid var(--primary-color);
    box-shadow: 0 5px 12px 0 rgba(40, 40, 40, 0.1);
    border-radius: 16px;
    width: 800px;
    padding: 2vh 2vw;
    margin: 0 auto 3vh;
  }
  .type-top {
    width: 100%;
  }
  .title-spans {
    margin: auto auto 0 auto;
    justify-content: flex-end;
    width: 50%;
  }
  .abr {
    font-size: 3em;
  }
  .title-spans > span {
    text-align: start;
    color: var(--primary-color)
  }
  .title > span {
    font-size: 1.5em;
    color: var(--primary-color)
  }
  .image-box {
    display: flex;
    position: relative;
    justify-content: flex-end;
    width: 50%;
  }
  .sentence {
    /*padding: 1vh 1vw 1vh calc(1vw + 5%);*/
    position: absolute;
    /*left:150px;*/
    top: 10px;
    background-color: var(--primary-color);
    /*clip-path: polygon(100% 0%,100% 100%,10% 100%,10% 50%,0% 70%,10% 70%,10% 0%);*/
    font-size: 0.7em;
    text-align: center;
  }
  .sentence > span {
    color: var(--bg-color);
  }
  .short-des {
    padding: 2vh 0;
  }
  .image {
    width: 200px;
    height: 200px;
  }
  .typing-span {
    font-size: 0.9em;
  }
  .section-title {
    background-color: var(--primary-color);
    display: flex;
    justify-content: center;
    padding: 5px 0;
    margin-bottom: 1vh;
  }
  .section-title > span {
    color: var(--bg-color);
  }
  .jobs, .famousPeople {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .job {
    display: flex;
    justify-content: center;
    border: 1px solid var(--text-color);
    border-radius: 4px;
    font-size: 0.8em;
    width: 200px;
    margin: 10px;
    opacity: 0;
  }
  .job > span {
    /*color: var(--primary-color);*/
  }
  .types {
      display: flex;
      justify-content: center;
    }
  .type:hover {
    transform: scale(1.05);
    transition: all 200ms;
  }
  .type {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    text-align: center;
    margin: 10px;
    width: 150px;
    height: 175px;
    border: 1px solid var(--primary-color);
    background-color: var(--bg-color);
    box-shadow: 0 4px 12px 0 rgba(40, 40, 40, 0.1);
    border-radius: 8px;
    transition: all 50ms;
  }
  .card-image {
    width: 110px;
    height: 110px;
    margin: 5px auto;
  }
  .title {
    font-size: 0.85em;
  }
  .card-abr {
    font-size: 0.75em;
  }
  @media screen and (max-width: 864px) {
    .mbti-types {
      width: 90vw;
      padding: 1vh 2vw;
      margin: 2vh auto;
    }
    .abr {
      font-size: 1.5em;
    }
    .title > span {
      font-size: 0.75em;
    }
    .sentence {
      /*left:90px;*/
      top: 0;
      width: 120px;
      font-size: 0.6em;
    }
    .short-des {
      padding: 1vh 0;
    }
    .image {
      width: 120px;
      height: 120px;
    }
    .typing-span {
      font-size: 0.7em;
    }
    .types {
       padding-top: 1vh;
     }
    .type {
      margin: 5px;
      width: 22vw;
      height: 32vw;
    }
    .card-image {
      width: 18vw;
      height: 18vw;
      margin: 5px auto;
    }
    .title {
      font-size: 0.7em;
    }
    .card-abr {
      font-size: 0.6em;
    }
  }
</style>

<template>
  <div class="mbti-types">
    <div class="type-top flex">
      <div class="title-spans">
        <span class="abr">{{typeData.abr}}</span>
        <br>
        <div class="title">
          <span>{{typeData.title.fa}}</span>
          <span>({{typeData.title.en}})</span>
        </div>
<!--        <span>{{typeData.whoTheyAre.fa}}</span>-->
      </div>
      <div class="image-box">
        <img class="image" :src="require(`@/assets/images/mbti/${typeData.abr}.png`)" :alt="typeData.abr">
        <div class="sentence">
          <span>{{typeData.sentence.fa}}</span>
        </div>
      </div>
    </div>
    <div class="short-des">
      <hr>
      <div class="section-title">
        <span>ویژگی ها</span>
      </div>
      <TypingMachine :subject="typeData.id" delay="800" speed="1500" :forwards="true">
        <span v-if="this.fa" class="typing-span">{{typeData.shortDes.fa}}</span>
        <span v-if="!this.fa" class="typing-span">{{typeData.shortDes.fa}}</span>
      </TypingMachine>
    </div>
    <hr>
    <div class="section-title">
      <span>شغل های مناسب این تیپ</span>
    </div>
    <div class="jobs">
      <div v-for="job in typeData.suitableJobs" class="job">
        <span>{{job.fa}}</span>
      </div>
    </div>
    <hr>
    <div class="section-title">
      <span>زوج مناسب این تیپ</span>
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
        mounted() {
            let jobs = document.getElementsByClassName('job');
            for(let i = 0; i < jobs.length; i++){
                setTimeout(function () {
                    jobs[i].classList.add('bounce-in')
                }, 1000 + i * 100)
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
    padding: 1vh 1vw 1vh calc(1vw + 5%);
    position: absolute;
    left:150px;
    top: 10px;
    background-color: var(--primary-color);
    clip-path: polygon(100% 0%,100% 100%,10% 100%,10% 50%,0% 70%,10% 70%,10% 0%);
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
  .jobs {
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
    margin: 1vw;
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
      left:90px;
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
    }.types {
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

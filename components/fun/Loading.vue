<template>
  <div class="loading flex flex-column">
    <div class="main-loading flex" >
      <div v-for="n in 13" class="rec" :class="`rec${n + 1}`"></div>
    </div>
    <div class="loading-message">
      <span class="message" v-if="this.fa">{{this.loadingMessage.fa}}</span>
      <span class="message" v-if="!this.fa">{{this.loadingMessage.en}}</span>
    </div>
  </div>
</template>

<script>
    import { mapState } from 'vuex';
    export default {
        name: "Loading",
        props:[],
        computed: mapState(['fa','loadingMessage']),
        watch:{
        },
        mounted() {
            let recs = document.getElementsByClassName('rec');
            let base = 250;
            for(let i = 0; i < recs.length; i++){
                recs[i].style.animationDelay = (i * 100 + 100).toString() + "ms";
                recs[i].style.width = ((base / recs.length) - 8).toString() + "px";
                recs[i].style.borderRadius = (((base / recs.length) - 8) / 2).toString() + "px";
            }
        }
    }
</script>

<style scoped>
  .loading {
    padding: 6vh 2vw 3vh;
  }
  .main-loading {
    flex-direction: row-reverse;
    width: 250px;
    height: 80px;
    justify-content: space-evenly;
  }
  .rec {
    background-color: var(--primary-color);
    transform-origin: center;
    animation: 400ms ex infinite ease-in-out;
  }
  @keyframes ex {
    0% {
      height: 35%;
    }
    50% {
      height: 100%;
    }
    100% {
      height: 35%;
    }
  }
  .loading-message {
    margin: 3vh auto;
  }
  .message {
    font-size: 2em;
    color: var(--primary-color);
  }
  @media screen and (max-width: 864px){
    .message {
      font-size: 1.4em;
    }
    .loading-message {
      margin: 3vh;
    }
    .loading {
      padding: 5vh 2vw;
    }
  }
</style>

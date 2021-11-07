<template>
  <div class="main flex flex-column">
    <div class="flex slider-main">
      <Slider class="slider" v-bind:slider="slider[0]" height="50vh"/>
      <AnimatedWaves class="animated-waves"/>
    </div>
    <div class="m flex">
        <FlipCard class="flip-card-home bounce" duration="500" v-bind:flipCardData=flipCard[0] />
        <FlipCard class="flip-card-home bounce" duration="500" v-bind:flipCardData=flipCard[1] />
        <FlipCard class="flip-card-home bounce" duration="500" v-bind:flipCardData=flipCard[2] />
        <FlipCard class="flip-card-home bounce" duration="500" v-bind:flipCardData=flipCard[3] />
        <FlipCard class="flip-card-home bounce" duration="500" v-bind:flipCardData=flipCard[4] />
    </div>
<!--    <div class="m flex">-->
<!--        <Flip3DCard class="flip-card-home bounce" duration="900" v-bind:flip3DCardData="flipCard[0]" />-->
<!--        <Flip3DCard class="flip-card-home bounce" duration="900" v-bind:flip3DCardData="flipCard[1]" />-->
<!--        <Flip3DCard class="flip-card-home bounce" duration="900" v-bind:flip3DCardData="flipCard[2]" />-->
<!--        <Flip3DCard class="flip-card-home bounce" duration="900" v-bind:flip3DCardData="flipCard[3]" />-->
<!--        <Flip3DCard class="flip-card-home bounce" duration="900" v-bind:flip3DCardData="flipCard[4]" />-->
<!--    </div>-->
<!--    <div class="m flex">-->
<!--        <ElevateCard class="flip-card-home bounce" v-bind:elevateCardData="flipCard[0]" />-->
<!--        <ElevateCard class="flip-card-home bounce" v-bind:elevateCardData="flipCard[1]" />-->
<!--        <ElevateCard class="flip-card-home bounce" v-bind:elevateCardData="flipCard[2]" />-->
<!--        <ElevateCard class="flip-card-home bounce" v-bind:elevateCardData="flipCard[3]" />-->
<!--        <ElevateCard class="flip-card-home bounce" v-bind:elevateCardData="flipCard[4]" />-->
<!--    </div>-->
    <Links class="links"/>
  </div>
</template>

<script>
    import {slider} from '../data/data.js';
    import {flipCardData} from '../data/data.js';
    import {elevateCardData} from '../data/data.js';
    import {flip3DCardData} from '../data/data.js';
    import Slider from "../components/Slider";
    import AnimatedWaves from "../components/AnimatedWaves";
    import Links from "../components/Links";
    import FlipCard from "../components/FlipCard";
    import ElevateCard from "../components/ElevateCard";
    import Flip3DCard from "../components/Flip3DCard";
    export default {
        name: "Home",
        components: {Flip3DCard, ElevateCard, FlipCard, Links, AnimatedWaves, Slider},
        data () {
            return {
                slider: slider,
                flipCard: flipCardData,
                flip3DCard: flip3DCardData,
                elevateCardData: elevateCardData,
            }
        },
        mounted() {
            let count = document.querySelectorAll('.bounce').length;
            for(let i = 0; i < count; i++){
              setTimeout(function () {
                if(document.getElementsByClassName("bounce")[0]){
                  document.getElementsByClassName("bounce")[i].classList.add("bounce-in");
                }
              }, i * 100)
            }
        }
    }
</script>

<style scoped>
  .main {
    position: relative;
    width: 100vw;
  }
  .slider-main {
    position: relative;
    flex: 3;
  }
  .slider {
    width: 100vw;
    padding: 3vh var(--main-padding-r-l) var(--animated-waves-height);
  }
  .animated-waves {
    width: 100vw;
  }
  .m {
    flex-direction: row;
    width: 100vw;
    padding: 3vh var(--main-padding-r-l) ;
    justify-content: center;
    flex-wrap: wrap;
  }
  .flip-card-home {
    width: 200px;
    height: 200px;
    opacity: 0;
    margin: 16px;
  }
  .links {
    flex: 1;
    justify-content: flex-end;
  }
  @media screen and (max-width: 864px) {
    .m {
      flex-direction: unset;
      flex-wrap: wrap;
      justify-content: space-evenly;
    }
    .flip-card {
       width: 150px;
       height: 150px;
       margin: 1vh;
     }
    .elevate-card {
      width: 150px;
      height: 150px;
      margin: 1vh;
     }
    .flip-card-3d-home {
      width: 150px;
      height: 150px;
      margin: 1vh;
     }
  }
</style>

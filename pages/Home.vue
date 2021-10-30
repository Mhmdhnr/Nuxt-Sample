<template>
  <div class="main flex flex-column">
    <div class="flex slider-main">
      <Slider class="slider" v-bind:slider="slider[0]"/>
      <AnimatedWaves class="animated-waves"/>
    </div>
    <div class="m flex">
        <FlipCard class="flip-card" duration="500" v-bind:flipCardData=flipCard[0] />
        <FlipCard class="flip-card" duration="500" v-bind:flipCardData=flipCard[1] />
        <FlipCard class="flip-card" duration="500" v-bind:flipCardData=flipCard[2] />
        <FlipCard class="flip-card" duration="500" v-bind:flipCardData=flipCard[3] />
    </div>
    <div class="m flex">
        <ElevateCard class="elevate-card" v-bind:elevateCardData="elevateCardData[0]" />
        <ElevateCard class="elevate-card" v-bind:elevateCardData="elevateCardData[1]" />
        <ElevateCard class="elevate-card" v-bind:elevateCardData="elevateCardData[2]" />
        <ElevateCard class="elevate-card" v-bind:elevateCardData="elevateCardData[3]" />
    </div>
    <Links class="links"/>
  </div>
</template>

<script>
    import {slider} from '../data/data.js';
    import {flipCardData} from '../data/data.js';
    import {elevateCardData} from '../data/data.js';
    import Slider from "../components/Slider";
    import AnimatedWaves from "../components/AnimatedWaves";
    import Links from "../components/Links";
    import FlipCard from "../components/FlipCard";
    import ElevateCard from "../components/ElevateCard";
    export default {
        name: "Home",
        components: {ElevateCard, FlipCard, Links, AnimatedWaves, Slider},
        data () {
            return {
                slider: slider,
                flipCard: flipCardData,
                elevateCardData: elevateCardData,
            }
        },
        mounted() {
            console.log(flipCardData)
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
    flex: 6;
    flex-direction: row;
    width: 100vw;
    padding: 3vh var(--main-padding-r-l) ;
    justify-content: space-between;
  }
  .flip-card {
    width: calc(100% / 4 - 2vw);
    height: 200px;
  }
  .elevate-card {
    width: calc(100% / 4 - 2vw);
    height: 200px;
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
       width: 40%;
       height: 150px;
       margin: 1vh;
     }
    .elevate-card {
      width: 40%;
      height: 150px;
      margin: 1vh;
     }
  }
</style>

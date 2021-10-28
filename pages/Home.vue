<template>
  <div class="main flex flex-column">
    <div class="flex slider-main">
      <Slider class="slider" v-bind:slider="slider[0]"/>
      <AnimatedWaves class="animated-waves"/>
    </div>
    <div class="m flex flex-row">
      <NuxtLink class="flip-card" to="LinearChart">
        <FlipCard  duration=300 axis="X" :id="flipCard[0].id" v-bind:flipCardData=flipCard[0] />
      </NuxtLink>
      <NuxtLink class="flip-card" to="LinearChart">
        <FlipCard duration=300 axis="Y" :id="flipCard[1].id" v-bind:flipCardData=flipCard[1] />
      </NuxtLink>
      <NuxtLink class="flip-card" to="LinearChart">
        <FlipCard duration=300 axis="X" :id="flipCard[2].id" v-bind:flipCardData=flipCard[2] />
      </NuxtLink>
      <NuxtLink class="flip-card" to="LinearChart">
        <FlipCard duration=300 axis="Y" :id="flipCard[3].id" v-bind:flipCardData=flipCard[3] />
      </NuxtLink>
    </div>
    <Links class="links"/>
  </div>
</template>

<script>
    import {slider} from '../data/data.js';
    import {flipCardData} from '../data/data.js';
    import Slider from "../components/Slider";
    import AnimatedWaves from "../components/AnimatedWaves";
    import Links from "../components/Links";
    import FlipCard from "../components/FlipCard";
    export default {
        name: "Home",
        components: {FlipCard, Links, AnimatedWaves, Slider},
        data () {
            return {
                slider: slider,
                flipCard: flipCardData,
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
    height: 100%;
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
    width: 100vw;
    padding: 3vh var(--main-padding-r-l) var(--animated-waves-height);
    justify-content: space-between;
  }
  .flip-card {
    width: calc(100% / 4 - 2vw);
    height: 250px;
  }
  .links {
    flex: 1;
    justify-content: flex-end;
  }
  @media screen and (max-width: 864px) {
    .links {
      /*display: none;*/
    }
  }
</style>

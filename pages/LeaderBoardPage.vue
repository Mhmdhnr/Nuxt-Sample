<template>
  <div class="main flex flex-column">
    <div class="flex slider-main">
      <Slider class="slider" v-bind:slider="slider[2]" height="35vh" />
      <AnimatedWaves class="animated-waves"/>
    </div>
    <LeaderBoard />
  </div>
</template>

<script>
    import {slider} from '../data/data.js';
    import LeaderBoard from "../components/works/LeaderBoard";
    import Slider from "../components/Slider";
    import AnimatedWaves from "../components/AnimatedWaves";
    export default {
        name: "LeaderBoardPage",
        components: {AnimatedWaves, Slider, LeaderBoard},
        data () {
            return {
              slider: slider
            }
        }
    }
</script>

<style scoped>
  .main {
    /*position: relative;*/
    width: 100vw;
  }
  .slider-main {
    position: relative;
    align-items: unset;
  }
  .slider {
    width: 100vw;
    padding: 3vh var(--main-padding-r-l) var(--animated-waves-height);
  }
  .animated-waves {
    width: 100vw;
  }
</style>

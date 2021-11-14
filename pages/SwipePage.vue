<template>
  <div class="main flex flex-column">
    <div class="flex slider-main">
      <Slider class="slider" v-bind:slider="slider[3]"  height="35vh"/>
      <AnimatedWaves class="animated-waves"/>
    </div>
    <div class="swipe">
      <Swipe />
    </div>

  </div>
</template>

<script>
    import {slider} from '../data/data.js';
    import Slider from "../components/Slider";
    import AnimatedWaves from "../components/AnimatedWaves";
    import Swipe from "../components/Swipe";
    export default {
        name: "SwipePage",
        components: {Swipe, AnimatedWaves, Slider},
        data () {
            return {
                slider: slider,
            }
        }
    }
</script>

<style scoped>
  .main {
    position: relative;
    width: 100vw;
    /*height: 100%;*/
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
  .swipe {
    width: 100%;
    flex: 5;
  }
</style>

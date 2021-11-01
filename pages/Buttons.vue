<template>
  <div class="main flex flex-column">
    <div class="flex slider-main">
      <Slider class="slider" v-bind:slider="slider[3]"  height="45vh"/>
      <AnimatedWaves class="animated-waves"/>
    </div>
    <div class="my-buttons">
      <BtnHoverCover />
      <BtnHoverBorder />
    </div>

  </div>
</template>

<script>
    import {slider} from '../data/data.js';
    import BtnHoverCover from "../components/Buttons/BtnHoverCover";
    import Slider from "../components/Slider";
    import AnimatedWaves from "../components/AnimatedWaves";
    import BtnHoverBorder from "../components/Buttons/BtnHoverBorder";
    export default {
        name: "Buttons",
        components: {BtnHoverBorder, AnimatedWaves, Slider, BtnHoverCover},
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
  .my-buttons {
    flex: 5;
  }
</style>

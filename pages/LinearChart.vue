<template>
  <div class="main flex flex-column">
    <div class="flex slider-main">
      <Slider class="slider" v-bind:slider="slider[1]" />
      <AnimatedWaves class="animated-waves"/>
    </div>
    <LinearChart class="sample" chartId="sample"/>
  </div>
</template>

<script>
    import {slider} from '../data/data.js';
    import LinearChart from "../components/works/LinearChart";
    import AnimatedWaves from "../components/AnimatedWaves";
    export default {
        name: "SomeOfMyWorks",
        components: {AnimatedWaves, LinearChart},
        data(){
            return {
              slider: slider,
              chartId: "sample",
            }
        },

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
  .sample {
    width: 100vw;
    flex: 6;
  }
  @media screen and(max-width: 864px) {
    .slider-main {
    }
  }
</style>

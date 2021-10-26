<template>
  <div class="main flex flex-column">
    <Slider class="slider" v-bind:slider="slider[1]" />
    <AnimatedWaves class="animated-waves"/>
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
  .slider {
    width: 100vw;
    margin: 0 auto -10vh;
    background-color: var(--contrast-color);
  }
  .animated-waves {
    margin-top: 2vh;
    width: 100vw;
  }
  .sample {
    width: 100vw;
  }
</style>

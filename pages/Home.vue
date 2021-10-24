<template>
  <div class="main flex flex-column">
    <Slider class="slider" v-bind:slider="slider[0]"/>
    <AnimatedWaves class="waves" v-bind:container-height="containerHeight"/>
  </div>
</template>

<script>
    import {slider} from '../data/data.js';
    import Slider from "../components/Slider";
    import AnimatedWaves from "../components/AnimatedWaves";
    export default {
        name: "Home",
        components: {AnimatedWaves, Slider},
        data () {
            return {
                containerHeight: "0",
                slider: slider,
            }
        },
        mounted() {
        }
    }
</script>

<style scoped>
  .main {
    position: relative;
    width: 100vw;
  }
  .slider {
    width: 100vw;
    margin: 0 auto -16vh auto;
    background-color: var(--contrast-color);
  }
  .waves {
  }
</style>

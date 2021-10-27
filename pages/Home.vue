<template>
  <div class="main flex flex-column">
    <div class="flex slider-main">
      <Slider class="slider" v-bind:slider="slider[0]"/>
      <AnimatedWaves class="animated-waves"/>
    </div>
    <div class="m">

    </div>
    <Links class="links"/>
  </div>
</template>

<script>
    import {slider} from '../data/data.js';
    import Slider from "../components/Slider";
    import AnimatedWaves from "../components/AnimatedWaves";
    import Links from "../components/Links";
    export default {
        name: "Home",
        components: {Links, AnimatedWaves, Slider},
        data () {
            return {
                slider: slider,
            }
        },
        mounted() {
            console.log("from Home")
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
    flex: 4;
  }
  .links {
    max-height: 5vh;
    flex: 1;
    justify-content: flex-end;
  }
  @media screen and (max-width: 864px) {
    .links {
      /*display: none;*/
    }
  }
</style>

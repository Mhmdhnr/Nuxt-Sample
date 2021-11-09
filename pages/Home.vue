<template>
  <div class="main flex flex-column">
    <div class="flex slider-main">
      <Slider class="slider" v-bind:slider="slider[0]" height="50vh"/>
      <AnimatedWaves class="animated-waves"/>
    </div>
    <WorksCard />
    <Links class="links"/>
  </div>
</template>

<script>
    import {slider} from '../data/data.js';
    import Slider from "../components/Slider";
    import AnimatedWaves from "../components/AnimatedWaves";
    import Links from "../components/Links";
    import WorksCard from "../components/WorksCard";
    export default {
        name: "Home",
        components: {WorksCard, Links, AnimatedWaves, Slider},
        data () {
            return {
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
  .links {
    justify-content: flex-end;
  }
  @media screen and (max-width: 864px) {
    .m {
      flex-direction: unset;
      flex-wrap: wrap;
      justify-content: space-evenly;
    }
    .flip-card-home {
       width: 150px;
       height: 150px;
     }
  }
</style>

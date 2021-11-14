<template>
  <div class="page flex flex-column">
    <div class="flex slider-main">
      <Slider class="slider" v-bind:slider="slider[4]" height="35vh"/>
      <AnimatedWaves class="animated-waves"/>
    </div>
    <Test v-on:submit="submit" testId="2"/>
  </div>
</template>

<script>
    import apiServices from "../api/apiServices";
    import {slider} from "../data/data";
    import Test from "../components/Test";
    import Slider from "../components/Slider";
    import AnimatedWaves from "../components/AnimatedWaves";
    export default {
        name: "Raven",
        components: {AnimatedWaves, Slider, Test},
        data() {
            return {
                slider: slider,
            }
        },
        methods: {
            submit({choices}) {
                apiServices.methods.postRavenResponse(choices).then(response => {
                    console.log(response);
                    this.$router.push({name:'RavenResult', params:{iq: response.iq}});
                })
            }
        }
    }
</script>

<style scoped>
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

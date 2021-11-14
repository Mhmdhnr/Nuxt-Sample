<template>
  <div class="flex flex-column">
    <Slider v-bind:slider="slider[1]" />
    <LinearChart class="sample" chartId="sample"/>
  </div>
</template>

<script>
    import {slider} from '../data/data.js';
    import LinearChart from "../components/LinearChart";
    import Slider from "../components/Slider";
    export default {
        name: "LinearChartPage",
        components: {Slider, LinearChart},
        data(){
            return {
              slider: slider,
              chartId: "sample",
            }
        },

    }
</script>

<style scoped>
  .sample {
    width: 100vw;
    flex: 6;
  }
</style>

<template>
  <div class="flex flex-column">
    <Slider v-bind:slider="slider[3]" />
    <Swipe />

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
</style>

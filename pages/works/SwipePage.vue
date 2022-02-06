<template>
  <div class="flex flex-column">
    <Slider v-bind:slider="slider[3]" />
    <Swipe />

  </div>
</template>

<script>
    import {slider} from '../../data/data.js';
    import Slider from "../../components/fun/Slider";
    import AnimatedWaves from "../../components/fun/AnimatedWaves";
    import Swipe from "../../components/works/Swipe";
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

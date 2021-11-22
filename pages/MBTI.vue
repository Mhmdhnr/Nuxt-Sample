<template>
  <div class="flex flex-column">
    <Slider v-bind:slider="slider[0]" />
    <Test :mustAnsweredAll="true"  v-on:submit="submit" testId="1"/>
  </div>
</template>

<script>
    import {slider} from "../data/data";
    import Test from "../components/Test";
    import Slider from "../components/Slider";
    export default {
        name: "MBTI",
        components: {Slider, Test},
        data() {
            return {
                slider: slider,
            }
        },
        methods: {
            submit({choices}) {
                console.log(choices)
            }
        }
    }
</script>

<style scoped>
</style>

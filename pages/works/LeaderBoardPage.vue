<template>
  <div class="flex flex-column">
    <Slider v-bind:slider="slider[2]" />
    <LeaderBoard />
  </div>
</template>

<script>
    import {slider} from '../../data/data.js';
    import LeaderBoard from "../../components/works/LeaderBoard";
    import Slider from "../../components/fun/Slider";
    export default {
        name: "LeaderBoardPage",
        components: {Slider, LeaderBoard},
        data () {
            return {
              slider: slider
            }
        }
    }
</script>

<style scoped>
</style>

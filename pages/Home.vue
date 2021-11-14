<template>
  <div class="flex flex-column">
    <Slider v-bind:slider="slider[0]" />
    <WorksCard />
    <Links class="links"/>
  </div>
</template>

<script>
    import {slider} from '../data/data.js';
    import Slider from "../components/Slider";
    import Links from "../components/Links";
    import WorksCard from "../components/WorksCard";
    export default {
        name: "Home",
        components: {WorksCard, Links, Slider},
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
  .links {
    justify-content: flex-end;
  }
  @media screen and (max-width: 864px) {
  }
</style>

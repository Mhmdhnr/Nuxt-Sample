<template>
  <div class="flex flex-column">
    <Slider v-bind:slider="slider[0]" />
<!--    <Carousel3D class="carousel-3d-main">-->
<!--      <div >1</div>-->
<!--      <div >2</div>-->
<!--      <div >3</div>-->
<!--      <div >4</div>-->
<!--      <div >5</div>-->
<!--      <div >6</div>-->
<!--    </Carousel3D>-->
<!--    <Carousel3dFlat class="carousel-3d-flat-main">-->
<!--      <div >1</div>-->
<!--      <div >2</div>-->
<!--      <div >3</div>-->
<!--      <div >4</div>-->
<!--      <div >5</div>-->
<!--      <div >6</div>-->
<!--    </Carousel3dFlat>-->
    <WorksCard />
    <Links class="links"/>
  </div>
</template>

<script>
    import {workCards} from '../data/data.js';
    import {slider} from '../data/data.js';
    import Slider from "../components/Slider";
    import Links from "../components/Links";
    import WorksCard from "../components/WorksCard";
    import Carousel3D from "../components/carousel3D";
    import FlipCard from "../components/FlipCard";
    import Carousel3dFlat from "../components/Carousel3dFlat";
    export default {
        name: "Home",
        components: {Carousel3dFlat, FlipCard, Carousel3D, WorksCard, Links, Slider},
        data () {
            return {
                slider: slider,
                workCards: workCards,
            }
        },
        mounted() {

        }
    }
</script>

<style scoped>
  .carousel-3d-flat-main {
    width: 500px;
    height: 350px;
  }
  .carousel-3d-main {
    width: 250px;
    height: 250px;
  }
  .links {
    justify-content: flex-end;
  }
  @media screen and (max-width: 864px) {
  }
</style>

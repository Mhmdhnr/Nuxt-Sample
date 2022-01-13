<template>
  <div class="flex flex-column">
    <Slider v-bind:slider="slider[0]" />
    <Carousel3dFlat class="carousel-3d-flat-main">
      <FlipCard duration="500" v-bind:cardData="workCards[6]" class="carousel-element"/>
      <FlipCard duration="500" v-bind:cardData="workCards[4]" class="carousel-element"/>
      <FlipCard duration="500" v-bind:cardData="workCards[0]" class="carousel-element"/>
      <FlipCard duration="500" v-bind:cardData="workCards[1]" class="carousel-element"/>
      <FlipCard duration="500" v-bind:cardData="workCards[2]" class="carousel-element"/>
      <FlipCard duration="500" v-bind:cardData="workCards[7]" class="carousel-element"/>
      <FlipCard duration="500" v-bind:cardData="workCards[3]" class="carousel-element"/>
      <FlipCard duration="500" v-bind:cardData="workCards[5]" class="carousel-element"/>
    </Carousel3dFlat>

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
    import Flip3DCard from "../components/Flip3DCard";
    import Loading from "../components/Loading";
    export default {
        name: "Home",
        components: {Loading, Flip3DCard, Carousel3dFlat, FlipCard, Carousel3D, WorksCard, Links, Slider},
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
    margin: 9vh;
    width: 300px;
    height: 300px;
  }
  .carousel-3d-main {
    margin: 9vh;
    width: 300px;
    height: 300px;
  }
  .links {
    justify-content: flex-end;
  }
  @media screen and (max-width: 864px) {
    .carousel-3d-flat-main {
      width: 200px;
      height: 300px;
    }
    .carousel-3d-main {
      width: 200px;
      height: 300px;
    }
  }
</style>

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
      <FlipCard duration="500" v-bind:cardData="workCards[8]" class="carousel-element"/>
      <FlipCard duration="500" v-bind:cardData="workCards[3]" class="carousel-element"/>
      <FlipCard duration="500" v-bind:cardData="workCards[5]" class="carousel-element"/>
    </Carousel3dFlat>

    <Links class="links"/>
  </div>
</template>

<script>
    import {workCards} from '../data/data.js';
    import {slider} from '../data/data.js';
    import Slider from "../components/fun/Slider";
    import Links from "../components/layout/Links";
    import Carousel3D from "../components/carousel/carousel3D";
    import FlipCard from "../components/cards/FlipCard";
    import Carousel3dFlat from "../components/carousel/Carousel3dFlat";
    import Flip3DCard from "../components/cards/Flip3DCard";
    import Loading from "../components/fun/Loading";
    export default {
        name: "Home",
        components: {Loading, Flip3DCard, Carousel3dFlat, FlipCard, Carousel3D, Links, Slider},
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
    margin: 7vh;
    width: 300px;
    height: 320px;
  }
  .carousel-3d-main {
    margin: 9vh;
    width: 300px;
    height: 300px;
  }
  .links {
    justify-content: flex-end;
    position: fixed;
    bottom: 0;
  }
  @media screen and (max-width: 864px) {
    .carousel-3d-flat-main {
      width: 200px;
      height: 200px;
      margin: 10vh;
    }
  }
</style>

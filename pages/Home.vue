<template>
  <div class="flex flex-column">
    <Slider v-bind:slider="slider[0]" />
<!--    <Carousel3D class="carousel-3d-main">-->
<!--      <FlipCard duration="500" v-bind:cardData="workCards[0]"/>-->
<!--      <FlipCard duration="500" v-bind:cardData="workCards[1]"/>-->
<!--      <FlipCard duration="500" v-bind:cardData="workCards[2]"/>-->
<!--      <FlipCard duration="500" v-bind:cardData="workCards[3]"/>-->
<!--      <FlipCard duration="500" v-bind:cardData="workCards[4]"/>-->
<!--    </Carousel3D>-->
    <Carousel3dFlat class="carousel-3d-flat-main">
      <FlipCard duration="500"  v-bind:cardData="workCards[0]"/>
      <FlipCard duration="500" v-bind:cardData="workCards[1]"/>
      <FlipCard duration="500" v-bind:cardData="workCards[2]"/>
      <FlipCard duration="500" v-bind:cardData="workCards[3]"/>
      <FlipCard duration="500" v-bind:cardData="workCards[4]"/>
      <FlipCard duration="500" v-bind:cardData="workCards[5]"/>
    </Carousel3dFlat>
<!--    <Carousel3dFlat class="carousel-3d-flat-main">-->
<!--      <Flip3DCard duration="500"  v-bind:cardData="workCards[0]"/>-->
<!--      <Flip3DCard duration="500" v-bind:cardData="workCards[1]"/>-->
<!--      <Flip3DCard duration="500" v-bind:cardData="workCards[2]"/>-->
<!--      <Flip3DCard duration="500" v-bind:cardData="workCards[3]"/>-->
<!--      <Flip3DCard duration="500" v-bind:cardData="workCards[4]"/>-->
<!--    </Carousel3dFlat>-->
<!--    <WorksCard />-->
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
    export default {
        name: "Home",
        components: {Flip3DCard, Carousel3dFlat, FlipCard, Carousel3D, WorksCard, Links, Slider},
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

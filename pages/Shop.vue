<template>
    <div class="shop flex flex-column">
      <div class="flex slider-main">
        <Slider class="slider" v-bind:slider="slider[5]" height="35vh"/>
        <AnimatedWaves class="animated-waves"/>
      </div>
      <ImageSlider class="gallery" :spec="this.specs[0]"/>
    </div>
</template>

<script>
    import ImageSlider from "../components/ImageSlider";
    import {slider} from "../data/data";

    export default {
        name: "Shop",
        data() {
            return{
                specs: [
                    {
                        productName: "shoeCollection1",
                        imageNames : ["shoe1", "shoe2"]
                    },
                    {
                        productName: "shoeCollection2",
                        imageNames : ["shoe4", "shoe3"]
                    },
                ],
                slider: slider
            }
        },
        mounted() {
        }
    }
</script>

<style scoped>
  .shop {
    width: 1080px;
    perspective: 1000px;
  }
  .gallery {
    width: 800px;
  }
  .slider-main {
    position: relative;
    align-items: unset;
  }
  .slider {
    width: 100vw;
    padding: 3vh var(--main-padding-r-l) var(--animated-waves-height);
  }
  .animated-waves {
    width: 100vw;
  }
  @media screen and(max-width: 864px) {
    .gallery {
      width: 300px;
    }
  }
</style>

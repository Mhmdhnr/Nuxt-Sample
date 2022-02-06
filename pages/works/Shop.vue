<template>
    <div class="shop flex flex-column">
      <Slider v-bind:slider="slider[5]" />
      <ImageSlider class="gallery" :spec="this.specs[0]"/>
    </div>
</template>

<script>
    import ImageSlider from "../../components/works/ImageSlider";
    import {slider} from "../../data/data";
    import Slider from "../../components/fun/Slider";

    export default {
        name: "Shop",
        components: {ImageSlider, Slider},
        data() {
            return{
                specs: [
                    {
                        productName: "shoeCollection1",
                        imageNames : ["shoe1", "shoe2"]
                    },
                    {
                        productName: "shoeCollection2",
                        imageNames : ["shoe4", "shoe2"]
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
  @media screen and(max-width: 864px) {
    .gallery {
      width: 300px;
    }
  }
</style>

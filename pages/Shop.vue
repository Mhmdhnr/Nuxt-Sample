<template>
    <div class="shop flex flex-column">
      <ImageSlider class="gallery" :spec="this.specs[0]"/>
      <ImageSlider class="gallery" :spec="this.specs[1]"/>
    </div>
</template>

<script>
    import ImageSlider from "../components/ImageSlider";
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
                ]
            }
        },
        mounted() {
        }
    }
</script>

<style scoped>
  .shop {
    width: 1080px;
    justify-content: space-evenly;
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

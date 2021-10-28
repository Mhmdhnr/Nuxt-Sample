<template>
  <div class="flip-card-main">
    <div class="flip-card"  :id="flipCardData.id">
      <div class="card-front">
        <img class="image" :src="flipCardData.front.imageURL">
      </div>
      <div class="card-back flex">
        <span v-show="this.$store.state.fa">
          {{flipCardData.back.title.fa}}
        </span>
        <span v-show="!this.$store.state.fa">
          {{flipCardData.back.title.en}}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
    import {flipCardData} from "../data/data";

    export default {
        name: "FlipCard",
        props:['duration', 'axis', 'flipCardData'],
        data() {
          return {
          }
        },
        methods: {
        },
        mounted() {
            let id = this.flipCardData.id;
            let flipCard = document.getElementById(id);
            console.log(flipCard);
            flipCard.style.transition = this.duration + "ms ";
            flipCard.style.transitionTimingFunction = "cubic-bezier(.175, .885, .32, 1.4)";
        }
    }
</script>

<style scoped>
  .flip-card-main {
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 1;
    perspective: 1000px;
  }
  .flip-card {
    width: inherit;
    height: inherit;
    position: relative;
    transform-style: preserve-3d;
    border-radius: 8px;
    box-shadow: 0 0 20px 5px rgba(100,100,100,0.2);
  }
  .flip-card-main:hover .flip-card, .flip-card-main:focus .flip-card {
    transform: rotateY(180deg);
  }
  .card-front, .card-back {
     width: 100%;
     height: 100%;
     border-radius: 8px;
     position: absolute;
     top: 0;
     left: 0;
     overflow: hidden;
     background: var(--contrast-color);
     backface-visibility: hidden;
     display: flex;
     justify-content: center;
     align-items: center;
   }
  .card-front {
    transform: rotateY(0deg) rotateX(0deg);
    z-index: 2;
  }
  .card-back {
    transform: rotateY(180deg);
    z-index: 1;
    font-size: 1.5em;
    text-align: center;
  }
  .card-back > span {
    color: var(--text-color);
  }
  .image {
    width: 90%;
    height: 90%;
  }

</style>

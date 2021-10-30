<template>
  <div class="flip-card-main">
    <div class="flip-card"  :id="flipCardData.id">
      <div class="card-front">
        <img class="image" :src="flipCardData.front.imageURL">
<!--        <img class="image" src="~/assets/me.svg">-->
      </div>
      <div class="card-back flex flex-column">
        <span v-show="this.$store.state.fa">
          {{flipCardData.back.title.fa}}
        </span>
        <span v-show="!this.$store.state.fa">
          {{flipCardData.back.title.en}}
        </span>
        <b-btn class="button" :to="flipCardData.back.pageLink">
          <span v-show="this.$store.state.fa"> ببینم </span>
          <span v-show="!this.$store.state.fa"> Let's see </span>
        </b-btn>
      </div>
    </div>
  </div>
</template>

<script>
    import {flipCardData} from "../data/data";

    export default {
        name: "FlipCard",
        props:['duration', 'flipCardData'],
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
  .button {
    background-color: var(--bg-color);
    border-radius: 4px;
    border: none;
    padding: 1vh 2vw;
    box-shadow: 0 0 5px 2px rgba(100,100,100,0.2);
  }
  .button > span {
    font-size: 1.2em;

  }
  .button:hover, .button:focus {
    background-color: var(--primary-color);
  }
  .button:hover > span, .button:focus > span {
    color: var(--bg-color);
  }
  .flip-card-main {
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 1;
    perspective: 1000px;
  }
  .flip-card {
    width: 100%;
    height: 100%;
    position: relative;
    transform-style: preserve-3d;
    border-radius: 8px;
  }
  .flip-card-main:hover .flip-card, .flip-card-main:focus .flip-card {
    transform: rotateY(180deg);
  }
  .card-front, .card-back {
    box-shadow: 0 0 20px 5px rgba(100,100,100,0.2);
     width: 100%;
     height: 100%;
     border-radius: 8px;
     padding: 1vh 1vw;
     position: absolute;
     top: 0;
     left: 0;
     overflow: hidden;
     background: var(--bg-color);
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
    font-size: 1.2em;
    text-align: center;
    justify-content: space-around;
  }
  .card-back > span {
    color: var(--text-color);
  }
  .image {
    width: 90%;
    height: 90%;
  }
  @media screen and (max-width: 864px) {
    .card-back {
      font-size: 0.8em;
    }
    .button {
       padding: 1vh 6vw;
     }
  }

</style>

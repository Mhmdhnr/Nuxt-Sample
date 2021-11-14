<template>
  <div class="flip-card-main">
    <div class="flip-card"  :id="cardData.id">
      <div class="card-front">
        <img class="image" :src="require(`~/assets/images/${cardData.front.imageUrl}`)">
      </div>
      <div class="card-back flex flex-column">
        <span v-show="this.$store.state.fa">
          {{cardData.back.title.fa}}
        </span>
        <span v-show="!this.$store.state.fa">
          {{cardData.back.title.en}}
        </span>
        <b-btn class="button" :to="cardData.back.pageLink">
          <span v-show="this.$store.state.fa"> ببینم </span>
          <span v-show="!this.$store.state.fa"> Let's see </span>
        </b-btn>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "FlipCard",
        props:['duration', 'cardData'],
        data() {
          return {
          }
        },
        methods: {
        },
        mounted() {
            let id = this.cardData.id;
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
    padding: 0;
    z-index: 2;
  }
  .card-back {
    transform: rotateY(180deg);
    padding: 2vh 2vw;
    z-index: 1;
    font-size: 1em;
    text-align: center;
    justify-content: space-around;
  }
  .card-back > span {
    color: var(--text-color);
  }
  .image {
    width: 100%;
    height: 100%;
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

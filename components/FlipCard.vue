<template>
  <div class="flip-card-main" :id="`flip-main${cardData.id}`">
    <div class="flip-card"  :id="cardData.id">
      <div class="card-front flex flex-column">
        <img class="image" :src="require(`~/assets/images/${cardData.front.imageUrl}`)">
        <span v-if="this.fa" class="front-span">{{cardData.front.text.fa}}</span>
        <span v-if="!this.fa" class="front-span">{{cardData.front.text.en}}</span>
      </div>
      <div class="card-back flex flex-column">
        <div class="flex flex-column">
          <span class="back-title" v-if="this.fa">{{cardData.back.title.fa}}</span>
          <span class="back-title" v-if="!this.fa">{{cardData.back.title.en}}</span>
          <span class="back-des" v-if="this.fa">{{cardData.back.description.fa}}</span>
          <span class="back-des" v-if="!this.fa">{{cardData.back.description.en}}</span>
        </div>
        <b-btn class="button" :to="cardData.back.pageLink">
          <span v-if="this.fa"> کلیک کنید </span>
          <span v-if="!this.fa"> Click Here </span>
        </b-btn>
      </div>
    </div>
  </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        name: "FlipCard",
        props:['duration', 'cardData'],
        data() {
          return {
          }
        },
        methods: {
        },
        computed: mapState(['fa']),
        mounted() {
            let id = this.cardData.id;
            let flipCard = document.getElementById(id);
            flipCard.style.transition = this.duration + "ms ";
            flipCard.style.transitionTimingFunction = "cubic-bezier(.175, .885, .32, 1.4)";
            // flipCard.parentElement.onmouseover = function () {
            //     flipCard.classList.add('flip')
            // };
            // flipCard.parentElement.onmouseleave = function () {
            //     flipCard.classList.remove('flip')
            // };
        }
    }
</script>

<style scoped>
  .front-span {
    margin: 1vh 0;
    font-size: 0.8em;
  }
  .back-des {
    font-size: 0.8em;
    margin-top: 2vh ;
  }
  .button {
    background-color: var(--bg-color);
    border-radius: 4px;
    border: none;
    padding: 1vh 1vw;
    box-shadow: 0 0 5px 2px rgba(100,100,100,0.2);
  }
  .button > span {
    font-size: 1em;

  }
  .button:hover, .button:focus {
    background-color: var(--text-color);
  }
  .button:hover > span, .button:focus > span {
    color: var(--bg-color);
  }
  .flip-card-main {
    /*position: relative;*/
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
  /*.flip {*/
  /*  transform: rotateY(180deg);*/
  /*}*/
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
    background-color: var(--primary-color);
  }
  .card-back > span {
    color: var(--text-color);
  }
  .image {
    width: 100%;
    height: 80%;
  }
  @media screen and (max-width: 864px) {
    .card-back {
      font-size: 0.8em;
    }
    .button {
       padding: 1vh 6vw;
    }
    .front-span {
      margin: 1vh 0;
      font-size: 0.6em;
    }
    .image {
      width: 80%;
      height: 70%;
    }
    .back-title {
      font-size: 0.9em;
    }
    .back-des {
      font-size: 0.7em;
      margin-top: 2vh ;
    }
  }

</style>

<template>
  <div class="flip-card-3d-main">
    <div class="flip-card-3d"  :id="flip3DCardData.id">
      <div class="card-3d-front">
        <img class="image" :src="require(`@/assets/images/${flip3DCardData.front.imageUrl}`)">
        <!--        <img class="image" src="~/assets/me.svg">-->
      </div>
      <div class="card-3d-back flex flex-column">
        <span v-show="this.$store.state.fa">
          {{flip3DCardData.back.title.fa}}
        </span>
        <span v-show="!this.$store.state.fa">
          {{flip3DCardData.back.title.en}}
        </span>
        <b-btn class="button" :to="flip3DCardData.back.pageLink">
          <span v-show="this.$store.state.fa"> ببینم </span>
          <span v-show="!this.$store.state.fa"> Let's see </span>
        </b-btn>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Flip3DCard",
        props:['duration', 'flip3DCardData'],
        data() {
            return {
            }
        },
        methods: {
        },
        mounted() {
            let id = this.flip3DCardData.id;
            let flipCard = document.getElementById(id);
            console.log(flipCard);
            flipCard.style.transition = this.duration + "ms ";
            flipCard.style.transitionTimingFunction = "cubic-bezier(.175, .885, .32, 1.1)";
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
    .flip-card-3d-main {
      width: 100%;
      height: 100%;
      position: relative;
      z-index: 1;
      perspective: 1000px;
      transition: 300ms ease;
    }
    .flip-card-3d {
      width: 100%;
      height: 100%;
      position: relative;
      transform-style: preserve-3d;
      transform: rotateX(70deg) rotateY(20deg) rotateZ(-60deg);
      transform-origin: center;
      border-radius: 8px;
      box-shadow: -100px 50px 20px 5px rgba(100,100,100,0.15);
    }
    .flip-card-3d-main:hover .flip-card-3d, .flip-card-3d-main:focus .flip-card-3d {
      transform: rotateX(0deg) rotateY(-180deg) rotateZ(0deg);
      box-shadow: 0 0 20px 5px rgba(100,100,100,0.15);
    }
    .card-3d-front, .card-3d-back {
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
    .card-3d-front {
      transform: rotateY(0deg);
      padding: 0;
      z-index: 2;
    }
    .card-3d-back {
      transform: rotateY(180deg);
      padding: 2vh 2vw;
      z-index: 1;
      font-size: 1em;
      text-align: center;
      justify-content: space-around;
    }
    .card-3d-back > span {
      color: var(--text-color);
    }
    .image {
      width: 100%;
      height: 100%;
    }
    @media screen and (max-width: 864px) {
      .card-3d-back {
        font-size: 0.8em;
      }
      .button {
        padding: 1vh 6vw;
      }
    }
</style>

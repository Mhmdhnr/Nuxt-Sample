<template>
  <div class="flip-card-main">
    <div class="solid" @mouseover="flip" @mouseout="flipBack">
    </div>
    <div class="front" :id="'front' + flipCardData.id">
      <img class="image" :src="flipCardData.front.imageURL">
    </div>
    <div class="back flex" :id="'back' + flipCardData.id">
      <span v-show="this.$store.state.fa">
        {{flipCardData.back.title.fa}}
      </span>
      <span v-show="!this.$store.state.fa">
        {{flipCardData.back.title.en}}
      </span>
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
          flip(){
              let axis = this.axis;
              let id = this.flipCardData.id;
              let front = document.getElementById(`front${id}`);
              let back = document.getElementById(`back${id}`);
              back.classList.remove("show" + axis);
              front.classList.add("hide" + axis);
              setTimeout(function () {
                back.classList.remove("hide" + axis);
                back.classList.add("show" + axis);
              }, this.duration)
          },
          flipBack(){
              let axis = this.axis;
              let id = this.flipCardData.id;
              let front = document.getElementById(`front${id}`);
              let back = document.getElementById(`back${id}`);
              back.classList.remove("show" + axis);
              back.classList.add("hide" + axis);
              setTimeout(function () {
                front.classList.remove("hide" + axis);
                front.classList.add("show" + axis);
              }, this.duration)
          }
        },
        mounted() {
            let id = this.flipCardData.id;
            let front = document.getElementById(`front${id}`);
            let back = document.getElementById(`back${id}`);
            front.style.animationDuration = this.duration + "ms";
            back.style.animationDuration = this.duration + "ms";
        }
    }
</script>

<style scoped>
  .flip-card-main {
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 10;
  }
  .image {
    width: 100%;
    height: 100%;
  }
  .front, .back, .solid {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 8px;
    box-shadow: 0 0 10px 3px rgba(100,100,100,0.2);
    backface-visibility: hidden;
  }
  .solid {
    z-index: 5;
    box-shadow: none;
  }
  .front {
    background-color: var(--contrast-color);
    z-index: 4;
  }
  .back {
    background: var(--contrast-color);
    transform: rotateX(90deg);
    justify-content: center;
    font-size: 1.5em;
    color: var(--text-color);
  }
  .showX{
    -webkit-animation: showX;
    -webkit-animation-timing-function: cubic-bezier(.175, .885, .32, 2);
    -webkit-animation-fill-mode: forwards;
  }
  .hideX{
    -webkit-animation: hideX;
    -webkit-animation-timing-function: cubic-bezier(.1,-0.41,.92,.47);
    -webkit-animation-fill-mode: forwards;
  }
  .showY{
    -webkit-animation: showY;
    -webkit-animation-timing-function: cubic-bezier(.175, .885, .32, 2);
    -webkit-animation-fill-mode: forwards;
  }
  .hideY{
    -webkit-animation: hideY;
    -webkit-animation-timing-function: cubic-bezier(.1,-0.41,.92,.47);
    -webkit-animation-fill-mode: forwards;
  }
  @-webkit-keyframes showX {
    from{
      transform: rotateX(90deg) scaleX(1);
    }
    to{
      transform: rotateX(0deg) scaleX(1);
    }
  }
  @-webkit-keyframes hideX {
    from{
      transform: rotateX(0deg) scaleX(1);
    }
    to{
      transform: rotateX(90deg) scaleX(1);
    }
  }
  @-webkit-keyframes showY {
    from{
      transform: rotateY(90deg) scale(1);
    }
    to{
      transform: rotateY(0deg) scale(1);
    }
  }
  @-webkit-keyframes hideY {
    from{
      transform: rotateY(0deg) scale(1);
    }
    to{
      transform: rotateY(90deg) scale(1);
    }
  }


</style>

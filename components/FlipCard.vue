<template>
  <div class="flip-card">
    <div class="solid" @mouseover="flip" @mouseout="flipBack">

    </div>
    <div class="front" :id="'front' + flipCardId">

    </div>
    <div class="back" :id="'back' + flipCardId">

    </div>
  </div>
</template>

<script>
    export default {
        name: "FlipCard",
        props:['duration', 'axis', 'flipCardId'],
        data() {
          return {
              duration: this.duration,
          }
        },
        methods: {
          flip(){
              let axis = this.axis;
              let id = this.flipCardId;
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
              let id = this.flipCardId;
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
            let id = this.flipCardId;
            let front = document.getElementById(`front${id}`);
            let back = document.getElementById(`back${id}`);
            front.style.animationDuration = this.duration + "ms";
            back.style.animationDuration = this.duration + "ms";
        }
    }
</script>

<style scoped>
  .flip-card {
    width: calc(100% / 3 - 2vw);
    height: 250px;
    position: relative;
    z-index: 10;
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
    background-color: #165ab4;
    z-index: 4;
  }
  .back {
    background-color: #9856aa;
    transform: rotateX(90deg);
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

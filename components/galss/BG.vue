<template>
  <div class="glass-container">
    <div v-for="n in bgCount" :id="`s${n}`" class="bg-square glass"></div>
    <slot />
  </div>
</template>

<script>
    export default {
        name: "BG",
        props:['bgCount', 'bgRangeMin', 'bgRangeMax', 'bgDurationRange'],
        beforeMount() {
            for(let i = 1; i <= this.bgCount; i++) {
                let random = this.getRandom(this.bgRangeMin, this.bgRangeMax);
                let element = document.getElementById("s" + i);
                element.style.width = random + "px";
                element.style.height = random + "px";
                this.randomPosition(element)
            }
        },
        methods: {
            getRandom(min, max){
                return Math.floor(Math.random() * (max - min)) + min
            },
            randomPosition(element) {
                let baseTop = this.getRandom(10, 90);
                let baseLeft = this.getRandom(10, 100);
                element.style.transform = `rotate(${this.getRandom(-180, +180)}deg)`;
                element.style.top = baseTop + "%";
                element.style.left = baseLeft + "%";
                this.randomAnimation(element);
            },
            randomAnimation(element) {
                let currentDuration = this.getRandom(10000, this.bgDurationRange);
                element.style.transition = `all ${currentDuration}ms ease-in-out`;
                element.style.transform = `rotate(${this.getRandom(-180, +180)}deg) translateX(${this.getRandom(-300, 300)}%) translateY(${this.getRandom(-300, 300)}%)`;
                let _this = this;
                setInterval(function () {
                    element.style.transform = `rotate(${_this.getRandom(-180, +180)}deg) translateX(${_this.getRandom(-300, 300)}%) translateY(${_this.getRandom(-300, 300)}%)`;
                }, currentDuration)
            }
        }
    }
</script>

<style scoped>
  .glass-container {
    position: relative;
    display: flex;
    justify-content: center;
    background: rgb(44, 0, 133);
    background: linear-gradient(90deg, rgb(48, 0, 144) 0%, rgb(55, 0, 180) 50%, rgb(47, 8, 128) 100%);
    /*background-position: center;*/
    width: 100vw;
    height: 90vh;
    /*height: auto;*/
    overflow: hidden;
    background-size: 200% 200%;
    -webkit-animation: bg-animation 10s ease infinite;
  }
  .glass {
    backdrop-filter: blur(25px) saturate(120%) ;
    background-color: rgba(255, 255, 255, 0.1);
  }
  .bg-square {
    position: absolute;
    border-radius: 10%;
    transition: all step-end;
    /*backdrop-filter: blur(25px) saturate(120%) ;*/
    /*background: linear-gradient(100deg, rgba(255, 104, 5, 0.5) 0%, rgba(255, 169, 40, 0.5) 100%);*/
    background: linear-gradient(100deg, rgb(255, 147, 216) 0%, rgb(232, 92, 255) 100%);
    box-shadow: 0 4px 12px 0 rgba(40, 40, 40, 0.1);
  }
  @-webkit-keyframes bg-animation {
    0% {
      background-position: 0 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0 50%;
    }
  }
</style>

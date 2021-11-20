<template>
  <div class="flex flex-column">
    <div class="scene">
      <div class="carousel-3d">
        <slot />
      </div>
    </div>
    <div style="margin: 0">
      <button class="next" v-on:click="next()">
        ►
      </button>
      <button class="previous" v-on:click="previous()">
        ◄
      </button>
    </div>
  </div>
</template>

<script>
    export default {
        name: "carousel3D",
        props:[],
        data(){
            return {
                selectedIndex: 0,
                elementsCount: 0,
                zSteps: [],
                xSteps: [],
                translateZ: 0,
            }
        },
        mounted() {
            let carousel3d = document.getElementsByClassName('carousel-3d')[0];
            let carouselElements = carousel3d.querySelectorAll("*");
            this.elementsCount = carouselElements.length;
            let width = carouselElements[0].offsetWidth;
            this.translateZ = Math.round((width / 2) / Math.tan(Math.PI / this.elementsCount));
            console.log(this.translateZ);
            console.log(this.elementsCount);
            // carousel3d.style.transform = `translateZ(${-1 * this.translateZ}px)`;
            for (let i = 1 ; i <= this.elementsCount; i++) {
                let elementAngel = (i - 1) * (360 / this.elementsCount);
                let element = carouselElements[i - 1];
                element.classList.add('carousel-element');
                element.style.transform = `rotateY(${elementAngel}deg) translateZ(${(this.translateZ)}px) translateX(${0}px)`;
            }
        },
        methods: {
            rotateCarousel(){
                let carousel3d = document.getElementsByClassName('carousel-3d')[0];
                console.log(this.selectedIndex * -360 / this.elementsCount);
                // carousel3d.style.transform = `rotateY(${this.selectedIndex * -360 / this.elementsCount}deg) translateZ(${-1 * this.translateZ}px)`
                carousel3d.style.transform = `rotateY(${this.selectedIndex * -360 / this.elementsCount}deg)`
            },
            next() {
                this.selectedIndex ++;
                this.rotateCarousel();
            },
            previous() {
                this.selectedIndex --;
                this.rotateCarousel();
            },
        }
    }
</script>

<style scoped>

  .scene {
    position: relative;
    width: 100%;
    height: 100%;
    perspective: 1000px;
    margin: 3vh 0;
  }
  .carousel-3d {
    position: absolute;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: all 0.8s;
    transition-timing-function: cubic-bezier(.175, .885, .32, 1.4);
  }
  .carousel-element {
    position: absolute;
    width: 80%;
    height: 80%;
    left: 10%;
    top: 10%;
    background-color: #28292c;
    line-height: 116px;
    font-size: 80px;
    font-weight: bold;
    color: white;
    text-align: center;
    transition: all 0.8s;
    transition-timing-function: cubic-bezier(.175, .885, .32, 1.4);
  }
  .next {
  }


</style>

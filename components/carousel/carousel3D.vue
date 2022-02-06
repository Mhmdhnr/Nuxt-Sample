<template>
  <div class="carousel-3d-flat-con flex flex-column" id="swipe-root">
    <div class="scene">
      <div class="carousel-3d">
        <slot />
      </div>
    </div>
    <div class="buttons">
      <button class="next btn" v-on:click="next()">
        ►
      </button>
      <button class="previous btn" v-on:click="previous()">
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
            let element = document.getElementById("swipe-root");
            element.addEventListener("touchstart", this.detectSwipe("swipe-root"));

            let carousel3d = document.getElementsByClassName('carousel-3d')[0]; let elements = [];
            for(let i = 0; i < carousel3d.children.length; i++) {
                elements.push(carousel3d.children[i]);
            }
            this.elementsCount = elements.length;
            let width = elements[0].offsetWidth;
            this.translateZ = Math.round((width / 2) / Math.tan(Math.PI / this.elementsCount));
            // carousel3d.style.transform = `translateZ(${-1 * this.translateZ}px)`;
            for (let i = 1 ; i <= this.elementsCount; i++) {
                let elementAngel = (i - 1) * (360 / this.elementsCount);
                let element = elements[i - 1];
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
            detectSwipe(id) {
                console.log("touch");
                let swipe_det = {};
                swipe_det.sX = 0;
                swipe_det.sY = 0;
                swipe_det.eX = 0;
                swipe_det.eY = 0;
                let min_x = 30;
                let max_x = 60;
                let min_y = 30;
                let max_y = 60;
                let direct = "";
                let ele = document.getElementById(id);
                ele.addEventListener(
                    "touchstart",
                    function (e) {
                        let t = e.touches[0];
                        swipe_det.sX = t.screenX;
                        swipe_det.sY = t.screenY;
                    },
                    false
                );
                ele.addEventListener(
                    "touchmove",
                    function (e) {
                        e.preventDefault();
                        let t = e.touches[0];
                        swipe_det.eX = t.screenX;
                        swipe_det.eY = t.screenY;
                    },
                    false
                );
                ele.addEventListener(
                    "touchend",
                    (e) => {
                        if (
                            (swipe_det.eX - min_x > swipe_det.sX ||
                                swipe_det.eX + min_x < swipe_det.sX) &&
                            swipe_det.eY < swipe_det.sY + max_y &&
                            swipe_det.sY > swipe_det.eY - max_y &&
                            swipe_det.eX > 0
                        ) {
                            if (swipe_det.eX > swipe_det.sX) direct = "r";
                            else direct = "l";
                        }
                        else if (
                            (swipe_det.eY - min_y > swipe_det.sY ||
                                swipe_det.eY + min_y < swipe_det.sY) &&
                            swipe_det.eX < swipe_det.sX + max_x &&
                            swipe_det.sX > swipe_det.eX - max_x &&
                            swipe_det.eY > 0
                        ) {
                            if (swipe_det.eY > swipe_det.sY) direct = "d";
                            else direct = "u";
                        }

                        if (direct !== "") {
                            this.handleSwipe(id, direct);
                        }
                        direct = "";
                        swipe_det.sX = 0;
                        swipe_det.sY = 0;
                        swipe_det.eX = 0;
                        swipe_det.eY = 0;
                    },
                    false
                );
            },
            handleSwipe(el, d) {
                if (d === "l") {
                    this.next()
                } else if (d === "r") {
                    this.previous()
                }
            }
        }
    }
</script>

<style scoped>
  .carousel-3d-flat-con {
    position: relative;
  }
  .buttons {
    display: flex;
    position: absolute;
    width: 100%;
    top: 120px;
    height: 5vh;
  }
  .btn {
    background-color: var(--primary-color);
    color: var(--bg-color);
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  .next {
    position: absolute;
    justify-self: flex-start;
    right: -400px;
  }
  .previous {
    position: absolute;
    justify-self: flex-end;
    left: -400px;
  }

  .scene {
    position: relative;
    width: 100%;
    height: 100%;
    perspective: 1000px;
    /*margin: 3vh 0;*/
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
    transition: all 0.8s;
    transition-timing-function: cubic-bezier(.175, .885, .32, 1.4);
  }
  .next {
  }


</style>

<template>
  <div class="carousel-3d-flat-con flex flex-column" id="swipe-root">
    <div class="scene">
      <div class="carousel-3d-flat">
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
        name: "Carousel3dFlat",
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

            let carousel3d = document.getElementsByClassName('carousel-3d-flat')[0];
            let elements = [];
            for(let i = 0; i < carousel3d.children.length; i++) {
                elements.push(carousel3d.children[i]);
            }
            this.elementsCount = elements.length;
            let width = elements[0].offsetWidth;
            let height = elements[0].offsetHeight;
            let z = width * 1.5;
            let x = width * 1.2;
            if(window.screen.width <= 864){
                x = width / 2;
            }
            this.translateZ = Math.round((width / 2) / Math.tan(Math.PI / this.elementsCount));
            // carousel3d.style.transform = `translateZ(${-1 * this.translateZ}px)`;
            for (let i = 1 ; i <= this.elementsCount; i++) {
                let elementAngel = (i - 1) * (360 / this.elementsCount);
                let transZ = Math.floor(-1 * z * (1 - Math.cos(Math.PI * elementAngel / 180)));
                let transX = Math.floor(x * Math.sin(Math.PI * elementAngel / 180));
                let element = elements[i - 1];
                this.zSteps.push(transZ);
                this.xSteps.push(transX);
                element.classList.add('carousel-element');
                element.style.transform = `translateZ(${Math.floor(transZ)}px) translateX(${Math.floor(transX)}px)`
            }
            // let base = document.getElementById('swipe-root');
            // setInterval(() => {
            //     this.next();
            // }, 10000)
        },
        methods: {
            rotateCarousel(){
                let carousel3d = document.getElementsByClassName('carousel-3d-flat')[0];
                let elements = [];
                for(let i = 0; i < carousel3d.children.length; i++) {
                    elements.push(carousel3d.children[i]);
                }
                for (let i = 0 ; i < this.elementsCount; i++) {
                    let counter = (Math.abs((this.selectedIndex + i)%this.elementsCount));
                    let tranZ = this.zSteps[(counter)];
                    let tranX = this.xSteps[(counter)];
                    let element = elements[(i)%this.elementsCount];
                    element.style.transform = `translateZ(${tranZ}px) translateX(${tranX}px)`
                }
            },
            next() {
                this.selectedIndex ++;
                this.selectedIndex = this.selectedIndex === this.elementsCount? 0:this.selectedIndex;
                this.rotateCarousel();
            },
            previous() {
                this.selectedIndex --;
                this.selectedIndex = this.selectedIndex === -1? this.elementsCount - 1:this.selectedIndex;
                this.rotateCarousel();
            },
            detectSwipe(id) {
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
                    this.previous()
                } else if (d === "r") {
                    this.next()
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
    /*height: 5vh;*/
  }
  .btn {
    background-color: var(--bg-color);
    color: var(--primary-color);
    width: 50px;
    height: 50px;
    border-radius: 10px;
    border: 2px solid var(--primary-color);
    transition: all 50ms;
  }
  .btn:hover {
    background-color: var(--primary-color);
    color: var(--bg-color);
    transition: all 50ms;
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
  .carousel-3d-flat {
    position: absolute;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: all 0.8s;
    transition-timing-function: cubic-bezier(.175, .885, .32, 1.4);
  }
  .carousel-element {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    transition: all 0.5s;
    transition-timing-function: cubic-bezier(.175, .885, .32, 1.2);
  }
</style>

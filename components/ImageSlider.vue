<template>
  <div class="images" v-bind:id="`${spec.productName}images`">
    <img class="base" v-bind:id="`${spec.productName}base`" :src="require(`~/assets/images/${spec.imageNames[0]}.svg`)">
    <img class="second clip" v-bind:id="`${spec.productName}clip`" :src="require(`~/assets/images/${spec.imageNames[1]}.svg`)">
    <div class="controller second" v-bind:id="`${spec.productName}controller`"></div>
  </div>
</template>

<script>
    export default {
        name: "ImageSlider",
        props:['spec'],
        data() {
            return {
            }
        },
        mounted() {
            let rotate = -6;
            let images = document.getElementById(this.spec.productName.toString() + "images");
            images.style.transform = `rotateY(0deg)`;
            let base = document.getElementById(this.spec.productName.toString() + "controller");
            let baseRect = base.getBoundingClientRect();
            if(window.screen.width >= 864){
                let imageWidth = baseRect.width;
                images.style.width = imageWidth + "px";
                let clip = document.getElementById(this.spec.productName.toString() + "clip");
                clip.style.clipPath = `inset(0 ${imageWidth / 2}px 0 0)`;

                base.onmousemove = function (e) {
                    // console.log(imageWidth);
                    clip.style.clipPath = `inset(0 ${ baseRect.right - e.clientX}px 0 0)`;
                    // console.log(rotate + (baseRect.right - e.clientX) / imageWidth * -2 * rotate);
                    images.style.transform = `rotateY(${rotate + (baseRect.right - e.clientX) / imageWidth * -2 * rotate}deg)`;
                };
            } else {
                let imageWidth = 350;
                images.style.width = imageWidth + "px";
                let clip = document.getElementById(this.spec.productName.toString() + "clip");
                clip.style.clipPath = `inset(0 ${imageWidth / 2}px 0 0)`;
                let baseRect = base.getBoundingClientRect();
                // console.log(baseRect);

                base.ontouchstart = function (e) {
                    base.ontouchmove = function (f) {
                        let touch = f.touches[0];
                        // console.log(touch.clientX);
                        clip.style.clipPath = `inset(0 ${ baseRect.right - touch.clientX}px 0 0)`;
                        images.style.transform = `rotateY(${rotate + (baseRect.right - touch.clientX) / imageWidth * -2 * rotate}deg)`;
                    }
                };
            }

        }
    }
</script>

<style scoped>
  .images {
    margin: 4vh auto 0;
    height: auto;
    position: relative;
    border-radius: 8px;
    perspective: 1000px;
    transform-style: preserve-3d;
    transform-origin: bottom;
    /*transform: rotateX(5deg);*/
    /*transition: all 200ms;*/
    box-shadow: 0 0 10px 5px rgba(100,100,100,0.2);
  }
  .base {
    width: 100%;
    height: 100%;
    border-radius: 8px;
  }
  .second {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: 8px;
  }
  .controller {
    z-index: 1000;
  }
</style>

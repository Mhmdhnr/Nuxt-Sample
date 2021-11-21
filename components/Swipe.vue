<template>
  <div class="swipe-main flex flex-column"  id="swipe-root">
    <span v-show="this.$store.state.fa">شما صفحه را به این سمت کشیدید</span>
    <span v-show="!this.$store.state.fa">You have swiped to ...</span>
    <br>
    <span id="message"> ■ </span>
    <br>
    <span v-show="this.$store.state.fa">به نمایش در حالت موبایل بروید و امتحان کنید!</span>
    <span v-show="!this.$store.state.fa">Go to mobile view and test!</span>
  </div>
</template>

<script>
    export default {
        name: "Swipe",
        mounted() {
            let element = document.getElementById("swipe-root");
            element.addEventListener("touchstart", this.detectSwipe("swipe-root"));
        },
        methods: {
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
                let message = document.getElementById("message");
                if (d === "l") {
                    console.log("Left");
                    message.innerText = "◄"
                } else if (d === "r") {
                    console.log("Right");
                    message.innerText = "►"
                } else if (d === "u") {
                    console.log("Up");
                    message.innerText = "▲"
                } else if (d === "d") {
                    console.log("Down");
                    message.innerText = "▼"
                }
            }
        }
    }
</script>

<style scoped>
  .swipe-main {
    position: relative;
    width: 100%;
    justify-content: space-evenly;
    padding: 5vh 0;
  }
  span {
    color: var(--text-color);
    font-size: 2em;
  }
  span:nth-of-type(4), span:nth-of-type(5) {
    font-size: 1em;
  }
  #message {
    font-size: 3em;
  }
  @-webkit-keyframes message-fade {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  @media screen and (max-width: 864px) {
    span {
      color: var(--text-color);
      font-size: 1em;
    }
    span:nth-of-type(4), span:nth-of-type(5){
      font-size: 0.8em;
    }
    #message {
      font-size: 1.5em;
    }
  }
</style>

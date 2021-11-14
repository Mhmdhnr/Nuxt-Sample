<template xmlns:width="http://www.w3.org/1999/xhtml">
  <div class="slider-main">
    <div class="slider flex">
      <div class="gradient">
        <img class="image" :src="require(`@/assets/images/${slider.imageUrl}`)">
      </div>
      <div class="content flex flex-column">
        <div class="moving-area">
          <div class="short-content">
            <span v-show="this.$store.state.fa"> {{slider.summary.fa}}</span>
            <span v-show="!this.$store.state.fa"> {{slider.summary.en}}</span>
          </div>
          <div class="long-content">
            <span v-show="this.$store.state.fa"> {{slider.detail.fa}} </span>
            <span v-show="!this.$store.state.fa"> {{slider.detail.en}} </span>
          </div>
        </div>
        <div id="more" class="more flex flex-row" @mouseover="detail()" @mouseout="summary()">
          <div  class="more-text">
            <span v-show="this.$store.state.fa"> بیشتر </span>
            <span v-show="!this.$store.state.fa"> More </span>
          </div>
          <div v-for="n in 3" class="arrow">
            <span v-show="fa"> ◄ </span>
            <span v-show="!fa"> ► </span>
          </div>
        </div>
      </div>
    </div>
    <AnimatedWaves class="animated-waves"/>
  </div>
</template>

<script>
    import { mapState } from 'vuex';
    import AnimatedWaves from "./AnimatedWaves";
    export default {
        name: "Slider",
        components: {AnimatedWaves},
        props: ['slider'],
        data() {
            return{
            }
        },
        computed: mapState(['fa']),
        watch: {
            fa (newValue) {
                let styleElem = document.head.appendChild(document.createElement("style"));
                // document.getElementsByClassName("slider")[0].style.height = this.height.toString();
                if (!newValue) {
                    styleElem.innerHTML = "#more::before {background: linear-gradient(90deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0)  100%);}";
                    document.getElementsByClassName("moving-area")[0].style.textAlign = "left";
                }
                else {
                    styleElem.innerHTML = "#more::before {background: linear-gradient(270deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0)  100%);}";
                    document.getElementsByClassName("moving-area")[0].style.textAlign = "right";
                }
                this.fa = newValue
            }
        },
        methods: {
            detail(){
                document.getElementsByClassName("moving-area")[0].classList.remove("summary");
                document.getElementsByClassName("moving-area")[0].classList.add("detail");
                for(let n = 1; n <=3; n++) {
                  document.getElementsByClassName("arrow")[n - 1].classList.add("flip");
                }
                document.getElementsByClassName("more-text")[0].classList.add("fade")
            },
            summary(){
                document.getElementsByClassName("moving-area")[0].classList.remove("detail");
                document.getElementsByClassName("moving-area")[0].classList.add("summary");
                for(let n = 1; n <=3; n++) {
                    document.getElementsByClassName("arrow")[n - 1].classList.remove("flip");
                }
                document.getElementsByClassName("more-text")[0].classList.remove("fade")
            }
        },
        mounted() {
            // document.getElementsByClassName("slider")[0].style.height = this.height.toString();
        }
    }
</script>

<style scoped>
  .slider-main {
    position: relative;
    align-items: unset;
  }
  .slider {
    background-color: var(--contrast-color);
    justify-content: space-around;
    flex-direction: row;
    width: 100vw;
    padding: 1vh var(--main-padding-r-l) calc(var(--animated-waves-height) - 1vh);
  }
  .animated-waves {
    width: 100vw;
  }
  .gradient {
    width: 20%;
    position: relative;
  }
  .image {
    width: 100%;
    z-index: 10;
  }
  .gradient:after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 80%, var(--contrast-color)  100%);
    z-index: 1000;
  }
  .content {
    width: 50%;
    height: 100%;
    padding: 0 0 1vh;
    overflow: hidden;
    justify-content: space-between;
  }
  .moving-area {
    display: flex;
    /*flex-direction: column;*/
    position: relative;
    width: 100%;
    height: 20vh;
    margin-top: 1vh;
    /*justify-content: space-around;*/
  }
  .short-content {
    /*padding: 0 2vw;*/
    font-size: 1.2em;
    margin:  0;
    height: 100%;
  }
  .long-content {
    /*padding: 2vh 2vw;*/
    font-size: 0.9em;
    height: 100%;
    margin: auto;
  }
  .long-content {
    position: absolute;
    right: 100%;
    bottom: 0;
    width: 100%;
  }
  .more {
    justify-content: flex-end;
    position: relative;
    width: 100%;
    font-size: 1em;
    cursor: pointer;
    margin: 1vh auto 0;
    padding: 0.5vh 0;
  }
  .more::before{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 4px;
    width: 100%;
    height: 100%;
    background: linear-gradient(270deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0)  100%);
    z-index: 1;
  }
  .more-text{
    font-size: .9em;
    margin: auto 1vw;
    transition: all 300ms;
  }
  .arrow {
    font-size: .7em;
    transform: rotateY(0deg);
    transition: all 300ms;
  }
  .arrow > span {
    opacity: 1;
  }
  .fade {
    opacity: 0;
    transition: opacity 200ms;
  }
  .flip {
    transform: rotateY(180deg);
    transition: all 400ms;
  }
  .detail {
    -webkit-animation: detail 400ms forwards;
  }
  .summary {
    -webkit-animation: summary 400ms forwards;
  }
  @-webkit-keyframes detail {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(100%);
    }
  }

  @-webkit-keyframes summary {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  }
  @media screen and (max-width: 864px) {
    .all {
      flex-direction: column;
    }
    .gradient {
      width: 80%;
      display:none;
    }
    .short-content {
      font-size: 0.9em;
    }
    .long-content {
      font-size: 0.75em;
    }
    .content {
      width: 90%;
      height: 28vh;
    }
    .all {
      padding-bottom: var(--animated-waves-height);
    }
  }

</style>

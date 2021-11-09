<template>
  <div class="main flex flex-column">
    <div class="flex slider-main">
      <Slider class="slider" v-bind:slider="slider[3]"  height="45vh"/>
      <AnimatedWaves class="animated-waves"/>
    </div>
    <div class="my-buttons flex flex-column">
      <button class="btn-border-hover">
        <span v-show="this.$store.state.fa" class="btn-border-hover-text"> ماوس رو بیار این رو! </span>
        <span v-show="!this.$store.state.fa" class="btn-border-hover-text"> Hover me! </span>
      </button>
      <button class="btn-cover-hover">
        <span v-show="this.$store.state.fa" class="btn-cover-hover-text"> ماوس رو بیار این رو! </span>
        <span v-show="!this.$store.state.fa" class="btn-cover-hover-text"> Hover me! </span>
      </button>
    </div>

  </div>
</template>

<script>
    import {slider} from '../data/data.js';
    import BtnHoverCover from "../components/Buttons/BtnHoverCover";
    import Slider from "../components/Slider";
    import AnimatedWaves from "../components/AnimatedWaves";
    import BtnHoverBorder from "../components/Buttons/BtnHoverBorder";
    export default {
        name: "Buttons",
        components: {BtnHoverBorder, AnimatedWaves, Slider, BtnHoverCover},
        data () {
            return {
                slider: slider,
            }
        }
    }
</script>

<style scoped>
  .main {
    position: relative;
    width: 100vw;
    height: 100%;
  }
  .slider-main {
    position: relative;
    flex: 3;
  }
  .slider {
    width: 100vw;
    padding: 3vh var(--main-padding-r-l) var(--animated-waves-height);
  }
  .animated-waves {
    width: 100vw;
  }
  .my-buttons {
    height: 30vh;
    justify-content: space-evenly;
  }
  .btn-border-hover {
    width: 250px;
    height: 60px;
    margin: auto;
    background-color: var(--bg-color);
    position: relative;
    border: none;
    border-radius: 4px;
    box-shadow: 0 2px 10px 3px rgba(100,100,100,0.4);
  }
  .btn-border-hover::before, .btn-border-hover::after {
    opacity: 0;
    content: "";
    border-radius: 4px;
    position: absolute;
    box-sizing: border-box;
    -webkit-animation: border-shrink 700ms ease-in-out;
  }
  .btn-border-hover::after {
    border-top: 2px solid var(--primary-color);
    border-right: 2px solid var(--primary-color);
    left: 0;
    top: 0;
  }
  .btn-border-hover::before {
    border-bottom: 2px solid var(--primary-color);
    border-left: 2px solid var(--primary-color);
    right: 0;
    bottom: 0;
  }
  .btn-border-hover:hover:after {
    -webkit-animation: border-grow 700ms ease-in-out forwards;
  }
  .btn-border-hover:hover:before {
    -webkit-animation: border-grow 700ms ease-in-out forwards;
  }
  .btn-border-hover-text {
    color: var(--primary-color);
    font-size: 1rem;
    position: relative;
    z-index: 1000;
  }
  .btn-cover-hover {
     width: 250px;
     height: 60px;
     margin: auto;
     background-color: var(--bg-color);
     overflow: hidden;
     position: relative;
     border: none;
     border-radius: 5px;
     box-shadow: 0 2px 10px 3px rgba(100,100,100,0.4);
   }
  .btn-cover-hover::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    -webkit-transform: translateX(-70%) rotate(45deg);
    -webkit-transition: all 300ms ease-in-out ;
    width: 110%;
    height: 110%;
    background-color: var(--primary-color);
  }
  .btn-cover-hover::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    -webkit-transform: translateX(62%) rotate(45deg);
    -webkit-transition: all 300ms ease-in-out ;
    width: 110%;
    height: 110%;
    background-color: var(--primary-color);
  }
  .btn-cover-hover:hover:after {
    -webkit-transform: translateX(0) rotate(0);
  }
  .btn-cover-hover:hover:before {
    -webkit-transform: translateX(0) rotate(0);
  }
  .btn-cover-hover-text {
    color: var(--primary-color);
    -webkit-animation: toBlack 600ms ease-in-out;
    font-size: 1rem;
    position: relative;
    z-index: 1000;
  }
  .btn-cover-hover:hover .btn-cover-hover-text {
    -webkit-animation: toWhite 400ms ease-in-out forwards;
  }

  @-webkit-keyframes toWhite {
    0%{color: var(--primary-color)}
    100%{color: var(--bg-color)}
  }
  @-webkit-keyframes toBlack {
    0%{color: var(--bg-color)}
    100%{color: var(--primary-color)}
  }
  @-webkit-keyframes border-grow {
    0%{
      width: 0;
      height: 0;
      opacity: 1;
    }
    50%{
      width: 100%;
      height: 0;
    }
    100%{
      width: 100%;
      height: 100%;
      opacity: 1;
    }
  }
  @-webkit-keyframes border-shrink {
    0%{
      width: 100%;
      height: 100%;
      opacity: 1;
    }
    50%{
      width: 100%;
      height: 0;
    }
    99%{
      opacity: 1;
    }
    100%{
      width: 0;
      height: 0;
      opacity: 0;
    }
  }

</style>

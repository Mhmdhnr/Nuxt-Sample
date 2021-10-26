<template>
  <div class="main-container">
    <div>
      <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
           viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
        <defs>
          <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
        </defs>
        <g class="parallax">
          <use id="wave-1" xlink:href="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
          <use id="wave-2" xlink:href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
          <use id="wave-3" xlink:href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
          <use id="wave-4" xlink:href="#gentle-wave" x="48" y="7" fill="#fff" />
        </g>
      </svg>
    </div>
  </div>
</template>

<script>
    export default {
        name: "AnimatedWaves",
        mounted() {
            // document.getElementsByClassName("top-container")[0].style.height = this.containerHeight;
        }
    }
</script>

<style scoped>
  .main-container {
    /*position:relative;*/
  }
  .waves {
    /*position: relative;*/
    height: 10vh;
    width: 100%;
  }
  #wave-1, #wave-2, #wave-3, #wave-4{
    fill: var(--bg-color);
  }
  #wave-1{
    opacity: 0.3;
  }
  #wave-2{
    opacity: 0.5;
  }
  #wave-3{
    opacity: 0.7;
  }
  #wave-4{
    opacity: 1;
  }
  .parallax > use {
    animation: move-forever 25s cubic-bezier(0.55,0.5,0.45,0.5) infinite;
  }
  .parallax > use:nth-child(1) {
    animation-delay: -2s;
    animation-duration: 7s;
  }
  .parallax > use:nth-child(2) {
    animation-delay: -3s;
    animation-duration: 13s;
  }
  .parallax > use:nth-child(3) {
    animation-delay: -4s;
    animation-duration: 10s;
  }
  .parallax > use:nth-child(4) {
    animation-delay: -5s;
    animation-duration: 18s;
  }
  @keyframes move-forever {
    0% {
      transform: translateX(-90px);
    }
    100% {
      transform: translateX(85px);
    }
  }
  @media screen and (max-width: 864px) {
    .waves {
      height: 10vh;
      margin-bottom: -18vh;
    }
  }
</style>

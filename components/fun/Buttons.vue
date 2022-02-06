<template>
  <div class="my-button">
    <button class="my-btn-1">
      <span v-show="this.$store.state.fa" class="text"> ماوس رو بیار این رو! </span>
      <span v-show="!this.$store.state.fa" class="text"> Hover me! </span>
    </button>
    <button class="my-btn-2">
      <span v-show="this.$store.state.fa" class="text"> ماوس رو بیار این رو! </span>
      <span v-show="!this.$store.state.fa" class="text"> Hover me! </span>
    </button>
  </div>
</template>

<script>
    export default {
        name: "Buttons"
    }
</script>

<style scoped>
  .my-button {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 2vh 2vw;
  }
  .my-btn-1 {
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
  .my-btn-1::after {
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
  .my-btn-1::before {
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
  .my-btn-1:hover:after {
    -webkit-transform: translateX(0) rotate(0);
  }
  .my-btn-1:hover:before {
    -webkit-transform: translateX(0) rotate(0);
  }
  .text {
    color: var(--primary-color);
    -webkit-animation: toBlack 600ms ease-in-out;
    font-size: 1rem;
    position: relative;
    z-index: 1000;
  }
  .my-btn:hover .text {
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
  .my-button {
    position: relative;
    width: 100%;
    margin: 2vh 2vw;
  }
  .my-btn-2 {
    width: 250px;
    height: 60px;
    margin: auto;
    background-color: var(--bg-color);
    position: relative;
    border: none;
    border-radius: 4px;
    box-shadow: 0 2px 10px 3px rgba(100,100,100,0.4);
  }
  .my-btn-2::before, .my-btn-2::after {
    opacity: 0;
    content: "";
    border-radius: 4px;
    position: absolute;
    box-sizing: border-box;
    -webkit-animation: border-shrink 700ms ease-in-out;
  }
  .my-btn-2::after {
    border-top: 2px solid var(--primary-color);
    border-right: 2px solid var(--primary-color);
    left: 0;
    top: 0;
  }
  .my-btn-2::before {
    border-bottom: 2px solid var(--primary-color);
    border-left: 2px solid var(--primary-color);
    right: 0;
    bottom: 0;
  }
  .my-btn-2:hover:after {
    -webkit-animation: border-grow 700ms ease-in-out forwards;
  }
  .my-btn-2:hover:before {
    -webkit-animation: border-grow 700ms ease-in-out forwards;
  }
  .text {
    color: var(--primary-color);
    font-size: 1rem;
    position: relative;
    z-index: 1000;
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

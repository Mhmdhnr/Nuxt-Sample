<template>
  <div class="my-button">
    <button class="my-btn">
      <span v-show="this.$store.state.fa" class="text"> ماوس رو بیار این رو! </span>
      <span v-show="!this.$store.state.fa" class="text"> Hover me! </span>
    </button>
  </div>
</template>

<script>
    export default {
        name: "BtnHoverCover"
    }
</script>

<style scoped>
  .my-button {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 2vh 2vw;
  }
  .my-btn {
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
  .my-btn::after {
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
  .my-btn::before {
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
  .my-btn:hover:after {
    -webkit-transform: translateX(0) rotate(0);
  }
  .my-btn:hover:before {
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
</style>

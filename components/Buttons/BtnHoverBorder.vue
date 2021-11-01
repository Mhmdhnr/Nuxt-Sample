<template>
  <div class="my-button flex">
    <button class="my-btn">
      <span v-show="this.$store.state.fa" class="text"> ماوس رو بیار این رو! </span>
      <span v-show="!this.$store.state.fa" class="text"> Hover me! </span>
    </button>
  </div>
</template>

<script>
    export default {
        name: "BtnHoverBorder"
    }
</script>

<style scoped>
  .my-button {
    position: relative;
    width: 100%;
    margin: 2vh 2vw;
  }
  .my-btn {
    width: 250px;
    height: 60px;
    margin: auto;
    background-color: var(--bg-color);
    position: relative;
    border: none;
    border-radius: 4px;
    box-shadow: 0 2px 10px 3px rgba(100,100,100,0.4);
  }
  .my-btn::before, .my-btn::after {
    opacity: 0;
    content: "";
    border-radius: 4px;
    position: absolute;
    box-sizing: border-box;
    -webkit-animation: border-shrink 700ms ease-in-out;
  }
  .my-btn::after {
    border-top: 2px solid var(--primary-color);
    border-right: 2px solid var(--primary-color);
    left: 0;
    top: 0;
  }
  .my-btn::before {
    border-bottom: 2px solid var(--primary-color);
    border-left: 2px solid var(--primary-color);
    right: 0;
    bottom: 0;
  }
  .my-btn:hover:after {
    -webkit-animation: border-grow 700ms ease-in-out forwards;
  }
  .my-btn:hover:before {
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

<template>
  <div class="total-view">
    <TopHeader class="top-header" />
    <MainHeader class="main-header"/>
    <nuxt class="nuxt"/>
  </div>
</template>
<script>
    import Toggle from "../components/Toggle";
    import { mapState } from 'vuex';
    import MainHeader from "../components/header/MainHeader";
    import TopHeader from "../components/header/TopHeader";
    export default {
        components: {TopHeader, MainHeader, Toggle},
        computed: mapState(['fa']),
        data(){
            return{

            }
        },
        watch: {
            fa (newValue) {
                if (!newValue) {
                    document.body.style.direction = "ltr";
                    document.body.style.textAlign = "left";
                }
                else {
                    document.body.style.direction = "rtl";
                    document.body.style.textAlign = "right";
                }
            }
        },
    }
</script>
<style>
  :root {
    --primary-color: #444;
    --text-color: #444;
    --contrast-color: rgba(200,200,200,1);
    --header-color: rgba(255,255,255,0.6);
    --bg-color: #fff;
    --main-shadow: 0 0 5px 5px rgba(0,0,0,0.1);
    --toggle-light: #d8dbe0;
    --toggle-dark: #28292c;

    --main-header-height: 6vh;
    --top-header-height: 4vh;

    --base-padding-r-l: 2vw;
    --main-padding-r-l: calc((100vw - 1080px) / 2);
    --animated-waves-height: 12vh;
  }
  .dark-mode {
    --primary-color: #eee;
    --text-color: #ccc;
    --contrast-color: rgb(100,100,100);
    --header-color: rgba(100,100,100,0.5);
    --bg-color: #222;
    --main-shadow: 0 0 5px 5px rgba(255,255,255,0.05);
    --toggle-light: #28292c;
    --toggle-dark: #d8dbe0;
  }
  span {
    color: var(--text-color);
  }
  body{
    font-family: Lalezar,sans-serif;
    font-size: 1.2em;
    margin: 0;
    text-align: right;
    direction: rtl;
    background-color: var(--bg-color);
  }
  .total-view {
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;
    width: 100vw;
  }
  .top-header {
    order: 1;
    height: var(--top-header-height);
  }
  .main-header {
    order: 2;
    height: var(--main-header-height);
  }
  .nuxt {
    width: 100vw;
    order: 3;
    box-sizing: content-box;
  }
  .nuxt::-webkit-scrollbar {
    display: none;
  }
  .total-view::-webkit-scrollbar {
    display: none;
  }
  .bg-animate {
    background: linear-gradient(270deg, #165ab4, #9856aa);
    background-size: 400% 400%;
    -webkit-animation: bg-animation 10s ease  infinite;
  }
  .flex {
    display: flex;
    align-items: center;
    align-content: center;
  }
  @-webkit-keyframes bg-animation {
     0%{background-position:0% 50%}
     50%{background-position:100% 50%}
     100%{background-position:0% 50%}
   }
  @keyframes grow {
    from{
      width: 0;
    }
    to{
      width: 100%;
    }
  }
  @keyframes hide {
    from{
      width: 100%;
    }
    to{
      width: 0;
    }
  }
  @media screen and (max-width: 864px) {
    .total-view {
      height: 100vh;
      overflow: hidden;
    }
    .top-header {
      order: 1;
      height: var(--top-header-height);
      max-height: var(--top-header-height);
    }
    .nuxt {
      height: calc(100vh - var(--main-header-height) - var(--top-header-height));
      max-height: calc(100vh - var(--main-header-height) - var(--top-header-height));
      overflow: scroll;
      order: 2;
    }
    .main-header {
      position: fixed;
      bottom: 0;
      order: 3;
      height: var(--main-header-height);
      max-height: var(--main-header-height);
    }
  }
</style>

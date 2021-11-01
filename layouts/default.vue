<template>
  <div class="total-view">
    <div class="header">
      <TopHeader class="top-header" />
      <MainHeader class="main-header"/>
    </div>
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
                    document.body.style.fontFamily = "Ubuntu, sans-serif";
                    document.body.style.fontWeight = "500";
                }
                else {
                    document.body.style.direction = "rtl";
                    document.body.style.textAlign = "right";
                    document.body.style.fontFamily = "vazir, sans-serif";
                    document.body.style.fontWeight = "400";
                }
            }
        },
    }
</script>
<style>
  :root {
    --primary-color: #4bb9ad;
    --text-color: #444;
    --contrast-color: #ccc;
    --bg-color: #fff;
    --toggle-light: #eef1f6;
    --toggle-dark: #28292c;
    --main-shadow: 0 3px 10px 10px rgba(100,100,100,0.1);

    --main-header-height: 6vh;
    --top-header-height: 5vh;

    --base-padding-r-l: 2vw;
    --main-padding-r-l: calc((100vw - 1080px) / 2);
    --animated-waves-height: 12vh;
    --shadow:
      0 10px 10px rgba(0,0,0,0.5),
      0 0 2vw rgba(75,185,173,1),
      0 0 4vw rgba(75,185,173,0.9),
      0 0 6vw rgba(75,185,173,0.8),
      0 0 8vw rgba(75,185,173,0.7),
      0 0 10vw rgba(75,185,173,0.6),
      0 0 12vw rgba(75,185,173,0.5),
      0 0 15vw rgba(75,185,173,0.4),
      0 0 18vw rgba(75,185,173,0.3),
      0 0 22vw rgba(75,185,173,0.2);
  }
  .dark-mode {
    --primary-color: #4bb9ad;
    --text-color: #eee;
    --contrast-color: rgb(100,100,100);
    --bg-color: #222;
    --main-shadow: 0 0 5px 5px rgba(255,255,255,0.05);
    --toggle-light: #28292c;
    --toggle-dark: #d8dbe0;
  }
  span {
    color: var(--text-color);
  }
  @font-face {
    font-family: 'vazir';
    src:  url("../assets/fonts/Vazir-Regular-UI.ttf") format('truetype');
    font-weight: 300;
    font-style: normal;
  }
  @font-face {
    font-family: 'vazir';
    src:  url("../assets/fonts/Vazir-Medium-UI.ttf") format('truetype');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'vazir';
    src:  url("../assets/fonts/Vazir-Bold-UI.ttf") format('truetype');
    font-weight: 500;
    font-style: normal;
  }
  body{
    font-family: vazir, sans-serif;
    font-weight: 400;
    font-size: 1.2em;
    margin: 0;
    text-align: right;
    direction: rtl;
    background-color: var(--bg-color);
  }
  .header {
    box-shadow: 0 0 20px 5px rgba(100,100,100,0.2);
    z-index: 20;
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
    z-index: 50;
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
      z-index: 20;
    }
    .header {
      z-index: 100;
    }
    .main-header {
      position: fixed;
      bottom: 0;
      order: 3;
      height: var(--main-header-height);
      max-height: var(--main-header-height);
      box-shadow: 0 0 20px 5px rgba(100,100,100,0.2);
    }
  }
</style>

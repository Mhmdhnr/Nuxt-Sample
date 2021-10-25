<template>
  <div class="total-view">
    <Toggle id="mobile-theme-toggle" subject="theme" class="toggle" />
    <Toggle id="mobile-language-toggle" subject="language" class="toggle" />
    <Header class="header"/>
    <nuxt class="nuxt"/>
  </div>
</template>
<script>
    import Header from "~/components/header/Header";
    import Toggle from "../components/Toggle";
    import { mapState } from 'vuex';
    export default {
        components: {Toggle, Header},
        computed: mapState(['fa']),
        data(){
            return{

            }
        },
        watch: {
            fa (newValue) {
                console.log("here i am...");
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
    --contrast-color: rgb(200,200,200);
    --header-color: rgba(255,255,255,0.6);
    --bg-color: #fff;
    --main-shadow: 0 0 5px 5px rgba(0,0,0,0.1);
    --toggle-light: #d8dbe0;
    --toggle-dark: #28292c;


    --header-height: 10vh;
    --mobile-footer-height: 6vh;
    --header-top-height-ratio: 0.5;
    --header-main-height-ratio: calc(1 - var(--header-top-height-ratio));
    --base-padding-r-l: 2vw;
    --main-padding-r-l: 10vw;
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
    align-items: center;
    height: 100vh;
  }
  .toggle {
    display: none;
  }
  .header {
    height: var(--header-height);
    padding: 0 var(--base-padding-r-l);
    /*position: fixed;*/
    /*top: 0;*/
    /*left: 0;*/
  }
  .nuxt {
    /*width: 100vw;*/
    /*width: 1080px;*/
    /*overflow: hidden;*/
    /*padding: 0 var(--base-padding-r-l);*/
  }
  .container {
    position: relative;
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
    text-align: center;
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
      flex-direction: column-reverse;
      height: 100vh;
      overflow: hidden;
    }
    .toggle{
      display: block;
      position: absolute;
      top: 1vh;
      width: 40px;
      height: 20px;
      z-index: 1000;
    }
    #mobile-theme-toggle {
      left: 2vw;
    }
    #mobile-language-toggle {
      top: 1vh;
      left: calc(4vw + 40px);
    }
    .nuxt {
      height: calc(100vh - var(--mobile-footer-height));
    }
    .header {
      height: var(--mobile-footer-height);
    }
  }
</style>

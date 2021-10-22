<template>
  <div class="total-view">
    <Header class="header"/>
    <nuxt class="nuxt"/>
  </div>
</template>
<script>
    import Header from "~/components/header/Header";
    export default {
        components: {Header}
    }
</script>
<style>
  :root {
    --primary-color: #444;
    --text-color: #444;
    --contrast-color: rgba(0,0,0,0.5);
    --header-color: rgba(255,255,255,0.6);
    --bg-color: #fff;
    --main-shadow: 0 0 5px 5px rgba(0,0,0,0.1);


    --header-height: 10vh;
    --header-top-height-ratio: 0.5;
    --header-main-height-ratio: calc(1 - var(--header-top-height-ratio));
    --base-padding-r-l: 2vw;
  }
  .dark-mode {
    --primary-color: #eee;
    --text-color: #ccc;
    --contrast-color: rgba(255,255,255,0.2);
    --header-color: rgba(100,100,100,0.5);
    --bg-color: #00665c;
    --main-shadow: 0 0 5px 5px rgba(255,255,255,0.05);
  }
  span {
    color: var(--text-color);
  }
  body{
    margin: 0;
    direction: rtl;
    background-color: var(--bg-color);
  }
  .total-view {
    display: flex;
    flex-direction: column;
    position: relative;
  }
  .header {
    height: var(--header-height);
    padding: 0 var(--base-padding-r-l);
    position: fixed;
    top: 0;
    left: 0;
  }
  .nuxt {
    padding: 0 var(--base-padding-r-l);
    position: absolute;
    top: var(--header-height);
    left: 0;
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
  @media screen and (max-width: 992px) {
    .total-view {
      flex-direction: column-reverse;
      height: 100vh;
    }
    .nuxt {
      height: calc(100vh - var(--header-height));
    }
  }
</style>

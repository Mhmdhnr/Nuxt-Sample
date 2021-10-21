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
    --primary-color: #123456;
    --text-color: #999;
    --header-color: white;
    --header-height: 8vh;
  }
  body{
    margin: 0;
    direction: rtl;
  }
  .total-view {
    display: flex;
    flex-direction: column;
  }
  .header {
    height: var(--header-height);
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

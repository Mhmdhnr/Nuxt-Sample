<template>
  <div>
    <Header />
    <nuxt />
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
  }
  body{
    margin: 0;
    direction: rtl;
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
</style>

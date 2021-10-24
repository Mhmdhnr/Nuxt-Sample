<template>
  <div class="header">
    <TopHeader class="top-header"/>
    <MainMenu class="main-header" />
  </div>
</template>

<script>
    import MainMenu from "./MainHeader";
    import TopHeader from "./TopHeader";
    export default {
        name: "Header",
        components: {TopHeader, MainMenu}
    }
</script>

<style scoped>
  .header {
    width: 100vw;
    margin: 0;
    background-color: var(--header-color);
    box-shadow: var(--main-shadow);
    z-index: 10;
  }
  .top-header {
    height: calc(var(--header-height) * var(--header-top-height-ratio));
  }
  .main-header {
    height: calc(var(--header-height) * var(--header-main-height-ratio));
  }
  .logo {
    width: 50px;
  }
  @media screen and (max-width: 864px){
    .top-header {
      display: none;
    }
    .main-header {
      height: calc(var(--mobile-footer-height));
    }
    .header {
      padding: 0;
    }
  }
</style>

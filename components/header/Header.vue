<template>
  <div class="header">
    <TopHeader />
    <MainMenu />
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
    box-shadow: 0 0 5px 5px rgba(0,0,0,0.2);
    z-index: 10;
  }
  .logo {
    width: 50px;
  }
</style>

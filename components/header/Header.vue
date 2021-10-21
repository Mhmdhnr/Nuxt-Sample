<template>
  <div class="header">
    <div class="top-header">
<!--      <img class="logo" src="~/assets/logo.svg">-->

    </div>
    <div class="header-main">
      <MainMenu />
    </div>
  </div>
</template>

<script>
    import MainMenu from "./MainMenu";
    export default {
        name: "Header",
        components: {MainMenu}
    }
</script>

<style scoped>
  .header {
    width: 100vw;
    margin: 0 0 2vh;
    background-color: var(--header-color);
    box-shadow: 0 0 5px 5px rgba(0,0,0,0.2);
    z-index: 10;
  }
  .logo {
    width: 50px;
  }
</style>

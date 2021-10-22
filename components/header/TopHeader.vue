<template>
    <div class="main flex flex-row">
      <img class="logo" src="~/assets/logo.svg" alt="">
    </div>
</template>

<script>
    export default {
        name: "TopHeader"
    }
</script>

<style scoped>
  .main {
    height: calc(var(--header-height) * var(--header-top-height-ratio));
    border-bottom: 1px solid rgba(0,0,0,.2);
  }
  .logo {
    height: 80%;
  }
</style>

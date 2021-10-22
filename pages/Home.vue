<template>
  <div class="main">
    <div>
      <Toggle />
    </div>
  </div>
</template>

<script>
    import Toggle from "../components/Toggle";
    export default {
        name: "Home",
        components: {Toggle}
    }
</script>

<style scoped>
  .main {
    height: 150vh;
    width: 100%;
    background-color: var(--bg-color);
  }
</style>

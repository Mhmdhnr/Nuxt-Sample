<template>
    <div class="flex flex-column en-available">
      <span>This page is not available in English...</span>
      <Toggle id="language2" subject="language" />
    </div>
</template>

<script>
    import Toggle from "./Toggle";
    export default {
        name: "EnNotAvailable",
        components: {Toggle}
    }
</script>

<style scoped>
  .en-available {
    margin: auto;
    width: 1080px;
    height: 50vh;
    justify-content: center;
    position: relative;
  }
</style>

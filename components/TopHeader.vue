<template>
    <div class="main flex flex-row">
      <NuxtLink to="/">
        <div class="brand flex">
          <svg class="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 328.66 230.73"><defs><style>.cls-1{fill:#555454;}</style></defs><g id="Layer_2" ><g id="Layer_1-2" ><polygon class="cls-1" points="164.33 0 131.46 0 98.6 0 82.16 28.46 65.73 56.92 98.6 56.92 131.46 56.92 147.9 85.39 164.33 113.85 180.76 85.39 197.19 56.92 180.76 28.46 164.33 0"/><polygon class="cls-1" points="312.22 28.46 295.79 0 262.93 0 230.06 0 213.63 28.46 197.19 56.92 230.06 56.92 262.93 56.92 279.36 85.39 295.79 113.85 312.22 85.39 328.66 56.92 312.22 28.46"/><polygon class="cls-1" points="98.6 116.89 82.16 145.35 65.73 173.81 32.87 173.81 0 173.81 16.43 202.27 32.87 230.73 65.73 230.73 98.6 230.73 115.03 202.27 131.46 173.81 115.03 145.35 98.6 116.89"/><polygon class="cls-1" points="230.06 116.89 213.63 145.35 197.19 173.81 164.33 173.81 131.46 173.81 147.9 202.27 164.33 230.73 197.19 230.73 230.06 230.73 246.49 202.27 262.93 173.81 246.49 145.35 230.06 116.89"/></g></g></svg>
        </div>
      </NuxtLink>
      <div class="toggles flex">
        <Toggle id="theme" subject="theme" class="theme-toggle"/>
        <Toggle id="language" subject="language" class="theme-toggle"/>
      </div>
    </div>
</template>

<script>
    import Toggle from "./Toggle";
    export default {
        name: "TopHeader",
        components: {Toggle},
    }
</script>

<style scoped>
  .main {
    width: 100vw;
    max-width: 100vw;
    border-bottom: 1px solid var(--contrast-color);
    padding: 0 var(--base-padding-r-l);
  }
  .toggles {
    height: 100%;
    flex: 1;
    justify-content: flex-end;
  }
  .logo .cls-1 {
    fill: var(--text-color)
  }
  .theme-toggle {
    position: relative;
    width: 54px;
    height: 26px;
    margin: auto 10px auto 0;
    padding: 0;
  }
  .logo {
    width: 35px;
    height: 35px;
  }
  @media screen and(max-width: 864px) {

  }

</style>

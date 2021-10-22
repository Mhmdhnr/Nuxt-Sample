<template>
  <div class="main flex flex-row">
    <div v-for="m in menu" class="item">
      <span>
        {{m.title}}
      </span>
    </div>
  </div>
</template>

<script>
    import {menu} from '~/data/data.js';
    export default {
        name: "MainHeader",
        data (){
            return{
                menu : menu
            }
        }
    }
</script>

<style scoped>
  .main {
    height: calc(var(--header-height) * var(--header-main-height-ratio));
  }
  .item {
    margin: auto 0 auto 2vw;
  }
</style>

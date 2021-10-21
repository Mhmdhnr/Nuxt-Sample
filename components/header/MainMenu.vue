<template>
  <div class="main flex flex-row">
    <div v-for="m in menu" class="item"> {{m.title}}</div>
  </div>
</template>

<script>
    import {menu} from '~/data/data.js';
    export default {
        name: "MainMenu",
        data (){
            return{
                menu : menu
            }
        }
    }
</script>

<style scoped>
  .item {
    margin: auto 1vw;
  }
</style>

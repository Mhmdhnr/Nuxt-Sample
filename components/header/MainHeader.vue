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
    padding: 1vh 1vw;
    margin: auto 0;
    cursor: pointer;
    border-radius: 8px;
  }
  .item:hover {
    background-color: var(--primary-color);
  }
  .item:hover > span {
    color: var(--bg-color);
  }
</style>

<template>
  <div class="main flex flex-row">
    <div v-for="i in menu" @mouseover="showSubItems(i.id)" @mouseout="hideSubItems(i.id)" class="item">
      <span>
        {{i.title}}
      </span>
      <div v-bind:id="i.id" class="sub-items">
        <div v-for="s in i.subItems" class="sub-item">
         <span>
            {{s.title}}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import {menu} from '../../data/data.js';
    export default {
        name: "MainHeader",
        data (){
            return{
                menu : menu
            }
        },
        methods: {
            showSubItems(id) {
                document.getElementById(id).classList.remove("get-out");
                document.getElementById(id).classList.add("come-in");
            },
            hideSubItems(id) {
                document.getElementById(id).classList.remove("come-in");
                document.getElementById(id).classList.add("get-out");
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
    border-radius: 4px 4px 0 0;
    position: relative;
  }
  .sub-items {
    opacity: 0;
    text-align: right;
    width: 200px;
    position: absolute;
    top: calc(var(--header-height) *(1 - var(--header-top-height-ratio)));
    right: 0;
    margin: auto 0;
    cursor: pointer;
    border-radius: 4px;
    background-color: var(--header-color);
  }
  .sub-item {
    padding: 1vh 1vw;
    margin: auto 0;
    cursor: pointer;
    border-bottom: 1px solid rgba(255,255,255,0.5);
  }
  .sub-item:nth-last-child(1) {
    border-radius: 0 0 4px 4px;
  }
  .item:hover, .sub-item:hover {
    background-color: var(--primary-color);
  }
  .item:hover > span, .sub-item:hover > span {
    color: var(--bg-color);
  }
  .come-in {
    -webkit-animation: 200ms come-in forwards;
  }
  .get-out {
    -webkit-animation: 200ms get-out forwards;
  }
  @-webkit-keyframes come-in {
    from {
      transform: translateY(-10px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
  @-webkit-keyframes get-out {
    from {
      transform: translateY(0);
      opacity: 1;
    }
    to {
      transform: translateY(-10px);
      opacity: 0;
    }
  }
</style>

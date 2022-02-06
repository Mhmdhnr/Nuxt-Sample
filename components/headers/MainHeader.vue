<template>
  <div class="main flex flex-row">
    <div :key="i.id" v-for="i in menu" @mouseover="showSubItems(i.id)" @mouseout="hideSubItems(i.id)"  class="item flex">
      <NuxtLink :to="i.link"  class="flex">
        <span  v-show="fa"> {{i.title.fa}} </span>
        <span  v-show="!fa"> {{i.title.en}} </span>
      </NuxtLink>
      <div v-show="i.subItems.length !== 0" v-bind:id="i.id" class="sub-items">
        <div :key="s.id" v-for="s in i.subItems" class="sub-item"  v-on:click="goTo(s.link)">
         <span  v-show="fa"> {{s.title.fa}} </span>
         <span  v-show="!fa"> {{s.title.en}} </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import {menu} from '../../data/data.js';
    import { mapState } from 'vuex';
    export default {
        name: "MainHeader",
        data (){
            return{
                menu : menu,
            }
        },
        computed: mapState(['fa']),
        watch: {
            fa (newValue) {
                if (!newValue) {
                    for (let item of this.menu) {
                        document.getElementById(item.id).style.left = "0";
                        document.getElementById(item.id).style.right = "unset";
                    }
                }
                else {
                    for (let item of this.menu) {
                        document.getElementById(item.id).style.right = "0";
                        document.getElementById(item.id).style.left = "unset";
                    }
                }
                this.fa = newValue
            }
        },
        methods: {
            showSubItems(id) {
                document.getElementById(id).classList.remove("get-out");
                document.getElementById(id).classList.add("come-in");
                document.getElementById(id).style.display = "flex";
            },
            hideSubItems(id) {
                document.getElementById(id).classList.remove("come-in");
                document.getElementById(id).classList.add("get-out");
                document.getElementById(id).style.display = "none";
            },
            goTo(link) {
                this.$router.push({name: link});
            }
        }
    }
</script>

<style scoped>
  .main {
    width: 100%;
    z-index: 50;
    padding: 0 var(--base-padding-r-l);
    background-color: var(--bg-color);
  }
  .item {
    position: relative;
    height: var(--main-header-height);
    cursor: pointer;
    font-size: 0.8em;
    padding: 0 1vw;
    border-radius: 4px 4px 0 0;
  }
  .sub-items {
    display: none;
    flex-direction: column;
    opacity: 0;
    width: 200px;
    position: absolute;
    top: var(--main-header-height);
    right: 0;
    margin: auto 0;
    cursor: pointer;
    border-radius: 0 0 4px 4px;
    background-color: var(--bg-color);
    box-shadow: var(--main-shadow);
  }
  .sub-item {
    padding: 1vh 1vw;
    display: flex;
    cursor: pointer;
    border-bottom: 1px solid var(--contrast-color);
    height: 100%;
    z-index: 1;
  }
  .sub-item:nth-last-child(1) {
    border-radius: 0 0 4px 4px;
  }
  .item:hover, .sub-item:hover {
    background-color: var(--text-color);
  }
  .item:hover > a > span, .sub-item:hover > span {
    color: var(--bg-color);
  }

  .sub-item > span, .item > span {
    margin: auto 0 auto;
  }
  .come-in {
    -webkit-animation: 200ms come-in forwards;
  }
  .get-out {
    -webkit-animation: 50ms get-out forwards;
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
  @media screen and (max-width: 864px) {
    .main {
      padding: 0;
    }
    .item {
      flex: 1;
      display: flex;
      position: unset;
      padding: 0 4vw;
      align-content: center;
    }
    a {
      margin: auto;
    }
    .item, .sub-items, .sub-item:nth-last-child(1) {
      border-radius: 0;
    }
    .sub-items {
      opacity: 0;
      display: none;
      flex-wrap: wrap;
      flex-direction: row;
      width: 100vw;
      min-height: var(--main-header-height);
      max-height: calc(var(--main-header-height) * 2);
      bottom: calc(1 * var(--main-header-height));
      /*transform: translateY(var(--main-header-height));*/
      transition: all 100ms;
      right: 0;
      box-shadow: 0 0 20px 5px rgba(100,100,100,0.2);
      z-index: 51;
    }
    .sub-item {
      margin: auto;
      display: flex;
      flex: 1;
      min-width: calc(100vw / 4);
      background-color: var(--bg-color);
    }
    .sub-item > span, .items > span {
      margin: auto;
    }
    @-webkit-keyframes come-in {
      from {
        transform: translateY(calc(1 * var(--main-header-height)));
        opacity: 0;
      }
      to {
        transform: translateY(calc(-1 * var(--main-header-height)));
        opacity: 1;
      }
    }
    @-webkit-keyframes get-out {
      from {
        transform: translateY(calc(-1 * var(--main-header-height)));
        opacity: 1;
      }
      to {
        transform: translateY(calc(1 * var(--main-header-height)));
        opacity: 0;
      }
    }
  }
</style>

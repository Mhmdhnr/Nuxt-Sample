<template>
  <div class="main flex flex-row">
    <div v-for="i in menu" @mouseover="showSubItems(i.id)" @mouseout="hideSubItems(i.id)" class="item">
      <span  v-show="fa"> {{i.title.fa}} </span>
      <span  v-show="!fa"> {{i.title.en}} </span>
      <div v-bind:id="i.id" class="sub-items">
        <div v-for="s in i.subItems" class="sub-item">
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
            }
        }
    }
</script>

<style scoped>
  .main {
    z-index: 2;
  }
  .item {
    padding: 0 1vw;
    height: 100%;
    display: flex;
    cursor: pointer;
    border-radius: 4px 4px 0 0;
    position: relative;
    font-size: 0.9em;
  }
  .sub-items {
    display: none;
    flex-direction: column;
    opacity: 0;
    width: 200px;
    position: absolute;
    top: calc(var(--header-height) *(1 - var(--header-top-height-ratio)));
    right: 0;
    margin: auto 0;
    cursor: pointer;
    border-radius: 0 0 4px 4px;
    background-color: var(--header-color);
    font-size: 0.8em;
    box-shadow: var(--main-shadow);
    z-index: 1;
  }
  .sub-item {
    padding: 1vh 1vw;
    display: flex;
    cursor: pointer;
    border-bottom: 1px solid rgba(255,255,255,0.5);
    height: 100%;
    z-index: 1;
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

  .sub-item > span, .item > span {
    margin: auto 0 auto;
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
  @media screen and (max-width: 864px) {
    .main {
      position: relative;
      width: 100%;
    }
    .item {
      padding: 0 4vw;
      position: unset;
      margin: auto;
      display: flex;
      flex: 1;
    }
    .item, .sub-items, .sub-item:nth-last-child(1) {
      border-radius: 0;
    }
    .sub-items {
      opacity: 0;
      display: flex;
      flex-direction: row;
      width: 100vw;
      height: var(--mobile-footer-height);
      top: calc(-1 * var(--mobile-footer-height));
      right: 0;
      box-shadow: none;
    }
    .sub-item {
      margin: auto;
      display: flex;
      flex: 1;
    }
    .sub-item > span, .item > span {
      margin: auto;
    }
    /*.item:hover, .sub-item:hover {*/
    /*  background-color: unset;*/
    /*}*/
    /*.item:hover > span, .sub-item:hover > span {*/
    /*  color: unset;*/
    /*}*/
    @-webkit-keyframes come-in {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
    @-webkit-keyframes get-out {
      from {
        opacity: 1;
      }
      to {
        opacity: 0;
      }
    }
  }
</style>

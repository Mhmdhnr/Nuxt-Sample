<template>
  <div class="all-work-cards flex">
    <FlipCard v-for="workCard in workCards" class="work-Cards bounce" duration="500" v-bind:cardData=workCard />
<!--    <Flip3DCard v-for="workCard in workCards" class="work-Cards bounce" duration="500" v-bind:cardData=workCard />-->
<!--    <ElevateCard v-for="workCard in workCards" class="work-Cards bounce" duration="500" v-bind:cardData=workCard />-->
  </div>
</template>

<script>
    import FlipCard from "./FlipCard";
    import {workCards} from '../data/data.js';
    import Flip3DCard from "./Flip3DCard";
    import ElevateCard from "./ElevateCard";
    export default {
        name: "WorksCard",
        components: {ElevateCard, Flip3DCard, FlipCard},
        data () {
            return {
                workCards: workCards,
            }
        },
        mounted() {
            let count = document.querySelectorAll('.bounce').length;
            for(let i = 0; i < count; i++){
                setTimeout(function () {
                    if(document.getElementsByClassName("bounce")[0]){
                        document.getElementsByClassName("bounce")[i].classList.add("bounce-in");
                    }
                }, i * 100)
            }
        }
    }
</script>

<style scoped>
  .all-work-cards {
    flex-direction: row;
    width: 100vw;
    padding: 3vh var(--main-padding-r-l) ;
    justify-content: center;
    flex-wrap: wrap;
  }
  .work-Cards {
    width: 200px;
    height: 200px;
    opacity: 0;
    margin: 16px;
  }
</style>

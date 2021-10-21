<template>
  <div class="container bg-animate flex flex-column">
    <div class="flex-row">
      <span>cout of data</span>
      <input v-model="count" placeholder="Count">

    </div>
    <LinearChart v-bind:chartData="chartData" />
  </div>
</template>

<script>
    import apiServices from "~/api/apiServices";
    export default {
        name: "SomeOfMyWorks",
        data(){
            return {
                chartData: [],
                count: null,
            }
        },
        watch: {
          count(count){
              apiServices.methods.getRandomXY(this.count).then(response => {
                  this.chartData = response;
              })
          }
        },
        mounted() {
            this.count = 20;
        },
    }
</script>

<style scoped>
</style>

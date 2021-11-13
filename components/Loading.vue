<template>
  <div class="loading flex flex-column">
<!--    <span v-if="this.fa">در حال بارگزاری</span>-->
<!--    <span v-if="!this.fa">Loading</span>-->
    <span class="message" v-if="this.fa">{{this.message.fa}}</span>
    <span class="message" v-if="!this.fa">{{this.message.en}}</span>
  </div>
</template>

<script>
    import { mapState } from 'vuex';
    export default {
        name: "Loading",
        props:['message'],
        computed: mapState(['fa']),
        watch:{
            fa(newValue) {

            }
        }
    }
</script>

<style scoped>
  .loading {
    padding: 4vh 2vw;
  }
 .message {
   font-size: 2em;
 }
</style>

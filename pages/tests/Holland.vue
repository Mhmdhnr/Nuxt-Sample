<template>
  <div>
    <div v-if="!this.fa">
      <EnNotAvailable />
    </div>
    <div class="flex flex-column" v-if="this.fa">
      <Slider v-bind:slider="slider[7]" />
      <TestR :mustAnsweredAll="true"  v-on:submit="submit" testId="3"/>
<!--      <Test :mustAnsweredAll="true"  v-on:submit="submit" testId="3"/>-->
    </div>
  </div>
</template>

<script>
    import {mapState} from 'vuex';
    import apiServices from "../../api/apiServices";
    import {slider} from "../../data/data";
    import Slider from "../../components/fun/Slider";
    import EnNotAvailable from "../../components/layout/EnNotAvailable";
    import TestR from "../../components/test/TestR";
    export default {
        name: "Holland",
        components: {TestR, EnNotAvailable, Slider},
        data() {
            return {
                slider: slider,
            }
        },
        computed: mapState(['fa']),
        methods: {
            submit({choices}) {
                this.$store.commit('loadingMessage' , {fa: 'در حال محاسبه نتایج آزمون ...', en: 'Calculating test result ...'});
                this.$store.commit('api', 'pending');
                apiServices.methods.postHollandResponse({choices}).then(response => {
                    // this.$store.commit('api', 'done');
                    console.log(response);
                    this.$router.push({name:'tests-results-HollandResult', params:{ R: response.R, I: response.I, A: response.A, S: response.S, E: response.E, C: response.C}});
                })
            }
        }
    }
</script>

<style scoped>

</style>

<template>
  <div>
    <div v-if="!this.fa">
      <EnNotAvailable />
    </div>
    <div class="flex flex-column" v-if="this.fa">
      <Slider v-bind:slider="slider[10]" />
      <TestR v-on:submit="submit" :must-answered-all="true" testId="6" navigationPermissin="true"/>
    </div>
  </div>
</template>

<script>
    import {mapState} from 'vuex';
    import apiServices from "../../api/apiServices";
    import EnNotAvailable from "../../components/layout/EnNotAvailable";
    import {slider} from "../../data/data";
    import TestR from "../../components/test/TestR";
    import Slider from "../../components/fun/Slider";
    export default {
        name: "Stephen",
        components: {Slider, EnNotAvailable, TestR},
        data() {
            return {
                slider: slider,
                alreadyDone: false,
            }
        },
        computed: mapState(['fa']),
        mounted() {

        },
        methods: {
            submit({choices}) {
                this.$store.commit('loadingMessage' , {fa: 'در حال محاسبه نتایج آزمون ...', en: 'Calculating test result ...'});
                this.$store.commit('api', 'pending');
                apiServices.methods.postStephenResponse({choices}).then(response => {
                    // this.$store.commit('api', 'done');
                    console.log(response);
                    this.$router.push({name:'tests-results-StephenResult', params:{ dependent: response.dependent_from_100,
                            independent: response.independent_from_100, interdependent: response.interdependent_from_100,
                            }});
                })
            }
        }
    }
</script>

<style scoped>

</style>

<template>
  <div>
    <div v-if="!this.fa">
      <EnNotAvailable />
    </div>
    <div class="flex flex-column" v-if="this.fa">
      <Slider v-bind:slider="slider[9]" />
      <TestR v-on:submit="submit" :must-answered-all="true" testId="5" navigationPermissin="true"/>
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
        name: "Glasser",
        components: {Slider, EnNotAvailable, TestR},
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
                apiServices.methods.postGlasserResponse({choices}).then(response => {
                    // this.$store.commit('api', 'done');
                    console.log(response);
                    this.$router.push({name:'tests-results-GlasserResult', params:{ n1: response.need_1_from_100,
                            n2: response.need_2_from_100, n3: response.need_3_from_100,
                            n4: response.need_4_from_100, n5: response.need_5_from_100}});
                })
            }
        }
    }
</script>

<style scoped>

</style>

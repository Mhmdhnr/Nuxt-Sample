<template>
  <div>
    <div v-if="!this.fa">
      <EnNotAvailable />
    </div>
    <div class="flex flex-column" v-if="this.fa">
      <Slider v-bind:slider="slider[8]" />
      <TestR :mustAnsweredAll="true"  v-on:submit="submit" testId="4"/>
<!--      <Test :mustAnsweredAll="true"  v-on:submit="submit" testId="4"/>-->
    </div>
  </div>
</template>

<script>
    import apiServices from "../../api/apiServices";
    import {mapState} from 'vuex';
    import EnNotAvailable from "../../components/layout/EnNotAvailable";
    import {slider} from "../../data/data";
    import Slider from "../../components/fun/Slider";
    import TestR from "../../components/test/TestR";
    export default {
        name: "Johnson",
        components: {TestR, Slider, EnNotAvailable},
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
                apiServices.methods.postJohnsonResponse({choices}).then(response => {
                    // this.$store.commit('api', 'done');
                    console.log(response);
                    this.$router.push({name:'tests-results-JohnsonResult',
                        params:{
                            a1: response.aptitude_1, a2: response.aptitude_2, a3: response.aptitude_3, a4: response.aptitude_4,
                            a5: response.aptitude_5, a6: response.aptitude_6, a7: response.aptitude_7, a8: response.aptitude_8,
                            a9: response.aptitude_9, a10: response.aptitude_10, a11: response.aptitude_11, a12: response.aptitude_12,
                        }});
                })
            }
        }
    }
</script>

<style scoped>

</style>

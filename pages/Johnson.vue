<template>
  <div>
    <div v-if="!this.fa">
      <EnNotAvailable />
    </div>
    <div class="flex flex-column" v-if="this.fa">
      <Slider v-bind:slider="slider[8]" />
      <Test :mustAnsweredAll="true"  v-on:submit="submit" testId="4"/>
    </div>
  </div>
</template>

<script>
    import apiServices from "../api/apiServices";
    import {mapState} from 'vuex';
    import EnNotAvailable from "../components/EnNotAvailable";
    import {slider} from "../data/data";
    import Slider from "../components/Slider";
    import Test from "../components/Test";
    export default {
        name: "Johnson",
        components: {Test, Slider, EnNotAvailable},
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
                    this.$router.push({name:'JohnsonResult',
                        params:{
                            a1: response.aptitude1, a2: response.aptitude2, a3: response.aptitude3, a4: response.aptitude4,
                            a5: response.aptitude5, a6: response.aptitude6, a7: response.aptitude7, a8: response.aptitude8,
                            a9: response.aptitude9, a10: response.aptitude10, a11: response.aptitude11, a12: response.aptitude12,
                        }});
                })
            }
        }
    }
</script>

<style scoped>

</style>

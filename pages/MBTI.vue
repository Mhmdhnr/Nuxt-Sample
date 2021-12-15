<template>
    <div>
      <div v-if="!this.fa">
        <EnNotAvailable />
      </div>
      <div class="flex flex-column" v-if="this.fa">
        <Slider v-bind:slider="slider[6]" />
        <Test :mustAnsweredAll="true"  v-on:submit="submit" testId="1"/>
      </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    import apiServices from "../api/apiServices";
    import {slider} from "../data/data";
    import Test from "../components/Test";
    import Slider from "../components/Slider";
    import EnNotAvailable from "../components/EnNotAvailable";
    export default {
        name: "MBTI",
        components: {EnNotAvailable, Slider, Test},
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
                apiServices.methods.postMBTIResponse({choices}).then(response => {
                    // this.$store.commit('api', 'done');
                    console.log(response);
                    this.$router.push({name:'MBTIResult', params:{type: response.type, EI: response.EI, SN: response.SN, TF: response.TF, JP: response.JP}});
                })
            }
        }
    }
</script>

<style scoped>
</style>

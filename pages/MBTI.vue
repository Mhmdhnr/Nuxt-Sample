<template>
  <div class="flex flex-column">
    <Slider v-bind:slider="slider[0]" />
    <Test :mustAnsweredAll="false"  v-on:submit="submit" testId="1"/>
  </div>
</template>

<script>
    import apiServices from "../api/apiServices";
    import {slider} from "../data/data";
    import Test from "../components/Test";
    import Slider from "../components/Slider";
    export default {
        name: "MBTI",
        components: {Slider, Test},
        data() {
            return {
                slider: slider,
            }
        },
        methods: {
            submit({choices}) {
                this.$store.commit('loadingMessage' , {fa: 'در حال محاسبه نتایج آزمون ...', en: 'Calculating test result ...'});
                this.$store.commit('api', 'pending');
                apiServices.methods.postMBTIResponse({choices}).then(response => {
                    this.$store.commit('api', 'done');
                    console.log(response);
                    this.$router.push({name:'MBTIResult', params:{type: response.type, EI: response.EI, SN: response.SN, TF: response.TF, JP: response.JP}});
                })
            }
        }
    }
</script>

<style scoped>
</style>

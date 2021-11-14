<template>
  <div class="flex flex-column">
    <Slider v-bind:slider="slider[4]" />
    <Test v-on:submit="submit" testId="2"/>
  </div>
</template>

<script>
    import apiServices from "../api/apiServices";
    import {slider} from "../data/data";
    import Test from "../components/Test";
    import Slider from "../components/Slider";
    export default {
        name: "Raven",
        components: {Slider, Test},
        data() {
            return {
                slider: slider,
            }
        },
        methods: {
            submit({choices}) {
                apiServices.methods.postRavenResponse(choices).then(response => {
                    console.log(response);
                    this.$router.push({name:'RavenResult', params:{iq: response.iq}});
                })
            }
        }
    }
</script>

<style scoped>
</style>

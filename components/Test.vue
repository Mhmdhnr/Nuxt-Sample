<template>
  <div class="test flex">
    <Question v-on:selected="select" v-for="question in test.questions" v-bind:question="question" />
    <button class="btn-border-hover submit">
      <span v-on:click="submit()" v-show="this.$store.state.fa" class="btn-border-hover-text"> ارسال آزمون </span>
      <span v-on:click="submit()" v-show="!this.$store.state.fa" class="btn-border-hover-text"> Submit </span>
    </button>
  </div>
</template>

<script>
    import {slider} from '../data/data.js';
    import apiServices from "../api/apiServices";
    import Question from "./Question";
    import Slider from "./Slider";
    import AnimatedWaves from "./AnimatedWaves";
    import BtnHoverBorder from "./Buttons/BtnHoverBorder";
    export default {
        name: "Test",
        components: {BtnHoverBorder, AnimatedWaves, Slider, Question},
        props:['testId'],
        data() {
            return {
                test: {},
                slider: slider,
                choices_array: Array(),
            }
        },
        beforeMount() {
            apiServices.methods.getTest(this.testId).then(response => {
              this.test = response;
              this.choices_array = Array(this.test.questions.length);
            })
        },
        methods:{
            select({choiceIndex, questionIndex}){
                this.choices_array[questionIndex - 1] = choiceIndex;
            },
            submit(){
                this.$emit('submit', {choices: this.choices_array})
            }
        }
    }
</script>

<style scoped>
  .submit {
    margin: 3vh auto;
  }
  .test {
    width: 1080px;
    height: 100%;
    padding: 2vh 0;
    flex-direction: column;
    justify-content: center;
  }
</style>

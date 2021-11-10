<template>
    <div class="question flex">
      <div class="flex question-head">
        <div v-show="question.question_fa" class="question-text flex">
          {{question.question_fa}}
        </div>
        <img v-if="question.question_image" class="question-image" :src="require(`~/assets/images/raven/${question.question_image}.jpg`)">
      </div>
      <div class="choices">
        <div v-for="choice in question.choices" class="choice flex">
          <input class="test-input" :id="choice.id" type="radio" v-bind:value="choice.index" v-model="selected">
          <label v-show="choice.choice_fa" class="choice-label" @click="check(question, choice)">{{choice.choice_fa}}</label>
          <label v-show="choice.choice_image" class="choice-label-image" @click="check(question, choice)">
            <img v-if="choice.choice_image" class="choice-image" :src="require(`~/assets/images/raven/${choice.choice_image}.jpg`)">
          </label>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Question",
        props: ['question'],
        data() {
            return {
                selected: false
            }
        },
        mounted() {
            if(this.question.choices[0].choice_image){
                for (let d of document.querySelectorAll(".choice")){
                    d.style.width = "200px"
                    d.style.height = "100px"
                }
            }
            else {
                for (let d of document.querySelectorAll("choice")){
                    d.style.height = "6vh"
                }
            }

        },
        methods: {
            check(question, choice) {
                if (document.getElementById(choice.id).checked === true) {
                    document.getElementById(choice.id).checked = false
                }
                else {
                console.log("click")
                  for (const choice of question.choices) {
                      document.getElementById(choice.id).checked = false
                  }
                  document.getElementById(choice.id).checked = true;
                  this.$emit('selected', {choiceIndex: choice.index, questionIndex: question.index})
                }
            },
        }
    }
</script>

<style scoped>
  .test-input {
    position: absolute;
    display: none;
  }
  .question {
    flex-direction: column;
    justify-content: flex-start;
    margin: 0 auto 2vh;
    /*border: 1px solid var(--primary-color);*/
    width: 100%;
    height: 100%;
    padding: 0;
  }
  .question-head{
    padding: 0 0 3vh;
  }
  .question-text {
    padding: 2vh 2vw 2vh;
    /*background-color: var(--primary-color);*/
    /*color: var(--bg-color);*/
    font-size: 0.9em;
    justify-self: flex-start;
    margin: auto 0 auto;
  }
  .question-image {
    margin: auto;
    width: 300px;
  }
  .choices {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    width: 100%;
    height: auto;
    padding: 0 2vw 1vh;
  }
  .choice {
    width: 100%;
    height: 6vh;
    margin: 0 4vw;
    position: relative;
  }
  .choice-label {
    margin: 0 0 1vh;
    position: absolute;
    width: 100%;
    height: auto;
    top: 0;
    right: 0;
    border-radius: 4px;
    cursor: pointer;
    padding: 1vh 2vw;
    z-index: 1;
    font-size: 0.8em;
    box-shadow: 0 0 4px 1px rgba(100,100,100,0.2);
    color: var(--text-color);
  }
  .choice-label-image {
    display: flex;
    margin: 0 0 1vh;
    position: absolute;
    width: 100%;
    height: auto;
    top: 0;
    right: 0;
    border-radius: 4px;
    cursor: pointer;
    padding: 1vh 2vw;
    z-index: 1;
    box-shadow: 0 0 4px 1px rgba(100,100,100,0.2);
    color: var(--text-color);
  }
  .choice-image {
    margin: auto;
    width: 100px;
  }
  .test-input:checked ~ .choice-label, .test-input:checked ~ .choice-label-image{
    background-color: var(--primary-color);
    color: var(--bg-color);
  }
</style>

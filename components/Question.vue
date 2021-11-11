<template>
    <div class="question flex">
      <div v-show="question.question_fa" class="question-main question-main-text">
        <div  class="question-text flex">
          <span>{{question.index}}) {{question.question_fa}}</span>
        </div>
      </div>
      <div v-if="question.question_image" class="flex question-main question-main-image">
        <span>({{question.index}})</span>
        <img v-if="question.question_image" class="question-image" :src="require(`~/assets/images/raven/${question.question_image}.jpg`)">
      </div>
      <div class="choices choices-text">
        <div v-if="choice.choice_fa" v-for="choice in question.choices" class="choice choice-text flex">
          <input class="test-input" :id="choice.id" type="radio" v-bind:value="choice.index" v-model="selected">
          <label  class="choice-label" @click="check(question, choice)">{{choice.choice_fa}}</label>
        </div>
      </div>
      <div class="choices choices-image">
        <div v-if="choice.choice_image" v-for="choice in question.choices" class="choice choice-image flex">
          <input class="test-input" :id="choice.id" type="radio" v-bind:value="choice.index" v-model="selected">
          <label class="choice-label-image" @click="check(question, choice)">
            <img class="image" :src="require(`~/assets/images/raven/${choice.choice_image}.jpg`)">
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
            // let questions = document.getElementsByClassName('question');
            // let i = 1;
            // for(let question of questions) {
            //     if(i%2 === 0) {
            //       question.style.backgroundColor = "#eee"
            //     } else {
            //       question.style.backgroundColor = "#ddd"
            //     }
            //     i ++
            // }
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
    margin: 0 auto;
    border-bottom: 2px solid var(--primary-color);
    width: 100%;
    height: 100%;
    padding: 0;
  }
  .question-main{

    padding: 2vh 0;
  }
  .question-main-text {
    width: 100%;
  }
  .question-main-image {
    width: 100%;
    position: relative;
  }
  .question-main-image > span {
    position: absolute;
    right: 2vw;
    top: 2vh;
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
  }
  .choices {
    /*display: flex;*/
    flex-direction: row;
    justify-content: center;
    width: 100%;
    height: auto;
    padding: 0 2vw 1vh;
  }
  .choices-image {
    display: grid;
    grid-template-columns: auto auto auto auto;
  }
  .choice {
    margin: 2vw;
    position: relative;
  }
  .choice-text {
    margin: 1vw;
    height: 6vh;
  }
  .choice-image {
    height: 125px;
    width: 125px;
  }
  .choice-label {
    margin: 0 0 1vh;
    position: absolute;
    width: 100%;
    height: 100%;
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
    justify-content: center;
    margin: 0 0 1vh;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    border-radius: 4px;
    cursor: pointer;
    padding: 1vh 2vw;
    z-index: 1;
    box-shadow: 0 0 4px 1px rgba(100,100,100,0.2);
    color: var(--text-color);
  }
  .image {
    margin: auto;
    width: 100px;
  }
  .test-input:checked ~ .choice-label, .test-input:checked ~ .choice-label-image{
    background-color: var(--primary-color);
    color: var(--bg-color);
  }
</style>

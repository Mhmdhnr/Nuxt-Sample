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
        <div v-if="choice.content.choice_fa" v-for="choice in question.choices" class="choice choice-text flex">
          <input class="test-input" :id="choice.id" type="radio" v-bind:value="choice.index" v-model="selected">
          <label  class="choice-label" @click="check(question, choice)">{{choice.content.choice_fa}}</label>
        </div>
      </div>
      <div class="choices choices-image">
        <div v-if="choice.content.choice_image" v-for="choice in question.choices" class="choice choice-image flex">
          <input class="test-input" :id="choice.id" type="radio" v-bind:value="choice.index" v-model="selected">
          <label class="choice-label-image" @click="check(question, choice)">
            <img class="image" :src="require(`~/assets/images/raven/${choice.content.choice_image}.jpg`)">
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
            let choiceArray = JSON.parse(localStorage.getItem('testResponse'));
            let questionChoices = this.question.choices;
            let questionResponseIndex = choiceArray.find(x => x.questionId === this.question.id).choice;
            let choiceId = null;
            if(questionChoices[questionResponseIndex - 1]){
                choiceId = questionChoices[questionResponseIndex - 1].id;
                this.$nextTick(function () {
                    this.check(this.question, questionChoices[questionResponseIndex - 1]);
                })
            }
        },
        methods: {
            check(question, choice) {
                if (document.getElementById(choice.id).checked === true) {
                    document.getElementById(choice.id).checked = false;
                    this.$emit('selected', {choiceIndex: 0, questionId: question.id})
                }
                else {
                  for (const choice of question.choices) {
                      document.getElementById(choice.id).checked = false
                  }
                  document.getElementById(choice.id).checked = true;
                  this.$emit('selected', {choiceIndex: choice.index, questionId: question.id})
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
    padding: 1vh 0;
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
    padding: 1vh 2vw 1vh;
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
    padding: 0 2vw;
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
    margin: 1vh 1vw;
    height: 5.5vh;
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
  @media screen and (max-width: 864px) {
    .choices-image {
      display: grid;
      grid-template-columns: auto auto;
    }
    .choice-image {
      height: 100px;
      width: 125px;
    }
    .question-main {
      padding: 1vh 0;
    }
    .question-text {
      font-size: 0.65em;
    }
    .choice-text {
      font-size: 0.8em;
      margin-bottom: 1vh;
    }
  }
</style>

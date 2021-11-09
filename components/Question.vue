<template>
    <div class="question">
      <div class="question-head flex">
        {{question.question_fa}}
      </div>
      <div class="choices">
        <div v-for="choice in question.choices" class="choice">
          <input class="test-input" :id="choice.id" type="radio" v-bind:value="choice.index" v-model="selected">
          <label class="choice-label" @click="check(question, choice)">{{choice.choice_fa}}</label>
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
            console.log(this.question)
        },
        methods: {
            check(question, choice) {
                if (document.getElementById(choice.id).checked === true) {
                    document.getElementById(choice.id).checked = false
                }
                else {
                  for (const choice of question.choices) {
                      document.getElementById(choice.id).checked = false
                  }
                  document.getElementById(choice.id).checked = true
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
    margin: auto;
    border: 1px solid var(--primary-color);
    width: 100%;
    height: 100%;
    padding: 0;
  }
  .question-head {
    padding: 2vh 2vw 2vh;
    background-color: var(--primary-color);
    color: var(--bg-color);
    font-size: 0.9em;
  }
  .choices {
    width: 100%;
    height: auto;
    padding: 2vh 2vw 1vh;
  }
  .choice {
    width: 100%;
    height: 6vh;
    position: relative;
  }
  .choice-label {
    margin: 0 0 1vh;
    position: absolute;
    width: auto;
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
  .test-input:checked ~ .choice-label{
    background-color: var(--primary-color);
    color: var(--bg-color);
  }
</style>

<template>
  <div class="section flex flex-column">
    <Question :id="`q${question.id}`" v-on:selected="select" v-for="question in this.section.questions" v-bind:question="question" />
    <div class="hint">
      <div v-if="!this.allAnswered"  v-on:click="unAnswered()">
        <span v-if="this.fa"> به تمام سوالات این بخش پاسخ نداده اید (کلیک کنید) </span>
        <span v-if="!this.fa"> You have not answered all questions </span>
      </div>
      <div v-if="this.allAnswered">
        <span v-if="this.fa"> به تمام سوالات این بخش پاسخ داده اید </span>
        <span v-if="!this.fa"> You have answered all questions </span>
      </div>
    </div>
  </div>
</template>

<script>
    import Question from "./Question";
    import {mapState} from 'vuex';
    export default {
        name: "Section",
        components: {Question},
        props: ['section'],
        computed: mapState(['fa']),
        data () {
            return {
                questionCount: 0,
                choices: [],
                done: false,
                allAnswered: false,
            }
        },
        mounted() {
          this.questionCount = this.section.questions.length;
          for (let question of this.section.questions) {
              let slot = {
                  questionId: question.id,
                  choice: 0,
              };
              this.choices.push(slot);
          }
        },
        methods: {
            select({choiceIndex, questionId}){
                console.log('from section');
                this.choices.find(x => x.questionId === questionId).choice = choiceIndex;
                this.done = !this.choices.some(x => x.choice === 0);
                if(this.done) {
                    this.$emit('done', {sectionId: this.section.id, done: true});
                    this.allAnswered = true;
                } else {
                    this.$emit('done', {sectionId: this.section.id, done: false});
                    this.allAnswered = false;
                }
                this.$emit('selected', {choiceIndex: choiceIndex, questionId: questionId})
            },
            unAnswered() {
                let index = this.choices.findIndex(x => x.choice === 0);
                let unAnsweredQuestionId = this.section.questions[index].id;
                document.getElementById("q" + unAnsweredQuestionId.toString()).scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }
    }
</script>

<style scoped>
  .section {
    /*border-top: 1px solid var(--text-color);*/
    justify-content: flex-start;
    width: 100%;
    /*height: 70vh;*/
    padding: 0 2vw 14vh;
  }
  .hint {
    cursor: pointer;
    padding: 1vh 0 0;
    /*animation: 400ms beat alternate infinite;*/
    font-size: 0.8em;
  }
  @keyframes beat {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(1.03);
    }
  }
  @media screen and (max-width: 864px){
    .section {
      padding-bottom: 20vh;
    }
  }
</style>

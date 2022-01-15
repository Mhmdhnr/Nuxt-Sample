<template>
  <div>
    <div v-if="!this.fa">
      <EnNotAvailable />
    </div>
    <div v-if="this.fa" class="stephen-result flex flex-column">
      <div class="half">
        <img src="~/assets/images/dividerJohnson.svg" alt="" class="divider">
        <div class="circle"></div>
      </div>
      <div v-for="(stephenType, index) in this.stephenTypes" :class="`circle-${index + 1}`" class="circle-title">{{stephenType.title.fa}}</div>
      <div v-for="(stephenType, index) in this.stephenTypes" :class="`arc-${index + 1}`" class="arc">
        <span class="value"></span>
        <div class="details flex flex-column">
          <span>{{stephenType.title.fa}}</span>
          <br>
          <div class="des">
            <TypingMachine :subject="stephenType.id" delay="800" speed="2000" :forwards="true" :sound="true">
              <span>{{stephenType.shortDes.fa}}</span>
            </TypingMachine>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import {stephenTypes} from "../data/stephen.js";
    import {mapState} from 'vuex'
    import EnNotAvailable from "../components/EnNotAvailable";
    import TypingMachine from "../components/TypingMachine";
    import apiServices from "../api/apiServices";
    export default {
        name: "StephenResult",
        components: {TypingMachine, EnNotAvailable},
        computed: mapState(['fa']),
        data() {
            return {
                stephenTypes: stephenTypes
            }
        },
        mounted() {
            let dependent = null;
            let independent = null;
            let interdependent = null;
            if (!this.$route.params.n1) {
                apiServices.methods.userTestResults().then(response => {
                    console.log(response);
                    dependent = response.user_stephen_results.dependent;
                    independent = response.user_stephen_results.independent;
                    interdependent = response.user_stephen_results.interdependent;
                    let values = [dependent, independent, interdependent];
                    console.log(values);
                    this.handleDisplay(values);
                })
            } else {
                dependent = this.$route.params.dependent;
                independent = this.$route.params.independent;
                interdependent = this.$route.params.interdependent;
                let values = [dependent, independent, interdependent];
                this.handleDisplay(values);
            }
        },
        methods: {
            handleDisplay(values) {
                let base = 700;
                if(window.screen.width <= 864){
                    base = 330;
                }
                let element1 = document.getElementsByClassName('arc-1')[0];
                let element2 = document.getElementsByClassName('arc-2')[0];
                let element3 = document.getElementsByClassName('arc-3')[0];

                let elements = [element1, element2, element3];
                console.log(elements);
                for (let j = 0; j < 3; j++){
                    elements[j].onmouseover = function () {
                        elements[j].style.width = base + "px";
                        elements[j].style.height = base + "px";
                        if(values[j] <= 35 || base <= 500) {
                            elements[j].children[0].style.display = 'unset';
                        }
                    };
                    elements[j].onmouseleave = function (){
                        elements[j].style.width = (values[j] * base / 100) + 'px';
                        elements[j].style.height = (values[j] * base / 100) + 'px';
                        if(values[j] <= 35 || base <= 500) {
                            // elements[j].children[0].style.display = 'none';
                        }
                    };
                }
                for (let j = 0; j < 3; j++){
                    setTimeout(() => {
                        elements[j].style.height = (values[j] * base / 100) + 'px';
                        elements[j].style.width = (values[j] * base / 100) + 'px';
                        elements[j].children[0].innerText = Math.floor(values[j]) + "%";
                        if(values[j] <= 35 || base <= 500) {
                            // elements[j].children[0].style.display = 'none';
                        }
                    }, j * 500)
                }
            }
        }
    }
</script>

<style scoped>
  .stephen-result {
    justify-content: center;
    height: 800px;
    position: relative;
    margin-top: 4vh;
  }
  .circle {
    position: absolute;
    width: 700px;
    height: 700px;
    border-radius: 50%;
    background-color: var(--primary-color);
    opacity: 0.3;
  }
  .half {
    position: relative;
    width: 700px;
    height: 350px;
    overflow: hidden;
    margin: 50px auto auto;
  }
  .divider {
    position: absolute;
    width: 700px;
    height: 700px;
    z-index: 10;
    opacity: 0.5;
  }
  .circle-title {
    opacity: 0;
    display: flex;
    justify-content: center;
    width: 760px;
    height: 760px;
    position: absolute;
    /*color: var(--primary-color);*/
    font-size: 1em;
  }
  .arc {
    position: absolute;
    width: 0;
    height: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    border-radius: 50%;
    clip-path: polygon(21.2% 0, 78.8% 0, 50% 50%);
    transition: all 400ms ease-in-out;
    z-index: 11;
  }
  .value {
    margin-bottom: 75%;
    font-size: 1em;
    color: var(--bg-color)
  }
  .details {
    display: none;
    justify-content: center;
    text-align: center;
  }
  .details > span {
    color: var(--bg-color);
    font-size: 1.5em;
  }
  .des {
    font-size: 0.8em;
    width: 80%;
    margin: 2vh auto;
  }
  .des > * > span {
    color: var(--bg-color);
  }
  .arc-1:hover, .arc-2:hover, .arc-3:hover{
    clip-path: none;
    transform: rotate(360deg);
    transition: all 400ms;
    z-index: 20;
  }
  .arc-1:hover .details, .arc-2:hover .details, .arc-3:hover .details{
    display: block;
  }
  .arc-1:hover .value, .arc-2:hover .value, .arc-3:hover .value {
    margin-bottom: 2vh;
    font-size: 1.5em;
  }
  .arc-1, .arc-3{
    background-color: var(--primary-color);
  }
  .arc-2 {
  }
  .arc-1 {
    transform: rotate(-60deg);
    background-color: hsl(0, 80%, 60%);
  }
  .arc-2 {
    transform: rotate(0deg);
    background-color: hsl(250, 80%, 60%);
  }
  .arc-3 {
    transform: rotate(60deg);
    background-color: hsl(144, 80%, 60%);
  }
  .circle-1{
    transform: rotate(-60deg);
    color: hsl(0, 80%, 50%);
    animation: 200ms opacity ease-in-out forwards 500ms;
  }
  .circle-2{
    transform: rotate(0deg);
    color: hsl(250, 80%, 50%);
    animation: 200ms opacity ease-in-out forwards 1000ms;
  }
  .circle-3{
    transform: rotate(60deg);
    color: hsl(144, 80%, 50%);
    animation: 200ms opacity ease-in-out forwards 1500ms;
  }

  @keyframes opacity {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @media screen and (max-width: 864px) {
    .stephen-result {
      height: 80vh;
    }
    .value {
      margin-bottom: 75%;
      font-size: 0.8em;
    }
    .arc-1:hover .value, .arc-2:hover .value, .arc-3:hover .value {
      margin-bottom: 1vh;
      font-size: 1em;
    }
    .circle {
      width: 330px;
      height: 330px;
    }
    .divider {
      display: none;
    }
    .half {
      position: relative;
      width: 330px;
      height: 165px;
      overflow: hidden;
      margin: calc((80vh - 330px) / 2) auto auto;
    }
    .circle-title {
      width: 370px;
      height: 375px;
      font-size: 0.7em;
    }
    .arc {
      font-size: 1em;
    }
    .details > span {
      font-size: 0.7em;
    }
    .des {
      font-size: 0.5em;
      width: 80%;
      margin: 2vh auto;
    }
  }
</style>

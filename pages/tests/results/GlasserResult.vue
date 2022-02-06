<template>
  <div>
    <div v-if="!this.fa">
      <EnNotAvailable />
    </div>
    <div v-if="this.fa" class="glasser-result flex flex-column">
      <img src="~/assets/images/dividerGlasser.svg" alt="" class="divider">
      <div class="circle"></div>
      <div v-for="(glasserType, index) in this.glasserTypes" :class="`circle-${index + 1}`" class="circle-title">{{glasserType.title.fa}}</div>
      <div v-for="(glasserType, index) in this.glasserTypes" :class="`arc-${index + 1}`" class="arc">
        <span class="value"></span>
        <div class="details flex flex-column">
          <span>{{glasserType.title.fa}}</span>
          <br>
          <div class="des">
            <TypingMachine :subject="glasserType.id" delay="800" speed="2000" :forwards="true" :sound="true">
              <span>{{glasserType.shortDes.fa}}</span>
            </TypingMachine>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import {glasserTypes} from "../../../data/testData/glasser.js";
    import {mapState} from 'vuex'
    import EnNotAvailable from "../../../components/layout/EnNotAvailable";
    import TypingMachine from "../../../components/fun/TypingMachine";
    import apiServices from "../../../api/apiServices";
    export default {
        name: "GlasserResult",
        components: {TypingMachine, EnNotAvailable},
        computed: mapState(['fa']),
        data() {
            return {
                glasserTypes: glasserTypes
            }
        },
        mounted() {
            let n1 = null;
            let n2 = null;
            let n3 = null;
            let n4 = null;
            let n5 = null;
            let values = [n1, n2, n3, n4, n5];
            if (!this.$route.params.n1) {
                apiServices.methods.userTestResults().then(response => {
                    console.log(response);
                    n1 = response.user_glasser_results.need_1;
                    n2 = response.user_glasser_results.need_2;
                    n3 = response.user_glasser_results.need_3;
                    n4 = response.user_glasser_results.need_4;
                    n5 = response.user_glasser_results.need_5;
                    values = [n1, n2, n3, n4, n5];
                    console.log(values);
                    this.handleDisplay(values);
                }).catch(function () {
                    this.handleDisplay(values);
                })
            } else {
                n1 = this.$route.params.n1;
                n2 = this.$route.params.n2;
                n3 = this.$route.params.n3;
                n4 = this.$route.params.n4;
                n5 = this.$route.params.n5;
                values = [n1, n2, n3, n4, n5];
                this.handleDisplay(values);
            }
        },
        methods: {
            handleDisplay(values) {
                let base = 700;
                if(window.screen.width <= 864){
                    base = 320;
                }
                let element1 = document.getElementsByClassName('arc-1')[0];
                let element2 = document.getElementsByClassName('arc-2')[0];
                let element3 = document.getElementsByClassName('arc-3')[0];
                let element4 = document.getElementsByClassName('arc-4')[0];
                let element5 = document.getElementsByClassName('arc-5')[0];

                let elements = [element1, element2, element3, element4, element5];
                console.log(elements);
                for (let j = 0; j < 5; j++){
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
                for (let j = 0; j < 5; j++){
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
  .glasser-result {
    justify-content: center;
    height: 800px;
    position: relative;
    padding-top: 4vh;
  }
  .circle {
    position: absolute;
    width: 700px;
    height: 700px;
    border-radius: 50%;
    background-color: var(--primary-color);
    opacity: 0.3;
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
    clip-path: polygon(13.6% 0, 86.2% 0, 50% 50%);
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
  .arc-1:hover, .arc-2:hover, .arc-3:hover, .arc-4:hover, .arc-5:hover {
    clip-path: none;
    transform: rotate(360deg);
    transition: all 400ms;
    z-index: 20;
  }
  .arc-1:hover .details, .arc-2:hover .details, .arc-3:hover .details, .arc-4:hover .details, .arc-5:hover .details {
    display: block;
  }
  .arc-1:hover .value, .arc-2:hover .value, .arc-3:hover .value, .arc-4:hover .value, .arc-5:hover .value {
    margin-bottom: 2vh;
    font-size: 1.5em;
  }
  .arc-1, .arc-3, .arc-5{
    background-color: var(--primary-color);
  }
  .arc-2, .arc-4 {
  }
  .arc-1 {
    transform: rotate(36deg);
    background-color: hsl(0, 80%, 60%);
  }
  .arc-2 {
    transform: rotate(108deg);
    background-color: hsl(30, 80%, 60%);
  }
  .arc-3 {
    transform: rotate(180deg);
    background-color: hsl(144, 80%, 60%);
  }
  .arc-4 {
    transform: rotate(252deg);
    background-color: hsl(216, 80%, 60%);
  }
  .arc-5 {
    transform: rotate(324deg);
    background-color: hsl(288, 80%, 60%);
  }
  .circle-1{
    transform: rotate(36deg);
    color: hsl(0, 80%, 50%);
    animation: 200ms opacity ease-in-out forwards 500ms;
  }
  .circle-2{
    transform: rotate(108deg);
    color: hsl(30, 80%, 50%);
    animation: 200ms opacity ease-in-out forwards 1000ms;
  }
  .circle-3{
    transform: rotate(180deg);
    color: hsl(144, 80%, 50%);
    animation: 200ms opacity ease-in-out forwards 1500ms;
  }
  .circle-4{
    transform: rotate(252deg);
    color: hsl(216, 80%, 50%);
    animation: 200ms opacity ease-in-out forwards 2000ms;
  }
  .circle-5{
    transform: rotate(324deg);
    color: hsl(288, 80%, 50%);
    animation: 200ms opacity ease-in-out forwards 2500ms;
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
    .glasser-result {
      height: 80vh;
    }
    .value {
      margin-bottom: 75%;
      font-size: 0.8em;
    }
    .arc-1:hover .value, .arc-2:hover .value, .arc-3:hover .value, .arc-4:hover .value, .arc-5:hover .value {
      margin-bottom: 1vh;
      font-size: 1em;
    }
    .circle {
      width: 320px;
      height: 320px;
    }
    .circle-title {
      width: 350px;
      height: 360px;
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

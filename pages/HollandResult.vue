<template>
    <div>
      <div v-if="!this.fa">
        <EnNotAvailable />
      </div>
      <div v-if="this.fa" class="holland-result flex flex-column">
        <div class="hexagon">
        </div>
        <img src="~/assets/images/dividerHolland.svg" alt="" class="divider">
        <div v-for="(hollandType, index) in this.hollandTypes" :class="`hexagon-${hollandType.abr}`">{{hollandType.title.fa}}</div>
        <div v-for="(hollandType, index) in this.hollandTypes" :class="hollandType.abr" class="triangle flex flex-column">
          <span class="value"></span>
          <div class="details flex flex-column">
            <span>{{hollandType.title.fa}}</span>
            <br>
            <div class="des">
              <TypingMachine :subject="hollandType.id" delay="800" speed="2000" :forwards="true" :sound="true">
                <span>{{hollandType.shortDes.fa}}</span>
              </TypingMachine>
            </div>
          </div>
        </div>
      </div>
    </div>

</template>

<script>
    import {hollandTypes} from "../data/Holland.js";
    import {mapState} from 'vuex'
    import EnNotAvailable from "../components/EnNotAvailable";
    import TypingMachine from "../components/TypingMachine";
    import apiServices from "../api/apiServices";
    export default {
        name: "HollandResult",
        components: {TypingMachine, EnNotAvailable},
        computed: mapState(['fa']),
        data () {
            return {
                hollandTypes: hollandTypes
            }
        },
        mounted() {
            let r = null;
            let i = null;
            let a = null;
            let s = null;
            let e = null;
            let c = null;
            if (!this.$route.params.R) {
                apiServices.methods.userTestResults().then(response => {
                    console.log(response);
                    r = response.user_holland_results.realistic;
                    i = response.user_holland_results.investigative;
                    a = response.user_holland_results.artistic;
                    s = response.user_holland_results.social;
                    e = response.user_holland_results.enterprising;
                    c = response.user_holland_results.conventional;
                    let values = [r, i, a, s, e, c];
                    console.log(values);
                    this.handleDisplay(values);
                })
            } else {
                r = this.$route.params.R;
                i = this.$route.params.I;
                a = this.$route.params.A;
                s = this.$route.params.S;
                e = this.$route.params.E;
                c = this.$route.params.C;
                let values = [r, i, a, s, e, c];
                this.handleDisplay(values);
            }
        }, methods: {
            handleDisplay(values){
                let base = 500;
                if(window.screen.width <= 864){
                    base = 320;
                }
                let rElement = document.getElementsByClassName('r')[0];
                let iElement = document.getElementsByClassName('i')[0];
                let aElement = document.getElementsByClassName('a')[0];
                let sElement = document.getElementsByClassName('s')[0];
                let eElement = document.getElementsByClassName('e')[0];
                let cElement = document.getElementsByClassName('c')[0];

                let elements = [rElement, iElement, aElement, sElement, eElement, cElement];
                for (let j = 0; j < 6; j++){
                    elements[j].onmouseover = function () {
                        elements[j].style.width = base + "px";
                        elements[j].style.height = base * 1.152 + "px";
                    };
                    elements[j].onmouseleave = function (){
                        elements[j].style.width = (values[j] * base / 100) + 'px';
                        elements[j].style.height = (values[j]  * base / 100) + 'px';
                    };
                }
                for (let j = 0; j < 6; j++){
                    setTimeout(() => {
                        elements[j].style.height = (values[j]  * base / 100) + 'px';
                        elements[j].style.width = (values[j]  * base / 100) + 'px';
                        elements[j].children[0].innerText = values[j] + "%";
                    }, j * 1000)
                }
            }
        }
    }
</script>


<style scoped>
  .holland-result {
    justify-content: center;
    height: 80vh;
    position: relative;
  }
  .triangle {
    position: absolute;
    width: 0;
    height: 0;
    /*opacity: 0.5;*/
    clip-path: polygon(21% 0, 79% 0, 50% 50%);
    background-color: var(--bg-color);
    justify-content: center;
    transition: all 400ms ease-in-out;
    z-index: 11;
  }
  .value {
    margin-bottom: 75%;
    font-size: 1.2em;
    color: var(--bg-color)
  }
  .hexagon {
    width: 500px;
    height: 576px;
    position: absolute;
    clip-path: polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%);
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
  .hexagon-r, .hexagon-i, .hexagon-a, .hexagon-s, .hexagon-e, .hexagon-c {
    opacity: 0;
    display: flex;
    justify-content: center;
    width: 500px;
    height: 600px;
    position: absolute;
    color: var(--primary-color);
    font-size: 1.3em;
  }
  .hexagon-r{
    transform: rotateZ(30deg);
    color: #ff5082;
    animation: 400ms opacity ease-in-out forwards 500ms;
  }
  .hexagon-i{
    transform: rotateZ(90deg);
    color: #577bff;
    animation: 400ms opacity ease-in-out 1500ms forwards;
  }
  .hexagon-a{
    transform: rotateZ(150deg);
    color: #ff5356;
    animation: 400ms opacity ease-in-out 2500ms forwards;
  }
  .hexagon-s{
    transform: rotateZ(210deg);
    color: #37e67f;
    animation: 400ms opacity ease-in-out 3500ms forwards;
  }
  .hexagon-e{
    transform: rotateZ(270deg);
    color: #e061df;
    animation: 400ms opacity ease-in-out 4500ms forwards;
  }
  .hexagon-c{
    transform: rotateZ(330deg);
    color: #ff6f3c;
    animation: 400ms opacity ease-in-out 5500ms forwards;
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
  .r:hover, .i:hover, .a:hover, .s:hover, .e:hover, .c:hover{
    transform: rotateZ(360deg);
    transition: all 500ms;
    clip-path: polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%);
    z-index: 20;
  }
  .r:hover .details, .i:hover .details, .a:hover .details, .s:hover .details, .e:hover .details, .c:hover .details{
    display: block;
  }
  .r:hover .value, .i:hover .value, .a:hover .value, .s:hover .value, .e:hover .value, .c:hover .value {
    margin: unset;
  }
  .des {
    font-size: 0.8em;
    width: 80%;
    margin: 2vh auto;
  }
  .des > * > span {
    color: var(--bg-color);
  }
  .r{
    background-color: #ff5082;
    transform: rotateZ(30deg);
  }
  .i{
    background-color: #577bff;
    transform: rotateZ(90deg);
  }
  .a{
    background-color: #ff5356;
    transform: rotateZ(150deg);
  }
  .s{
    background-color: #37e67f;
    transform: rotateZ(210deg);
  }
  .e{
    background-color: #e061df;
    transform: rotateZ(270deg);
  }
  .c{
    background-color: #ff6f3c;
    transform: rotateZ(330deg);
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
    .value {
      margin-bottom: 75%;
      font-size: 1em;
      color: var(--bg-color)
    }
    .hexagon {
      width: 320px;
      height: 367px;
    }
    .hexagon-r, .hexagon-i, .hexagon-a, .hexagon-s, .hexagon-e, .hexagon-c {
        width: 320px;
        height: 367px;
        font-size: 1em;
      }
    .details > span {
      font-size: 1.2em;
    }
    .des {
      font-size: 0.7em;
      width: 80%;
      margin: 2vh auto;
    }
  }
</style>

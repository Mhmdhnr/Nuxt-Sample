<template>
  <div>
    <div v-if="!this.fa">
      <EnNotAvailable />
    </div>
    <div v-if="this.fa" class="johnson-result flex flex-column">
      <img src="~/assets/images/dividerJohnson.svg" alt="" class="divider">
      <div class="circle"></div>
      <div v-for="(johnsonType, index) in this.johnsonTypes" :class="`circle-${index + 1}`" class="circle-title">{{johnsonType.shortTitle.fa}}</div>
      <div v-for="(johnsonType, index) in this.johnsonTypes" :class="`arc-${index + 1}`" class="arc">
        <span class="value"></span>
        <div class="details flex flex-column">
          <span>{{johnsonType.title.fa}}</span>
          <br>
          <div class="des">
            <TypingMachine :subject="johnsonType.id" delay="800" speed="2000" :forwards="true" :sound="true">
              <span>{{johnsonType.shortDes.fa}}</span>
            </TypingMachine>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import {johnsonTypes} from "../data/Johnson.js";
    import {mapState} from 'vuex'
    import EnNotAvailable from "../components/EnNotAvailable";
    import TypingMachine from "../components/TypingMachine";
    export default {
        name: "JohnsonResult",
        components: {TypingMachine, EnNotAvailable},
        computed: mapState(['fa']),
        data() {
            return {
                johnsonTypes: johnsonTypes
            }
        },
        mounted() {
            if (!this.$route.params.a1) {
                this.$router.push({name: 'Johnson'})
            }
            let base = 700;
            if(window.screen.width <= 864){
                base = 320;
            }
            let a1 = this.$route.params.a1;
            let a2 = this.$route.params.a2;
            let a3 = this.$route.params.a3;
            let a4 = this.$route.params.a4;
            let a5 = this.$route.params.a5;
            let a6 = this.$route.params.a6;
            let a7 = this.$route.params.a7;
            let a8 = this.$route.params.a8;
            let a9 = this.$route.params.a9;
            let a10 = this.$route.params.a10;
            let a11 = this.$route.params.a11;
            let a12 = this.$route.params.a12;
            // let a1 = 68;
            // let a2 = 79;
            // let a3 = 75;
            // let a4 = 89;
            // let a5 = 58;
            // let a6 = 48;
            // let a7 = 91;
            // let a8 = 48;
            // let a9 = 75;
            // let a10 = 68;
            // let a11 = 89;
            // let a12 = 43;
            let element1 = document.getElementsByClassName('arc-1')[0];
            let element2 = document.getElementsByClassName('arc-2')[0];
            let element3 = document.getElementsByClassName('arc-3')[0];
            let element4 = document.getElementsByClassName('arc-4')[0];
            let element5 = document.getElementsByClassName('arc-5')[0];
            let element6 = document.getElementsByClassName('arc-6')[0];
            let element7 = document.getElementsByClassName('arc-7')[0];
            let element8 = document.getElementsByClassName('arc-8')[0];
            let element9 = document.getElementsByClassName('arc-9')[0];
            let element10 = document.getElementsByClassName('arc-10')[0];
            let element11 = document.getElementsByClassName('arc-11')[0];
            let element12 = document.getElementsByClassName('arc-12')[0];
            let elements = [element1, element2, element3, element4, element5, element6, element7, element8, element9, element10, element11, element12];
            let values = [a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12];
            for (let j = 0; j < 12; j++){
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
                        elements[j].children[0].style.display = 'none';
                    }
                };
            }
            for (let j = 0; j < 12; j++){
                setTimeout(() => {
                    elements[j].style.height = (values[j] * base / 100) + 'px';
                    elements[j].style.width = (values[j] * base / 100) + 'px';
                    elements[j].children[0].innerText = Math.floor(values[j]) + "%";
                    if(values[j] <= 35 || base <= 500) {
                        elements[j].children[0].style.display = 'none';
                    }
                }, j * 500)
            }
        }
    }
</script>

<style scoped>
  .johnson-result {
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
    width: 750px;
    height: 750px;
    position: absolute;
    /*color: var(--primary-color);*/
    font-size: 0.8em;
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
    clip-path: polygon(36.62% 0, 63.38% 0, 50% 50%);
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
  .arc-1:hover, .arc-2:hover, .arc-3:hover, .arc-4:hover, .arc-5:hover, .arc-6:hover, .arc-7:hover, .arc-8:hover, .arc-9:hover, .arc-10:hover, .arc-11:hover, .arc-12:hover {
    clip-path: none;
    transform: rotate(360deg);
    transition: all 400ms;
    z-index: 20;
  }
  .arc-1:hover .details, .arc-2:hover .details, .arc-3:hover .details, .arc-4:hover .details, .arc-5:hover .details, .arc-6:hover .details, .arc-7:hover .details, .arc-8:hover .details, .arc-9:hover .details, .arc-10:hover .details, .arc-11:hover .details, .arc-12:hover .details {
    display: block;
  }
  .arc-1:hover .value, .arc-2:hover .value, .arc-3:hover .value, .arc-4:hover .value, .arc-5:hover .value, .arc-6:hover .value, .arc-7:hover .value, .arc-8:hover .value, .arc-9:hover .value, .arc-10:hover .value, .arc-11:hover .value, .arc-12:hover .value  {
    margin-bottom: 2vh;
    font-size: 1.5em;
  }
  .arc-1, .arc-3, .arc-5, .arc-7, .arc-9, .arc-11 {
    background-color: var(--primary-color);
  }
  .arc-2, .arc-4, .arc-6, .arc-8, .arc-10, .arc-12 {
  }
  .arc-1 {
    transform: rotate(15deg);
    background-color: hsl(0, 80%, 60%);
  }
  .arc-2 {
    transform: rotate(45deg);
    background-color: hsl(30, 80%, 60%);
  }
  .arc-3 {
    transform: rotate(75deg);
    background-color: hsl(60, 80%, 60%);
  }
  .arc-4 {
    transform: rotate(105deg);
    background-color: hsl(90, 80%, 60%);
  }
  .arc-5 {
    transform: rotate(135deg);
    background-color: hsl(120, 80%, 60%);
  }
  .arc-6 {
    transform: rotate(165deg);
    background-color: hsl(150, 80%, 60%);
  }
  .arc-7 {
    transform: rotate(195deg);
    background-color: hsl(180, 80%, 60%);
  }
  .arc-8 {
    transform: rotate(225deg);
    background-color: hsl(210, 80%, 60%);
  }
  .arc-9 {
    transform: rotate(255deg);
    background-color: hsl(240, 80%, 60%);
  }
  .arc-10 {
    transform: rotate(285deg);
    background-color: hsl(270, 80%, 60%);
  }
  .arc-11 {
    transform: rotate(315deg);
    background-color: hsl(300, 80%, 60%);
  }
  .arc-12 {
    transform: rotate(345deg);
    background-color: hsl(330, 80%, 60%);
  }
  .circle-1{
    transform: rotate(15deg);
    color: hsl(0, 80%, 50%);
    animation: 200ms opacity ease-in-out forwards 500ms;
  }
  .circle-2{
    transform: rotate(45deg);
    color: hsl(30, 80%, 50%);
    animation: 200ms opacity ease-in-out forwards 1000ms;
  }
  .circle-3{
    transform: rotate(75deg);
    color: hsl(60, 80%, 50%);
    animation: 200ms opacity ease-in-out forwards 1500ms;
  }
  .circle-4{
    transform: rotate(105deg);
    color: hsl(90, 80%, 50%);
    animation: 200ms opacity ease-in-out forwards 2000ms;
  }
  .circle-5{
    transform: rotate(135deg);
    color: hsl(120, 80%, 50%);
    animation: 200ms opacity ease-in-out forwards 2500ms;
  }
  .circle-6{
    transform: rotate(165deg);
    color: hsl(150, 80%, 50%);
    animation: 200ms opacity ease-in-out forwards 3000ms;
  }
  .circle-7{
    transform: rotate(195deg);
    color: hsl(180, 80%, 50%);
    animation: 200ms opacity ease-in-out forwards 3500ms;
  }
  .circle-8{
    transform: rotate(225deg);
    color: hsl(210, 80%, 50%);
    animation: 200ms opacity ease-in-out forwards 4000ms;
  }
  .circle-9{
    transform: rotate(255deg);
    color: hsl(240, 80%, 50%);
    animation: 200ms opacity ease-in-out forwards 4500ms;
  }
  .circle-10{
    transform: rotate(285deg);
    color: hsl(270, 80%, 50%);
    animation: 200ms opacity ease-in-out forwards 5000ms;
  }
  .circle-11{
    transform: rotate(315deg);
    color: hsl(300, 80%, 50%);
    animation: 200ms opacity ease-in-out forwards 5500ms;
  }
  .circle-12{
    transform: rotate(345deg);
    color: hsl(330, 80%, 50%);
    animation: 200ms opacity ease-in-out forwards 6000ms;
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
    .johnson-result {
      height: 80vh;
    }
    .value {
      margin-bottom: 75%;
      font-size: 1em;
    }
    .arc-1:hover .value, .arc-2:hover .value, .arc-3:hover .value, .arc-4:hover .value, .arc-5:hover .value, .arc-6:hover .value, .arc-7:hover .value, .arc-8:hover .value, .arc-9:hover .value, .arc-10:hover .value, .arc-11:hover .value, .arc-12:hover .value  {
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
      font-size: 0.7em;
      width: 80%;
      margin: 2vh auto;
    }
  }
</style>

<template>
  <div class="raven-result flex flex-column">
    <span class="iq-span" v-if="this.fa">ضریب هوشی شما</span>
    <span class="iq" v-if="this.fa">-</span>
    <span class="iq-span" v-if="!this.fa">Your IQ </span>
    <span class="iq" v-if="!this.fa">{{this.$route.params.iq}}</span>
    <div class="ranges flex flex-row">
<!--      <div class="arrow">-->
<!--        <div class="genius"></div>-->
<!--        <div class="super-excellent"></div>-->
<!--        <div class="excellent"></div>-->
<!--        <div class="average"></div>-->
<!--        <div class="below-average"></div>-->
<!--        <div class="borderline-retarded"></div>-->
<!--        <div class="retarded"></div>-->
<!--      </div>-->
      <div>
        <div class="range genius">
          <span v-if="this.fa">نابغه</span>
          <span v-if="!this.fa">Genius</span>
        </div>
        <div class="range super-excellent">
          <span v-if="this.fa">بسیار ممتاز</span>
          <span v-if="!this.fa">Super Excellent</span>
        </div>
        <div class="range excellent">
          <span v-if="this.fa">ممتاز</span>
          <span v-if="!this.fa">Excellent</span>
        </div>
        <div class="range average">
          <span v-if="this.fa">متوسط</span>
          <span v-if="!this.fa">Average</span>
        </div>
        <div class="range below-average">
          <span v-if="this.fa">پایینتر از متوسط</span>
          <span v-if="!this.fa">Below Average</span>
        </div>
        <div class="range borderline-retarded">
          <span v-if="this.fa">مرزی</span>
          <span v-if="!this.fa"> Borderline Retarded</span>
        </div>
        <div class="range retarded current">
          <span v-if="this.fa">عقب مانده ذهنی</span>
          <span v-if="!this.fa">Retarded</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        name: "RavenResult",
        computed: mapState(['fa']),
        watch: {
            fa (newValue) {
                if (!newValue) {
                }
                else {
                }
            }
        },
        mounted() {
            let range;
            // let iq = 150;
            let iqElement = document.getElementsByClassName('iq')[0];
            let iq = this.$route.params.iq;
            for(let i = 1 ; i <= iq; i++){
                setTimeout(function () {
                  iqElement.innerText = i.toString();
                  switch (true) {
                      case i <= 64:
                          range = 'retarded';
                          document.getElementsByClassName(range)[0].classList.add('current');
                          break;
                      case i > 64 && i <= 76:
                          range = 'borderline-retarded';
                          document.getElementsByClassName('retarded')[0].classList.remove('current');
                          document.getElementsByClassName(range)[0].classList.add('current');
                          break;
                      case i > 76 && i <= 88:
                          range = 'below-average';
                          document.getElementsByClassName('borderline-retarded')[0].classList.remove('current');
                          document.getElementsByClassName(range)[0].classList.add('current');
                          break;
                      case i > 88 && i <= 112:
                          range = 'average';
                          document.getElementsByClassName('below-average')[0].classList.remove('current');
                          document.getElementsByClassName(range)[0].classList.add('current');
                          break;
                      case i > 112 && i <= 124:
                          range = 'excellent';
                          document.getElementsByClassName('average')[0].classList.remove('current');
                          document.getElementsByClassName(range)[0].classList.add('current');
                          break;
                      case i > 124 && i <= 148:
                          range = 'super-excellent';
                          document.getElementsByClassName('excellent')[0].classList.remove('current');
                          document.getElementsByClassName(range)[0].classList.add('current');
                          break;
                      case i > 148:
                          range = 'genius';
                          document.getElementsByClassName('super-excellent')[0].classList.remove('current');
                          document.getElementsByClassName(range)[0].classList.add('current');
                          break;
                  }
                }, Math.pow(i, 1.9))
            }
            // setTimeout(function () {
            //     switch (true) {
            //         case iq <= 64:
            //             range = 'retarded';
            //             break;
            //         case iq > 64 && iq <= 76:
            //             range = 'borderline-retarded';
            //             arrow.classList.add('to-borderline-retarded');
            //             break;
            //         case iq > 76 && iq <= 88:
            //             range = 'below-average';
            //             arrow.classList.add('to-below-average');
            //             break;
            //         case iq > 88 && iq <= 112:
            //             range = 'average';
            //             arrow.classList.add('to-average');
            //             break;
            //         case iq > 112 && iq <= 124:
            //             range = 'excellent';
            //             arrow.classList.add('to-excellent');
            //             break;
            //         case iq > 124 && iq <= 148:
            //             range = 'super-excellent';
            //             arrow.classList.add('to-super-excellent');
            //             break;
            //         case iq > 148:
            //             range = 'genius';
            //             arrow.classList.add('to-genius');
            //             break;
            //     }
            //     // document.getElementsByClassName(range)[0].classList.add('client-range');
            // }, 1000);
        }
    }
</script>

<style scoped>
  .raven-result {
    padding: 5vh 3vw;
    width: 1080px;
  }
  .iq-span {
    padding: 2vh 0;
    font-size: 1em;
  }
  .iq {
    font-size: 2em;
  }
  .ranges {
    position: relative;
  }
  /*.arrow {*/
  /*  background: linear-gradient(0deg, tomato 0%, orange 16%, yellow 33%, greenyellow 50%, lightgreen 66%, aqua 82%, lightskyblue 100%);*/
  /*  clip-path: polygon(40% 93%, 60% 91%, 60% 95%);*/
  /*  width: 10vh;*/
  /*  margin: auto 1vw;*/
  /*  height: 56vh;*/
  /*}*/
  .range {
    display: flex;
    position: relative;
    justify-content: center;
    padding: 2vh 0;
    margin: 1vh 0;
    width: 40vw;
    height: 8vh;
    color: var(--bg-color);
    background-color: var(--bg-color);
    box-shadow: 0 4px 12px 0 rgba(40, 40, 40, 0.1);
    transition: box-shadow .5s ease, transform .5s ease;
  }
  .current {
    transition: 300ms ease-in-out;
    background: var(--primary-color);
    box-shadow: 0 1rem 2.5rem rgba(40, 40, 40, 0.1), 0 0.5rem 1rem -0.75rem rgba(40, 40, 40, 0.1);
    transform: translate3d(0, -4px, 0) scale(1.1);
    margin: calc(1vh + 8px) 0 calc(1vh - 4px);
  }
  .current:after{
    content: "";
    position: absolute;
    right: 0;
    top: 0;
    width: 10%;
    height: 100%;
    background-color: var(--bg-color);
    clip-path: polygon(30% 50%, 70% 35%, 70% 65%);
  }
  .current > span {
    color: var(--bg-color);
    transition: 100ms ease-in-out;
  }
  /*.retarded {*/
  /*  background-color: tomato;*/
  /*}*/
  /*.borderline-retarded {*/
  /*  background-color: orange;*/
  /*}*/
  /*.below-average {*/
  /*  background-color: yellow;*/
  /*}*/
  /*.average {*/
  /*  background-color: greenyellow;*/
  /*}*/
  /*.excellent {*/
  /*  background-color: lightgreen;*/
  /*}*/
  /*.super-excellent {*/
  /*  background-color: aqua;*/
  /*}*/
  /*.genius {*/
  /*  background-color: lightskyblue;*/
  /*}*/
  /*.to-borderline-retarded {*/
  /*  animation: to-borderline-retarded 2s forwards cubic-bezier(.42,.5,0,1.06);*/
  /*}*/
  /*@keyframes to-borderline-retarded {*/
  /*  0% {*/
  /*    clip-path: polygon(40% 93%, 60% 91%, 60% 95%);*/
  /*  }*/
  /*  30% {*/
  /*    clip-path: polygon( 50% 91%, 40% 95%, 60% 95%);*/
  /*  }*/
  /*  80% {*/
  /*    clip-path: polygon( 50% 77%, 40% 81%, 60% 81%);*/
  /*  }*/
  /*  100% {*/
  /*    clip-path: polygon(40% 79%, 60% 77%, 60% 81%);*/
  /*  }*/
  /*}*/
  /*.to-below-average {*/
  /*  animation: to-below-average 2.2s forwards cubic-bezier(.42,.5,0,1.06);*/
  /*}*/
  /*@keyframes to-below-average {*/
  /*  0% {*/
  /*    clip-path: polygon(40% 93%, 60% 91%, 60% 95%);*/
  /*  }*/
  /*  30% {*/
  /*    clip-path: polygon( 50% 91%, 40% 95%, 60% 95%);*/
  /*  }*/
  /*  80% {*/
  /*    clip-path: polygon( 50% 62%, 40% 66%, 60% 66%);*/
  /*  }*/
  /*  100% {*/
  /*    clip-path: polygon(40% 64%, 60% 62%, 60% 66%);*/
  /*  }*/
  /*}*/
  /*.to-average {*/
  /*  animation: to-average 2.4s forwards cubic-bezier(.42,.5,0,1.06);*/
  /*}*/
  /*@keyframes to-average {*/
  /*  0% {*/
  /*    clip-path: polygon(40% 93%, 60% 91%, 60% 95%);*/
  /*  }*/
  /*  30% {*/
  /*    clip-path: polygon( 50% 91%, 40% 95%, 60% 95%);*/
  /*  }*/
  /*  80% {*/
  /*    clip-path: polygon( 50% 48%, 40% 52%, 60% 52%);*/
  /*  }*/
  /*  100% {*/
  /*    clip-path: polygon(40% 50%, 60% 48%, 60% 52%);*/
  /*  }*/
  /*}*/
  /*.to-excellent {*/
  /*  animation: to-excellent 2.6s forwards cubic-bezier(.42,.5,0,1.06);*/
  /*}*/
  /*@keyframes to-excellent {*/
  /*  0% {*/
  /*    clip-path: polygon(40% 93%, 60% 91%, 60% 95%);*/
  /*  }*/
  /*  30% {*/
  /*    clip-path: polygon( 50% 91%, 40% 95%, 60% 95%);*/
  /*  }*/
  /*  80% {*/
  /*    clip-path: polygon( 50% 33%, 40% 37%, 60% 37%);*/
  /*  }*/
  /*  100% {*/
  /*    clip-path: polygon(40% 35%, 60% 33%, 60% 37%);*/
  /*  }*/
  /*}*/
  /*.to-super-excellent {*/
  /*  animation: to-super-excellent 2.8s forwards cubic-bezier(.42,.5,0,1.06);*/
  /*}*/
  /*@keyframes to-super-excellent {*/
  /*  0% {*/
  /*    clip-path: polygon(40% 93%, 60% 91%, 60% 95%);*/
  /*  }*/
  /*  30% {*/
  /*    clip-path: polygon( 50% 91%, 40% 95%, 60% 95%);*/
  /*  }*/
  /*  80% {*/
  /*    clip-path: polygon( 50% 19%, 40% 23%, 60% 23%);*/
  /*  }*/
  /*  100% {*/
  /*    clip-path: polygon(40% 21%, 60% 19%, 60% 23%);*/
  /*  }*/
  /*}*/
  /*.to-genius {*/
  /*  animation: to-genius 3s forwards cubic-bezier(.42,.5,0,1.06);*/
  /*}*/
  /*@keyframes to-genius {*/
  /*  0% {*/
  /*    clip-path: polygon(40% 93%, 60% 91%, 60% 95%);*/
  /*  }*/
  /*  30% {*/
  /*    clip-path: polygon( 50% 91%, 40% 95%, 60% 95%);*/
  /*  }*/
  /*  80% {*/
  /*    clip-path: polygon( 50% 5%, 40% 9%, 60% 9%);*/
  /*  }*/
  /*  100% {*/
  /*    clip-path: polygon(40% 7%, 60% 5%, 60% 9%);*/
  /*  }*/
  /*}*/
</style>

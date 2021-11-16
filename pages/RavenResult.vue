<template>
  <div class="raven-result flex flex-column">
    <span class="iq-span" v-if="this.fa">ضریب هوشی شما</span>
    <span class="iq-span" v-if="!this.fa">Your IQ </span>
    <span class="iq">-</span>
    <div class="ranges flex flex-row">
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
    <div class="con">
      <span class="iq-span-con" v-if="this.fa & this.$route.params.correct.toString() === '60'">تبریک!!! ضریب هوشی محاسبه شده، ماکزیمم مقدار قابل محاسبه توسط این آزمون برای سن شما میباشد.</span>
      <span class="iq-span-con" v-if="!this.fa & this.$route.params.correct.toString() === '60'">Congratulations!!! The calculate IQ is the maximum value which can be calculate by this test for your age.</span>
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
            }
        },
        mounted() {
            let range;
            // let iq = 51;
            let iqElement = document.getElementsByClassName('iq')[0];
            let iq = this.$route.params.iq;
            for(let i = 51 ; i <= iq; i++){
                setTimeout(function () {
                  iqElement.innerText = i.toString();
                  if (i === 51) {
                    iqElement.innerText =  i.toString() + "- " ;
                  } else if (i === 149) {
                    iqElement.innerText = i.toString() + "+ ";
                  }
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
        }
    }
</script>

<style scoped>
  .raven-result {
    padding: 2vh 3vw;
    width: 1080px;
  }
  .iq-span {
    padding: 1vh 0;
    font-size: 1em;
  }
  .con {
    padding: 2vh;
  }
  .iq {
    font-size: 3em;
  }
  .ranges {
    position: relative;
  }
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
  @media screen and (max-width: 864px) {
    .raven-result {
      padding: 2vh 3vw;
      width: 100vw;
    }
    .range {
      box-shadow: 0 4px 12px 0 rgba(100, 100, 100, 0.6);
      width: 80vw;
      height: 7vh;
    }
    .con {
      text-align: center;
    }
    .iq-span-con {
      font-size: 0.75em;
    }
  }
</style>

<template>
  <div class="mbti-result flex flex-column">
    <div v-if="!this.fa">
      <EnNotAvailable />
    </div>
    <div v-if="this.fa">
        <div class="types" v-if="this.fa">
          <div class="type" v-for="mbtiType in this.mbtiTypes" :id="mbtiType.abr" @click="showType(mbtiType.id)">
            <img class="image" :src="require(`@/assets/images/mbti/${mbtiType.abr}.png`)" :alt="mbtiType.abr">
            <span class="title">{{mbtiType.title.fa}}</span>
            <span class="abr">{{mbtiType.abr}}</span>
          </div>
        </div>
        <div class="types" v-if="!this.fa">
          <div class="type" v-for="mbtiType in this.mbtiTypes" :id="mbtiType.abr" @click="showType(mbtiType.id)">
            <img class="image" :src="require(`@/assets/images/mbti/${mbtiType.abr}.png`)" :alt="mbtiType.abr">
            <span class="title">{{mbtiType.title.en}}</span>
            <span class="abr">{{mbtiType.abr}}</span>
          </div>
        </div>
      </div>
      <div v-if="this.fa" class="bars flex flex-column">
        <span>جزئیات شخصیت شما</span>
        <div class="ei flex duo">
          <span>برون گرا (E)</span>
          <div class="bar">
            <div class="e indicator start"><span></span></div>
            <div class="i indicator end"><span></span></div>
          </div>
          <span>(I) درون گرا</span>
        </div>
        <div class="sn flex duo">
          <span>حسی (S)</span>
          <div class="bar">
            <div class="s indicator start"><span></span></div>
            <div class="n indicator end"><span></span> </div>
          </div>
          <span>(N) شهودی</span>
        </div>
        <div class="tf flex duo">
          <span>منطقی (T)</span>
          <div class="bar">
            <div class="t indicator start"><span></span></div>
            <div class="f indicator end"><span></span></div>
          </div>
          <span>(F) احساسی</span>
        </div>
        <div class="jp flex duo">
          <span>قضاوت گر (J)</span>
          <div class="bar">
            <div class="j indicator start"><span></span></div>
            <div class="p indicator end"><span></span></div>
          </div>
          <span>(P) ادراکی</span>
        </div>
      </div>
      <div v-if="!this.fa" class="bars flex flex-column">
        <div class="ei flex duo">
          <span>Extraverts</span>
          <div class="bar">
            <div class="e indicator start"><span></span></div>
            <div class="i indicator end"><span></span></div>
          </div>
          <span>Introverts</span>
        </div>
        <div class="sn flex duo">
          <span>Sensing</span>
          <div class="bar">
            <div class="s indicator start"><span></span></div>
            <div class="n indicator end"><span></span></div>
          </div>
          <span>Intuition</span>
        </div>
        <div class="tf flex duo">
          <span>Thinking</span>
          <div class="bar">
            <div class="t indicator start"><span></span></div>
            <div class="f indicator end"><span></span></div>
          </div>
          <span>Feeling</span>
        </div>
        <div class="jp flex duo">
          <span>Judging</span>
          <div class="bar">
            <div class="j indicator start"><span></span></div>
            <div class="p indicator end"><span></span></div>
          </div>
          <span>Perceiving</span>
        </div>
      </div>
      <MBTIType  v-on:selectedType="showType" class="types-box" :key="`main${mbtiTypes.filter(x => x.abr === this.typeToWatch)[0].id}`"
                :id="`main${mbtiTypes.filter(x => x.abr === this.typeToWatch)[0].id}`"
                :typeData="mbtiTypes.filter(x => x.abr === this.typeToWatch)[0]" />
  </div>
</template>

<script>
    import {mbtiTypes} from "../data/MBTI";
    import {mapState} from 'vuex'
    import MBTIType from "../components/MBTIType";
    import EnNotAvailable from "../components/EnNotAvailable";
    export default {
        name: "MBTIResult",
        components: {EnNotAvailable, MBTIType},
        data() {
            return {
                mbtiTypes: mbtiTypes,
                random: 0,
                // typeToWatch: 'INTP',
                typeToWatch: "INTP",
            }
        },
        computed: mapState(['fa']),
        watch:{
            fa (newValue) {
                if (!newValue) {
                    let duo = document.getElementsByClassName('duo');
                    for (let i = 0; i < duo.length; i++) {
                        duo[i].style.flexDirection = 'row-reverse'
                    }
                }
            }
        },
        mounted() {
            if (!this.$route.params.type) {
                this.$router.push({name: 'MBTI'})
            }
            this.typeToWatch = this.$route.params.type;
            let EI = this.$route.params.EI;
            let SN = this.$route.params.SN;
            let TF = this.$route.params.TF;
            let JP = this.$route.params.JP;
            let clientType = this.$route.params.type;

            // this.typeToWatch = "ENTP";
            // let type = "ENTP";
            // let EI = {'value': 40, 'result': "E"};
            // let SN = {'value': 40, 'result': "N"};
            // let TF = {'value': 40, 'result': "T"};
            // let JP = {'value': 40, 'result': "P"};
            // let clientType = "ENTP";

            let _this = this;
            let suspension = 30;
            if (!this.fa) {
                let duo = document.getElementsByClassName('duo');
                for (let i = 0; i < duo.length; i++) {
                    duo[i].style.flexDirection = 'row-reverse'
                }
            }
            let delay = 0;
            let types = document.getElementsByClassName('type');
            for (let i = 0; i < suspension; i++) {
                delay = Math.pow(i, 1.3) * 2;
                let random = Math.floor(Math.random() * 16);
                if (random === this.random) {
                    random = Math.floor(Math.random() * 16);
                } else {
                    this.random = random
                }
                console.log(random);
                let elem = document.getElementById(this.mbtiTypes[random].abr);
                setTimeout(function () {
                    for (let type of types) {
                        type.classList.remove('client-type')
                    }
                    elem.classList.add('client-type');
                }, i * delay);
            }
            delay = Math.pow(suspension, 1.3) * 2;
            setTimeout(function () {
                for (let type of types) {
                    type.classList.remove('client-type')
                }
                document.getElementById(clientType).classList.add('client-type');
                setTimeout(() => {
                    document.getElementsByClassName('types-box')[0].scrollIntoView({behavior: 'smooth'});
                    _this.handleBars(EI, SN, TF, JP);
                }, 2000)
            }, (suspension) * delay)
        },
        methods: {
            handleBars(EI, SN, TF, JP){
                if (EI.result === 'E') {
                    document.getElementsByClassName('e')[0].style.width = EI.value.toString() + "%";
                    let e = document.getElementsByClassName('e')[0];
                    e.getElementsByTagName('span')[0].innerText = EI.value.toString()
                } else {
                    document.getElementsByClassName('i')[0].style.width = EI.value.toString() + "%";
                    let i = document.getElementsByClassName('i')[0];
                    i.getElementsByTagName('span')[0].innerText = EI.value.toString()
                }
                if (SN.result === 'S') {
                    document.getElementsByClassName('s')[0].style.width = SN.value.toString() + "%";
                    let s = document.getElementsByClassName('s')[0];
                    s.getElementsByTagName('span')[0].innerText = SN.value.toString()
                } else {
                    document.getElementsByClassName('n')[0].style.width = SN.value.toString() + "%";
                    let n = document.getElementsByClassName('n')[0];
                    n.getElementsByTagName('span')[0].innerText = SN.value.toString()
                }
                if (TF.result === 'T') {
                    document.getElementsByClassName('t')[0].style.width = TF.value.toString() + "%";
                    let t = document.getElementsByClassName('t')[0];
                    t.getElementsByTagName('span')[0].innerText = TF.value.toString()
                } else {
                    document.getElementsByClassName('f')[0].style.width = TF.value.toString() + "%";
                    let f = document.getElementsByClassName('f')[0];
                    f.getElementsByTagName('span')[0].innerText = TF.value.toString()
                }
                if (JP.result === 'J') {
                    document.getElementsByClassName('j')[0].style.width = JP.value.toString() + "%";
                    let j = document.getElementsByClassName('j')[0];
                    j.getElementsByTagName('span')[0].innerText = JP.value.toString()
                } else {
                    document.getElementsByClassName('p')[0].style.width = JP.value.toString() + "%";
                    let p = document.getElementsByClassName('p')[0];
                    p.getElementsByTagName('span')[0].innerText = JP.value.toString()
                }
            },
            showType(id){
                this.typeToWatch = this.mbtiTypes.filter(x => x.id === id)[0].abr;
                setTimeout(function () {
                    document.getElementById("main" + id.toString()).scrollIntoView({ behavior: 'smooth'});
                }, 500)
            }
        }
    }
</script>

<style scoped>
  .mbti-result {
    padding: 2vh 3vw;
    width: 1080px;
  }
  .types-box {
    scroll-margin: 20px;
  }
  .types {
    width: max-content;
    margin: auto;
    display: grid;
    grid-template-columns: auto auto auto auto;
  }
  .type:hover {
    transform: scale(1.05);
    transition: all 200ms;
  }
  .type {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    text-align: center;
    margin: 10px;
    width: 150px;
    height: 175px;
    background-color: var(--bg-color);
    box-shadow: 0 4px 12px 0 rgba(40, 40, 40, 0.1);
    border-radius: 8px;
    transition: all 50ms;
  }
  .image {
    width: 110px;
    height: 110px;
    margin: 5px auto;
  }
  .title {
    font-size: 0.85em;
  }
  .abr {
    font-size: 0.75em;
  }
  .client-type {
    box-shadow: 0 1rem 2.5rem rgba(40, 40, 40, 0.1), 0 0.5rem 1rem -0.75rem rgba(40, 40, 40, 0.1);
    background-color: var(--primary-color);
    transform: scale(1.05);
    transition: all 50ms;
  }
  .client-type > span {
    color: var(--bg-color);
  }
  .bars {
    width: 1080PX;
    padding: 4vh 2vw;
  }
  .bars > div {
    width: 100%;
    padding: 5px;
    justify-content: space-evenly;
  }
  .bars > div > span {
    width: 8vw;
    text-align: center;
  }
  .bar {
    position: relative;
    width: 40vw;
    height: 20px;
    background-color: var(--text-color);
    border-radius: 10px;
  }
  .indicator {
    position: absolute;
    display: flex;
    top: 0;
    width: 0;
    height: 100%;
    font-size: 0.8em;
    background-color: var(--primary-color);
    transition: all 800ms ease-in-out;
  }
  .start {
    justify-content: flex-start;
    left: 50%;
    border-radius: 0 10px 10px 0;
  }
  .end {
    justify-content: flex-end;
    right: 50%;
    border-radius: 10px 0 0 10px;
  }
  .start > span {
    display: none;
    margin: auto 3px auto auto;
  }
  .end > span {
    display: none;
    margin: auto auto auto 3px;
  }
  @media screen and (max-width: 864px) {
    .types {
      padding-top: 1vh;
    }
    .type {
      margin: 5px;
      width: 22vw;
      height: 32vw;
    }
    .image {
      width: 18vw;
      height: 18vw;
      margin: 5px auto;
    }
    .title {
      font-size: 0.7em;
    }
    .abr {
      font-size: 0.6em;
    }
    .bars {
      width: 100vw;
      padding: 4vh 1vw;
    }
    .bars > div {
      padding: 5px;
      font-size: 0.7em;
    }
    .bars > div > span {
      width: 25vw;
    }
    .bar {
      width: 60vw;
      height: 16px;
      border-radius: 8px;
    }
    .indicator {
      font-size: 0.8em;
    }
    .start {
      border-radius: 0 8px 8px 0;
    }
    .end {
      border-radius: 8px 0 0 8px;
    }
  }
</style>

<template>
    <div>
      <div v-if="!this.fa">This page is not available in English now!</div>
      <div v-if="this.fa" class="holland-result flex flex-column">
        <div class="hexagon"></div>
        <div class="r triangle flex flex-column">
          <span class="value"></span>
          <div class="details">
            <span>اینجا توضیحات قرار میگیره</span>
          </div>
        </div>
        <div class="i triangle flex">
          <span></span>
        </div>
        <div class="a triangle flex">
          <span></span>
        </div>
        <div class="s triangle flex">
          <span></span>
        </div>
        <div class="e triangle flex">
          <span></span>
        </div>
        <div class="c triangle flex">
          <span></span>
        </div>
      </div>
    </div>

</template>

<script>
    import {mapState} from 'vuex'
    export default {
        name: "HollandResult",
        computed: mapState(['fa']),
        mounted() {
            let base = 500;
            let r = this.$route.params.R;
            let i = this.$route.params.I;
            let a = this.$route.params.A;
            let s = this.$route.params.S;
            let e = this.$route.params.E;
            let c = this.$route.params.C;
            let rElement = document.getElementsByClassName('r')[0];
            let iElement = document.getElementsByClassName('i')[0];
            let aElement = document.getElementsByClassName('a')[0];
            let sElement = document.getElementsByClassName('s')[0];
            let eElement = document.getElementsByClassName('e')[0];
            let cElement = document.getElementsByClassName('c')[0];
            let elements = [rElement, iElement, aElement, sElement, eElement, cElement];
            let values = [r, i, a, s, e, c];
            for (let j = 0; j < 6; j++){
                setTimeout(function () {
                    let n = 1;
                    let inter = setInterval(function () {
                        elements[j].style.height = (n / 48 * base) + 'px';
                        elements[j].style.width = (n / 48 * base) + 'px';
                        elements[j].children[0].innerText = Math.floor(n / 48 * 100) + "%";
                        if(n === parseInt(values[j])){
                            clearInterval(inter)
                        }
                        n += 0.25
                    }, 10);
                }, j * 1000)
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
    /*opacity: 0.5;*/
    clip-path: polygon(21% 0, 79% 0, 50% 50%);
    background-color: var(--bg-color);
    justify-content: center;
    transition: all 500ms;
  }
  .value {
    margin-bottom: 75%;
    color: var(--text-color)
  }
  .hexagon {
    width: 500px;
    height: 576px;
    position: absolute;
    clip-path: polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%);
    background-color: var(--primary-color);
    opacity: 0.5;
  }
  .details {
    display: none;
  }
  .r{
    background-color: #ff878b;
    transform: rotateZ(30deg);
  }
  .r:hover, .i:hover, .a:hover, .s:hover, .e:hover, .c:hover{
    transform: scaleX(1.72) scaleY(2) rotateZ(360deg);
    transition: all 500ms;
    clip-path: polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%);
    z-index: 20;
  }
  .r:hover .details{
    display: block;
  }
  .r:hover .value {
    margin: unset;
  }
  .i{
    background-color: #577bff;
    transform: rotateZ(90deg);
  }
  .a{
    background-color: #ecff8d;
    transform: rotateZ(150deg);
  }
  .s{
    background-color: #86e697;
    transform: rotateZ(210deg);
  }
  .e{
    background-color: #e089d6;
    transform: rotateZ(270deg);
  }
  .c{
    background-color: #ff8c66;
    transform: rotateZ(330deg);
  }
</style>

<template>
    <div>
      <div v-if="!this.fa">
        <EnNotAvailable />
      </div>
      <div v-if="this.fa" class="holland-result flex flex-column">
        <div class="hexagon"></div>
        <div class="r triangle flex flex-column">
          <span class="value"></span>
          <div class="details flex flex-column">
            <span>واقع گرا</span>
            <br>
            <div class="des">
              <TypingMachine subject="holland1" delay="800" speed="1500" :forwards="true">
                <span>تیپ شخصیت واقع گرایی در تست استعدادسنجی هالند به افرادی تعلق می‌گیرد که عملگرا هستند و در واقع استعدادشان کار با ابزار آلات و ماشین آلات است. این افراد کار های فیزیکی و دشوار را به خوبی انجام می‌دهند. بسیاری از افراد که در این گروه قرار دارند به کارکردن در محیط های باز تمایل دارند و خیلی با کاغذ بازی و یا کار کردن با دیگران علاقه ای ندارند و ارتباط برقرار نمی‌کنند! مشاغل واقع گرایانه اغلب فعالیت هایی را با کار های عملی و راه حل های دستی را شامل می‌شود.</span>
              </TypingMachine>
            </div>
          </div>
        </div>
        <div class="i triangle flex flex-column">
          <span class="value"></span>
          <div class="details flex flex-column">
            <span>جستجوگر</span>
            <br>
            <div class="des">
              <TypingMachine subject="holland2" delay="800" speed="1500" :forwards="true">
                <span>ویژگی های شخصیتی مثل: انجام کارهای عملی، فکری، اکتشافی، اندیشمندانه و افرادی که تفکر تحلیلی و علمی دارند در تیپ شخصیتی جستجو گر معرفی می‌شود. مشاغل جستجو گر معمولاً شامل کار با ایده ها بوده و این گونه از مشاغل به دنبال رسیدن به حقیقت و حل کردن ذهنی مسائل هستند.</span>
              </TypingMachine>
            </div>
          </div>
        </div>
        <div class="a triangle flex flex-column">
          <span class="value"></span>
          <div class="details flex flex-column">
            <span>هنری</span>
            <br>
            <div class="des">
              <TypingMachine subject="holland3" delay="800" speed="1500" :forwards="true">
                <span>این افراد در شناسایی و بیان خصوصیات و ویژگی های خود مهارت دارند. کمتر خودشان را کنترل می‌کنند و احساساتشان را به راحتی بیان می‌کنند. مشاغل هنری معمولاً شامل کار با الگوهای مختلف، طرح‌ها و اشکال است. افرادی که درگیر این‌گونه کارها هستند اغلب احوالات خود را در کار به راحتی بیان می‌کنند.</span>
              </TypingMachine>
            </div>
          </div>
        </div>
        <div class="s triangle flex flex-column">
          <span class="value"></span>
          <div class="details flex flex-column">
            <span>اجتماعی</span>
            <br>
            <div class="des">
              <TypingMachine subject="holland4" delay="800" speed="1500" :forwards="true">
                <span>افرادی با ویژگی شخصیتی حمایت گری، درمان، مراقبت هستند و با انجام کارهایی مانند مادری کردن، باغبانی و امداد گری احساس رضایت می‌کنند. مهارت های کلامی بالایی دارند و دوست دارند با مردم کار کنند تا آنها را رشد دهند و مطلع و آگاه سازند.</span>
              </TypingMachine>
            </div>
          </div>
        </div>
        <div class="e triangle flex flex-column">
          <span class="value"></span>
          <div class="details flex flex-column">
            <span>جسور و سازنده</span>
            <br>
            <div class="des">
              <TypingMachine subject="holland5" delay="800" speed="1500" :forwards="true">
                <span>این افراد قدرت رهبری، متقاعد کردن و قرار گرفتن در محیط‌ های رقابتی و توانایی تصمیم گیری های مهم را دارند. معمولاً این افراد ریسک پذیر بوده و در کارهای تجاری می توانند موفقیت های فراوانی کسب کنند. شروع کردن و به سرانجام رساندن کارها ازجمله مواردی است که این گونه افراد به خوبی آن را انجام می‌دهند.</span>
              </TypingMachine>
            </div>
          </div>
        </div>
        <div class="c triangle flex flex-column">
          <span class="value"></span>
          <div class="details flex flex-column">
            <span>قاعده مند</span>
            <br>
            <div class="des">
              <TypingMachine subject="holland6" delay="800" speed="1500" :forwards="true">
                <span>این افراد جرئی گرا هستند و می‌توانند کارهای سازمانی و دفتری را به خوبی انجام می‌دهند. آن ها بیش تر از اینکه با ایده ها سر و کار داشته باشند، با داده‌ها، جزئیات و اطلاعات کار می‌کنند. این تیپ افراد معمولاً خط مشی واضحی دارند که از آن پیروی می‌کنند.</span>
              </TypingMachine>
            </div>
          </div>
        </div>
      </div>
    </div>

</template>

<script>
    import {mapState} from 'vuex'
    import EnNotAvailable from "../components/EnNotAvailable";
    import TypingMachine from "../components/TypingMachine";
    export default {
        name: "HollandResult",
        components: {TypingMachine, EnNotAvailable},
        computed: mapState(['fa']),
        mounted() {
            let base = 500;
            if(window.screen.width <= 864){
                base = 350;
            }
            // let r = this.$route.params.R;
            // let i = this.$route.params.I;
            // let a = this.$route.params.A;
            // let s = this.$route.params.S;
            // let e = this.$route.params.E;
            // let c = this.$route.params.C;
            let r = 48;
            let i = 20;
            let a = 15;
            let s = 35;
            let e = 30;
            let c = 42;
            let rElement = document.getElementsByClassName('r')[0];
            let iElement = document.getElementsByClassName('i')[0];
            let aElement = document.getElementsByClassName('a')[0];
            let sElement = document.getElementsByClassName('s')[0];
            let eElement = document.getElementsByClassName('e')[0];
            let cElement = document.getElementsByClassName('c')[0];

            let elements = [rElement, iElement, aElement, sElement, eElement, cElement];
            let values = [r, i, a, s, e, c];
            for (let j = 0; j < 6; j++){
                elements[j].onmouseover = function () {
                    elements[j].style.width = base + "px";
                    elements[j].style.height = base * 1.152 + "px";
                };
                elements[j].onmouseleave = function (){
                    elements[j].style.width = (values[j] / 48 * base) + 'px';
                    elements[j].style.height = (values[j]  / 48 * base) + 'px';
                };
            }
            for (let j = 0; j < 6; j++){
                setTimeout(() => {
                    elements[j].style.height = (values[j] / 48 * base) + 'px';
                    elements[j].style.width = (values[j] / 48 * base) + 'px';
                    elements[j].children[0].innerText = Math.floor(values[j] / 48 * 100) + "%";
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
    width: 0;
    height: 0;
    /*opacity: 0.5;*/
    clip-path: polygon(21% 0, 79% 0, 50% 50%);
    background-color: var(--bg-color);
    justify-content: center;
    transition: all 800ms;
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
    opacity: 0.5;
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
    /*transform: scaleY(2) scaleX(1.72) rotateZ(360deg);*/
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
  @media screen and (max-width: 864px) {
    .value {
      margin-bottom: 75%;
      font-size: 1em;
      color: var(--bg-color)
    }
    .hexagon {
      width: 350px;
      height: 403px;
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

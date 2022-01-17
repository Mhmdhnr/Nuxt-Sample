<template>
  <div class="total-view">
    <div class="header">
      <TopHeader class="top-header" />
      <MainHeader class="main-header"/>
    </div>
    <ScrollProgress :id="this.routeName" :key="this.routeName"/>
    <div>
      <nuxt class="nuxt"/>
      <SignInUpModal v-if="this.needSignIn & !this.signedIn"/>
    </div>
  </div>
</template>
<script>
    import apiServices from "../api/apiServices";
    import Toggle from "../components/Toggle";
    import { mapState } from 'vuex';
    import MainHeader from "../components/MainHeader";
    import TopHeader from "../components/TopHeader";
    import SignInUpModal from "../components/SignInUpModal";
    import ScrollProgress from "../components/ScrollProgress";
    export default {
        components: {ScrollProgress, SignInUpModal, TopHeader, MainHeader, Toggle},
        // computed: mapState(['fa', 'theme', 'needSignIn', 'signedIn']),
        computed: {
            ...mapState(['fa', 'theme', 'needSignIn', 'signedIn']),
            // ...mapGetters(['signedIn'])
        },
        data(){
            return{
                routeName: 'route',
            }
        },
        watch: {
            $route(newValue) {
                console.log('routeChanged');
                console.log(newValue.name);
                this.route = newValue.name;
            },
            fa (newValue) {
                if (!newValue) {
                    document.body.style.direction = "ltr";
                    document.body.style.textAlign = "left";
                    document.body.style.fontFamily = "Ubuntu, sans-serif";
                    document.body.style.fontWeight = "500";
                }
                else {
                    document.body.style.direction = "rtl";
                    document.body.style.textAlign = "right";
                    document.body.style.fontFamily = "vazir, sans-serif";
                    document.body.style.fontWeight = "400";
                }
            },
        },
        updated() {
        },
        mounted() {
            apiServices.methods.userInfo().then(response => {
                console.log(response);
                if(response.message !== "unauthorized"){
                    const user = {};
                    user.firstName = response.first_name;
                    user.lastName = response.last_name;
                    user.phoneNumber = response.phone_number;
                    user.userName = response.user_name;
                    this.$store.commit('user', user);
                    this.$store.commit('signedIn', true);
                }
            });
            if(this.theme === 'light'){
                document.documentElement.style.setProperty("--primary-color", 'hsl(220, 100%, 70%)');
                document.documentElement.style.setProperty("--text-color", '#444');
                document.documentElement.style.setProperty("--bg-color", '#fff');
            } else {
                document.documentElement.style.setProperty("--primary-color", 'hsl(220, 80%, 40%)');
                document.documentElement.style.setProperty("--text-color", '#eee');
                document.documentElement.style.setProperty("--bg-color", '#222');
            }
            if(this.fa) {
                document.body.style.direction = "rtl";
                document.body.style.textAlign = "right";
                document.body.style.fontFamily = "vazir, sans-serif";
                document.body.style.fontWeight = "400";
            } else {
                document.body.style.direction = "ltr";
                document.body.style.textAlign = "left";
                document.body.style.fontFamily = "Ubuntu, sans-serif";
                document.body.style.fontWeight = "500";
            }
        },
        methods: {
        }
    }
</script>
<style>
  :root {
    --primary-color: hsl(220, 100%, 70%);
    --text-color: #444;
    --contrast-color: #ccc;
    --bg-color: #fff;
    --toggle-light: #eef1f6;
    --toggle-dark: #28292c;
    --main-shadow: 0 3px 10px 10px rgba(100,100,100,0.1);

    --main-header-height: 4vh;
    --top-header-height: 4vh;

    --base-padding-r-l: 2vw;
    --main-padding-r-l: calc((100vw - 1080px) / 2);
    --animated-waves-height: 10vh;
    --shadow:
      0 10px 10px rgba(0,0,0,0.5),
      0 0 1vw rgba(0,240,190,1),
      0 0 3vw rgba(0,210,255,0.9),
      0 0 5vw rgba(0,210,255,0.8),
      0 0 7vw rgba(0,210,255,0.7),
      0 0 9vw rgba(0,210,255,0.6),
      0 0 11vw rgba(0,210,255,0.5),
      0 0 13vw rgba(0,210,255,0.4),
      0 0 15vw rgba(0,210,255,0.3),
      0 0 17vw rgba(0,210,255,0.2);
  }
  .dark-mode {
    --primary-color: hsl(220, 80%, 40%);
    --text-color: #fff;
    --contrast-color: rgb(100,100,100);
    --bg-color: #111;
    --main-shadow: 0 0 5px 5px rgba(255,255,255,0.05);
    --toggle-light: #28292c;
    --toggle-dark: #d8dbe0;
  }
  span {
    color: var(--text-color);
  }
  @font-face {
    font-family: 'vazir';
    src:  url("../assets/fonts/Vazir-Regular-UI.ttf") format('truetype');
    font-weight: 300;
    font-style: normal;
    font-display: block;
  }
  @font-face {
    font-family: 'vazir';
    src:  url("../assets/fonts/Vazir-Medium-UI.ttf") format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: block;
  }
  @font-face {
    font-family: 'vazir';
    src:  url("../assets/fonts/Vazir-Bold-UI.ttf") format('truetype');
    font-weight: 500;
    font-style: normal;
    font-display: block;
  }
  body{
    font-family: vazir, sans-serif;
    font-weight: 400;
    font-size: 1.2em;
    margin: 0;
    text-align: right;
    direction: rtl;
    background-color: var(--bg-color);
  }
  .header {
    box-shadow: 0 0 20px 5px rgba(100,100,100,0.2);
    z-index: 20;
  }
  .total-view {
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;
    width: 100vw;
  }
  .total-view::-webkit-scrollbar {
    display: none;
  }
  .top-header {
    order: 1;
    height: var(--top-header-height);
  }
  .main-header {
    order: 2;
    height: var(--main-header-height);
    z-index: 50;
  }
  .nuxt {
    width: 100vw;
    order: 3;
    box-sizing: content-box;
  }
  .text-button {
    font-size: 0.8em;
    border: none;
    cursor: pointer;
    background: none;
    color: var(--text-color);
  }
  .text-button:disabled {
    color: lightgray;
  }
  .nuxt::-webkit-scrollbar {
    display: none;
  }
  .total-view::-webkit-scrollbar {
    display: none;
  }
  .flex {
    display: flex;
    align-items: center;
    align-content: center;
  }

  /*Neon*/
  #neon {
    padding: 3vh 0;
    background-color: var(--text-color);
    width: 100vw;
  }
  #neon > span {
    color: var(--bg-color);
    font-weight: 700;
  }
  .blink {
    -webkit-animation: 2500ms blink 1000ms forwards;
  }
  #neon > span {
    z-index: 1;
    font-size: 1.5em;
    margin: 0 auto;
    white-space: pre;
  }
  @-webkit-keyframes blink {
    0% {
      text-shadow: none;
    }
    1% {
      text-shadow: var(--shadow);
    }
    7% {
      text-shadow: none;
    }
    29% {
      text-shadow: none;
    }
    30% {
      text-shadow: var(--shadow);
    }
    36% {
      text-shadow: none;
    }
    59% {
      text-shadow: none;
    }
    60% {
      text-shadow: var(--shadow);
    }
    66% {
      text-shadow: none;
    }
    92% {
      text-shadow: none;
    }
    93% {
      text-shadow: var(--shadow);
    }
    95% {
      text-shadow: none;
    }
    99% {
      text-shadow: none;
    }
    100% {
      text-shadow: var(--shadow);
    }
  }
  /*Buttons*/

  .btn-border-hover {
    width: 250px;
    height: 60px;
    margin: auto;
    background-color: var(--bg-color);
    position: relative;
    border: none;
    border-radius: 4px;
    box-shadow: 0 2px 10px 3px rgba(100,100,100,0.4);
  }
  .btn-border-hover::before, .btn-border-hover::after {
    opacity: 0;
    content: "";
    border-radius: 4px;
    position: absolute;
    box-sizing: border-box;
    -webkit-animation: border-shrink 700ms ease-in-out;
  }
  .btn-border-hover::after {
    border-top: 2px solid var(--primary-color);
    border-right: 2px solid var(--primary-color);
    left: 0;
    top: 0;
  }
  .btn-border-hover::before {
    border-bottom: 2px solid var(--primary-color);
    border-left: 2px solid var(--primary-color);
    right: 0;
    bottom: 0;
  }
  .btn-border-hover:hover:after {
    -webkit-animation: border-grow 700ms ease-in-out forwards;
  }
  .btn-border-hover:hover:before {
    -webkit-animation: border-grow 700ms ease-in-out forwards;
  }
  .btn-border-hover-text {
    color: var(--primary-color);
    font-size: 1rem;
    position: relative;
    z-index: 1000;
  }
  .btn-cover-hover {
    width: 250px;
    height: 60px;
    margin: auto;
    background-color: var(--bg-color);
    overflow: hidden;
    position: relative;
    border: none;
    border-radius: 5px;
    box-shadow: 0 2px 10px 3px rgba(100,100,100,0.4);
  }
  .btn-cover-hover::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    -webkit-transform: translateX(-70%) rotate(45deg);
    -webkit-transition: all 300ms ease-in-out ;
    width: 110%;
    height: 110%;
    background-color: var(--primary-color);
  }
  .btn-cover-hover::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    -webkit-transform: translateX(62%) rotate(45deg);
    -webkit-transition: all 300ms ease-in-out ;
    width: 110%;
    height: 110%;
    background-color: var(--primary-color);
  }
  .btn-cover-hover:hover:after {
    -webkit-transform: translateX(0) rotate(0);
  }
  .btn-cover-hover:hover:before {
    -webkit-transform: translateX(0) rotate(0);
  }
  .btn-cover-hover-text {
    color: var(--primary-color);
    -webkit-animation: toBlack 600ms ease-in-out;
    font-size: 1rem;
    position: relative;
    z-index: 1000;
  }
  .btn-cover-hover:hover .btn-cover-hover-text {
    -webkit-animation: toWhite 400ms ease-in-out forwards;
  }

  @-webkit-keyframes toWhite {
    0%{color: var(--primary-color)}
    100%{color: var(--bg-color)}
  }
  @-webkit-keyframes toBlack {
    0%{color: var(--bg-color)}
    100%{color: var(--primary-color)}
  }
  @-webkit-keyframes border-grow {
    0%{
      width: 0;
      height: 0;
      opacity: 1;
    }
    50%{
      width: 100%;
      height: 0;
    }
    100%{
      width: 100%;
      height: 100%;
      opacity: 1;
    }
  }
  @-webkit-keyframes border-shrink {
    0%{
      width: 100%;
      height: 100%;
      opacity: 1;
    }
    50%{
      width: 100%;
      height: 0;
    }
    99%{
      opacity: 1;
    }
    100%{
      width: 0;
      height: 0;
      opacity: 0;
    }
  }

  @-webkit-keyframes bg-animation {
     0%{background-position:0% 50%}
     50%{background-position:100% 50%}
     100%{background-position:0% 50%}
   }
  .bounce-in {
    -webkit-animation: 300ms bounce-in forwards 300ms;
  }
  @-webkit-keyframes bounce-in {
    0% {
      transform: translateY(30vh);
      opacity: 0;
    }
    60% {
      transform: translateY(-2vh);
    }
    80% {
      transform: translateY(1vh);
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
  @keyframes grow {
    from{
      width: 0;
    }
    to{
      width: 100%;
    }
  }
  @keyframes hide {
    from{
      width: 100%;
    }
    to{
      width: 0;
    }
  }
  @media screen and (max-width: 864px) {
    :root {
      --main-header-height: 6vh;
      --top-header-height: 5vh;
      --animated-waves-height: 8vh;
    }
    .total-view {
      height: 100vh;
      overflow: hidden;
    }
    .top-header {
      order: 1;
      height: var(--top-header-height);
      max-height: var(--top-header-height);
    }
    .nuxt {
      height: calc(100vh - var(--main-header-height) - var(--top-header-height));
      max-height: calc(100vh - var(--main-header-height) - var(--top-header-height));
      overflow: scroll;
      order: 2;
      /*z-index: 20;*/
    }
    .header {
      /*z-index: 100;*/
    }
    .main-header {
      position: fixed;
      bottom: 0;
      order: 3;
      height: var(--main-header-height);
      max-height: var(--main-header-height);
      box-shadow: 0 0 20px 5px rgba(100,100,100,0.2);
      z-index: 50;
    }
  }
</style>

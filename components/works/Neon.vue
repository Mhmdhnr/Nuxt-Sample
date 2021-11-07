<template>
  <div class="main flex flex-column">
<!--      <img class="wall" src="https://i.pinimg.com/originals/01/84/82/01848284003dddae20b94a570e29bbbf.jpg"/>-->
    <div class="input-main flex flex-row">
      <span v-show="this.$store.state.fa">یه چیزی بنویس!</span>
      <span v-show="!this.$store.state.fa">Write Something Here!</span>
      <input
        class="input"
        type="text"
        :placeholder="this.$store.state.fa ? 'یه چیزی بنویس! ' : 'Write Something Here!'"
        v-model="text"
      />
    </div>
    <div id="neon" class=" flex flex-column">
      <span class="" >{{text ? text : "NEON"}}</span>
<!--      <span class="" >♥  ♦  ♣  ♠</span>-->
    </div>
  </div>
</template>

<script>
    export default {
        name: "Neon",
        data() {
            return{
                text: '',
            }
        },
        watch: {
          text(newText) {
              document.getElementById("neon").classList.remove("blink");
              setTimeout(function () {
                document.getElementById("neon").classList.add("blink");
              }, 100)
          }
        },
        mounted() {
            this.text = "NEON"
        }
    }
</script>

<style scoped>
  .main{
    position: relative;
    width: 100%;
    height: 40vh;
    overflow: hidden;
    justify-content: space-evenly;
    background-color: var(--text-color);
  }
  .main:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(0deg, rgba(255,255,255, 0) 0%, rgba(255,255,255, 0.5) 80%, rgba(255,255,255, 1)  100%);
    z-index: 0;
    display: none;
  }
  .input-main {
    justify-content: space-evenly;
    z-index: 2;
  }
  .input {
    text-align: center;
    width: 40%;
  }
  #neon > span, .input-main > span {
    color: var(--bg-color);
    font-weight: 700;
  }
  .blink {
    -webkit-animation: 2500ms blink 1000ms forwards;
  }
  #neon > span {
    z-index: 1;
    font-size: 3em;
    margin: 0 auto;
    white-space: pre;
  }
  .wall {
    position: absolute;
    width: inherit;
    height: inherit;
    z-index: 1;
    /*   display: none; */
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
  @media screen and (max-width: 864px) {
    .input {
      font-size: 0.7em;
    }
  }
</style>


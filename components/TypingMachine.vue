<template>
    <div class="typing-machine" :id="subject">
      <slot />
      <span :id="`typing${subject}`" class="typing"></span><span class="cursor">|</span>
    </div>
</template>

<script>
    export default {
        name: "TypingMachine",
        props: ['subject', 'delay', 'speed', 'forwards'],
        mounted() {
            let main = document.getElementById(this.subject);
            let span = main.children[0];
            let text = span.innerText;
            let string = '';
            let interval = 60000 / this.speed;
            let i = 0;
            let typing = document.getElementById('typing' + this.subject);
            setTimeout(function () {
                let typingInterval = setInterval(() => {
                    string += text[i];
                    typing.innerText = string;
                    i++;
                    if (i === text.length) {
                        clearInterval(typingInterval);
                    }
                }, interval);
            }, parseInt(this.delay));
        }
    }
</script>

<style scoped>
  .cursor {
    animation: blink 1000ms infinite;
  }
  .typing {
    /*color: var(--bg-color);*/
  }
  @keyframes blink {
    0% {
      opacity: 0;
    }
    99% {
      opacity: 1;
    }
    100% {
      opacity: 1;
    }
  }
  @media screen and (max-width: 864px){
    .typing {
      font-size: 0.7em;
    }
    .typing-machine {
      padding: 0 2vw;
    }
  }
</style>

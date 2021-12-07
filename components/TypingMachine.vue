<template>
    <div class="typing-machine" :id="subject">
      <slot />
      <span :id="subject+'cursor'" class="cursor">|</span>
    </div>
</template>

<script>
    export default {
        name: "TypingMachine",
        props: ['subject', 'delay', 'speed', 'forwards', 'hideCursor'],
        data(){
            return {
                typeStarted: false,
            }
        },
        mounted() {
            let main = document.getElementById(this.subject);
            console.log(this.hideCursor)
            if (this.hideCursor) {
                document.getElementById(this.subject + 'cursor').innerText = ''
            }
            let span = main.children[0];
            let text = span.innerHTML;
            main.appendChild(document.createElement('span'));
            let hidden = main.children[2];
            hidden.innerHTML = text;
            hidden.style.opacity = '0.2';
            hidden.style.color = 'var(--primary-color)';
            hidden.style.backgroundColor = 'var(--primary-color)';
            span.innerText = '';
            let interval = 60000 / this.speed;
            let i = 0;
            let sub = this.subject;
            const observer = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting && !this.typeStarted) {
                    this.typeStarted = true;
                    setTimeout(function () {
                        let typingInterval = setInterval(() => {
                            span.innerText += text[i];
                            hidden.innerText = hidden.innerText.substring(1);
                            i++;
                            if (i === text.length) {
                                clearInterval(typingInterval);
                                // document.getElementById(sub + 'cursor').innerText = ''
                            }
                        }, interval);
                    }, parseInt(this.delay));
                }
            });
            observer.observe(document.getElementById(this.subject));
        }
    }
</script>

<style scoped>
  .cursor {
    animation: blink 800ms infinite;
  }
  .typing-machine {
    position: relative;
  }
  @keyframes blink {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @media screen and (max-width: 864px){
    .typing-machine {
      padding: 0 2vw;
    }
  }
</style>

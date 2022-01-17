<template>
  <div class="scroll-progress">
    <div class="scroll-bar">

    </div>
  </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        name: "ScrollProgress",
        data() {
            return {
            }
        },
        computed: mapState(['api']),
        watch : {
          api(newValue) {
              if(newValue === 'done') {
                  console.log('done')
                  let scrollBar = document.getElementsByClassName('scroll-bar')[0];
                  let bodyHeight = document.getElementsByClassName('nuxt')[0].scrollHeight;
                  scrollBar.style.width = (scrollY / bodyHeight * 100) + "vw";
                  let screenHeight = window.screen.height;
                  // let scrollHeight = Math.max(
                  //     document.body.scrollHeight, document.documentElement.scrollHeight,
                  //     document.body.offsetHeight, document.documentElement.offsetHeight,
                  //     document.body.clientHeight, document.documentElement.clientHeight
                  // );
                  console.log('screen height');
                  console.log(screenHeight);
                  console.log("body height");
                  console.log(bodyHeight);
                  window.addEventListener('scroll', function(){
                      let scrollY = window.scrollY;
                      scrollBar.style.width = ((scrollY) / (bodyHeight - screenHeight) * 98) + "vw";
                  });
                  window.addEventListener('touchmove', function(){
                      let scrollYMobile = document.getElementsByClassName('nuxt')[0].scrollTop;
                      bodyHeight = document.getElementsByClassName('nuxt')[0].scrollHeight;
                      console.log(scrollYMobile)
                      scrollBar.style.width = ((scrollYMobile) / (bodyHeight - screenHeight) * 98) + "vw";
                  });
              }
          }
        },
        mounted() {
            this.$nextTick( ()  => {
                let scrollBar = document.getElementsByClassName('scroll-bar')[0];
                let bodyHeight = document.body.scrollHeight;
                scrollBar.style.width = (scrollY / bodyHeight * 100) + "vw";
                let screenHeight = window.screen.height;
                let scrollHeight = Math.max(
                    document.body.scrollHeight, document.documentElement.scrollHeight,
                    document.body.offsetHeight, document.documentElement.offsetHeight,
                    document.body.clientHeight, document.documentElement.clientHeight
                );
                console.log(scrollHeight)
                console.log('screen height');
                console.log(screenHeight);
                console.log("body height");
                console.log(bodyHeight);
                window.addEventListener('scroll', function(){
                    let scrollY = window.scrollY;
                    scrollBar.style.width = ((scrollY) / (bodyHeight - screenHeight) * 98) + "vw";
                });
                window.addEventListener('touchmove', function(){
                    let scrollYMobile = document.getElementsByClassName('nuxt')[0].scrollTop;
                    bodyHeight = document.getElementsByClassName('nuxt')[0].scrollHeight;
                    console.log(scrollYMobile)
                    scrollBar.style.width = ((scrollYMobile) / (bodyHeight - screenHeight) * 98) + "vw";
                });
            });
        },
        methods:{
            handleProgress() {

            }
        }
    }
</script>

<style scoped>
  .scroll-progress {
    z-index: 19;
  }
  .scroll-bar {
    position: fixed;
    top: 0;
    right: 0;
    height: 0.5vh;
    background-color: var(--primary-color);
    box-shadow: 0 6px 4px 1px rgba(20, 20, 100, 0.1);
  }

  @media screen and (max-width: 864px){
    .scroll-bar {
      top: var(--top-header-height);
    }
  }
</style>

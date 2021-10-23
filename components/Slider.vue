<template xmlns:width="http://www.w3.org/1999/xhtml">
    <div class="all flex flex-row">
      <div class="gradient">
<!--        <img class="image" :src="slider.imageUrl">-->
        <img class="image" src="~/assets/me.svg">
      </div>
      <div class="content flex flex-column">
        <div class="moving-area">
          <div class="short-content">
            <span> {{slider.summary}}</span>
          </div>
          <div class="long-content">
            <span>{{slider.detail}} </span>
          </div>
         </div>
        <div class="more flex flex-row" @mouseover="detail()" @mouseout="summary()">
          <div v-for="n in 3" class="arrow">
            <span> ◄ </span>
          </div>
          <span class="bishtar"> بیشتر </span>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Slider",
        props: ['slider'],
        methods: {
            detail(){
                document.getElementsByClassName("moving-area")[0].classList.remove("summary");
                document.getElementsByClassName("moving-area")[0].classList.add("detail");
                for(let n = 1; n <=3; n++) {
                  document.getElementsByClassName("arrow")[n - 1].classList.add("flip");
                }
                // document.getElementsByClassName("bishtar")[0].innerText = "";
                document.getElementsByClassName("bishtar")[0].classList.add("fade")
            },
            summary(){
                document.getElementsByClassName("moving-area")[0].classList.remove("detail");
                document.getElementsByClassName("moving-area")[0].classList.add("summary");
                for(let n = 1; n <=3; n++) {
                    document.getElementsByClassName("arrow")[n - 1].classList.remove("flip");
                }
                // document.getElementsByClassName("bishtar")[0].innerText = "بیشتر ";
                document.getElementsByClassName("bishtar")[0].classList.remove("fade")
            }
        },
    }
</script>

<style scoped>
  .all {
    width: 100%;
    padding: 3vh 0;
    justify-content: space-around;
    margin: auto;
  }
  .image {
    width: 100%;
    z-index: 10;
  }
  .gradient {
    width: 40%;
    position: relative;
  }
  .gradient:after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 80%, var(--contrast-color)  100%);
    z-index: 1000;
  }
  .content {
    width: 40%;
    height: 100%;
    overflow: hidden;
    justify-content: space-between;
  }
  .moving-area {
    text-align: right;
    position: relative;
    width: 100%;
    margin-top: 3vh;
  }
  .short-content {
    font-size: 1.5em;
  }
  .long-content {
    font-size: 1em;
  }
  .more {
    align-content: flex-end;
    position: relative;
    width: 100%;
    font-size: 1em;
    cursor: pointer;
    margin: 3vh auto 0;
    direction: ltr;
    padding: 1vh 0;
  }
  .more::before{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 4px;
    width: 100%;
    height: 100%;
    background: linear-gradient(270deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0)  100%);
    z-index: 1;
  }
  .more > span{
    margin-left: 1vw;
    transition: all 300ms;
  }
  .arrow {
    transform: rotateY(0deg);
    transition: all 300ms;
  }
  .arrow > span {
    opacity: 1;
  }
  .fade {
    opacity: 0;
    transition: opacity 200ms;
  }
  .flip {
    transform: rotateY(180deg);
    transition: all 400ms;
  }
  .detail {
    -webkit-animation: detail 400ms forwards;
  }
  .summary {
    -webkit-animation: summary 400ms forwards;
  }
  @-webkit-keyframes detail {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(100%);
    }
  }

  @-webkit-keyframes summary {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  }
  .long-content {
    position: absolute;
    right: 100%;
    top: 0;
    width: 100%;
  }

</style>

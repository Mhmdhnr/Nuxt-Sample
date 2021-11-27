<template>
  <div class="mbti-types">
    <div class="type-top flex">
      <div class="title-spans">
        <span class="abr">{{typeData.abr}}</span>
        <br>
        <div class="title">
          <span>{{typeData.title.fa}}</span>
          <span>({{typeData.title.en}})</span>
        </div>
<!--        <span>{{typeData.whoTheyAre.fa}}</span>-->
      </div>
      <div class="image-box">
        <img class="image" :src="require(`@/assets/images/mbti/${typeData.abr}.png`)" :alt="typeData.abr">
        <div class="sentence">
          <span>{{typeData.sentence.fa}}</span>
        </div>
      </div>
    </div>
    <div class="short-des">
      <hr>
      <TypingMachine :subject="typeData.id" delay="1000" speed="1000" :forwards="true">
        <span style="display: none">{{typeData.shortDes.fa}}</span>
      </TypingMachine>
    </div>
  </div>
</template>

<script>
    import TypingMachine from "./TypingMachine";
    export default {
        name: "MBTIType",
        components: {TypingMachine},
        props:['typeData']
    }
</script>

<style scoped>
  .mbti-types {
    /*background-color: var(--contrast-color);*/
    border: 2px solid var(--primary-color);
    box-shadow: 0 4px 12px 0 rgba(40, 40, 40, 0.1);
    border-radius: 16px;
    width: 720px;
    padding: 2vh 2vw;
    margin: 3vh auto;
  }
  .type-top {
    width: 100%;
  }
  .title-spans {
    margin: auto auto 0 auto;
    justify-content: flex-end;
    width: 50%;
  }
  .abr {
    font-size: 3em;
  }
  .title-spans > span {
    text-align: start;
  }
  .title > span {
    font-size: 1.5em;
  }
  .image-box {
    display: flex;
    position: relative;
    justify-content: flex-end;
    width: 50%;
  }
  .sentence {
    padding: 1vh 1vw 1vh calc(1vw + 5%);
    position: absolute;
    /*height: 150px;*/
    /*width: 200px;*/
    left:150px;
    top: 10px;
    background-color: var(--primary-color);
    clip-path: polygon(100% 0%,100% 100%,10% 100%,10% 50%,0% 70%,10% 70%,10% 0%);
    font-size: 0.7em;
    text-align: center;
  }
  .sentence > span {
    color: var(--bg-color);
  }
  .short-des {
    padding: 2vh 0;
  }
  .image {
    width: 200px;
    height: 200px;
  }
  @media screen and (max-width: 864px) {
    .mbti-types {
      width: 90vw;
      padding: 1vh 2vw;
      margin: 2vh auto;
    }
    .abr {
      font-size: 1.5em;
    }
    .title > span {
      font-size: 0.75em;
    }
    .sentence {
      left:90px;
      top: 0;
      width: 120px;
      font-size: 0.6em;
    }
    .short-des {
      padding: 1vh 0;
    }
    .image {
      width: 120px;
      height: 120px;
    }
  }
</style>

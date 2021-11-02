<template>
    <div class="elevate-card"  :id="elevateCardData.id">
      <div class="card-front">
        <img class="image" :src="elevateCardData.front.imageURL">
<!--        <img class="image" src="~/assets/me.svg">-->
      </div>
      <div class="card-back flex flex-column">
        <span v-show="this.$store.state.fa">
          {{elevateCardData.back.title.fa}}
        </span>
        <span v-show="!this.$store.state.fa">
          {{elevateCardData.back.title.en}}
        </span>
        <b-btn class="button" :to="elevateCardData.back.pageLink">
          <span v-show="this.$store.state.fa"> ببینم </span>
          <span v-show="!this.$store.state.fa"> Let's see </span>
        </b-btn>
      </div>
    </div>
</template>

<script>
    export default {
        name: "ElevateCard",
        props: ['elevateCardData'],
    }
</script>

<style scoped>
  .button {
    cursor: pointer;
    background-color: var(--bg-color);
    border-radius: 4px;
    border: none;
    padding: 1vh 2vw;
    box-shadow: 0 0 5px 2px rgba(100,100,100,0.2);
  }
  .button > span {
    font-size: 1.2em;
  }
  .button:hover, .button:focus {
    background-color: var(--primary-color);
  }
  .button:hover > span, .button:focus > span {
    color: var(--bg-color);
  }
  .elevate-card {
    width: 100%;
    height: 100%;
    position: relative;
    border-radius: 8px;
    background-color: var(--bg-color);
    box-shadow: 0 4px 12px 0 rgba(40, 40, 40, 0.1);
    transition: box-shadow .3s ease, transform .3s ease, opacity .3s ease;
  }
  .elevate-card:hover, .elevate-card:focus {
    box-shadow: 0 1rem 2.5rem rgba(40, 40, 40, 0.1), 0 0.5rem 1rem -0.75rem rgba(40, 40, 40, 0.1);
    transform: translate3d(0, -5px, 0) scale(1.05);
  }
  .elevate-card:hover .card-front {
    opacity: 0;
  }
  .elevate-card:hover .card-back {
    opacity: 1;
  }
  .card-front, .card-back {
    width: 100%;
    height: 100%;
    border-radius: 8px;
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    backface-visibility: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: opacity .3s ease;
  }
  .card-front {
    opacity: 1;
    padding: 0;
    z-index: 2;
  }
  .card-back {
    opacity: 0;
    padding: 2vh 2vw;
    font-size: 1em;
    text-align: center;
    z-index: 3;
    justify-content: space-around;
  }
  .card-back > span {
    color: var(--text-color);
  }
  .image {
    width: 100%;
    height: 100%;
  }
  @media screen and (max-width: 864px) {
    .card-back {
      font-size: 0.8em;
    }
    .button {
      padding: 1vh 6vw;
    }
  }

</style>

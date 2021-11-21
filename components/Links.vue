<template>
    <div class="links-main flex">
      <div v-if="this.$store.state.fa" class="social flex flex-row">
        <a v-for="link in links.social" :href="link.link" target="_blank">
          <div class="link">
            <span> {{link.title.fa}} </span>
            <img class="icon" :src="require(`~/assets/images/${link.icon}`)" alt="">
          </div>
        </a>
      </div>
      <div v-if="!this.$store.state.fa" >
        <a v-for="link in links.social" :href="link.link" target="_blank">
          <div class="link">
            <span> {{link.title.en}} </span>
            <img class="icon" :src="require(`~/assets/images/${link.icon}`)" alt="">
          </div>
        </a>
      </div>
      <div v-if="this.$store.state.fa" class="github flex flex-row">
        <a v-for="link in links.github" :href="link.link" target="_blank">
          <div class="link">
            <span> {{link.title.fa}} </span>
            <img class="icon" :src="require(`~/assets/images/${link.icon}`)" alt="">
          </div>
        </a>
      </div>
      <div v-if="!this.$store.state.fa" >
        <a v-for="link in links.github" :href="link.link" target="_blank">
          <div class="link">
            <span> {{link.title.en}} </span>
            <img class="icon" :src="require(`~/assets/images/${link.icon}`)" alt="">
          </div>
        </a>
      </div>
    </div>
</template>

<script>
    import {links} from "../data/data";
    export default {
        name: "Links",
        data() {
            return {
                links: links
            }
        }
    }
</script>

<style scoped>
  .links-main {
    width: 100vw;
    flex-direction: row;
    padding: 1vh var(--base-padding-r-l);
    position: relative;
    background-color: var(--primary-color);
  }
  .social {
    justify-content: flex-start;
    flex: 1;
  }
  .github {
    justify-content: flex-end;
    flex: 2;
  }
  .link {
    margin: auto 1vw;
  }
  span {
    font-size: 0.8em;
    margin: auto 1vw;
  }
  .icon {
    width: 20px;
    margin: auto;
  }
  .icon .cls-1, .icon .cls-2 {
    fill: var(--text-color);
  }
  @media screen and (max-width: 864px) {
    .social {
      width: 90vw;
    }
    .social span {
      display: none;
    }
    .github {
      width: 90vw;
    }
    .links-main {
      justify-content: center;
    }
    .icon {
      margin: 5px;
    }
  }
</style>

<template>
    <div class="links-main flex">
      <div v-if="this.$store.state.fa" class="social flex flex-row">
        <a v-for="link in links.social" :href="link.link" target="_blank">
          <div class="link">
            <span> {{link.title.fa}} </span>
            <img class="icon" :src="require(`~/assets/images/${link.icon}`)" alt="">
          </div>
        </a>
        <span class="gmail" v-on:click="copyGmail">mhmd.hnr@gmail.com</span>
      </div>
      <div v-if="!this.$store.state.fa" class="social flex flex-row">
        <a v-for="link in links.social" :href="link.link" target="_blank">
          <div class="link">
            <span> {{link.title.en}} </span>
            <img class="icon" :src="require(`~/assets/images/${link.icon}`)" alt="">
          </div>
        </a>
        <span class="gmail" v-on:click="copyGmail">mhmd.hnr@gmail.com</span>
      </div>
      <div v-if="this.$store.state.fa" class="github flex flex-row">
        <a v-for="link in links.github" :href="link.link" target="_blank">
          <div class="link">
            <span> {{link.title.fa}} </span>
            <img class="icon" :src="require(`~/assets/images/${link.icon}`)" alt="">
          </div>
        </a>
      </div>
      <div v-if="!this.$store.state.fa" class="github flex flex-row">
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
        },
        methods: {
            copyGmail(){
                let gmail = document.getElementsByClassName('gmail')[0].innerText;
                let textArea = document.createElement("textarea");
                textArea.value = gmail;
                document.body.appendChild(textArea);
                textArea.select();
                document.execCommand("Copy");
                textArea.remove();
                window.alert("gmail copied!!!")
            }
        }
    }
</script>

<style scoped>
  .gmail {
    cursor: pointer;
  }
  .links-main {
    width: 100vw;
    /*flex-direction: row;*/
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
    flex: 1;
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
      flex: 1;
    }
    .social span {
      display: none;
    }
    .github {
      width: 90vw;
      flex: 2;
    }
    .links-main {
      justify-content: center;
    }
    .icon {
      margin: 5px;
    }
  }
</style>

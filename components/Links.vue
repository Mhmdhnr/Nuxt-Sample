<template>
    <div class="links-main flex">
      <div class="social flex flex-row">
        <a  href="https://instagram.com/mhmd_honari" target="_blank">
          <div class="link instagram">
            <span v-show="this.$store.state.fa"> اینستاگرام </span>
            <span v-show="!this.$store.state.fa"> Instagram </span>
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 125.06 125"><defs><style>.cls-1{fill:#775e5e;}</style></defs><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="cls-1" d="M113.06,0H12C5.4,0,0,5.66,0,12.57v99.86C0,119.34,5.4,125,12,125H113.06c6.6,0,12-5.66,12-12.57V12.57C125.06,5.66,119.66,0,113.06,0Zm.2,104.62a8.43,8.43,0,0,1-8.2,8.59H20a8.43,8.43,0,0,1-8.19-8.59V20.38A8.43,8.43,0,0,1,20,11.79h85.07a8.43,8.43,0,0,1,8.2,8.59Z"/><path class="cls-1" d="M62.53,28.28A34.22,34.22,0,1,0,96.75,62.5,34.26,34.26,0,0,0,62.53,28.28Zm0,57.2a23,23,0,1,1,23-23A23,23,0,0,1,62.53,85.48Z"/><circle class="cls-1" cx="98.54" cy="28.8" r="7.61"/></g></g></svg>
          </div>
        </a>
        <a href="https://wa.me/+989354162124" target="_blank">
          <div class="link whatsapp">
            <span v-show="this.$store.state.fa"> واتساپ </span>
            <span v-show="!this.$store.state.fa"> Whatsapp </span>
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 147.2 147.56"><defs><style>.cls-1,.cls-2{fill:#384d9c;}.cls-2{fill-rule:evenodd;}</style></defs><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="cls-1" d="M0,147.56l10.58-39.47a73,73,0,1,1,29.1,28.85Zm41.65-25.42,2.5,1.49a59.3,59.3,0,1,0-20.29-20.1L25.39,106l-5.9,22Z"/><path class="cls-2" d="M101.43,83c-3-1.8-6.9-3.8-10.44-2.35-2.71,1.11-4.44,5.35-6.19,7.52a2.62,2.62,0,0,1-3.37.73A47.36,47.36,0,0,1,57.84,68.71c-1-1.46-.78-2.61.37-3.95,1.69-2,3.82-4.27,4.28-7s-.8-5.84-1.91-8.24c-1.43-3.06-3-7.43-6.08-9.16-2.83-1.6-6.54-.7-9,1.34a18.38,18.38,0,0,0-6.37,14.55,21,21,0,0,0,.57,4.62,38.41,38.41,0,0,0,4.43,10.21,81.94,81.94,0,0,0,4.63,7A71.41,71.41,0,0,0,68.77,96.78a60.56,60.56,0,0,0,12.51,6c4.9,1.62,9.26,3.3,14.56,2.3,5.54-1.06,11-4.49,13.2-9.83a8.49,8.49,0,0,0,.61-5C108.9,86.74,104.22,84.69,101.43,83Z"/></g></g></svg>
          </div>
        </a>
      </div>
      <div class="github flex flex-row">
        <a href="https://github.com/Mhmdhnr/Nuxt-Sample" target="_blank">
          <div class="link front-end flex">
            <span v-show="this.$store.state.fa">کد فرانت اند </span>
            <span v-show="!this.$store.state.fa"> Front-end source code</span>
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144.39 144.39"><defs><style>.cls-1{fill:#695756;}</style></defs><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="cls-1" d="M72.2,0a72.2,72.2,0,1,0,72.19,72.2A72.19,72.19,0,0,0,72.2,0ZM89.08,138.24q0-12.57,0-25.15A13.35,13.35,0,0,0,86.45,105c-.61-.83-1.19-1.68-1.83-2.48s-.35-.84.44-.95a37.2,37.2,0,0,0,4-.81c7.33-1.89,13.94-5.07,18.6-11.3,5.88-7.86,7.74-16.61,5.22-26.15a36.23,36.23,0,0,0-5.45-11,2.65,2.65,0,0,1-.44-2.46A26.15,26.15,0,0,0,106.28,34c-.16-.46-.35-.73-.84-.61-1.72.43-3.53.31-5.24.93a62.94,62.94,0,0,0-10.69,5.46,3.23,3.23,0,0,1-2.65.41,52.13,52.13,0,0,0-10-1.69A53.34,53.34,0,0,0,59.57,40.1a4.1,4.1,0,0,1-3.42-.48c-4.76-2.79-9.39-5.93-15.22-6.2-.82,0-1.06.11-1.3.81A25.38,25.38,0,0,0,38.94,50a1.84,1.84,0,0,1-.24,1.87,29.82,29.82,0,0,0-6.39,16.63c-.84,10.58,2.63,19.36,11,26,5.08,4,11.06,5.94,17.34,7,1.22.2,1,.53.45,1.24-1.53,1.94-3.17,3.93-3.44,6.43-.24,2.26-1.46,2.89-3.37,3-.26,0-.53.06-.8.07a8.23,8.23,0,0,1-7.66-3.79,29.65,29.65,0,0,0-4.61-5.91c-2.89-2.56-6.13-4.31-10.13-4.26-.65,0-.82.15-.74.84.23,2,.42,4,.53,6,0,.93.31,1.23,1.29,1.35a6.93,6.93,0,0,1,3.67,2.09,20.82,20.82,0,0,1,3,4,16.74,16.74,0,0,0,8.37,6.83,18,18,0,0,0,9.9.52v18.73a68.12,68.12,0,1,1,32-.42Z"/></g></g></svg>
          </div>
        </a>
        <a href="https://github.com/Mhmdhnr/Python-Nuxt" target="_blank">
          <div class="link back-end flex">
            <span v-show="this.$store.state.fa"> کد بک اند </span>
            <span v-show="!this.$store.state.fa">Back-end source code</span>
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144.39 144.39"><defs><style>.cls-1{fill:#695756;}</style></defs><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="cls-1" d="M72.2,0a72.2,72.2,0,1,0,72.19,72.2A72.19,72.19,0,0,0,72.2,0ZM89.08,138.24q0-12.57,0-25.15A13.35,13.35,0,0,0,86.45,105c-.61-.83-1.19-1.68-1.83-2.48s-.35-.84.44-.95a37.2,37.2,0,0,0,4-.81c7.33-1.89,13.94-5.07,18.6-11.3,5.88-7.86,7.74-16.61,5.22-26.15a36.23,36.23,0,0,0-5.45-11,2.65,2.65,0,0,1-.44-2.46A26.15,26.15,0,0,0,106.28,34c-.16-.46-.35-.73-.84-.61-1.72.43-3.53.31-5.24.93a62.94,62.94,0,0,0-10.69,5.46,3.23,3.23,0,0,1-2.65.41,52.13,52.13,0,0,0-10-1.69A53.34,53.34,0,0,0,59.57,40.1a4.1,4.1,0,0,1-3.42-.48c-4.76-2.79-9.39-5.93-15.22-6.2-.82,0-1.06.11-1.3.81A25.38,25.38,0,0,0,38.94,50a1.84,1.84,0,0,1-.24,1.87,29.82,29.82,0,0,0-6.39,16.63c-.84,10.58,2.63,19.36,11,26,5.08,4,11.06,5.94,17.34,7,1.22.2,1,.53.45,1.24-1.53,1.94-3.17,3.93-3.44,6.43-.24,2.26-1.46,2.89-3.37,3-.26,0-.53.06-.8.07a8.23,8.23,0,0,1-7.66-3.79,29.65,29.65,0,0,0-4.61-5.91c-2.89-2.56-6.13-4.31-10.13-4.26-.65,0-.82.15-.74.84.23,2,.42,4,.53,6,0,.93.31,1.23,1.29,1.35a6.93,6.93,0,0,1,3.67,2.09,20.82,20.82,0,0,1,3,4,16.74,16.74,0,0,0,8.37,6.83,18,18,0,0,0,9.9.52v18.73a68.12,68.12,0,1,1,32-.42Z"/></g></g></svg>
          </div>
        </a>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Links"
    }
</script>

<style scoped>
  .links-main {
    width: 100vw;
    flex-direction: row;
    padding: 1vh var(--base-padding-r-l);
    position: relative;
    background-color: var(--contrast-color);
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
      justify-content: flex-start;
      margin-bottom: 2vh;
    }
    .github {
      width: 90vw;
      justify-content: flex-end;
    }
    .links-main {
      flex-direction: column;
      justify-content: center;
    }
  }
</style>

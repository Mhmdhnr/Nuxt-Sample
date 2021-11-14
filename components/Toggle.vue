<template>
    <label>
      <div v-show="subject === 'theme'">
        <svg class="sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 154.81 154.81"><defs><style>.cls-1{fill:#424242;}</style></defs><g id="Layer_2"><g id="Layer_1-2"><circle class="cls-1" cx="77.4" cy="77.4" r="54.53"/><path class="cls-1" d="M81,3.6V17.69c-1.19-.07-2.4-.11-3.61-.11s-2.41,0-3.6.11V3.6A3.61,3.61,0,0,1,81,3.6Z"/><path class="cls-1" d="M37.73,32.63c-.9.8-1.78,1.62-2.63,2.47s-1.67,1.73-2.46,2.64l-10-10a3.61,3.61,0,1,1,5.1-5.1Z"/><path class="cls-1" d="M17.58,77.4c0,1.21,0,2.42.11,3.61H3.6a3.61,3.61,0,0,1,0-7.21H17.69C17.62,75,17.58,76.19,17.58,77.4Z"/><path class="cls-1" d="M37.74,122.17l-10,10a3.61,3.61,0,1,1-5.1-5.1l10-10c.8.9,1.62,1.77,2.47,2.62S36.83,121.37,37.74,122.17Z"/><path class="cls-1" d="M81,137.11V151.2a3.61,3.61,0,1,1-7.21,0V137.11c1.19.07,2.39.11,3.6.11S79.82,137.18,81,137.11Z"/><path class="cls-1" d="M132.13,132.14a3.61,3.61,0,0,1-5.09,0l-10-10c.9-.8,1.78-1.62,2.63-2.47s1.67-1.73,2.46-2.63l10,10A3.6,3.6,0,0,1,132.13,132.14Z"/><path class="cls-1" d="M154.81,77.4A3.61,3.61,0,0,1,151.2,81H137.11c.07-1.19.11-2.4.11-3.61s0-2.41-.11-3.6H151.2A3.61,3.61,0,0,1,154.81,77.4Z"/><path class="cls-1" d="M132.13,27.77l-10,10c-.8-.9-1.62-1.78-2.47-2.63s-1.73-1.67-2.63-2.46l10-10a3.6,3.6,0,1,1,5.09,5.1Z"/><path class="cls-1" d="M107,13.12l-4.07,10.17q-1.62-.76-3.3-1.44c-1.11-.45-2.25-.86-3.39-1.24l4.07-10.17A3.6,3.6,0,1,1,107,13.12Z"/><path class="cls-1" d="M57.18,21.1c-1.14.41-2.25.85-3.35,1.32s-2.2,1-3.27,1.52L46.24,13.87A3.61,3.61,0,0,1,52.87,11Z"/><path class="cls-1" d="M23.29,51.89q-.76,1.62-1.44,3.3c-.45,1.11-.86,2.25-1.24,3.39L10.44,54.51a3.6,3.6,0,1,1,2.68-6.69Z"/><path class="cls-1" d="M24,104.24l-10.08,4.32A3.6,3.6,0,1,1,11,101.94L21.1,97.62q.6,1.71,1.32,3.36C22.89,102.08,23.4,103.17,24,104.24Z"/><path class="cls-1" d="M58.58,134.19l-4.07,10.17a3.61,3.61,0,0,1-3.35,2.27,3.7,3.7,0,0,1-1.33-.26,3.61,3.61,0,0,1-2-4.69l4.07-10.17q1.62.77,3.3,1.44C56.3,133.4,57.44,133.81,58.58,134.19Z"/><path class="cls-1" d="M106.67,145.67a3.54,3.54,0,0,1-1.42.29,3.59,3.59,0,0,1-3.31-2.19l-4.32-10.06c1.14-.41,2.26-.85,3.36-1.33s2.19-1,3.26-1.53l4.32,10.08A3.61,3.61,0,0,1,106.67,145.67Z"/><path class="cls-1" d="M146.37,105a3.61,3.61,0,0,1-3.35,2.26,3.7,3.7,0,0,1-1.34-.25l-10.18-4.07c.52-1.08,1-2.19,1.45-3.31s.86-2.25,1.24-3.39l10.17,4.07A3.61,3.61,0,0,1,146.37,105Z"/><path class="cls-1" d="M143.77,52.87,133.7,57.19c-.4-1.14-.85-2.26-1.32-3.36s-1-2.2-1.52-3.27l10.07-4.32a3.61,3.61,0,1,1,2.84,6.63Z"/></g></g></svg>
        <svg class="moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 117.78 116.44"><defs><style>.cls-1{fill:#424242;}</style></defs><g id="Layer_2" ><g id="Layer_1-2" ><path class="cls-1" d="M59.57,0Q58,0,56.36.09A58.21,58.21,0,0,1,24.52,104.7,58.22,58.22,0,1,0,59.57,0Z"/><path class="cls-1" d="M31,22.92l4.43,13.62a3.17,3.17,0,0,0,3,2.2H52.75a3.17,3.17,0,0,1,1.86,5.74L43,52.89a3.18,3.18,0,0,0-1.16,3.55L46.3,70.06a3.18,3.18,0,0,1-4.89,3.55L29.83,65.19a3.2,3.2,0,0,0-3.73,0L14.51,73.61a3.17,3.17,0,0,1-4.88-3.55l4.42-13.62a3.18,3.18,0,0,0-1.15-3.55L1.31,44.48a3.18,3.18,0,0,1,1.87-5.74H17.5a3.18,3.18,0,0,0,3-2.2l4.42-13.62A3.18,3.18,0,0,1,31,22.92Z"/></g></g></svg>
      </div>
      <div v-show="subject === 'language'">
        <span class="fa">FA</span>
        <span class="en">EN</span>
      </div>
      <input type = 'checkbox' v-model="checked">
      <span class = 'slide'></span>
    </label>
</template>

<script>
    export default {
        name: "Toggle",
        props: ['subject'],
        data() {
            return {
                checked: false
            }
        },
        watch: {
            checked (newChecked) {
                if (this.subject === "theme") {
                  if (newChecked){
                      this.$colorMode.preference = "dark"
                  }
                  else {
                      this.$colorMode.preference = "light"
                  }
                }
                else if (this.subject === "language") {
                  if (newChecked){
                      this.$store.commit('fa', false)
                  }
                  else {
                      this.$store.commit('fa', true)
                  }
                }
            }
        }
    }
</script>

<style scoped>

  label {
    position: absolute;
    right: 0;
    height: 26px;
    width: 54px;
    background-color: var(--toggle-dark);
    border-radius: 50px;
    cursor: pointer;
    margin: 0;
  }
  input {
    position: absolute;
    display: none;
  }
  .slide {
    position: absolute;
    right: 0;
    width: 100%;
    height: 100%;
    border-radius: 50px;
    transition: 0.3s;
  }
  input:checked ~ .slide {
    background-color: var(--toggle-light);
  }
  .slide::before {
    content: "";
    position: absolute;
    top: 3px;
    left: 3px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: var(--toggle-light);
    box-shadow: none;
    transition: 0.3s;
    z-index: 2;
  }
  input:checked ~ .slide::before {
    transform: translateX(29px);
    background-color: var(--toggle-dark);
    /*box-shadow: inset -9px 0 0 0 var(--dark);*/
  }
  .sun  .cls-1{
    fill: var(--toggle-dark);
  }
  .moon  .cls-1 {
    fill: var(--toggle-light);
  }
  .sun, .moon {
    position: absolute;
    top: 4px;
    height: 16px;
    width: 16px;
    z-index: 1;
  }
  .sun {
    left: 3px;
  }
  .moon {
    right: 3px;
  }
  .fa, .en {
    position: absolute;
    /*top: 3px;*/
    z-index: 1;
    font-size: 0.8em;
  }
  .fa {
    left: 6px;
    color: var(--toggle-dark);
  }
  .en {
    right: 6px;
    color: var(--toggle-light);
    font-family: Ubuntu, sans-serif;
    font-weight: 500;
  }

  @media screen and (max-width: 864px) {
  }
</style>

<template>
    <div class="main flex flex-row">
      <NuxtLink to="/">
        <div class="brand flex">
          <img class="logo" src="~/assets/images/logo.svg" alt="">
<!--          <svg class="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 328.66 230.73"><defs><style>.cls-1{fill:#008E91;}</style></defs><g id="Layer_2" ><g id="Layer_1-2" ><polygon class="cls-1" points="164.33 0 131.46 0 98.6 0 82.16 28.46 65.73 56.92 98.6 56.92 131.46 56.92 147.9 85.39 164.33 113.85 180.76 85.39 197.19 56.92 180.76 28.46 164.33 0"/><polygon class="cls-1" points="312.22 28.46 295.79 0 262.93 0 230.06 0 213.63 28.46 197.19 56.92 230.06 56.92 262.93 56.92 279.36 85.39 295.79 113.85 312.22 85.39 328.66 56.92 312.22 28.46"/><polygon class="cls-1" points="98.6 116.89 82.16 145.35 65.73 173.81 32.87 173.81 0 173.81 16.43 202.27 32.87 230.73 65.73 230.73 98.6 230.73 115.03 202.27 131.46 173.81 115.03 145.35 98.6 116.89"/><polygon class="cls-1" points="230.06 116.89 213.63 145.35 197.19 173.81 164.33 173.81 131.46 173.81 147.9 202.27 164.33 230.73 197.19 230.73 230.06 230.73 246.49 202.27 262.93 173.81 246.49 145.35 230.06 116.89"/></g></g></svg>-->
        </div>
      </NuxtLink>
        <span class="sign-in sign" v-show="!signedIn && this.fa" @click="openModal()">ورود / عضویت</span>
        <span class="sign-in sign" v-show="!signedIn && !this.fa" @click="openModal()">Login / Register</span>
        <span class="dashboard sign" v-show="signedIn && this.fa" @click="signOut()">سلام</span>
        <span class="dashboard sign" v-show="signedIn && !this.fa" @click="signOut()">Hello</span>
      <div class="toggles flex">
        <div class="color-panel" >
          <div class="background-color" v-on:click="showColorPicker('bg-color-picker')">
            <ColorPicker id="bg-color-picker" class="bg-color-picker" subject="--bg-color"
                         :lightColors="colorPicker.light.bg"
                         :darkColors="colorPicker.dark.bg"/>
          </div>
          <div class="text-color" v-on:click="showColorPicker('text-color-picker')">
            <ColorPicker id="text-color-picker" class="text-color-picker" subject="--text-color"
                         :lightColors="colorPicker.light.text"
                         :darkColors="colorPicker.dark.text"/>
          </div>
          <div class="primary-color" v-on:click="showColorPicker('primary-color-picker')">
            <ColorPicker id="primary-color-picker" class="primary-color-picker" subject="--primary-color"
                         :lightColors="colorPicker.light.primary"
                         :darkColors="colorPicker.dark.primary"/>
          </div>
        </div>
        <Toggle id="theme" subject="theme" class="theme-toggle"/>
        <Toggle id="language" subject="language" class="theme-toggle"/>
      </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    import {colorPicker} from "../../data/data";
    import Toggle from "../layout/Toggle";
    import ColorPicker from "../layout/ColorPicker";
    import apiServices from "../../api/apiServices";

    export default {
        name: "TopHeader",
        components: {ColorPicker, Toggle},
        data() {
            return {
                colorPicker: colorPicker
            }
        },
        computed: mapState(['theme', 'signedIn', 'user', 'fa']),
        watch: {
            user(newValue) {
                this.$nextTick(function () {
                    let span = document.getElementsByClassName('dashboard')[0];
                    if(newValue.firstName || newValue.lastName){
                        if (this.fa) {
                            span.innerText = " سلام " + newValue.firstName + " " + newValue.lastName
                        } else {
                        }
                    } else if(newValue.phoneNumber) {
                        if (this.fa) {
                            span.innerText =  " سلام " + newValue.phoneNumber
                        } else {
                            span.innerText = newValue.phoneNumber + "Hello"
                        }
                    } else {
                        if (this.fa) {
                            span.innerText = "سلام"
                        } else {
                            span.innerText = "Hello"
                        }
                    }
                });
            },
            // fa(newValue) {
            //     this.$nextTick(function () {
            //         let span = document.getElementsByClassName('dashboard')[1];
            //         if (!newValue) {
            //             span.innerText = " Hello "
            //         } else {
            //             span.innerText = " سلام "
            //         }
            //     });
            // }
        },
        mounted() {
            let primaryPicker = document.getElementById('primary-color-picker');
            let textPicker = document.getElementById('text-color-picker');
            let bgPicker = document.getElementById('bg-color-picker');
            let primary = document.getElementsByClassName('primary-color')[0];
            let text = document.getElementsByClassName('text-color')[0];
            let bg = document.getElementsByClassName('background-color')[0];
            document.onclick = function (e) {
                if(e.target !== primary){
                    primaryPicker.style.display = 'none';
                }
                if(e.target !== text){
                    textPicker.style.display = 'none';
                }
                if(e.target !== bg){
                    bgPicker.style.display = 'none';
                }
            }
        },
        methods: {
            showColorPicker(colorPicker) {
                let colorPickerEl = document.getElementsByClassName(colorPicker)[0];
                console.log(colorPickerEl);
                colorPickerEl.style.display = 'flex';
            },
            signOut() {
                this.$store.commit('signedIn', false);
                apiServices.methods.signOut().then(response => {
                    console.log(response);
                });
                let span = document.getElementsByClassName('dashboard')[0];
                span.innerText = "ورود / عضویت";
                this.$forceUpdate();
            },
            openModal(){
                this.$store.commit('needSignIn', true)
            }

        },
    }
</script>

<style scoped>
  .color-panel {
    display: flex;
    margin: 2vw;
  }
  .primary-color, .text-color, .background-color {
    width: 22px;
    height: 22px;
    border-radius: 50%;
    position: relative;
    border: 1px solid var(--contrast-color);
    margin: 0 5px;
    box-shadow: 0 0 5px 1px rgba(100,100,100,0.2);
  }
  .primary-color {
    background-color: var(--primary-color);
  }
  .text-color {
    background-color: var(--text-color);
  }
  .background-color {
    background-color: var(--bg-color);
  }
  .bg-color-picker, .text-color-picker, .primary-color-picker {
    display: none;
  }
  .main {
    width: 100vw;
    max-width: 100vw;
    border-bottom: 1px solid var(--contrast-color);
    padding: 0 var(--base-padding-r-l);
  }
  .toggles {
    height: 100%;
    flex: 1;
    justify-content: flex-end;
  }
  .logo .cls-1 {
    fill: var(--text-color)
  }
  .theme-toggle {
    position: relative;
    width: 54px;
    height: 26px;
    margin: auto 10px auto 0;
    padding: 0;
  }
  .sign {
    height: 80%;
    border: 2px solid var(--text-color);
    padding: 0 1vw;
    border-radius: 4px;
    background-color: var(--bg-color);
    color: var(--text-color);
    cursor: pointer;
    /*box-shadow: 0 4px 8px 0 rgba(40, 40, 40, 0.3);*/
    margin: 0 2vw;
    transition: all 100ms;
    font-size: 0.8em;
  }
  .sign:hover {
    border-color: var(--primary-color);
    background-color: var(--primary-color);
    color: var(--bg-color);
    /*transform: translateY(-1px);*/
    transition: all 100ms;
    box-shadow: 0 1px 2px 0 rgba(40, 40, 40, 0.3);
  }
  .logo {
    width: 35px;
    height: 35px;
  }
  @media screen and (max-width: 864px) {
    .color-panel {
      display: none;
    }
  }

</style>

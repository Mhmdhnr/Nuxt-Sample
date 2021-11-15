<template>
    <div class="color-picker flex flex-column">
      <div v-show="this.theme === 'light'" class="colors">
        <div v-for="color in lightColors" class="color">
          <input class="color-input" :id="`${subject}light${color}`" type="radio" v-model="selectedColor">
          <label class="color-label" @click="check(color)">
          </label>
        </div>
      </div>
      <div v-show="this.theme === 'dark'" class="colors">
        <div v-for="color in darkColors" class="color">
          <input class="color-input" :id="`${subject}dark${color}`" type="radio" v-model="selectedColor">
          <label class="color-label" @click="check(color)">
          </label>
        </div>
      </div>
        <button class="random" v-on:click="random">
          random
        </button>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        name: "ColorPicker",
        props:['darkColors','lightColors', 'subject'],
        data() {
            return {
                selectedColor: ''
            }
        },
        computed: mapState(['theme']),
        watch: {
          theme(newValue){
              if(newValue === 'light'){
                  for(let color of this.lightColors) {
                      document.getElementById(this.subject.toString() + "light" + color).parentElement.style.backgroundColor = color;
                  }
              } else {
                  for(let color of this.darkColors) {
                      document.getElementById(this.subject.toString() + "dark" + color).parentElement.style.backgroundColor = color;
                  }
              }
          }
        },
        mounted:function() {
            if(this.theme === 'light'){
                for(let color of this.lightColors) {
                    document.getElementById(this.subject.toString() + "light" + color).parentElement.style.backgroundColor = color;
                }
            } else {
                for(let color of this.darkColors) {
                    document.getElementById(this.subject.toString() + "dark" + color).parentElement.style.backgroundColor = color;
                }
            }
        },
        methods: {
            check(color) {
                if(this.theme === 'light'){
                    for (const color of this.lightColors) {
                        document.getElementById(this.subject.toString() + "light" + color).checked = false
                    }
                    document.getElementById(this.subject.toString() + "light" + color).checked = true;
                    document.documentElement.style.setProperty(this.subject, color);
                } else {
                    for (const color of this.darkColors) {
                        document.getElementById(this.subject.toString() + "dark" + color).checked = false
                    }
                    document.getElementById(this.subject.toString() + "dark" + color).checked = true;
                    document.documentElement.style.setProperty(this.subject, color);
                    // document.getElementsByClassName('dark-mode')[0].style.setProperty(this.subject, color);
                }
            },
            random(){
                if(this.theme === 'light'){
                    for (const color of this.lightColors) {
                        document.getElementById(this.subject.toString() + "light" + color).checked = false
                    }
                    let randomColor = this.lightColors[Math.floor(Math.random()*this.lightColors.length)];
                    document.documentElement.style.setProperty(this.subject, randomColor);
                    document.getElementById(this.subject.toString() + "light" + randomColor).checked = true;
                } else {
                    for (const color of this.darkColors) {
                        document.getElementById(this.subject.toString() + "dark" + color).checked = false
                    }
                    let randomColor = this.darkColors[Math.floor(Math.random()*this.darkColors.length)];
                    document.getElementById(this.subject.toString() + "dark" + randomColor).checked = true;
                    document.documentElement.style.setProperty(this.subject, randomColor);
                    // document.getElementsByClassName('dark-mode')[0].style.setProperty(this.subject, color);
                }
            }
        }

    }
</script>

<style scoped>
  .random {
    margin: 5px 0 0;
    box-shadow: none;
    border: none;
    background-color: var(--bg-color);
    color: var(--text-color);
  }
  .color-picker {
    position: absolute;
    left: -58px;
    top: 30px;
    z-index: 10000;
    padding: 8px 8px;
    background-color: var(--bg-color);
    box-shadow: var(--main-shadow);
    border-radius: 8px;
  }
  .colors {
    display: grid;
    grid-template-columns: auto auto auto auto auto auto;
  }
  .color {
    margin: 3px;
    width: 20px;
    height: 20px;
    border-radius: 4px;
    box-shadow: 0 0 3px 1px rgba(100,100,100,0.1);
  }
  .color-input {
    position: absolute;
    display: none;
  }
  .color-label {
    width: 20px;
    height: 20px;
    border-radius: 4px;
  }
  .color-input:checked ~ .color-label {
    border: 3px solid var(--contrast-color);
  }
  /*.color-input:checked .color {*/
  /*  border: 3px solid black;*/
  /*}*/
</style>

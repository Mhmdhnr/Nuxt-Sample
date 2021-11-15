<template>
    <div class="color-picker flex flex-column">
      <div class="colors">
        <div v-for="color in colors" class="color">
          <input class="color-input" :id="`${subject}${color}`" type="radio" v-model="selectedColor">
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
    export default {
        name: "ColorPicker",
        props:['colors', 'subject'],
        data() {
            return {
                selectedColor: ''
            }
        },
        mounted:function() {
            for(let color of this.colors) {
                document.getElementById(this.subject.toString() + color).parentElement.style.backgroundColor = color;
            }
        },
        methods: {
            check(color) {
                for (const color of this.colors) {
                    document.getElementById(this.subject.toString() + color).checked = false
                }
                document.getElementById(this.subject.toString() + color).checked = true;
                if(this.$colorMode.preference === 'light'){
                    document.documentElement.style.setProperty(this.subject, color);
                } else {
                    document.documentElement.style.setProperty(this.subject, color);
                    // document.getElementsByClassName('dark-mode')[0].style.setProperty(this.subject, color);
                }
            },
            random(){
                for (const color of this.colors) {
                    document.getElementById(this.subject.toString() + color).checked = false
                }
                let randomColor = this.colors[Math.floor(Math.random()*this.colors.length)];
                document.getElementById(this.subject.toString() + randomColor).checked = true;
                if(this.$colorMode.preference === 'light'){
                    document.documentElement.style.setProperty(this.subject, randomColor);
                } else {
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
    border: 3px solid var(--text-color);
  }
  /*.color-input:checked .color {*/
  /*  border: 3px solid black;*/
  /*}*/
</style>

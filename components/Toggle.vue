<template>
  <div class = 'toggle-switch'>
    <label>
      <input type = 'checkbox' v-model="checked">
      <span class = 'slider'></span>
    </label>
  </div>
</template>

<script>
    export default {
        name: "Toggle",
        data() {
            return {
                checked: false
            }
        },
        watch: {
            checked (newChecked) {
                if (newChecked){
                    this.$colorMode.preference = "dark"
                }
                else {
                    this.$colorMode.preference = "light"
                }
            }
        }
    }
</script>

<style scoped>
  :root {
    --light: #d8dbe0;
    --dark: #28292c;
  }
  .toggle-switch {
    position: relative;
    width: 200px;
    height: 100px;
    margin: 5px;
  }

  label {
    position: absolute;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: var(--dark);
    border-radius: 50px;
    cursor: pointer;
  }
  input {
    position: absolute;
    display: none;
  }
  .slider {
    position: absolute;
    right: 0;
    width: 100%;
    height: 100%;
    border-radius: 50px;
    transition: 0.3s;
  }
  input:checked ~ .slider {
    background-color: var(--light);
  }
  .slider::before {
    content: "";
    position: absolute;
    top: 13px;
    left: 16px;
    width: 75px;
    height: 75px;
    border-radius: 50%;
    background-color: var(--light);
    box-shadow: none;
    transition: 0.3s;
  }
  input:checked ~ .slider::before {
    transform: translateX(95px);
    background-color: var(--light);
    box-shadow: inset 28px -4px 0 0 var(--dark);
  }

</style>

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
  :root {
    --light: #d8dbe0;
    --dark: #28292c;
  }

  label {
    position: absolute;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: var(--dark);
    border-radius: 50px;
    cursor: pointer;
    margin: 0;
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
    top: 13%;
    left: 8%;
    width: 40%;
    height: 75%;
    border-radius: 50%;
    background-color: var(--light);
    box-shadow: none;
    transition: 0.3s;
  }
  input:checked ~ .slider::before {
    transform: translateX(120%);
    background-color: var(--light);
    box-shadow: inset -9px 0 0 0 var(--dark);
  }

</style>

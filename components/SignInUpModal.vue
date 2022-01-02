<template>
    <div class="sign-in-up-overlay">
      <div class="sign-in-up-modal">
        <div class="close-bar flex" >
          <span class="close-icon" @click="close()">×</span>
        </div>
        <SignInForm />
      </div>
    </div>
</template>

<script>
    import SignInForm from "./SignInForm";
    export default {
        name: "SignInUpModal",
        components: {SignInForm},
        mounted(){
            let _this = this;
            let modal = document.getElementsByClassName('sign-in-up-modal')[0];
            let overlay = document.getElementsByClassName('sign-in-up-overlay')[0];
            overlay.onclick = function(e){
                if (modal.contains(e.target)){
                    // Clicked in box
                } else{
                    _this.close();
                }
            };
        },
        methods: {
            close() {
                this.$store.commit('needSignIn', false);
            }
        }
    }
</script>

<style scoped>
  .sign-in-up-overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    background-color: #000000da;
    z-index: 1002;
  }
  .sign-in-up-modal {
    position: relative;
    text-align: center;
    background-color: var(--bg-color);
    height: 400px;
    width: 500px;
    margin-top: 10%;
    padding: 30px 0 0 ;
    border-radius: 8px;
    z-index: 1004;
  }
  .close-bar {
    width: 100%;
    border-radius: 8px 8px 0 0;
    background-color: var(--primary-color);
    position: absolute;
    right: 0;
    top: 0;
    z-index: 1004;
  }
  .close-icon {
    color: var(--bg-color);
    font-size: 1.5em;
    margin-right: 10px;
    cursor: pointer;
  }
  @media screen and (max-width: 864px) {
    .sign-in-up-modal {
      height: 300px;
      width: 80vw;
      margin-top: calc(50vh - 150px);
      padding: 30px 0 0 ;
    }
    .close-icon {
      font-size: 1em;
      margin-right: 10px;
    }
  }

</style>

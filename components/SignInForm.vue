<template>
  <div class="form-total flex flex-column">
    <form v-if="tokenSign" class="sign-form flex flex-column" @submit.prevent="handleSubmit()">
      <span>◄برای استفاده از این قسمت باید وارد شوید.</span>
      <div v-if="!tokenSend" class="form-row flex">
        <span>شماره تلفن خود را وارد کنید</span>
        <input type="tel" minlength="11" maxlength="11" v-model="phoneNumber" class="phone-number" required @input="normalize()" placeholder="09354162124" >
        <span class="hint"></span>
      </div>
      <div v-if="tokenSend" class="form-row flex">
        <span>کد 4 رقمی را وارد کنید</span>
        <input type="text" v-model="token" class="token" required @input="normalize()" placeholder="----" >
      </div>
      <button disabled class="cta-button" type="submit">
        <span v-if="!tokenSend & !this.loading" class="cta-text">دریافت کد</span>
        <span v-if="!tokenSend & this.loading" class="cta-text">شکیبا باشید</span>
        <span v-if="tokenSend & !this.loading" class="cta-text">ورود</span>
        <span v-if="tokenSend & this.loading" class="cta-text">شکیبا باشید</span>
      </button>
      <div v-if="this.loading" class="loading"></div>
    </form>
    <div v-on:click="this.switch" class="switch flex flex-column">
      <span v-if="tokenSign"> ورود/عضویت با ایمیل و گذرواژه </span>
      <span v-if="!tokenSign"> ورود/عضویت با شماره تلفن </span>
    </div>
  </div>
</template>

<script>
    import apiServices from "../api/apiServices";
    import Loading from "./Loading";
    export default {
        name: "SignInForm",
        components: {Loading},
        data() {
            return {
                phoneNumber: "",
                tokenSign: true,
                tokenSend: false,
                token: "",
                loading: false,
            }
        },
        mounted() {
            let submit = document.getElementsByClassName("cta-button")[0];
            this.phoneNumber = "09354162124";
            submit.disabled = false;
            submit.enabled = true;
        },
        methods: {
            handleSubmit() {
                if(!this.tokenSend) {
                    this.loading = true;
                    apiServices.methods.sendVerificationToken(this.phoneNumber).then(response => {
                        this.tokenSend = true;
                        this.loading = false;
                        console.log(response);
                    })
                }
                if(this.tokenSend) {
                    this.loading = true;
                    apiServices.methods.signInUp(this.phoneNumber, this.token).then(response => {
                        this.loading = false;
                        console.log(response)
                        if (response.message === "Successfully signed in") {
                            this.$store.commit('needSignIn', false)
                        }
                    })
                }
            },
            normalize() {
                this.phoneNumber = this.phoneNumber.replace(/[^0123456789 ]/g,'');
                let submit = document.getElementsByClassName("cta-button")[0];
                if (this.phoneNumber.charAt(0) !== "0" && this.phoneNumber.length > 0){
                    this.phoneNumber = "0" + this.phoneNumber;
                }
                // if (this.phoneNumber.length === 4) {
                //     this.phoneNumber = this.phoneNumber + " ";
                // }
                if(this.phoneNumber.length === 11) {
                    submit.disabled = false;
                    submit.enabled = true;
                } else {
                    submit.enabled = false;
                    submit.disabled = true;
                }
                console.log(this.phoneNumber)
            },
            switch() {
                this.tokenSign = !this.tokenSign
            }
        }
    }
</script>

<style scoped>
  .switch {
    padding-top: 3vh;
    justify-content: space-between;
    cursor: pointer;
  }
  .form-total {
    width: 100%;
    height: 400px;
    justify-content: space-evenly;
  }
  .sign-form {
    width: 100%;
  }
  .form-row {
    width: 80%;
    padding: 2vh 2vw;
    justify-content: space-between;
  }
  input {
    border-radius: 8px;
    border: 2px solid var(--primary-color);
    width: 300px;
    padding: 5px 10px;
    direction: ltr;
    text-align: center;
  }
  input:focus , textarea:focus {
    /*border: 2px solid var(--primary-color);*/
    outline: none;
  }
  input::-webkit-input-placeholder {
    color: var(--primary-color);
    opacity: 0.2;
  }
  .cta-button {
    position: relative;
    border-radius: 4px;
    border: 2px solid var(--primary-color);
    background-color: var(--bg-color);
    box-shadow: 0 4px 8px 0 rgba(40, 40, 40, 0.3);
    /*box-shadow: 0 1rem 2.5rem rgba(40, 40, 40, 0.1), 0 0.5rem 1rem -0.75rem rgba(40, 40, 40, 0.1);*/
    width: 150px;
    height: 45px;
    overflow: hidden;
    transition: all 100ms;
  }
  .cta-button:disabled {
    background-color: var(--contrast-color);
  }
  .loading {
    margin-top: 3px;
    height: 3px;
    border-radius: 3px;
    background-color: var(--primary-color);
    animation: 1000ms load infinite ease-in-out;
    transform-origin: center;
  }
  @keyframes load {
    0% {
      width: 150px;
    }
    50% {
      width: 20px;
    }
    100% {
      width: 150px;
    }
  }
  .cta-button::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    -webkit-transform: translateX(110px) rotate(45deg);
    -webkit-transition: all 300ms ease-in-out ;
    width: 150px;
    height: 45px;
    background-color: var(--primary-color);
  }
  .cta-button::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    -webkit-transform: translateX(-110px) rotate(45deg);
    -webkit-transition: all 300ms ease-in-out ;
    width: 150px;
    height: 45px;
    background-color: var(--primary-color);
  }
  .cta-button:hover:enabled:after, .cta-button:hover:enabled:before {
    -webkit-transform: translateX(0) rotate(0);
   }
  .cta-text {
    color: var(--primary-color);
    position: relative;
    z-index: 2000;
  }
  .cta-button:hover:enabled > .cta-text {
    transition: all 400ms;
    color: var(--bg-color);
    z-index: 2000;
  }
  .cta-button:hover:enabled {
    transform: translateY(1px);
    transition: all 200ms;
    box-shadow: 0 1px 2px 0 rgba(40, 40, 40, 0.3);
  }
</style>

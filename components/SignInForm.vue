<template>
  <div class="form-total flex flex-column">
    <form v-if="tokenSign" class="sign-form flex flex-column" @submit.prevent="handleSubmit()">
<!--      <span>◄برای استفاده از این قسمت باید وارد شوید.</span>-->
      <div v-if="!tokenSend" class="form-row flex flex-column">
        <span v-if="this.fa">شماره تلفن</span>
        <span v-if="!this.fa">Phone Number</span>
        <input type="tel" minlength="11" maxlength="11" v-model="phoneNumber" class="phone-number" required @input="normalizePhoneNumber()" placeholder="09354162124" >
        <span class="hint"></span>
      </div>
      <div v-if="tokenSend" class="form-row flex flex-column">
        <span v-if="this.fa">کد 4 رقمی را وارد کنید</span>
        <span v-if="!this.fa">Enter verification token</span>
        <input type="text" v-model="token" maxlength="4" class="token" required @input="normalizeToken()" placeholder="----" >
      </div>
      <div class="sign-alert-container">
        <span class="sign-alert">{{this.alertMessage}}</span>
      </div>
      <button disabled class="cta-button" type="submit">
        <span v-if="!tokenSend & !this.loading & this.fa" class="cta-text">دریافت کد</span>
        <span v-if="!tokenSend & !this.loading & !this.fa" class="cta-text">Request Token</span>
        <span v-if="tokenSend & !this.loading & this.fa" class="cta-text">ورود</span>
        <span v-if="tokenSend & !this.loading & !this.fa" class="cta-text">Sign In</span>
        <span v-if="this.loading & this.fa" class="cta-text">منتظر بمانید</span>
        <span v-if="this.loading & !this.fa" class="cta-text">Loading</span>
      </button>
      <div v-if="this.loading" class="loading"></div>
      <div class="timer flex">
        <button v-show="this.tokenSend" class="resend text-button" @click="resendCode()">
          <span v-if="this.fa">ارسال دوباره کد</span>
          <span v-if="!this.fa">Resend Code</span>
        </button>
        <span id="time"></span>
      </div>
    </form>
    <div v-on:click="this.switch" class="switch flex flex-column">
      <span v-if="tokenSign & this.fa"> ورود/عضویت با ایمیل و گذرواژه </span>
      <span v-if="tokenSign & !this.fa"> Login / Register with email </span>
      <span v-if="!tokenSign & this.fa"> ورود/عضویت با شماره تلفن </span>
      <span v-if="!tokenSign & !this.fa"> Login / Register with phone number </span>
    </div>
  </div>
</template>

<script>
    import {mapState} from 'vuex';
    import apiServices from "../api/apiServices";
    import Loading from "./Loading";
    export default {
        name: "SignInForm",
        components: {Loading},
        computed: mapState(['fa']),
        data() {
            return {
                phoneNumber: "",
                tokenSign: true,
                tokenSend: false,
                token: "",
                loading: false,
                alertMessage: "",
                tokenExpiration: 0.1,
            }
        },
        mounted() {
            let submit = document.getElementsByClassName("cta-button")[0];
            let resend = document.getElementsByClassName("resend")[0];
            // this.phoneNumber = "09354162124";
            submit.disabled = false;
            submit.enabled = true;
            resend.enabled = false;
            resend.disabled = true;
            this.tokenSign = true;
            this.tokenSend = false;
        },
        methods: {
            handleSubmit() {
                let submit = document.getElementsByClassName("cta-button")[0];
                let resend = document.getElementsByClassName("resend")[0];
                if(!this.tokenSend) {
                    this.loading = true;
                    apiServices.methods.sendVerificationToken(this.phoneNumber).then(response => {
                        this.tokenSend = true;
                        this.loading = false;
                        resend.enabled = false;
                        resend.disabled = true;
                        submit.enabled = false;
                        submit.disabled = true;
                        let display = document.querySelector('#time');
                        // let time = this.tokenExpiration * 60;
                        let time = 5;
                        this.countdownTimer(time, display);
                        console.log(response[0].message);
                        alert(response[0].message)
                    })
                }
                if(this.tokenSend) {
                    this.loading = true;
                    apiServices.methods.signInUp(this.phoneNumber, this.token).then(response => {
                        this.loading = false;
                        if(response === "wrong token" || response === "Wrong token and expired") {
                            this.alertMessage = "کد وارد شده اشتباه است و یا کد منقضی شده است";
                            document.getElementsByClassName('sign-alert')[0].classList.add('alert-animation');
                            setTimeout(function () {
                              document.getElementsByClassName('sign-alert')[0].classList.remove('alert-animation');
                            }, 6000)
                        }
                        if (response.message === "Successfully signed in" || response.message === 'Successfully signed up') {
                            this.$store.commit('needSignIn', false);
                            this.$store.commit('signedIn', true);
                            apiServices.methods.userInfo().then(response => {
                                const user = {};
                                user.firstName = response.first_name;
                                user.lastName = response.last_name;
                                user.phoneNumber = response.phone_number;
                                user.userName = response.user_name;
                                this.$store.commit('user', user);
                                // this.$router.go(0);
                            });
                            // apiServices.methods.toPromise(localStorage.getItem('lastCallUrl'), localStorage.getItem('lastCallHttpMethod')).then(response => {
                            //     console.log('re call');
                            //     console.log(response);
                            // })
                        }
                    });
                }
            },
            resendCode() {
                let resend = document.getElementsByClassName("resend")[0];
                console.log("resend");
                this.loading = true;
                apiServices.methods.sendVerificationToken(this.phoneNumber).then(response => {
                    this.tokenSend = true;
                    this.loading = false;
                    let display = document.querySelector('#time');
                    resend.enabled = false;
                    resend.disabled = true;
                    let time = this.tokenExpiration * 60;
                    this.countdownTimer(time, display);
                    console.log(response[0].message);
                    alert(response[0].message)
                })
            },
            countdownTimer(duration, display) {
                let timer = duration, minutes, seconds;
                let interval = setInterval(() => {
                    minutes = parseInt(timer / 60, 10);
                    seconds = parseInt(timer % 60, 10);

                    minutes = minutes < 10 ? "0" + minutes : minutes;
                    seconds = seconds < 10 ? "0" + seconds : seconds;
                    console.log(timer)
                    display.innerText = minutes + ":" + seconds;
                    if (timer > 0) {
                        timer --
                    } else {
                        clearInterval(interval);
                        let resend = document.getElementsByClassName("resend")[0];
                        if(this.tokenSend) {
                            resend.disabled = false;
                            resend.enabled = true;
                            // apiServices.methods.sendVerificationToken(this.phoneNumber).then(response => {
                            //     console.log(response[0].message);
                            // })
                        }
                    }
                }, 1000);
            },
            normalizePhoneNumber() {
                this.phoneNumber = this.phoneNumber.replace(/[^0123456789 ]/g,'');
                let submit = document.getElementsByClassName("cta-button")[0];
                if (this.phoneNumber.charAt(0) !== "0" && this.phoneNumber.length > 0){
                    this.phoneNumber = "0" + this.phoneNumber;
                }
                if(this.phoneNumber.length === 11) {
                    submit.disabled = false;
                    submit.enabled = true;
                } else {
                    submit.enabled = false;
                    submit.disabled = true;
                }
                console.log(this.phoneNumber)
            },
            normalizeToken() {
                this.token = this.token.replace(/[^0123456789 ]/g,'');
                let submit = document.getElementsByClassName("cta-button")[0];
                if(this.token.length === 4) {
                    submit.disabled = false;
                    submit.enabled = true;
                    this.handleSubmit();
                } else {
                    submit.enabled = false;
                    submit.disabled = true;
                }
            },
            switch() {
                this.tokenSign = !this.tokenSign
            }
        }
    }
</script>

<style scoped>
  .form-total {
    width: 100%;
    height: 100%;
    justify-content: space-evenly;
    position: relative;
  }
  .switch {
    position: absolute;
    bottom: 10px;
    padding-top: 3vh;
    justify-content: space-between;
    cursor: pointer;
    font-size: 0.7em;
  }
  .sign-form {
    width: 100%;
  }
  .form-row {
    width: 80%;
    padding: 2vh 2vw 0;
    justify-content: space-between;
  }
  .sign-alert-container {
    overflow: hidden;
    height: 30px;
    width: 80%;
    position: relative;
  }
  .timer {
    overflow: hidden;
    height: 30px;
    width: 30%;
    position: relative;
    justify-content: space-between;
  }
  #time {
    font-size: 0.8em;
  }
  .sign-alert {
    position: absolute;
    width: 100%;
    bottom: -30px;
    left: 0;
    font-size: 0.7em;
    color: red;
    margin-bottom: 10px;
    transition: all 500ms ;
  }
  .alert-animation {
    transform: translateY(-30px);
    transition: all 500ms;
  }
  @keyframes sign-alert {
  }
  input {
    border-radius: 8px;
    border: 2px solid var(--primary-color);
    width: 300px;
    padding: 5px 10px;
    margin: 10px auto 5px;
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
  @media screen and (max-width: 864px) {
    .form-total {
      width: 100%;
      height: 100%;
    }
    .switch {
      bottom: 5px;
      padding-top: 3vh;
      font-size: 0.7em;
    }
    .form-row {
      width: 70%;
      padding: 2vh 2vw;
    }
    input {
      width: 200px;
      padding: 5px 10px;
      margin: 10px auto;
    }
    .cta-button {
      width: 150px;
      height: 45px;
      overflow: hidden;
    }
    .cta-button::after {
      width: 150px;
      height: 45px;
    }
    .cta-button::before {
      width: 150px;
      height: 45px;
    }
  }
</style>

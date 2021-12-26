<template>
  <div class="sign-in-up flex flex-column">
    <SignInForm />
  </div>
</template>

<script>
    import SignInForm from "../components/SignInForm";
    export default {
        name: "SignInUp",
        components: {SignInForm}
    }
</script>

<style scoped>
  .sign-in-up {
    padding: 4vh 0;
    width: 1080px;
    justify-content: center;
  }
</style>

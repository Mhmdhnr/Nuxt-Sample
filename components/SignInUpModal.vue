<template>
    <div class="sign-in-up-overlay">
      <div class="sign-in-up-modal">
        <SignInForm />
      </div>
    </div>
</template>

<script>
    import SignInForm from "./SignInForm";
    export default {
        name: "SignInUpModal",
        components: {SignInForm}
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
    text-align: center;
    background-color: var(--bg-color);
    height: 500px;
    width: 800px;
    margin-top: 10%;
    padding: 60px 0;
    border-radius: 8px;
  }
</style>

<template>
  <div class="spinner">
    <img
      src="../../assets/images/spinner.svg"
      alt="loading"
    >
  </div>
</template>

<script>
import AuthService from '@services/auth.service'

export default {
  // dependencies: ['authService'],
  name: 'CallbackLanding',
  created() {
    const authService = new AuthService()
    authService.handleAuthentication()
  },
}
</script>

<style>
.spinner {
  position: absolute;
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: #361436;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>

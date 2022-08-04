<script setup lang="ts">
import LoginForm from './componets/login-form.vue'
</script>

<template>
  <div class="login">
    <LoginForm />
  </div>
</template>

<style lang="scss" scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: url('../../assets/img/login-bg.svg');
}
</style>

<script setup lang="ts"></script>

<template>
  <div id="app">
    <h2>{{ $store.state.name }}</h2>
    <router-link to="/login">登录</router-link>
    <router-link to="/main">主页</router-link>
    <router-view></router-view>
    <el-button>test</el-button>
  </div>
</template>

<style lang="scss" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

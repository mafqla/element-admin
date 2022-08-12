<!-- eslint-disable @typescript-eslint/ban-ts-comment -->
<script setup lang="ts">
import { computed, ref } from 'vue'
// @ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
// @ts-ignore
import en from 'element-plus/dist/locale/en.mjs'

const language = ref('zh-cn')
const locale = computed(() => (language.value === 'zh-cn' ? zhCn : en))
</script>

<template>
  <div class="main">
    <el-config-provider :locale="locale">
      <router-view></router-view>
    </el-config-provider>
  </div>
</template>

<style lang="scss" scoped>
.main {
  height: 100%;
}
</style>

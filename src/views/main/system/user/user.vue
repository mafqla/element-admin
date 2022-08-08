<template>
  <div class="user">
    <div class="search">
      <base-form v-bind="searchFormConfig" />
    </div>
    <div class="content">内容</div>
  </div>
</template>

<script setup lang="ts">
import {} from 'vue'
import BaseForm from '@/base-ui/form'
import { searchFormConfig } from './config/search.config'
</script>
<style lang="scss" scoped></style>

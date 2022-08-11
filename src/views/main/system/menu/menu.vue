<template>
  <div class="menu">
    <page-content
      :contentTableConfig="contentTableConfig"
      pageName="menu"
    ></page-content>
  </div>
</template>

<script setup lang="ts">
import {} from 'vue'
import PageContent from '@/components/page-content'

import { contentTableConfig } from './config/content.config'
</script>
<style lang="scss" scoped></style>

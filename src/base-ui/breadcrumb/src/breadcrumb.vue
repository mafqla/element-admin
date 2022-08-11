<template>
  <div class="nav-breadcrumb">
    <el-breadcrumb separator="/">
      <template v-for="item in breadcrumbs" :key="item.name">
        <el-breadcrumb-item :to="{ path: item.path as string }">
          {{ item.name }}
        </el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { IBreadcrumb } from '../types'

const props = defineProps({
  breadcrumbs: {
    type: Array as PropType<IBreadcrumb[]>,
    default: () => []
  }
})
</script>
<style lang="scss" scoped></style>

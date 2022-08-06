<template>
  <div class="nav-header">
    <el-icon
      class="fold-menu"
      :class="isFold"
      @click="handleFoldClick"
      v-if="isFold"
    >
      <Expand />
    </el-icon>
    <el-icon class="fold-menu" :class="!isFold" @click="handleFoldClick" v-else>
      <Fold />
    </el-icon>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Expand, Fold } from '@element-plus/icons-vue'

const isFold = ref(false)
const emit = defineEmits(['foldChange'])

const handleFoldClick = () => {
  isFold.value = !isFold.value
  emit('foldChange', isFold.value)
}
</script>
<style lang="scss" scoped>
.nav-header {
  .fold-menu {
    font-size: 30px;
    cursor: pointer;
  }
}
</style>

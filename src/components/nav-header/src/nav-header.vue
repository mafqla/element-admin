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

    <div class="content">
      <hy-breadcrumb :breadcrumbs="breadcrumbs" />
      <user-info />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { Expand, Fold } from '@element-plus/icons-vue'
import HyBreadcrumb, { type IBreadcrumb } from '@/base-ui/breadcrumb'
import { pathMapBreadcrumbs } from '@/utils/map-menus'
import { useStore } from '@/store'
import { useRoute } from 'vue-router'

const isFold = ref(false)
const emit = defineEmits(['foldChange'])

const handleFoldClick = () => {
  isFold.value = !isFold.value
  emit('foldChange', isFold.value)
}

const store = useStore()
const breadcrumbs = computed(() => {
  const userMenus = store.state.login.userMenus
  const route = useRoute()
  const currentPath = route.path
  return pathMapBreadcrumbs(userMenus, currentPath)
})
</script>
<style lang="scss" scoped>
.nav-header {
  display: flex;
  width: 100%;
  line-height: 60px;
  text-align: center;
  align-items: center;

  .fold-menu {
    font-size: 30px;
    cursor: pointer;
  }

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding: 0 20px;
  }
}
</style>

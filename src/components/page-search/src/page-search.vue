<template>
  <div class="page-search">
    <base-form v-bind="searchFormConfig" v-model="formData">
      <template #header>
        <h1>高级检索</h1>
      </template>
      <template #footer>
        <div class="handle-btns">
          <el-button :icon="Refresh" @click="handleResetClick">重置</el-button>
          <el-button type="primary" :icon="Search" @click="handleQueryClick">
            搜索
          </el-button>
        </div>
      </template>
    </base-form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import BaseForm from '@/base-ui/form'
import { Search, Refresh } from '@element-plus/icons-vue'

const props = defineProps({
  searchFormConfig: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['resetBtnClick', 'queryBtnClick'])

// 双向绑定的属性应该是由配置文件的field来决定
// 1. formData中的属性应该动态来决定
const formItems = props.searchFormConfig?.formItems ?? []
const formOriginData: any = {}
for (const item of formItems) {
  formOriginData[item.field] = ''
}
const formData = ref(formOriginData)

// 2. 当用户点击重置
const handleResetClick = () => {
  formData.value = formOriginData
  emit('resetBtnClick')
}

// 3.当用户点击搜索
const handleQueryClick = () => {
  emit('queryBtnClick', formData.value)
}
</script>
<style lang="scss" scoped>
.handle-btns {
  text-align: right;
  padding: 0 50px 20px 0;
}
</style>

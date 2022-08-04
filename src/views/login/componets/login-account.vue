<template>
  <div class="account">
    <el-form :rules="rules" :model="account" ref="formRef">
      <el-form-item label="账号" prop="username">
        <el-input v-model="account.username" placeholder="请输入账号" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          v-model="account.password"
          type="password"
          placeholder="请输入密码"
          show-password
        />
      </el-form-item>
    </el-form>
  </div>
</template>
<script setup lang="ts">
import { reactive, ref } from 'vue'
import { rules } from '../config/account-config'
import { ElForm } from 'element-plus'
import localCache from '@/utils/cache'
import { useStore } from 'vuex'

const store = useStore()
const account = reactive({
  username: localCache.getCache('username') ?? '',
  password: localCache.getCache('password') ?? ''
})

const formRef = ref<InstanceType<typeof ElForm>>()

const loginAction = (isKeepPassword: boolean) => {
  formRef.value?.validate((valid) => {
    if (valid) {
      //判断是否需要记住密码
      if (isKeepPassword) {
        localCache.setCache('username', account.username)
        localCache.setCache('password', account.password)
      } else {
        localCache.deleteCache('username')
        localCache.deleteCache('password')
      }

      store.dispatch('login/accountLoginAction', { ...account })
    }
  })
}
defineExpose({ loginAction })
</script>
<style lang="scss" scoped></style>

<template>
  <div class="phone">
    <el-form>
      <el-form-item label="手机号" prop="num">
        <el-input v-model="phone.num" placeholder="请输入手机号码"> </el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <div class="get-code">
          <el-input v-model="phone.code" placeholder="请输入验证码"> </el-input>
          <el-button type="primary" class="get-btn">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const phone = reactive({
  num: '',
  code: ''
})
</script>
<style lang="scss" scoped>
.get-code {
  display: flex;
  .get-btn {
    margin-left: 10px;
  }
}
</style>

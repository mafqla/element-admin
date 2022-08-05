export const rules = {
  name: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    {
      pattern: /^[a-z0-9]{5,12}$/,
      message: '长度在 5 到 12 个字符',
      trigger: 'blur'
    }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    {
      pattern: /^[a-z0-9]{6,12}$/,
      message: '长度在 6 到 12 个字符',
      trigger: 'blur'
    }
  ]
}

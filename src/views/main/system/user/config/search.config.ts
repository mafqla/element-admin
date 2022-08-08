import type { IForm } from '@/base-ui/form'

export const searchFormConfig: IForm = {
  labelWidth: '120px',
  itemStyle: {
    padding: '10px 40px'
  },
  colLayout: {
    span: 8
  },
  formItems: [
    {
      type: 'input',
      label: 'id',
      placeholder: '请输入id'
    },
    {
      type: 'password',
      label: '密码',
      placeholder: '请输入密码'
    },
    {
      type: 'select',
      label: '你喜欢的运动',
      placeholder: '请选择你喜欢的运动',
      options: [
        {
          value: '足球',
          title: '足球'
        },
        {
          value: '篮球',
          title: '篮球'
        },
        {
          value: '羽毛球',
          title: '羽毛球'
        }
      ]
    },
    {
      type: 'datepicker',
      label: '创建时间',
      placeholder: '请选择创建时间范围',
      otherOptions: {
        type: 'daterange',
        'value-format': 'yyyy-MM-dd',
        'start-placeholder': '开始时间',
        'end-placeholder': '结束时间'
      }
    }
  ]
}

/**
 * 前端验证公共方法封装
 * 需要用mixins混合到全局
 * @see https://github.com/yiminghe/async-validator
 */
export default {
  methods: {
    /**
     * 验证表单填写结果，简单封装，统一报错处理
     * @param {string} formName 表单的ref名称
     * @param {string} callback 验证成功后执行的回调方法名称
     * @param {*} params 验证成功后执行的回调方法传参
     */
    checkFormInput (formName, callback, params) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this[callback](params)
        } else {
          this.$message.error('输入不正确')
        }
      })
    },
    /**
     * 分数范围验证
     * @param {reg} rule 正则
     * @param {*} value 值
     * @param {function} callback 回调方法
     */
    validateRange (rule, value, callback) {
      const reg = /((^(([1-9]\d*)|([-]\d+)))(((\.\d{1,2})|(\d*))$))|^(0|(0\.\d{1,2}))$/
      const [min, max] = value
      if ((min && !reg.test(min)) || (max && !reg.test(max))) {
        callback(new Error('请填写正确的数字范围'))
      } else if ((min && !max) || (max && !min)) {
        callback(new Error('请同时填写时长的最大和最小值'))
      } else if (Number(min) > Number(max)) {
        callback(new Error('开始时间必须小于结束时间'))
      } else {
        callback()
      }
    },
    /**
     * 验证表单的单个字段输入
     * @param {string} formName 表单的ref名称
     * @param {string} val 验证的单个字段的名称
     */
    validateForm (formName, val) {
      this.$refs[formName].validateField(val)
    },
    /**
     * 验证表单填写结果，简单封装，统一报错处理
     * @param {string} formName 表单的ref名称
     * @param {function} callback 验证成功后执行的回调方法
     */
    checkFormSubmit (formName, callback) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          callback && callback()
        } else {
          this.$message.error('输入不正确')
        }
      })
    },
  },
}

export default {
  methods: {
    /**
     * 关闭弹窗
     * @param {Boolean} result 关闭类型
     * @param {String} formName 表单标记，默认ruleForm
     */
    closeFormDialog (result, formName = 'ruleForm') {
      if (result) {
        this.checkFormSubmit(formName, () => {
          this.$emit('close', this[formName])
        })
      } else {
        this.$emit('input', false)
      }
    },
    /**
     * 关闭弹窗
     * @param {Boolean} result 关闭类型
     * @param {String} formName 表单标记，默认ruleForm
     */
    closeFormDialogAfterApi (result, formName = 'ruleForm') {
      if (result) {
        this.checkFormSubmit(formName, () => {
          this.doDialogApi()
        })
      } else {
        this.$emit('input', false)
      }
    },
    /**
     * 设置表单数据
     * @param {Object} row 数据
     * @param {String} formName 表单标记，默认ruleForm
     */
    setFormData (row, formName = 'ruleForm') {
      this[formName] = JSON.parse(JSON.stringify(row))
    },
  }
}

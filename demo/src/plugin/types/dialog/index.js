import Vue from 'vue'
import { MessageBox } from 'element-ui'

Vue.prototype.$optPrompt = (title, label, max = 20) => {
  const inputValidator = (value) => {
    if (value) {
      return value.length > max ? label + `长度不能超过${max}字符` : true
    } else {
      return '请填写' + label
    }
  }
  return new Promise(resolve => {
    MessageBox.prompt(label, title, {
      inputValidator
    }).then(({ value }) => {
      resolve(value)
    }).catch(() => {
      resolve()
    })
  })
}

/**
 * 二次确认操作
 * @param {String} title 弹窗标题
 * @param {String} message 弹窗内容
 * @returns 确认/取消，布尔值
 */
Vue.prototype.$optConfirm = (title, message) => {
  return new Promise(resolve => {
    MessageBox.confirm(message, title, {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    }).then(() => {
      resolve(true)
    }).catch(() => {
      resolve(false)
    })
  })
}

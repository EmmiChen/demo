// 正则，特殊字段类型
const regType = {
  // 非负整数，简称数字
  number: {
    message: '数字',
    pattern: /^\d+$/,
  },
  // qq验证，腾讯QQ号从10000开始
  qq: {
    message: 'QQ',
    pattern: /^[1-9][0-9]{4,}$/,
  },
  // 邮箱验证
  email: {
    message: '邮箱',
    pattern: /\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/,
  },
  // 网址验证
  url: {
    message: '网址',
    pattern: /(https|http)?:\/\/[^\s]*/,
  },
  noSpecialChar: {
    message: '非特殊字符',
    pattern: /^[A-Za-z0-9_\u4e00-\u9fa5]+$/
  },
  formCode: {
    message: '数字或字母',
    pattern: /^[A-Za-z0-9]+$/
  },
  noChinese: {
    message: '非中文字符',
    pattern: /^[^\u4E00-\u9FA5]+$/
  },
  oneToTwenty: {
    message: '20以内正整数',
    pattern: /^(?:1\d|[1-9]|20)$/
  },
  oneToSix: {
    message: '600以内正整数',
    pattern: /^(?:[1-9]|[1-9]\d|[1-5]\d\d|600)$/
  },
  day: {
    message: '1440以内正整数',
    pattern: /^([1-9]|\d{2,3}|1[0-3]\d{2}|14[0-3]\d|(1440))$/
  },
  wholeDay: {
    message: '24以内的数字(可保留一位小数)',
    pattern: /^((\d)(.\d)?|(1\d)(.\d)?|(2[0-3])(.\d)?|24)$/
  },
  phone: {
    message: '11位手机号',
    pattern: /^1\d{10}$/
  },
  identityNO: {
    message: '身份证验证',
    pattern: /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/
  },
  noSpace: {
    message: '无空格',
    pattern: /^\S*$/
  },
  name: {
    message: '姓名',
    pattern: /^[A-Za-z·\u4e00-\u9fa5]+$/
  },
  idtNo: {
    message: '数字或大写字母',
    pattern: /^[A-Z0-9]+$/
  },
}

export default {
  /**
   * 验证长度
   * @param {number} len 长度，默认32
   */
  length (len = 32) {
    return {
      max: len,
      message: `不能超过${len}字符长度`,
    }
  },
  /**
   * 验证特殊类型
   * @param {string} type 类型
   * @param {string} message 错误提示
   */
  type (type, message) {
    return {
      pattern: regType[type].pattern,
      message: message || `请输入正确的${regType[type].message}`
    }
  },
  /**
   * 验证必填字段
   * @param {string} name 字段名称
   */
  required (name, trigger = 'blur') {
    return {
      required: true,
      message: `${name}不能为空`,
      trigger
    }
  },
  /**
   * 验证checkbox,select必填字段
   * @param {string} name 字段名称
   */
  select (name) {
    return {
      required: true,
      message: `请选择${name}`,
      trigger: 'change'
    }
  },
  /**
   * 编辑状态蒙层是否可点击被关闭
   */
  dialogModel () {
    return true
  },
}

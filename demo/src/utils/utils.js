import axios from 'axios'
import Vue from 'vue'
import { Message } from 'element-ui'
import dics from '@/dics'

const utils = {
  /**
   * 获取字典项，二级和三级，用于展示级联数据
   * @param {function} callback 回调方法
   * @param {boolean} reload 重新加载缓存
   */
  async getDictionariesDetailByCode (callback, reload = false) {
    const dicObj = {}
    Object.keys(dics).map(i => {
      dicObj[i] = {}
      dics[i].forEach(j => {
        dicObj[i][j.value] = j.label
      })
    })
    const res = JSON.parse(sessionStorage.getItem('OBS_DATABASE'))
    if (res && !reload) {
      Vue.prototype.$storage = {
        ...res,
        ...dics,
        dicObj,
      }
      callback && callback()
      return
    }
    let enumObj = {
      dict: {},
      QUALITY_DATABASE: {}
    }
    const {
      data: {
        OBS_ENUM,
        QUALITY_DATABASE,
      }
    } = await axios.post(sysConfig.gateway + '/ccweb/system/getDictionariesDetailByCode', {
      codes: ['OBS_ENUM', 'QUALITY_DATABASE']
    }).catch(() => ({
      data: {
        OBS_ENUM: [],
        QUALITY_DATABASE: []
      }
    }))
    OBS_ENUM.forEach(i => {
      enumObj[i.key] = i.childs.map(j => ({
        value: j.key,
        label: j.value
      }))
      enumObj.dict[i.key] = {}

      i.childs.forEach(j => {
        enumObj.dict[i.key][j.key] = j.value
      })
    })

    // 质检枚举
    QUALITY_DATABASE.forEach(i => {
      enumObj['QUALITY_DATABASE'][i.key] = i.childs.map(j => ({
        value: j.key,
        label: j.value
      }))
    })

    axios.post(sysConfig.gateway + '/obs-bussiness/sysconfig/selectSysConfigList').then(database => {
      let transition = {}
      database.data.forEach(i => {
        transition[i.sysCode] = i.sysValue
        if (i.preCode) {
          if (!enumObj[i.preCode]) {
            enumObj[i.preCode] = []
          }
          enumObj[i.preCode].push({
            value: i.sysCode,
            label: i.sysValue
          })
        }
      })
      // 项目类别和业务类型的级联组合
      const typeList = enumObj.BUSINESS.map(i => ({
        ...i,
        children: enumObj[i.value],
        disabled: !(enumObj[i.value] && enumObj[i.value].length)
      }))

      enumObj.typeList = typeList
      enumObj.transition = transition

      sessionStorage.setItem('OBS_DATABASE', JSON.stringify(enumObj))
      Vue.prototype.$storage = {
        ...dics,
        ...enumObj,
        dicObj
      }
      callback && callback()
    }).catch(error => {
      Vue.prototype.$storage = {
        ...dics,
        dicObj
      }
      callback && callback()
      if (error.response && error.response.status === 401) {
      // 告知主工程，登陆超时，触发主工程弹窗提示
        window.parent.postMessage(
          JSON.stringify({
            method: 'login',
            timeout: new Date().getTime()
          }),
          '*'
        )
      }
    })
  },
  /**
   * 打开主工程新页签
   * @param {string} path 路由地址带参数
   * @param {object} title 页签名
   * @param {boolean} closable 是否可关闭页签，默认true，不允许关闭false
   */
  openNewTab (path, title, closable = true) {
    window.parent.postMessage(
      JSON.stringify({
        method: 'openNewTab',
        data: {
          url: `/211113/#${path}`, // 链接地址
          isIframe: true, // 是否iframe形式打开
          menuName: title, // 页签名称
          online: false, // 是否外网地址，无需拼接gateway
          closable,
        }
      }),
      '*'
    )
  },
  /**
   * 告知主工程关闭当前页签
   * @param {string} route 页面地址
   */
  closeTabByFullPath () {
    let sedMsg = {
      method: 'closeTabByfullPath',
      fullPath: window.location.hash
    }
    window.parent.postMessage(JSON.stringify(sedMsg), '*')
  },
  /**
   * 刷新主工程对应页面
   * @param {string} path 页面path
   */
  refreshFullPath (path) {
    let sedMsg = {
      method: 'refreshFullPath',
      fullPath: `/211113/#${path}`
    }
    window.parent.postMessage(JSON.stringify(sedMsg), '*')
  },
  /**
   * 关闭页签，关闭前弹出提示语
   * 考虑成功时候再关闭页签，出错时抛提示并停在当前页面
   * @param {string} tipMsg 提示语
   */
  closeTabWithMsg (tipMsg = '保存成功') {
    Message({
      message: tipMsg,
      type: 'success',
      duration: 500,
      onClose: () => {
        this.closeTabByFullPath()
      }
    })
  },
  /**
   * 导出公共方法
   * @param {obj} params 参数
   * @param {string} url 导出地址
   * @param {string} method 请求方法
   */
  postExcelFile (params, url, method = 'post') {
    var form = document.createElement('form')
    form.style.display = 'none'
    form.action = url
    form.method = method
    form.target = '_blank'
    params.accessToken = localStorage.getItem('accessToken')
    // 服务器别名
    if (sysConfig['prefer-service-zone']) {
      params['prefer-service-zone'] = sysConfig['prefer-service-zone']
    }
    for (var key in params) {
      var input = document.createElement('input')
      input.type = 'hidden'
      input.name = key
      input.value = params[key]
      form.appendChild(input)
    }
    document.body.appendChild(form)
    form.submit()
    try {
      form.remove()
    } catch (error) {
      form.removeNode(true)
    }
  },
  /**
   * 根据文件id下载
   * @param {string} fileId 文件id
   */
  downloadByFileId (fileId) {
    this.postExcelFile(
      {
        fileId
      },
      `${sysConfig.gateway}/ccweb/system/downloadFile`
    )
  },

  /**
   * 公共导出方法
   * @param {obj} params 参数
   * @param {string} url 导出地址
   * @param {string} method 请求方法
   */
  exportFile (params, url, method = 'post') {
    var form = document.createElement('form')
    form.style.display = 'none'
    form.action = url
    form.method = method
    form.target = '_blank' // 新窗口导出
    // 服务器别名
    if (sysConfig['prefer-service-zone']) {
      params['prefer-service-zone'] = sysConfig['prefer-service-zone']
    }
    document.body.appendChild(form)
    params.accessToken = localStorage.getItem('accessToken')
    for (var key in params) {
      var input = document.createElement('input')
      input.type = 'hidden'
      input.name = key
      input.value = params[key]
      form.appendChild(input)
    }
    form.submit()
    // 兼容IE
    try {
      form.remove()
    } catch (error) {
      form.removeNode(true)
    }
  },
  /**
   * 导入方法
   * @param {Object} params 导入参数对象
   * @param {file} fileList 文件
   * @param {String} url 导入接口地址
   * @param {Function} success 成功回调方法
   * @param {Function} err 失败回调方法
   */
  importFile (params, fileList, url, success, err) {
    const formData = new FormData()
    for (let key in params) {
      formData.append(key, params[key])
    }
    // 服务器别名
    if (sysConfig['prefer-service-zone']) {
      formData.append('prefer-service-zone', sysConfig['prefer-service-zone'])
    }
    fileList.forEach(i => {
      formData.append('file', i.file)
    })
    axios
      .post(url, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      .then(res => {
        res ? success(res) : err()
      })
      .catch(() => {
        err()
      })
  },
  debounce (fn, ms = 0) {
    let timeoutId
    return function (...args) {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => fn.apply(this, args), ms)
    }
  },
  /**
   * 列表转树形结构
   * @param {array} arr 数组
   * @param {string} pid 父id标示
   * @param {string} key 唯一字段
   * @returns {*} 树形数据
   */
  arrayToTree (arr, id = 'id', pid, key, empty = []) {
    const res = arr.filter(i => i[pid] == key).map(item => ({
      ...item,
      children: this.arrayToTree(arr, id, pid, item[id], empty)
    }))
    return res.length ? res : empty
  },
  /**
   * 设置ccweb指定的localStorage
   * @param {String} key 缓存key值
   * @param {String} data 设置的内容
   */
  setLocalStorageByKey (key, data) {
    window.parent.postMessage(JSON.stringify({
      method: 'setLocalStorageByKey',
      key,
      data
    }), '*')
  },
  /**
   * 获取指定的ccweb缓存值并处理后续业务
   * @param {String} key 缓存key值
   * @param {String} callback 后续业务,非必填
   */
  getLocalStorageByKey (key, callback = '') {
    window.parent.postMessage(JSON.stringify({
      method: 'getLocalStorage',
      url: decodeURIComponent(window.location.href),
      key,
      callback,
    }), '*')
  },
  /**
   * 下载浏览器可解析的文件
   * @param {string} url 文件下载地址
   * @param {string} fileName 文件名称
   */
  downloadFileByUrl (url, fileName = '') {
    axios.get(url, {
      responseType: 'blob'
    }).then(blob => {
      const a = document.createElement('a')
      a.style.display = 'none'
      const url = window.URL.createObjectURL(blob)
      a.href = url
      a.download = fileName
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      window.URL.revokeObjectURL(url)
    })
  },
}

export default utils

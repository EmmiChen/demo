// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入公共方法
import './plugin/index'
// 全局注册组件
import './common/index'
import './css/main.css'
import './mock' // 加载mock数据
// 封装 axios
import './utils/axios'
// 加载公共方法
import utils from './utils/utils.js'
// 注册按钮权限全局方法
import { checkFuncId } from '@/utils/getFuncId'
// 使用this.$utils 即可使用
Vue.prototype.$utils = utils
Vue.prototype.$checkFuncId = checkFuncId
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

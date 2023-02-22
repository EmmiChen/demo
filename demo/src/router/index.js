import Vue from 'vue'
import Router from 'vue-router'
// 组件demo
import { routes as demoRoute } from '@/common/demo/routes'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/demo'
    },
    ...demoRoute,
  ]
})

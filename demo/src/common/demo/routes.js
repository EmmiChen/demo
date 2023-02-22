const params = {
  type: 'demo'
}

export const routes = [
  {
    path: '/demo',
    component: () => import(/* webpackChunkName: "Readme" */ './Readme.vue'),
    meta: {
      title: '开发指南', // 页签标题
      ...params,
    }
  },
  {
    path: '/tabs',
    component: () => import(/* webpackChunkName: "Readme" */ './page/page.vue'),
    meta: {
      title: '多页签', // 页签标题
      ...params,
    }
  },
  {
    path: '/singleTab',
    component: () => import(/* webpackChunkName: "Readme" */ './page/singleTab.vue'),
    meta: {
      title: '多页签单组件', // 页签标题
      ...params,
    }
  },
  {
    path: '/tab1',
    component: () => import(/* webpackChunkName: "Readme" */ './page/tabs/tab1.vue'),
    meta: {
      title: '基础列表', // 页签标题
      ...params,
    }
  },
  {
    path: '/tab2',
    component: () => import(/* webpackChunkName: "Readme" */ './page/tabs/tab2.vue'),
    meta: {
      title: '批量操作', // 页签标题
      ...params,
    }
  },
  {
    path: '/tab3',
    component: () => import(/* webpackChunkName: "Readme" */ './page/tabs/tab3.vue'),
    meta: {
      title: '左右结构', // 页签标题
      ...params,
    }
  },
  {
    path: '/tab4',
    component: () => import(/* webpackChunkName: "Readme" */ './page/tabs/tab4.vue'),
    meta: {
      title: '列表排序', // 页签标题
      ...params,
    }
  },
  {
    path: '/tab5',
    component: () => import(/* webpackChunkName: "Readme" */ './page/tabs/tab5.vue'),
    meta: {
      title: '表单提交', // 页签标题
      ...params,
    }
  },
]

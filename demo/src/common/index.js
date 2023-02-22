import Vue from 'vue'

// 基于element原始组件进行定制化封装
import uTabs from './tabs.vue' // tab页签
import uPage from './page.vue' // 分页
import uForm from './form.vue' // 表单
import uTable from './table.vue' // 表格
import uView from './view.vue' // 操作
import uDialog from './dialog.vue' // 弹窗
import uUpload from './upload/upload.vue' // 上传
import uUploadImg from '@/common/upload/uploadImg.vue' // 图片上传
import uTree from './tree' // 树
import uSinglePage from './singlePage.vue' // 简单页面
import uWarper from './warper.vue'
import uSubmit from './submit.vue' // 保存按钮
import proSort from './proSort.vue' // 业务编号
import './mixins'

Vue.component('uWarper', uWarper)
Vue.component('uTabs', uTabs)
Vue.component('uPage', uPage)
Vue.component('uForm', uForm)
Vue.component('uTable', uTable)
Vue.component('uView', uView)
Vue.component('uDialog', uDialog)
Vue.component('uUpload', uUpload)
Vue.component('uUploadImg', uUploadImg)
Vue.component('uTree', uTree)
Vue.component('uSinglePage', uSinglePage)
Vue.component('uSubmit', uSubmit)
Vue.component('proSort', proSort)

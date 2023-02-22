<template>
  <div class="ms-doc">
    <h1>纪辰demo开发指南</h1>
    <section>
      <p>说明:组件库demo</p>
    </section>
    <el-tabs v-model="label">
      <el-tab-pane v-for="tab in tabs" :name="tab.name" :key="tab.name" :label="tab.label"></el-tab-pane>
    </el-tabs>
    <conponent class="ms-doc-content" :is="label" />
  </div>
</template>
<script>
import demoPages from './pages' // 页面汇总
import demoUtils from './utils' // 公共方法说明
import demoDialog from './dialog' // 弹窗使用规范
import demoHttp from './http' // http相关说明
import demoCommon from './common' // 业务组件
import demoForm from './form.vue' // 表单
import demoMock from './mock.vue' // mock数据
import demoImgUpload from './imgUpload.vue' // 图片上传

export default {
  name: 'readme',
  data () {
    return {
      links: [
        {
          title: '后端接口文档',
          url: 'http://10.0.33.133:6091/swagger-ui.html#/'
        },
      ],
      tabs: [
        {
          name: 'demoPages',
          label: '页面汇总'
        },
        {
          name: 'demoUtils',
          label: '公共方法说明'
        },
        {
          name: 'demoCommon',
          label: '业务组件'
        },
        {
          name: 'demoDialog',
          label: '弹窗组件'
        },
        {
          name: 'demoForm',
          label: '表单相关'
        },
        {
          name: 'demoImgUpload',
          label: '图片上传'
        },
        {
          name: 'demoMock',
          label: '本地MOCK'
        },
        {
          name: 'demoHttp',
          label: 'http相关说明'
        },
      ],
      label: 'demoPages',
    }
  },
  components: {
    demoPages,
    demoDialog,
    demoUtils,
    demoHttp,
    demoCommon,
    demoForm,
    demoMock,
    demoImgUpload,
  },
  methods: {
    openLink (url) {
      window.open(url)
    }
  }
}
</script>
<style lang="stylus" scoped>
.ms-doc {
  padding: 5px;
  overflow: hidden;
  box-sizing: border-box;
  height: 100%;
  display: flex;
  flex-direction: column;

  &-content {
    flex: 1;
    overflow: auto;
  }

  >>> section {
    padding: 10px;
    margin: 10px 0;
    font-size: 14px;
    background: #f8f8f8;
    line-height: 1.5;
  }

  h1 {
    font-size: 20px;
  }

  >>> h2 {
    font-size: 16px;
    margin-bottom: 10px;
  }

  pre, >>> pre {
    margin: 10px;
    padding: 10px;
    background: #e6effb;
    color: #5e6d82;
    border: 1px solid #eaeefb;
    border-radius: 3px;
  }
}
</style>

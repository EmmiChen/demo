<template>
  <div>
    <h2>【按钮权限】/src/plugin/types/checkFuncId/checkFuncId.js</h2>
    <pre>$checkFuncId('editBtn')</pre>
    <h2>【$utils方法定义】/src/utils/utils.js</h2>
    <h2>导出</h2>
    <pre>this.$utils.postExcelFile({ name: 1}, url)</pre>
    <h2>打开新页签</h2>
    <pre>this.$utils.openNewTab('/taskSetting', '定时导入任务')()</pre>
    <h2>关闭当前页签</h2>
    <pre>this.$utils.closeTabByFullPath()</pre>
    <h2>表单保存成功后提示并关闭页签</h2>
    <pre>this.$utils.closeTabWithMsg()</pre>
    <h2>根据fileId下载文件</h2>
    <el-button @click="download">下载</el-button>
    <pre>this.$utils.downloadByFileId(fileId)</pre>
    <h2>导入</h2>
    <pre>{{codeImport}}</pre>
    <h2>【正则验证】/src/plugin/types/regex/regex.js</h2>
    <p>必填项</p>
    <pre>this.$rule.required('活动区域')</pre>
    <p>验证数字类型，第一个参数是类型，第二个参数为报错提示语，可以不填</p>
    <pre>this.$rule.type('number', '必须为数字')</pre>
    <p>前端通用字典项，未在字典管理维护</p>
    <pre>this.$storage.xxx</pre>
    <p>修改ccweb的缓存</p>
    <pre>this.$utils.setLocalStorageByKey('test', '123')</pre>
    <h2>录音下载</h2>
    <pre>this.$utils.downloadFileByUrl('http://localhost:1113/static/sample.mp3', 'sample.mp3')</pre>
    <el-button @click="$utils.downloadFileByUrl('http://localhost:1113/static/sample.mp3', 'sample.mp3')">下载</el-button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      codeImport: `this.$utils.importFile({
  name: 1
}, 'abc', filelist, (res) => {
  console.log('导入成功', res)
}, () => {
  // 导入失败处理，如关闭loading
})`,
    }
  },
  methods: {
    download () {
      this.$utils.downloadByFileId('19c74aa340fc11ec8a74000c29487bf9')
    }
  }
}
</script>

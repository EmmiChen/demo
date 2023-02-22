<template>
  <div>
    <h2>【组件文档】/src/utry/README.md</h2>
    <h2>附件上传</h2>
    <uUpload v-model="file" label='增加附件'></uUpload>
    <pre>{{file}}</pre>
    <pre>{{code}}</pre>
    <el-button @click="setRule">设置指定项目下导入规则</el-button>
    <el-button @click="openTaskList">打开指定任务列表</el-button>
    <h2>调用主工程的音频播放器</h2>
    <el-button @click="openPlayerDialog">打开音频播放器</el-button>
    <pre>window.parent.postMessage(JSON.stringify({
  method: 'openPlayerDialog',
  data: [
    {
      recordId: '123', // 文件名称
      uri: 'http://10.0.13.245:6081/ccweb-gz/static/audio/eyecatch.mp3', // 音频地址
    }
  ]
}), '*')</pre>
  </div>
</template>
<script>
export default {
  name: 'common-demo',
  data () {
    return {
      code: `<uUpload v-model="file" label='增加附件'></uUpload>`,
      file: {},
    }
  },
  methods: {
    setRule () {
      this.$utils.openNewTab('/getRuleById/S000B20211116002/FK/ptfk', '设置导入规则')
    },
    /**
     * 打开主工程音频播放器
     */
    openPlayerDialog () {
      window.parent.postMessage(JSON.stringify({
        method: 'openPlayerDialog',
        data: [
          {
            recordId: '123', // 文件名称
            uri: 'http://10.0.13.245:6081/ccweb-gz/static/audio/eyecatch.mp3', // 音频地址
          }
        ]
      }), '*')
    },
    openTaskList () {
      this.$utils.openNewTab(`/taskList/X?outPhoneStatus=appoint&id=0005575f9bc911eca685005056b587fd`, '任务列表')
    }
  }
}
</script>

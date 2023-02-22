<template>
  <div>
    <el-button @click="handlerConfirm">删除</el-button>
    <pre>{{code}}</pre>
    <pre>/**
 * 删除
 */
async handlerConfirm () {
  const res = await this.$optConfirm('删除', '确定要删除选中数据？')
  console.log('返回操作结果，布尔值', res)
},</pre>
  </div>
</template>
<script>
export default {
  name: 'optConfirm-demo',
  data () {
    return {
      code: `<el-button @click="handlerConfirm">删除</el-button>`,
    }
  },
  methods: {
    /**
     * 删除
     */
    async handlerConfirm () {
      const res = await this.$optConfirm('删除', '确定要删除选中数据？')
      console.log('返回操作结果，布尔值', res)
    },
  }
}
</script>

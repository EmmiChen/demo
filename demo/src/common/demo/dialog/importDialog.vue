<template>
  <uDialog :title="title" @close="closeFormDialogAfterApi" v-model="value" ref="uDialog">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
      <el-form-item label="文件" prop="name">
        <uUpload v-model="ruleForm.name" />
      </el-form-item>
    </el-form>
  </uDialog>
</template>
<script>
export default {
  name: 'dialog-demo',
  props: {
    value: Boolean, // 控制弹窗
    title: String,
  },
  data () {
    return {
      ruleForm: {
        name: {},
      },
      rules: {
        name: [
          this.$rule.required('文件'),
        ],
      }
    }
  },
  methods: {
    doDialogApi () {
      this.$refs.uDialog.lock(true)
      // 模拟2秒后返回失败，解锁按钮
      setTimeout(() => {
        this.$refs.uDialog.lock(false)
      }, 2000)
    }
  }
}
</script>

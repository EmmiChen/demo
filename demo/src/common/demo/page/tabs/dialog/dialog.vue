<template>
  <uDialog :title="title" @close="closeFormDialogAfterApi" v-model="value" ref="uDialog">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
      <el-form-item label="标题" prop="title">
        <el-input v-model.trim="ruleForm.title" maxlength="30" clearable></el-input>
      </el-form-item>
      <el-form-item label="类型" prop="type">
        <el-select v-model="ruleForm.type" clearable>
          <!-- <el-option v-for="i in $storage('ckms_importance')" :key="i.key" :label="i.value" :value="i.key"></el-option> -->
        </el-select>
      </el-form-item>
      <el-form-item label="过期日期">
        <el-date-picker type="date" value-format="yyyy-MM-dd" format="yyyy-MM-dd" placeholder="空：永不过期" v-model="ruleForm.overDate"></el-date-picker>
      </el-form-item>
      <el-form-item label="是否必读" prop="mustRead">
        <el-switch
          v-model="ruleForm.mustRead"
          active-value="1"
          inactive-value="0">
        </el-switch>
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
      ruleForm: {},
      rules: {
        name: [
          this.$rule.required('标题'),
        ],
        type: [
          this.$rule.required('类型')
        ],
      }
    }
  },
  methods: {
    /**
     * 数据交互
     * 1、请求接口
     * 2、接口成功，关闭弹窗，刷新数据
     * 3、接口异常，抛出异常信息
     */
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

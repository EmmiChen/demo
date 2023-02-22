<template>
  <uSinglePage>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="80px">
      <el-form-item label="父类" v-if="ruleForm.pName">
        {{ruleForm.pName}}
      </el-form-item>
      <el-form-item label="名称" prop="departmentName">
        <el-input v-model.trim="ruleForm.departmentName" maxlength="30" clearable></el-input>
      </el-form-item>
      <el-form-item label="编码" prop="code">
        <el-input v-model.trim="ruleForm.code" maxlength="30" clearable></el-input>
      </el-form-item>
      <el-form-item>
        <uSubmit text="保存" @save="doSave" ref="uSubmit" />
      </el-form-item>
    </el-form>
  </uSinglePage>
</template>
<script>
export default {
  name: 'tab5',
  data () {
    return {
      ruleForm: {},
      rules: {
        departmentName: [
          this.$rule.required('名称'),
        ],
        code: [
          this.$rule.required('编码')
        ],
      }
    }
  },
  methods: {
    doSave () {
      this.checkFormSubmit('ruleForm', () => {
        this.$refs.uSubmit.lock(true)
        // 模拟2秒后返回失败，解锁按钮
        setTimeout(() => {
          this.$refs.uSubmit.lock(false)
        }, 2000)
      })
    }
  }
}
</script>

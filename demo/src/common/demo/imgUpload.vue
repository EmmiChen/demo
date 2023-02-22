<template>
  <div>
    <h2>【本示例文件】/src/utry/demo/imgUpload.vue</h2>
    <section>
      <p>图片上传场景分两种</p>
      <p>【方式1】图片先通过公共接口用formdata格式上传到服务器，前端缓存接口返回的图片路径[imgUrl]，和其他参数一起通过接口用json格式提交给后端</p>
      <p>【方式2】选择图片后前端缓存file对象[imgFile]，和其他参数一起通过接口用formdata格式提交给后端</p>
    </section>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px">
      <el-form-item label="图片" prop="imgUrl">
        <uUploadImg v-model="ruleForm.imgUrl" @input="validateField('imgUrl')" />
      </el-form-item>
      <el-form-item label="图片文件" prop="imgFile">
        <uUploadImg :autoUpload="false" v-model="ruleForm.imgFile" @input="validateField('imgFile')" />
      </el-form-item>
      <el-form-item>
        <uSubmit text="提交" @save="checkFormInput('ruleForm', 'doSave')" ref="uSubmit" />
        <el-button size="medium" @click="resetForm">重置</el-button>
      </el-form-item>
    </el-form>
    <pre>{{ruleForm}}</pre>
  </div>
</template>
<script>
export default {
  name: 'img-upload-demo',
  data () {
    return {
      ruleForm: {
        imgUrl: '',
        imgFile: 'http://localhost:1113/static/img/img.png',
      },
      rules: {
        imgUrl: [
          this.$rule.required('图片')
        ],
        imgFile: [
          this.$rule.required('图片文件', 'change')
        ]
      }
    }
  },
  methods: {
    /**
     * 更新表单验证
     * @param {string} field 字段名称
     */
    validateField (field) {
      this.$refs.ruleForm.validateField(field)
    },
    /**
     * 提交
     */
    doSave () {
      this.$refs.uSubmit.lock(true)
      console.log(this.ruleForm)
      // 模拟2秒后返回失败，解锁按钮
      setTimeout(() => {
        this.$refs.uSubmit.lock(false)
      }, 2000)
    },
    /**
     * 重置
     */
    resetForm () {
      this.$refs.ruleForm.resetFields()
    }
  }
}
</script>

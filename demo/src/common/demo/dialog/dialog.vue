<template>
  <uDialog :title="title" @close="closeFormDialogAfterApi" v-model="value" ref="uDialog">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
      <el-form-item label="输入框" prop="name">
        <el-input v-model.trim="ruleForm.name" maxlength="30" clearable></el-input>
      </el-form-item>
      <el-form-item label="下拉菜单" prop="region">
        <el-select v-model="ruleForm.region" clearable>
          <el-option label="杭州" value="hangzhou"></el-option>
          <el-option label="上海" value="shanghai"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="时间" prop="date">
        <el-date-picker type="date" value-format="yyyy-MM-dd" v-model="ruleForm.date" clearable></el-date-picker>
      </el-form-item>
      <el-form-item label="多选" prop="type">
        <el-checkbox-group v-model="ruleForm.type">
          <el-checkbox label="1" name="type">吃饭</el-checkbox>
          <el-checkbox label="2" name="type">睡觉</el-checkbox>
          <el-checkbox label="3" name="type">写代码</el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="单选" prop="resource">
        <el-radio-group v-model="ruleForm.resource">
          <el-radio label="1">启用</el-radio>
          <el-radio label="0">停用</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="文本域" prop="desc">
        <el-input type="textarea" v-model.trim="ruleForm.desc" clearable></el-input>
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
        name: '',
        region: '',
        date: '',
        type: [],
        resource: '',
        desc: ''
      },
      rules: {
        name: [
          this.$rule.required('输入框'),
        ],
        region: [
          this.$rule.select('下拉菜单')
        ],
        date: [
          this.$rule.required('日期')
        ],
        type: [
          this.$rule.select('活动性质')
        ],
        resource: [
          this.$rule.select('活动资源')
        ],
        desc: [
          this.$rule.required('活动形式')
        ]
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

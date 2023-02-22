<template>
  <div>
    <h2>【本示例文件】/src/utry/demo/form.vue</h2>
    <section>
      <p>保存提交按钮，防止重复点击</p>
      <pre>{{code}}</pre>
      <pre>{{code1}}</pre>
      <p>日期范围或日期时间范围选择，后端需要传递2个参数，如startTime,endTime</p>
      <p>下拉菜单数据（非接口获取），使用this.$storage.xxx，来源src/dics/index.js</p>
    </section>
    <p>单独使用业务类型+项目编号</p>
    <proSort :proSort="ruleForm.proSort" assignRole="A" @change="changeProSort" />
    <pre>{{ruleForm}}</pre>
    <uForm :model="pageData" :options="options" @change="refreshTable" :rules="rules">
      <template slot="test">
        <el-select v-model="pageData.test">
          <el-option label="杭州" value="hangzhou"></el-option>
          <el-option label="上海" value="shanghai"></el-option>
        </el-select>
      </template>
    </uForm>
    <p>搜索条件</p>
    <pre>{{pageData}}</pre>
    <p>表单设置</p>
    <pre>{{options}}</pre>
  </div>
</template>
<script>
export default {
  name: 'form-demo',
  data () {
    return {
      code: `<uSubmit @save="checkFormInput('ruleForm', 'doSave')" ref="saveConfig" />`,
      code1: `/**
 * 保存
 */
doSave () {
  this.$refs.saveConfig.submit(true)
  // 模拟2秒后返回失败，解锁按钮
  setTimeout(() => {
    this.$refs.saveConfig.submit(false)
  }, 2000)
}`,
      // 查询条件传参数
      pageData: {
        startTime: '',
        endTime: '',
        backStartTime: '',
        backEndTime: '',
        min: '',
        max: '',
        isRadio: '1',
        test: '',
        proTypeSort: '',
        businessType: '',
        proSort: '',
      },
      // 表单设置
      options: [
        {
          label: '日期时间范围',
          key: 'backStartTime,backEndTime',
          type: 'datetimerange',
        },
        {
          label: '日期范围',
          key: 'startTime,endTime',
          type: 'daterange',
          disabledDate: 31,
          pickerOptions: {
            /**
             * 不可选时间
             * @param {date} time 时间
             */
            disabledDate: (time) => {
              const date = new Date()
              const min = new Date(date.getTime() - 3600 * 1000 * 24 * 31)
              return (time.getTime() > Date.now()) || (time.getTime() < min.getTime())
            },
          },
        },
        {
          label: '区间',
          key: 'min,max',
          type: 'range'
        },
        {
          label: '是否启用',
          key: 'isRadio',
          type: 'radio',
          list: [
            {
              label: '启用',
              value: '1'
            },
            {
              label: '不启用',
              value: '0'
            }
          ]
        },
        {
          label: '自定义',
          key: 'test',
          type: 'slot',
        },
      ],
      // 必填验证
      rules: {
        proSort: [
          this.$rule.required('项目编号', 'change')
        ]
      },
      ruleForm: {
        proTypeSort: '',
        businessType: '',
        proSort: '',
      },
    }
  },
  methods: {
    onSubmit () {
      console.log('submit!')
    },
    /**
     * 更新项目类型
     */
    changeProSort (data) {
      Object.assign(this.ruleForm, data)
    },
  }
}
</script>

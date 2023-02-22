<template>
  <div>
    <h2>【本示例文件】/src/utry/demo/dialog.vue</h2>
    <demoOptConfirm></demoOptConfirm>
    <el-button @click="adddialog">新增</el-button>
    <el-button @click="editDialog">编辑</el-button>
    <el-button @click="viewDialog">查看</el-button>
    <el-button @click="importDialog">导入</el-button>
    <dialogDemo title="新增" v-model="dialog.add" v-if="dialog.add" @close="getDialogData" />
    <dialogDemo title="编辑" v-model="dialog.edit" v-if="dialog.edit" @close="getDialogData" ref="editDialog" />
    <dialogView title="查看" v-model="dialog.view" v-if="dialog.view" :tableData="tableData" />
    <importDialog title="导入" v-model="dialog.importDialog" v-if="dialog.importDialog"></importDialog>
    <pre v-if="Object.keys(formData).length">{{formData}}</pre>
  </div>
</template>
<script>
import demoOptConfirm from './optConfirm' // 二次确认方法
import dialogDemo from './dialog/dialog'
import dialogView from './dialog/dialogView'
import importDialog from './dialog/importDialog.vue'

export default {
  name: 'dialog-demo',
  components: {
    demoOptConfirm,
    dialogDemo,
    dialogView,
    importDialog,
  },
  data () {
    return {
      dialog: {
        add: false,
        edit: false,
        view: false,
        importDialog: false,
      },
      formData: {},
      // 只读弹窗数据
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
  methods: {
    /**
     * 新增
     */
    adddialog () {
      this.dialog.add = true
    },
    /**
     * 编辑
     */
    editDialog () {
      this.dialog.edit = true
      if (Object.keys(this.formData).length) {
        this.$nextTick(() => {
          this.$refs.editDialog.setFormData(this.formData)
        })
      }
    },
    /**
     * 查看
     */
    viewDialog () {
      this.dialog.view = true
    },
    /**
     * 导入
     */
    importDialog () {
      this.dialog.importDialog = true
    },
    /**
     * 关闭弹窗并获取表单数据
     * @param {Object} val 弹窗组件传递的数据
     */
    getDialogData (val) {
      this.formData = val
      this.dialog = {
        add: false,
        edit: false,
        view: false,
      }
    },
  }
}
</script>

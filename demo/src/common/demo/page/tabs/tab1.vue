<template>
  <uWarper>
    <template slot="top">
      <uForm :model="pageData" :options="options" @change="refreshTable">
        <template slot="button-right">
          <el-button type="primary" @click="handlerAdd">新增</el-button>
        </template>
      </uForm>
    </template>
    <template slot="table">
      <uTable :data="listData" :header="header">
        <el-table-column label="操作" width="130" slot="right">
          <template slot-scope="scope">
            <el-button type="text" @click="viewDialog(scope.row)">查看</el-button>
            <el-button type="text" @click="editDialog(scope.row)">编辑</el-button>
            <el-button type="text" @click="handleDelete(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </uTable>
    </template>
    <template slot="page">
      <uPage @change="refreshTable" :page="pageObj" />
    </template>
    <dialogDemo title="新增" v-model="dialog.add" v-if="dialog.add" @close="refreshTable" />
    <dialogDemo title="编辑" v-model="dialog.edit" v-if="dialog.edit" @close="refreshTable" ref="editDialog" />
    <dialogView title="查看" v-model="dialog.view" v-if="dialog.view" :data="dialog.data" />
  </uWarper>
</template>
<script>
import dialogDemo from './dialog/dialog'
import dialogView from './dialog/dialogView'

export default {
  name: 'tab1',
  data () {
    return {
      // 表头
      header: [
        {
          label: '标题',
          key: 'title',
        },
        {
          label: '类型',
          key: 'type',
        },
        {
          label: '过期时间',
          key: 'overDate'
        }
      ],
      // 查询条件传参数
      pageData: {
        title: '',
        type: ''
      },
      // 表单设置
      options: [
        {
          label: '标题',
          key: 'title',
          type: 'input',
        },
      ],
      dialog: {
        add: false,
        edit: false,
        view: false,
        data: {}
      },
    }
  },
  components: {
    dialogDemo,
    dialogView
  },
  created () {
    this.listApi = this.$apis.ccweb.selectNoticeByPage
    this.refreshTable()
  },
  methods: {
    /**
     * 删除数据
     */
    async handleDelete (row) {
      const res = await this.$optConfirm('删除', `确定要删除【${row.title}】吗？`)
      if (res) {
        console.log('删除数据', row)
        // 走接口删除数据，删除成功后刷新列表
      }
    },
    /**
     * 新增
     */
    handlerAdd () {
      this.dialog.add = true
    },
    /**
     * 编辑
     */
    editDialog (row) {
      this.dialog.edit = true
      if (Object.keys(row).length) {
        this.$nextTick(() => {
          this.$refs.editDialog.setFormData(row)
        })
      }
    },
    /**
     * 查看
     */
    viewDialog (row) {
      this.dialog.data = row
      this.dialog.view = true
    },
  }
}
</script>

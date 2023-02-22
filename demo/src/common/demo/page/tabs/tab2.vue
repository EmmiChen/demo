<template>
  <uWarper>
    <template slot="top">
      <uForm :model="pageData" :options="options" @change="refreshTable">
        <template slot="button-right">
          <el-button type="primary" :disabled="!checkList.length" @click="handlerConfirmByIds">批量删除</el-button>
        </template>
      </uForm>
    </template>
    <template slot="table">
      <uTable :data="listData" :header="header" selection @selection-change="handleSelectionChange">
        <el-table-column label="操作" width="90" slot="right">
          <template slot-scope="scope">
            <el-button type="text" @click="handleDelete(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </uTable>
    </template>
    <template slot="page">
      <uPage @change="refreshTable" :page="pageObj" />
    </template>
  </uWarper>
</template>
<script>
export default {
  name: 'tab2',
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
    }
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
     * 批量删除
     */
    async handlerConfirmByIds () {
      const res = await this.$optConfirm('批量删除', '确定要批量删除选中数据吗？')
      if (res) {
        console.log('删除数据', this.checkList)
        // 走接口删除数据，删除成功后刷新列表
      }
    },
  },
}
</script>

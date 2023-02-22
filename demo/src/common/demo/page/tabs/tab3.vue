<template>
  <uWarper>
    <template slot="left">
      <uTree>
        <el-tree :data="treedata" :props="defaultProps" node-key="id" @node-click="handleNodeClick" highlight-current default-expand-all></el-tree>
      </uTree>
    </template>
    <template slot="top">
      <uForm :model="pageData" :options="options" @change="refreshTable">
      </uForm>
    </template>
    <template slot="table">
      <uTable :data="listData" :header="header">
        <el-table-column slot="title" label="规则名称" show-overflow-tooltip>
          <template slot-scope="scope">
            <el-button type="text" @click="handleClick(scope.row)">{{scope.row.title}}</el-button>
          </template>
        </el-table-column>
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
  name: 'tab3',
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
      defaultProps: {
        children: 'children',
        label: 'name'
      },
      treedata: [], // tree数据
    }
  },
  created () {
    this.listApi = this.$apis.ccweb.selectNoticeByPage
    this.refreshTable()
    this.getTreeData()
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
     * 点击树
     */
    handleNodeClick (data) {
      console.log(data)
    },
    // 查询左边tree函数(参数类型)
    getTreeData () {
      this.$axios.get(this.$apis.hrm.deptList).then((data) => {
        this.treedata = this.$utils.arrayToTree(data, 'id', 'pid')
      })
    },
    /**
     * 列表点击
     */
    handleClick (row) {
      console.log(row)
    },
  },
}
</script>

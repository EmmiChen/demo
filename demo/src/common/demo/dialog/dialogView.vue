<template>
  <uDialog readOnly width="700px" :title="title" @close="closeFormDialog(false)" v-model="value">
    <el-table :data="tableData">
      <el-table-column prop="date" label="日期" width="150">
      </el-table-column>
      <el-table-column prop="name" label="姓名">
      </el-table-column>
      <el-table-column prop="address" label="地址">
      </el-table-column>
    </el-table>
  </uDialog>
</template>
<script>
export default {
  name: 'view-dialog-demo',
  props: {
    value: Boolean, // 控制弹窗
    title: String, // 弹窗标题
    tableData: Array, // 列表数据
  },
}
</script>

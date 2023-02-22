<template>
  <uDialog readOnly width="500px" :title="title" @close="closeFormDialog(false)" v-model="value">
    <uView :options="options" inline :span="24">
      <template slot="title-end">
        (备注)
      </template>
      <template slot="more">
        随便写写
      </template>
    </uView>
  </uDialog>
</template>
<script>
export default {
  name: 'view-dialog-demo',
  props: {
    value: Boolean, // 控制弹窗
    title: String, // 弹窗标题
    data: Object, // 列表数据
  },
  data () {
    return {
      options: [],
    }
  },
  created () {
    const {
      title
    } = this.data
    this.options = [
      {
        label: '标题',
        value: title,
        key: 'title20'
      },
      {
        label: '其他',
        slot: true,
        value: title,
        key: 'more'
      },
    ]
  }
}
</script>

<template>
  <el-pagination v-bind="$props" :current-page="page.page" :page-size="page.size" :total="page.total" @size-change="sizeChange" :pager-count="paperCount" @current-change="currentChange" />
</template>
<script>
export default {
  name: 'uPage',
  props: {
    /**
     * 分页对象
     */
    page: {
      type: Object,
      default: () => ({
        page: 1,
        size: 20,
        total: 0,
      })
    },
    /**
     * el-pagination默认参数
     * @see https://element.eleme.cn/#/zh-CN/component/pagination
     */
    total: {
      default: 0
    },
    'page-sizes': {
      default: () => [10, 20, 50, 100, 500, 1000, 2000],
    },
    layout: {
      type: String,
      default: 'total, sizes, prev, pager, next, jumper'
    },
    paperCount: {
      default: 5
    },
    small: {
      default: false,
    }
  },
  methods: {
    /**
     * 继承 element size-change 事件
     * @method sizeChange
     * @param {number} size 每页条数
     */
    sizeChange (size) {
      this.$emit('change', { size })
    },
    /**
     * 继承 element current-change 事件
     * @method currentChange
     * @param {number} page 当前页数
     */
    currentChange (page) {
      this.$emit('change', { page })
    },
  },
}
</script>

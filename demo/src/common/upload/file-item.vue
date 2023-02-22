<template>
  <el-tag v-bind="$props" @close="close(item)">
    <i class="el-icon-document item-icon" />
    <slot>{{item.name && item.name.length > 20 ? item.name.substring(0, 20) + '...' : item.name}}</slot>
  </el-tag>
</template>
<script>
export default {
  name: 'file-item',
  props: {
    /**
     * 标签信息
     */
    item: {
      type: Object,
      default: () => ({})
    },
    /**
     * 是否可关闭
     */
    closable: {
      type: Boolean,
      default: false
    },
  },
  data () {
    return {}
  },
  methods: {
    /**
     * 触发关闭操作
     * @param {object} item 数据对象
     */
    close (item) {
      this.$emit('close', item)
    }
  }
}
</script>
<style lang="stylus" scoped>
.item-icon {
  margin-right 5px
}
</style>

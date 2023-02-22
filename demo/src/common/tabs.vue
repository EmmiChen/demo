<template>
  <div class="utab-page-container">
    <el-tabs v-model="active" @tab-click="handleClick">
      <el-tab-pane v-for="i in tabs" :key="i.key" :label="i.name" :name="i.key" />
    </el-tabs>
    <slot name="action" />
    <slot :active="active" />
  </div>
</template>
<script>
export default {
  name: 'uTabs',
  props: {
    tabs: {
      type: Array,
      default: () => ([])
    },
    /**
     * 默认tab
     */
    activeTab: {
      type: String,
    }
  },
  data () {
    return {
      active: ''
    }
  },
  created () {
    this.active = this.activeTab || this.tabs[0].key
  },
  methods: {
    /**
     * 切换页签
     */
    handleClick (tab) {
      console.log('【当前页签】', tab.name)
    },
  }
}
</script>
<style lang="stylus" scoped>
.utab-page-container {
  height 100%
  display: flex
  flex-direction: column
  // tab下方间隙去除
  >>>.el-tabs__header{
    margin 0
  }
  // tab左右间隔增加
  .el-tabs {
    padding 0 10px
  }
}
</style>

<template>
  <el-table v-bind="$props" ref="multipleTable" v-if="header.length" @selection-change="handleSelectionChange" @select="handleRowChange" @select-all="handleAllChange" @sort-change="handleSortChange" :style="{ width }">
    <el-table-column
      v-if="selection"
      type="selection"
      :selectable="selectable"
      align="center"
      width="55">
    </el-table-column>
    <el-table-column
      v-if="showIndex"
      label="序号"
      type="index"
      align="center"
      width="55">
    </el-table-column>
    <slot name="left"></slot>
    <slot :name="h[name]" :data="h" v-for="h in header">
      <el-table-column
        v-if="!h['hidden']"
        :key="h[name]"
        :align="h['align']"
        :width="h['width']"
        :prop="h[name]"
        :label="h[label]"
        :sortable="h['sortable']"
        show-overflow-tooltip>
        <template v-slot="scope">
          <template v-if="h['dic']">
            {{$storage.transition[scope.row[h['key']]] || scope.row[h['key']]}}
          </template>
          <template v-else-if="h['code']">
            {{getValueByCode(scope.row[h['key']], h)}}
          </template>
          <template v-else-if="h['dict']">
            {{getValueByDictCode(scope.row[h['key']], h)}}
          </template>
          <template v-else-if="h['hide']">
            {{hideByStarFunc(scope.row[h['key']], h['hide'])}}
          </template>
          <template v-else>{{scope.row[h['key']]}}</template>
        </template>
      </el-table-column>
    </slot>
    <slot name="right"></slot>
  </el-table>
</template>
<script>
export default {
  name: 'uTable',
  props: {
    // header表头
    header: {
      type: Array,
    },
    // 展示序号，默认展示
    showIndex: {
      type: Boolean,
      default: true,
    },
    // selection是否
    selection: {
      type: Boolean,
      default: false,
    },
    // 是否可选
    selectable: {
      type: Function,
    },
    // 列表数据
    data: {
      type: Array,
    },
    // 选中的列数
    multipleSelection: {
      type: Array
    },
    // 对应表头header的自定义key值
    name: {
      type: String,
      default: 'key'
    },
    // 对应表头header的自定义value值
    label: {
      type: String,
      default: 'label'
    },
    // 是否带边框
    border: {
      type: Boolean,
      default: true
    },
    // 点击特殊列触发的方法
    handleCellClick: {
      type: Function,
    },
    // 需要触发特殊操作的列
    handleCellArray: {
      type: Array,
      default: () => []
    },
    // 宽度
    width: {
      type: String,
      default: '100%'
    },
    // 高度
    height: {
      type: String,
      default: '100%'
    },
    // 尺寸
    size: {
      type: String,
      default: 'medium'
    },
    /**
     * 单元格样式
     */
    cellStyle: {
      type: Function
    },
    /**
     * 行样式
     */
    'row-class-name': {
      type: Function,
    },
    /**
     * 行样式，对象
     */
    'row-style': {
      type: Function,
    },
    /**
     * 展示合计
     */
    'show-summary': {
      type: Boolean,
      default: false
    },
    /**
     * 合计方法
     */
    'summary-method': {
      type: Function
    },
    /**
     * 树形表格
     */
    'tree-props': {
      type: Object
    },
    'row-key': {
      type: [String, Function]
    },
    'default-expand-all': {
      type: Boolean
    },
    /**
     * 排序
     */
    'default-sort': {
      type: Object
    },
    /**
     * 合并
     */
    'span-method': {
      type: Function
    },
  },
  data () {
    return {
      hideByStarFunc: window.hideByStarFunc,
    }
  },
  mounted () {
    if (this.multipleSelection) {
      const rows = this.multipleSelection
      rows.forEach(row => {
        this.$refs.multipleTable.toggleRowSelection(row)
      })
    }
  },
  methods: {
    /**
     * 有选择操作时，默认渲染已选中的值
     * @param {array} val 选中的列
     */
    handleSelectionChange (val) {
      this.$emit('selection-change', val)
    },
    // 复现框单个选项勾选及取消事件
    handleRowChange (row, selected) {
      this.$emit('select', row, selected)
    },
    // 复选框全选按钮勾选及取消事件
    handleAllChange (row, selected) {
      this.$emit('select-all', row, selected)
    },
    // 排序
    handleSortChange ({ column, prop, order }) {
      this.$emit('sort-change', { column, prop, order })
    },
    /**
     * 重新布局
     */
    doLayout () {
      this.$refs.multipleTable.doLayout()
    },
    /**
     * 清空全选
     */
    clearSelection () {
      this.$refs.multipleTable.clearSelection()
    },
    /**
     * 选中指定列
     * @param {object} row 行对象
     */
    toggleRowSelection (row) {
      this.$refs.multipleTable.toggleRowSelection(row)
    },
    /**
     * 根据code获取前端枚举类
     */
    getValueByCode (key, { code }) {
      return (this.$storage.dicObj[code] && this.$storage.dicObj[code][key]) || key
    },
    /**
     * 根据字典项获取枚举类
     */
    getValueByDictCode (key, { dict }) {
      return (this.$storage.dict[dict] && this.$storage.dict[dict][key]) || key
    }
  },
}
</script>
<style lang="stylus" scoped>
>>>.el-link + .el-link {
  margin-left 5px
}
>>> .el-button--text {
  text-decoration: underline
}
</style>

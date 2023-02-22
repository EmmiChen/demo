<template>
  <div class="utry-warper" :style="{height,width}">
    <div class="utry-warper-left">
      <slot name="left"></slot>
    </div>
    <div class="utry-warper-center">
      <div class="utry-warper-center-top">
        <slot name="top"></slot>
      </div>
      <div class="utry-warper-center-action" v-if="showAction">
        <slot name="action"></slot>
      </div>
      <div class="utry-warper-center-page-left" v-if="showTopPage">
        <slot name="page"></slot>
      </div>
      <div class="utry-warper-center-table">
        <slot name="table"></slot>
      </div>
      <div class="utry-warper-center-page" v-if="!showTopPage">
        <slot name="page"></slot>
      </div>
    </div>
    <div class="utry-warper-right">
      <slot name="right"></slot>
    </div>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'uWarper',
  props: {
    /**
     * 展示操作区域
     */
    showAction: {
      type: Boolean,
      default: false,
    },
    /**
     * 弹性布局，默认高度100%，弹窗内使用需要指定高度
     */
    height: {
      type: String,
      default: '100%'
    },
    width: {
      type: String,
      default: '100%'
    },
    /**
     * 分页位置在表格上方，默认表格下方
     */
    showTopPage: {
      type: Boolean,
      default: false
    }
  },
}
</script>
<style lang="stylus" scoped>
/*左右结构，树可编辑*/
.utry-warper{
  display flex
  flex 1
  flex-direction row
  overflow hidden
  &-left{
    // min-width 200px
    overflow-x hidden
    overflow-y: auto
    flex-shrink: 0
  }
  &-center{
    flex auto
    display flex
    flex-direction column
    overflow auto
    padding 10px;
    &-action{
      flex-shrink 0
      text-align left
      margin-bottom 10px
      /*按钮样式调整*/
      >>>.el-button {
        padding: 8px 15px;
        font-size: 14px;
      }
    }
    &-top{
      flex-shrink 0
      /** 用于覆盖弹窗中查询条件的样式 */
      >>> .el-form-item__content {
        margin-left: 0 !important;
        width: auto;
      }
    }
    &-table{
      display: flex
      flex 1 // 修复chrome40下样式问题
      height 100%
      flex-direction: column;
      overflow auto
      >>> .cell{
        i {
          cursor pointer
          line-height: 16px;
          &.sort-caret{
            padding 0
          }
          // 增加多图标间距
          & + i {
            margin-left: 6px;
          }
        }
      }
      // 操作列内icon样式统一调整
      >>> [class*=" el-icon-"], [class^=el-icon-]{
        font-size 16px
        cursor pointer
      }
      // 展开箭头样式调整
      >>> .el-table__expand-icon {
        i {
          padding 0
          line-height: 12px;
        }
      }
    }
    &-page{
      text-align right
      >>> .el-form-item {
        margin-bottom 0
      }
      &-left {
        text-align left
        >>> .el-pagination {
          padding-bottom 10px
        }
      }
    }
  }
}
</style>

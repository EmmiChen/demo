<template>
  <div class="utry-tree" :style="{width}">
    <div class="utry-tree-search" v-if="search">
      <slot name="search"></slot>
    </div>
    <div class="utry-tree-list">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'uTree',
  props: {
    /**
     * 是否有搜索条
     */
    search: {
      type: Boolean,
      default: true
    },
    /**
     * 宽度
     */
    width: {
      type: String,
    },
  },
}
</script>
<style lang="stylus" scoped>
.utry-tree{
  box-sizing: border-box;
  border-right: 1px solid #DCDFE5
  height 100%;
  display: flex;
  flex-direction: column;
  max-width 300px
  min-width 200px
  &-search{
    padding 10px 10px 0
    display flex
    flex-direction row
    justify-content: space-between;
  }
  &-list{
    flex 1
    overflow auto
    >>> .el-tree{
      width 100%;
      .label{
        display: flex;
        flex-direction: row;
        width calc(100% - 24px);
        font-size 14px
        &-name{
          flex: 1
          word-break: break-all;
          text-overflow: ellipsis;
          width: 100%;
          overflow: hidden;
        }
        &-action{
          flex-shrink: 0
          i {
            margin-right 8px
          }
        }
      }
    }
    >>> .el-table{
      padding 0 10px
      .cell{
        i {
          margin-right: 6px;
          line-height: 16px;
          padding 4px;
          cursor pointer
          &.sort-caret{
            padding 0
          }
        }
      }
    }
  }
  >>> .el-tree-node__content{
    height 40px;
    line-height 40px;
  }
  >>> .el-form--inline .el-form-item:last-child {
    margin-right 0
  }
}
</style>

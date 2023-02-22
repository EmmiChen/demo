<template>
  <el-row :gutter="gutter" :style="{ width }" class="el-row-warper">
    <slot name="start"></slot>
    <el-col :span="col || span" v-for="({
      label,
      value,
      slot,
      span: col
    }, index) in options" :key="index">
    <div class="view-warper">
      <div :style="{ width: labelWidth }">
        {{label}}
      </div>
      <div class="view-warper-value">
        <template v-if="slot">
          <slot :name="slot"></slot>
        </template>
        <template v-else>
          {{value}}
        </template>
      </div>
    </div>
    </el-col>
    <slot name="end" />
  </el-row>
</template>
<script>
export default {
  name: 'uView',
  props: {
    // 表单配置信息，用于渲染表单结构
    options: {
      type: Array
    },
    // 间隔
    gutter: {
      type: Number,
      default: 20,
    },
    // 宽度
    width: {
      type: String,
      default: '100%'
    },
    // 每行几列，总24
    span: {
      type: Number,
      default: 6
    },
    // 左侧
    labelWidth: {
      type: String,
      default: '100px'
    }
  },
}
</script>
<style lang="stylus" scoped>
.view-warper {
  display: flex
  line-height 30px
  &-value {
    flex 1
  }
}
</style>

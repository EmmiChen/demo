<template>
  <div class="utry-single-page" :style="{ width }">
    <slot />
  </div>
</template>
<script>
export default {
  name: 'uSinglePage',
  props: {
    /**
     * 页面宽度
     */
    width: {
      type: String
    }
  }
}
</script>
<style lang="stylus" scoped>
.utry-single-page{
  margin 0 auto
  padding 40px 100px
  h1 {
    margin 10px 0
    font-size: 16px
    font-weight 700
  }
}
/** 限制input输入框最大宽度 */
>>> .el-input {
  max-width: 300px
}
</style>

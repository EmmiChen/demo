<template>
  <el-button @click="save" :size="size" :disabled="disabled || locked" :loading="locked" :type="type">{{text}}</el-button>
</template>
<script>
export default {
  name: 'uSubmit',
  props: {
    /**
     * 按钮名称
     */
    text: {
      type: String,
      default: '保存',
    },
    /**
     * 禁用
     */
    disabled: {
      type: Boolean,
      default: false
    },
    /**
     * 按钮类型
     */
    type: {
      type: String,
      default: 'primary'
    },
    /**
     * 按钮尺寸
     */
    size: {
      type: String,
      default: 'medium'
    }
  },
  data () {
    return {
      locked: false,
    }
  },
  methods: {
    /**
     * 更新锁定状态
     */
    lock (flag) {
      this.locked = flag
    },
    /**
     * 触发保存，是否需要验证外部决断
     */
    save () {
      this.$emit('save')
    },
  }
}
</script>

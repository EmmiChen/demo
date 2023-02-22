<template>
  <el-dialog v-bind="$props" :visible="value" v-if="value" @close="submit(false)">
    <div class="el-dialog__title" v-drag slot="title">{{title}}</div>
    <div class="dialog-body" :style="{ height }">
      <slot></slot>
    </div>
    <div slot="footer" v-if="!readOnly">
      <slot name="footer">
        <uSubmit :disabled="disabled" :text="submitText" @save="submit(true)" ref="uSubmit" />
        <el-button @click="submit(false)">{{cancelText}}</el-button>
      </slot>
    </div>
  </el-dialog>
</template>
<script>
export default {
  name: 'uDialog',
  props: {
    /**
     * v-model，双向绑定
     * 通过input事件可内部触发关闭
     */
    value: {
      type: Boolean
    },
    // 灰色按钮名称，如取消或关闭
    cancelText: {
      type: String,
      default: '取消'
    },
    // 亮色按钮名称，如提交
    submitText: {
      type: String,
      default: '确定'
    },
    // 只读弹窗，底部没有操作按钮
    readOnly: {
      type: Boolean,
      default: false,
    },
    /**
     * 底部操作按钮置灰
     */
    disabled: {
      type: Boolean,
      default: false,
    },
    /**
     * 弹窗高度
     */
    height: {
      type: String,
      default: 'auto'
    },
    /**
     * 使用v-bind="$props"继承el-dialog默认props
     * 二次封装组件中统一赋值
     * @see https://element.eleme.cn/#/zh-CN/component/dialog
     */
    title: {
      type: String,
      default: '提示'
    },
    width: {
      type: String,
      default: '500px'
    },
    'close-on-click-modal': {
      type: Boolean,
      default: false,
    },
    'close-on-press-escape': {
      type: Boolean,
      default: true
    },
    'modal-append-to-body': {
      type: Boolean,
      default: false,
    },
    modal: {
      type: Boolean,
      default: true,
    }
  },
  methods: {
    /**
     * 按钮操作
     * 确认，触发close事件
     * 关闭/取消，直接关闭弹窗
     * @param {Boolean} flag 是否确认
     */
    submit (flag) {
      this.$emit('close', flag)
    },
    /**
     * 锁定按钮
     */
    lock (flag) {
      console.log('lock', flag)
      this.$refs.uSubmit.lock(flag)
    },
  },
}
</script>

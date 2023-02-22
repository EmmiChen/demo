<template>
  <div class="upload-warper">
    <el-button :size="size" @click="upload" type="primary">{{text}}</el-button>
    <input type="file" ref="upload" style="display: none" @change="onFileChange" />
    <div class="upload-warper-item">
      {{value.name}}
    </div>
  </div>
</template>
<script>
export default {
  name: 'upload',
  props: {
    value: {
      type: Object
    },
    /**
     * 上传按钮文案
     */
    text: {
      type: String,
      default: '选择文件'
    },
    /**
     * 文件下载限制单个xM
     */
    limit: {
      type: Number,
      default: 50,
    },
    /**
     * 上传按钮尺寸
     */
    size: {
      type: String,
      default: ''
    },
    /**
     * 限制文件类型
     */
    type: {
      type: String,
      default: 'xls,xlsx'
    }
  },
  methods: {
    /**
     * 点击触发上传文件
     */
    upload () {
      this.$refs.upload.click()
    },
    /**
     * 上传文件到服务器
     * @param {*} e 文件
     */
    onFileChange (e) {
      const file = e.target.files[0]
      if (!file) {
        return
      }
      if (!file.size) {
        this.$message.error('上传文件不能为空')
        return
      }

      const size = file.size / 1024 / 1024 // 转化为mb
      const type = file.name.replace(/^.*?\.(.*)$/, '$1')
      if (size >= this.limit) {
        this.$message.error(`上传单个文件不能超过${this.limit}MB`)
        return
      }
      if (this.type) {
        const accept = this.type.split(',')
        const checkRes = accept.some(i => type.includes(i))
        if (!checkRes) {
          this.$message.error(`文件格式不正确，只允许上传${this.type}文件`)
          return
        }
      }
      // 告知父组件，更新的文件信息
      this.$emit('input', {
        file,
        name: file.name,
      })
      this.$refs.upload.value = null
    },
  }
}
</script>
<style lang="stylus" scoped>
.upload-warper {
  font-size: 12px;
  color: #909399;
  &-item {
    margin-top 10px
    text-overflow: ellipsis;
    overflow: hidden;
    height: 1.8em;
    line-height: 1.8em;
    white-space: nowrap;
  }
}
</style>

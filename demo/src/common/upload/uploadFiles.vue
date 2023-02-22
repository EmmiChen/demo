<template>
  <div class="upload-warper">
    <el-button :size="size" @click="upload" type="primary" :disabled="value.length >= max">{{text}}</el-button>
    <input type="file" ref="upload" style="display: none" @change="onFileChange" />
    <!-- <div class="upload-tips">上传文件不能超过{{limit}}MB</div> -->
    <div class="upload-warper-item">
      <template v-if="value.length">
        <fileItem v-for="i in value" :key="i.fileId" :item="i" closable @close="delFile(i)"></fileItem>
      </template>
      <template v-else><fileItem>当前未选择文件</fileItem></template>
    </div>
  </div>
</template>
<script>
import fileItem from './file-item'

export default {
  name: 'upload',
  props: {
    value: {
      type: Array
    },
    /**
     * 文件下载限制单个xM
     */
    limit: {
      type: Number,
      default: 50,
    },
    /**
     * 最大文件个数
     */
    max: {
      type: Number,
      default: 1,
    },
    /**
     * 上传按钮文案
     */
    text: {
      type: String,
      default: '选择文件'
    },
    /**
     * 上传按钮尺寸
     */
    size: {
      type: String,
      default: 'small'
    },
    /**
     * 限制文件类型
     */
    type: {
      type: String,
      default: 'xls,xlsx'
    }
  },
  components: {
    fileItem
  },
  methods: {
    /**
     * 点击触发上传文件
     */
    upload () {
      this.$refs.upload.click()
    },
    /**
     * 删除文件
     * @param {object} item 文件对象
     */
    delFile (item) {
      this.$confirm(`是否删除${item.name}?`, '提示', {
        type: 'warning'
      }).then(() => {
        // 告知父组件，删除的文件
        this.$emit('input', this.value.filter(i => i.fileId !== item.fileId))
      }).catch(() => {})
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
      const arr = this.value
      // 告知父组件，更新的文件信息
      arr.push({
        file,
        name: file.name,
        fileId: this.getUUID()
      })
      this.$emit('input', arr)
      this.$refs.upload.value = null
    },
    /**
     * 生成唯一的UUID
     */
    getUUID () {
      var s = []
      var hexDigits = '0123456789abcdef'
      for (var i = 0; i < 36; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1)
      }
      s[14] = '4' // bits 12-15 of the time_hi_and_version field to 0010
      s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1) // bits 6-7 of the clock_seq_hi_and_reserved to 01
      s[8] = s[13] = s[18] = s[23] = '-'

      var uuid = s.join()
      return uuid
    },
  }
}
</script>
<style lang="stylus" scoped>
.el-tag + .el-tag {
  margin-left: 10px;
}

.upload-warper {
  .upload-tips {
    font-size: 12px;
    color: #909399;
  }
  &-item{
    margin-top 10px
  }
}
</style>

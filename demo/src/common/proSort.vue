<template>
  <div class="proSort-item">
    <el-select v-model="model.proSort" placeholder="项目编号" filterable allow-create clearable @change="sendData">
      <el-option label="全部" value="全部" v-if="showAll" />
      <el-option v-for="i in proSortList" :key="i" :label="i" :value="i"></el-option>
    </el-select>
  </div>
</template>
<script>
export default {
  name: 'proSort',
  props: {
    assignRole: String,
    proSort: String,
    // 展示全部
    showAll: {
      type: Boolean,
      default: false
    },
    // 状态，默认启用，0停用
    status: {
      type: String,
      default: '1'
    },
    // 项目编号是否草稿，默认1，0为草稿
    isDraft: {
      type: String,
      default: '1'
    },
    // 级联参数
    props: {
      type: Object,
      default: () => ({
        checkStrictly: false
      })
    },
  },
  data () {
    return {
      arr: [],
      proSortList: [],
      mock: [
        {
          value: 'FK',
          label: '发卡',
          children: [
            {
              value: 'G',
              label: '广赢卡'
            }
          ]
        }
      ],
      model: {}
    }
  },
  watch: {
    proSort (val) {
      if (!val) {
        this.arr = []
        this.handleRangeChange()
      }
    }
  },
  methods: {
    /**
     * 范围数组
     * @param {*} val 组件返回的值
     * @param {string} key 范围key值，','分隔
     */
    handleRangeChange (val) {
      const [proTypeSort = '', businessType = ''] = val || []
      const doNext = () => {
        this.model = {
          proTypeSort,
          businessType,
          proSort: ''
        }
        this.sendData()
      }
      if (businessType) {
        console.log('查询项目编号', businessType)
        this.$axios.post(this.$apis.importData.selectProSortByBusinessType, {
          proTypeSort,
          businessType,
          assignRole: this.assignRole,
          status: this.status,
          isDraft: this.isDraft
        }).then(res => {
          this.proSortList = res.data
          doNext()
        }).catch(() => {
          this.proSortList = []
          doNext()
        })
      } else {
        this.proSortList = []
        doNext()
      }
    },
    /**
     * 发送变更
     */
    sendData () {
      this.$emit('change', this.model)
    },
  }
}
</script>
<style lang="stylus" scoped>
.proSort-item {
  >>>.el-input {
    width 130px
  }
  >>>.el-select {
    margin-left 10px
  }
}
</style>

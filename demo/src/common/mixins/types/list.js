export default {
  data () {
    return {
      // 分页
      pageObj: {
        page: 1,
        size: 20,
        total: 0,
      },
      // 列表数据
      listData: [],
      listApi: '', // 列表请求地址
      checkList: [], // 多选数组
      mockData: '', // 模拟数据
      proSortList: [], // 项目编号列表
      uTableListLoading: false, // 列表加载状态
    }
  },
  methods: {
    /**
     * 列表刷新方法，如页面有定制需求，复制此方法到列表页即可
     * @param {Object}
     * @property {Number} page 当前页数
     * @property {Number} size 每页条数
     */
    refreshTable ({ page, size } = {}) {
      if (!this.listApi) {
        console.error('接口地址listApi未配置')
        return
      }
      if (page) this.pageObj.page = page
      if (size) this.pageObj.size = size
      this.uTableListLoading = true
      this.$axios.post(this.listApi, {
        size: this.pageObj.size,
        page: this.pageObj.page,
        pageData: this.pageData
      }).then(res => {
        this.listData = res.data.list
        this.pageObj.total = res.data.total
        this.uTableListLoading = false
        // 增加接口完成后回调方法，返回接口数据
        this.callbackAfter && this.callbackAfter(res.data)
      }).catch(() => {
        this.uTableListLoading = false
      })
    },
    /**
     * 列表刷新方法，无分页
     */
    refreshSingleTable () {
      if (!this.listApi) {
        console.error('接口地址listApi未配置')
        return
      }
      this.uTableListLoading = true
      this.$axios.post(this.listApi, this.pageData).then(res => {
        this.listData = res.data
        // 增加接口完成后回调方法，返回接口数据
        this.callbackAfter && this.callbackAfter(res.data)
        this.uTableListLoading = false
      }).catch(() => {
        // this.mockData && this.callbackAfter && this.callbackAfter(this.mockData)
        this.uTableListLoading = false
      })
    },
    /**
     * 多选变更监听
     * @param {Array} arr 选中列
     */
    handleSelectionChange (arr) {
      this.checkList = arr
    },
    /**
     * 导出查询结果
     */
    exportBatchData (url) {
      console.log('导出查询结果', url)
      this.$utils.exportFile(this.pageData, url)
    },
    /**
     * 导出所选案件
     */
    exportBatchDataByCheckList (url, id = 'id') {
      const ids = this.checkList.map(i => i[id]).join()
      console.log('导出所选', url, ids)
      this.$utils.exportFile({
        ids
      }, url)
    },
  },
}

<template>
  <div class="list-demo">
    <h2>【页面开发DEMO】，src/components/demo/page，复制文件夹后按需开发</h2>
    <el-table :data="list">
      <el-table-column prop="name" label="页面类型" width="180">
      </el-table-column>
      <el-table-column prop="path" label="路由地址" width="180">
      </el-table-column>
      <el-table-column prop="dir" label="文件路径">
      </el-table-column>
      <el-table-column label="操作" width="90">
        <template slot-scope="scope">
          <el-link @click="handleClick(scope.row)">查看</el-link>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  name: 'list-demo',
  data () {
    return {
      list: [
        {
          name: '多页签',
          path: '/tabs',
          dir: 'src/components/demo/page'
        },
        {
          name: '基础列表',
          path: '/tab1',
          dir: 'src/components/demo/page/tabs/tab1'
        },
        {
          name: '批量操作',
          path: '/tab2',
          dir: 'src/components/demo/page/tabs/tab2'
        },
        {
          name: '左右结构',
          path: '/tab3',
          dir: 'src/components/demo/page/tabs/tab3'
        },
        {
          name: '列表排序',
          path: '/tab4',
          dir: 'src/components/demo/page/tabs/tab4'
        },
        {
          name: '表单提交',
          path: '/tab5',
          dir: 'src/components/demo/page/tabs/tab5'
        },
      ]
    }
  },
  methods: {
    handleClick (row) {
      this.$router.push(row.path)
    }
  }
}
</script>
<style lang="stylus" scoped>
.list-demo {
  display: flex;
  flex-direction: column;
}
</style>

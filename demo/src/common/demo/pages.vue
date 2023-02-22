<template>
  <el-table height="100%" :data="getPageList()" :row-key="(i) => i.path + i.title" :default-expand-all="true">
    <el-table-column prop="title" label="菜单">
    </el-table-column>
    <el-table-column prop="path" label="路由地址">
    </el-table-column>
    <el-table-column label="页面权限">
      <template slot-scope="props" v-if="props.row.meta">
        {{props.row.meta.getFuncId ? '是' : '否'}}
        <span v-if="props.row.meta.code">自定义code：({{props.row.meta.code}})</span>
      </template>
    </el-table-column>
    <el-table-column label="查看页面" width="200">
      <template slot-scope="props" v-if="props.row.path">
        <el-link type="primary" @click="$router.push(props.row.path)">打开</el-link>
        <!-- <el-link type="primary" @click="$utils.openNewTab(props.row.path, props.row.title)">Tab打开</el-link>
        <el-link type="primary" @click="$utils.refreshFullPath(props.row.path)">刷新tab</el-link> -->
      </template>
    </el-table-column>
  </el-table>
</template>
<script>
import { routeType } from '@/router/type'

export default {
  name: 'pages-demo',
  methods: {
    /**
     * 获取页面列表
     */
    getPageList () {
      const routes = this.$router.options.routes.filter(i => i.meta)
      return Object.keys(routeType).map(i => ({
        title: routeType[i],
        path: '',
        meta: {},
        children: routes.filter(j => j.meta.type === i).map(k => ({
          title: k.meta.title,
          path: k.path,
          meta: k.meta,
        }))
      }))
    },
  },
}
</script>
<style lang="stylus" scoped>
>>> .el-link {
  margin-right 10px
}
</style>

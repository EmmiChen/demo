<template>
  <div>
    <h2>默认除导入导出和底层方法，所有业务接口均使用json格式，axios配置已全局设置</h2>
    <el-tabs>
      <el-tab-pane v-for="item in Object.keys($apis)" :key="item" :label="item">
        <el-table :data="Object.keys($apis[item])">
          <el-table-column type="index" width="50">
          </el-table-column>
          <el-table-column label="接口调用方式">
            <template v-slot="scope">
              this.$apis.{{item}}.{{scope.row}}
            </template>
          </el-table-column>
          <el-table-column label="接口路径">
            <template v-slot="scope">
              {{$apis[item][scope.row]}}
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
export default {
  name: 'apis-demo'
}
</script>

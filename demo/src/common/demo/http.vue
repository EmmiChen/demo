<template>
  <div>
    <h2>【标准接口】无需处理异常，res对应接口返回的res.obj</h2>
    <pre>{{code}}</pre>
    <h2>【标准接口】异常处理，如列表清空，接口500的错误提示底层统一处理</h2>
    <pre>{{code1}}</pre>
    <h2>【特殊接口】返回格式不标准，res对应接口返回的res</h2>
    <pre>import axios from 'axios'</pre>
    <pre>{{code2}}</pre>
    <h2>【异常处理】根据状态码统一处理错误信息</h2>
    <el-table :data="httpError">
      <el-table-column prop="code" label="状态码">
      </el-table-column>
      <el-table-column prop="reason" label="场景">
      </el-table-column>
      <el-table-column prop="desc" label="错误处理">
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  name: 'http-demo',
  data () {
    return {
      httpError: [
        {
          code: '500',
          reason: '业务执行失败',
          desc: '小飘窗展示错误信息'
        },
        {
          code: '403',
          reason: '服务器错误',
          desc: '小飘窗展示错误信息'
        },
        {
          code: '404',
          reason: '接口地址错误',
          desc: '小飘窗展示接口地址错误'
        },
        {
          code: '401',
          reason: '用户票据失效或缺失',
          desc: '向主工程发送postMessage，提示主工程登出'
        }
      ],
      code: `this.$axios.post(this.$apis.test, {
  name: 1
}).then(res => {
  console.log(res)
})`,
      code1: `this.$axios.post(this.$apis.test, {
  name: 1
}).then(res => {
  console.log(res)
}).catch(() => {
  // 异常处理
})`,
      code2: `axios.post(this.$apis.test, {
  name: 1
}).then(res => {
  console.log(res)
}).catch(() => {
  // 异常处理
})`,
    }
  }
}
</script>

<template>
  <div>
    <h2>【Mock数据】/src/mock/types</h2>
    <section>
      <p>前端本地开发，为提高效率，先行模拟数据，文件`src/mock/types`文件夹下，按照模块新建文件，程序自动进行打包</p>
      <p>以树形模块为例，模拟数据都在文件`src/mock/types/tree.js`内，可用以下方式调用[mock数据]</p>
    </section>
    <pre>this.$mock.tree.list</pre>
    <pre>{{$mock.tree.list}}</pre>
  </div>
</template>
<script>
export default {
  name: 'mock-demo',
}
</script>

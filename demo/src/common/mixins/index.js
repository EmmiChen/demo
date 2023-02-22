/**
 * 通过webpack自动解析目录types下文件，自动解析文件全局mixin
 * @see https://webpack.docschina.org/api/module-methods/#require-context
 */
import Vue from 'vue'

// 解析目录types下文件
const files = require.context('./types', false, /.js$/)
// 遍历目录下文件
files.keys().forEach(item => {
  Vue.mixin(files(item).default || files(item))
})

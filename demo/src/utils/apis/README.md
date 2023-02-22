# 接口整合说明

## 原理

根据webpack特性，自动获取`types`文件夹下文件，根据文件名生成总的接口对象，并挂载在`vue.$apis`下

## 模块划分

以业务或子站为纬度进行接口的分类整理

### 已有模块

```
|-- ccweb                              // ccweb主工程
|-- ckms                               // 知识库
|-- hrm                                // hrm子站
```

### 接口调用方法

```js
this.$axios.post(this.$apis.ccweb.xxx)
```

### 新增模块

举例，新增模块`test`，直接在`types`文件夹下新建test.js

test.js

```js
const {
  gateway
} = sysConfig

export default {
  url: gateway + '/test',
}
```

## 参考文档

- [webpack: require-context](https://webpack.docschina.org/api/module-methods/#require-context)
- [path: basename](http://nodejs.cn/api/path/path_basename_path_ext.html)

```js
require.context(
  directory: String,
  includeSubdirs: Boolean /* 可选的，默认值是 true */,
  filter: RegExp /* 可选的，默认值是 /^\.\/.*$/，所有文件 */,
  mode: String  /* 可选的，'sync' | 'eager' | 'weak' | 'lazy' | 'lazy-once'，默认值是 'sync' */
)
```
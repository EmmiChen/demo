# 前端验证方法封装

## Methods 验证方法

全局混入了checkFormInput方法，业务层只处理验证成功的情况，验证失败统一抛出前端错误验证
```js
this.$message.error('输入不正确')
```

业务使用
```js
checkFormInput (formName, callback)
```

## Props
|参数名|类型|说明|
|---|---|---|
|formName|string|表单的ref名称|
|callback|string|验证成功后执行的回调方法名称|

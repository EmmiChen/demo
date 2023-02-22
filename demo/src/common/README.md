# 自定义组件使用说明

|名称|说明|
|---|---|
|uWarper|页面结构组件，左中右结构|
|uTree|左侧树结构|
|uPage|分页组件|
|uForm|便捷表单，基于el-form二次封装|
|uTable|便捷表格，基于el-table二次封装|
|uTabs|多页签页面|
|uDialog|便捷弹窗，基于el-dialog二次封装|
|uUpload|单个文件上传|
|uUploadImg|单个图片上传|
|uSinglePage|单独页面|
|uSubmit|提交按钮，防止重复点击|
|uView|展示组件|
|editor|富文本quill|

## uWarper

页面结构组件，左中右结构

```html
<uWarper>
  <template slot="top"></template>
</uWarper>
```

组合使用示例

```html
<uWarper>
  <template slot="top">
    <uForm :model="pageData" :options="options" @change="refreshTable"></uForm>
  </template>
  <template slot="table">
    <uTable :data="list" :header="header"></uTable>
  </template>
  <template slot="page">
    <uPage @change="refreshTable" :page="pageObj" />
  </template>
</uWarper>
```


### Slot

|名称|说明|
|---|---|
|left|左侧结构，如分类|
|top|中间头部，搜索栏|
|table|中间中部，表格，超出自动滚动|
|page|中间底部，分页|
|right|右侧结构|
|submit-sort|排序|

### Props

|名称|说明|默认值|
|---|---|---|
|showAction|是否显示操作栏|false|
|showPage|是否显示分页|true|

### Event

|名称|说明|
|---|---|
|resetForm|重置，可增加自定义重置方法|

## uTree

左侧树结构

```html
<uTree></uTree>
```

### Slot

|名称|说明|
|---|---|
|search|搜索栏|
|-|树形结构|

## uPage

分页组件

```html
<uPage @change="refreshTable" :page="pageObj" />
```

### Props

|名称|说明|默认值|
|---|---|---|
|page|分页信息|-|

#### page

|名称|说明|默认值|
|---|---|---|
|page|当前页|1|
|size|每页条数|10|
|total|总条数|0|

### Events

|名称|说明|
|---|---|
|change|每页条数或当前页变化触发|

## uForm

便捷表单，基于el-form二次封装

[el-form](https://element.eleme.cn/#/zh-CN/component/form)

```html
<uForm :model="pageData" :options="options" @change="refreshTable">
  <template slot="test">
    <el-select v-model="pageData.test">
      <el-option label="杭州" value="hangzhou"></el-option>
      <el-option label="上海" value="shanghai"></el-option>
    </el-select>
  </template>
</uForm>
<uForm :model="pageData" :options="options" @change="refreshTable"></uForm>
```

### Props

|名称|说明|默认值|
|---|---|---|
|model|表单数据对象，同el-form|-|
|options|表单配置信息，用于渲染表单结构|-|

#### options例子

```js
data () {
  return {
    options: [
      {
        label: '日期时间范围',
        key: 'backStartTime,backEndTime',
        type: 'datetimerange',
      },
      {
        label: '日期范围',
        key: 'startTime,endTime',
        type: 'daterange',
      },
      {
        label: '区间',
        key: 'min,max',
        type: 'range'
      },
      {
        label: '公告类型',
        key: 'type',
        type: 'select',
        list: [
          {
            key: 'a',
            value: 'a1'
          },
          {
            key: 'b',
            value: 'b1'
          },
        ]
      },
      {
        label: '是否启用',
        key: 'isRadio',
        type: 'radio',
      },
      // 自定义，一般不需要
      {
        label: '自定义',
        key: 'test',
        type: 'slot',
      },
    ],
  }
}
```

### Event

|名称|说明|
|---|---|
|change|查询，重置触发|

### Slot

|名称|描述|
|---|---|
|start|表单前置|
|end|表单元素后|
|button-left|查询按钮前|
|submit-btn|按钮操作，默认使用查询和重置|
|button-right|重置按钮后|
|right|表单后置|
|自定义|type设置为slot的元素|


## uTable

便捷表格，基于el-table二次封装

[el-table](https://element.eleme.cn/#/zh-CN/component/table)

```html
<uTable :data="list" :header="header"></uTable>
```

### Props

|名称|说明|默认值|
|---|---|---|
|data|列表数据，同el-table|-|
|selection|是否多选模式|false|
|header|表格配置信息，用于渲染表单结构|-|
|showIndex|展示序号|true|

#### header栗子

```js
data () {
  return {
    header: [
      {
        label: '批次号',
        key: 'id',
      },
      {
        label: '名称',
        key: 'title',
      },
    ],
  }
}
```

### Event

直接使用el-table同名方法

### Slot

|名称|描述|
|---|---|
|left|前置列表|
|right|后置列表|
|自定义|slot值和key对应|

#### 自定义插槽栗子

```js
data () {
  return {
    header: [
      {
        label: '批次号',
        key: 'id',
      },
      {
        label: '名称',
        key: 'title',
      },
    ],
  }
}
```

```html
<el-table-column label="批次号" slot="id">
  <template slot-scope="scope">
    <el-link type="primary" @click="handleEdit(scope.row)">{{scope.row.id}}</el-link>
  </template>
</el-table-column>
```

## uTabs

多页签页面

### 每个页签对应不同文件

```html
<template>
  <uTabs :tabs="tabs">
    <template v-slot="scope">
      <component :is="scope.active" />
    </template>
  </uTabs>
</template>
<script>
import tab1 from './tabs/tab1'
import tab2 from './tabs/tab2'

export default {
  name: 'page-demo',
  data () {
    return {
      tabs: [
        {
          name: '页签1',
          key: 'tab1'
        },
        {
          name: '页签2',
          key: 'tab2'
        },
      ],
    }
  },
  components: {
    tab1,
    tab2,
  },
}
</script>
```

### 每个页签对应相同文件

```html
<template>
  <uTabs :tabs="tabs">
    <template v-slot="scope">
      <list :active="scope.active" />
    </template>
  </uTabs>
</template>
<script>
import list from './tabs/list'

export default {
  name: 'singleTab-demo',
  data () {
    return {
      tabs: [
        {
          name: '页签1',
          key: 'tab1'
        },
        {
          name: '页签2',
          key: 'tab2'
        },
      ],
    }
  },
  components: {
    list,
  },
}
</script>

```
### Props

|名称|说明|默认值|
|---|---|---|
|tabs|页签设置|name和key组成的对象数据，key唯一|
|activeTab|默认页签|第一个页签的key|

### Slots

|名称|描述|
|---|---|
|-|页签|
|action|多页签共用顶部操作区|


## uDialog

便捷弹窗，基于el-dialog二次封装

[el-dialog](https://element.eleme.cn/#/zh-CN/component/dialog)

```html
<uDialog v-model="value" v-if="value" @close="close"></uDialog>
```

```js
data () {
  return {
    value: false
  }
},
methods: {
  close () {
    this.$emit('close')
  }
}
```

### 编辑弹窗场景

列表操作栏中`编辑`按钮，点击打开弹窗，自动把当前选中行数据放入弹窗表单中，表单提交成功后触发`close`事件，执行`refreshTable`重新渲染列表数据

编辑按钮
```html
<el-button type="text" @click="editDialog(scope.row)">编辑</el-button>
```

弹窗
```html
<dialogDemo title="编辑" v-model="dialog.edit" v-if="dialog.edit" @close="refreshTable" ref="editDialog" />
```

增加方法

```js
/**
 * 编辑
 */
editDialog (row) {
  this.dialog.edit = true
  if (Object.keys(row).length) {
    this.$nextTick(() => {
      this.$refs.editDialog.setFormData(row)
    })
  }
},

```

### Props

|名称|说明|默认值|
|---|---|---|
|v-model|弹窗回显，布尔值|false|
|submitText|亮色按钮名称，如提交|确定|
|cancelText|灰色按钮名称，如取消或关闭|取消|
|readOnly|只读弹窗，底部没有操作按钮|false|
|disabled|底部操作按钮置灰|false|

### Events

|名称|说明|
|---|---|
|close|点击弹窗内确定触发|

### Methods

|名称|说明|
|---|---|
|setFormData|弹窗表单赋值|

## uUpload

文件上传

```html
<uUpload v-model="file" label='增加附件'></uUpload>
```

```js
data () {
  return {
    file: {}
  }
},
```
### Props

|名称|说明|默认值|
|---|---|---|
|v-model|文件对象|-|
|label|按钮名称，如提交|上传|
|limit|文件下载限制单个xM|50|
|type|文件类型|xls,xlsx|

## uUploadImg

图片上传，一般应用场景均在表单中，给出表单示例如下

```html
<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px">
  <el-form-item label="图片" prop="imgUrl">
    <uUploadImg v-model="ruleForm.imgUrl" @input="validateField('imgUrl')" />
  </el-form-item>
  <el-form-item label="图片文件" prop="imgFile">
    <uUploadImg :autoUpload="false" v-model="ruleForm.imgFile" @input="validateField('imgFile')" />
  </el-form-item>
</el-form>
```

```js
data () {
  return {
    ruleForm: {
      imgUrl: '',
      imgFile: 'http://localhost:1113/static/img/img.png',
    },
    rules: {
      imgUrl: [
        this.$rule.required('图片')
      ],
      imgFile: [
        this.$rule.required('图片文件', 'change')
      ]
    }
  },
},
methods: {
  /**
   * 更新表单验证
   * @param {string} field 字段名称
   */
  validateField (field) {
    this.$refs.ruleForm.validateField(field)
  },
}
```
### Props

|名称|说明|默认值|
|---|---|---|
|v-model|图片路径或对象|-|
|max|图片大小限制，默认500k|500|
|accept|可选文件类型|image/jpg,image/jpeg,image/png,image/gif|
|tip|提示语|仅支持jpg,png,gif文件|
|autoUpload|自动上传文件服务器|true|
|api|图片上传服务器地址|默认接口|

## uSinglePage

单独页面，用于统一样式

```html
<uSinglePage>
  <div>hello world</div>
</uSinglePage>
```
### Props

|名称|说明|默认值|
|---|---|---|
|width|宽度|-|

### Slots

|名称|描述|
|---|---|
|-|页面内容|

## uSubmit

提交按钮，防止重复提交，`checkFormInput`为全局方法，用于表单验证

```html
<uSubmit text="保存" @save="checkFormInput('ruleForm', 'doSave')" ref="uSubmit" />
```

methods增加对应方法

```js
/**
 * 保存
 */
doSave () {
  this.$refs.uSubmit.lock(true)
  // 模拟2秒后返回失败，解锁按钮
  setTimeout(() => {
    this.$refs.uSubmit.lock(false)
  }, 2000)
  // 模拟2秒后返回成功，提示并关闭页签
  // setTimeout(() => {
  //   this.$utils.closeTabWithMsg()
  // }, 2000)
},
```

### Props

|名称|说明|默认值|
|---|---|---|
|text|按钮文案|保存|

### Events

|名称|说明|
|---|---|
|save|按钮点击后触发方法|

## uView

用于展示内容

```html
<uView :options="options" :span="12">
  <templete slot="rule">自定义信息</templete>
</uView>
```

```js
data () {
  return {
    options: [
      {
        label: '项目类别',
        value: '发卡',
      },
      {
        label: '业务类型',
        value: '普通发卡',
      },
      {
        label: '名称',
        value: '名字很长需要单独一行',
        span: 24,
      },
      {
        label: '指标',
        slot: 'rule',
        span: 24,
      }
    ]
  }
}
```

### Props

|名称|说明|默认值|
|---|---|---|
|options|配置项|label、value、span、slot组成的对象数组|
|gutter|间隔|20|
|width|宽度|100%|
|span|每行几列，总24|6|
|labelWidth|标签宽度|100px|

### Slots

|名称|说明|
|---|---|
|slot|配置了slot参数的数据|
## editor

富文本组件，基于quill

```html
<editor v-model="content"></editor>
```

```js
data () {
  return {
    content: ''
  }
}
```

### Props

|名称|说明|默认值|
|---|---|---|
|v-model|富文本的内容|-|
|api|图片上传地址,清空则不显示上传图片按钮||
|name|多个富文本在同页面使用，用其来区分|myTextEditor|
|importable|导入功能，默认关闭|false|


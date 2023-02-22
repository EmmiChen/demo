const {
  gateway
} = sysConfig

const pre = '/xform'

/**
 * xform
 * @see http://10.0.33.133:9032/swagger-ui.html#/
 */
export default {
  // 表单管理
  getAllClassifyTrees: gateway + pre + '/classify/getAllClassifyTrees.do', // 获取所有表单类
  addOrUpdateClassifyInit: gateway + pre + '/classify/addOrUpdateClassifyInit.do', // 新增或更新表单分类
  addOrUpdateClassify: gateway + pre + '/classify/addOrUpdateClassify.do', // 新增或更新表单分类
  delClassify: gateway + pre + '/classify/delClassify/', // 删除表单分类
  getSites: gateway + pre + '/manage/getSites.do', // 获取子站分类数据
  list: gateway + pre + '/manage/list.do', // 获取列表数据
  getFormInfo: gateway + pre + '/form/getFormInfo.do', // 获取表单信息
  save: gateway + pre + '/manage/save.do', // 表单信息新增
  del: gateway + pre + '/manage/del.do?metaDataId=', // 删除表单
  publish: gateway + pre + '/manage/publish.do?metaDataId=', // 发布表单
  preview: gateway + pre + '/manage/preview.do?metaDataId=', // 预览表单
  design: gateway + pre + '/form/design.do?metaDataId=', // 设计表单

  // form-data-controller
  submit: gateway + pre + '/data/submit.do', // 保存工单表单，表单引擎
  update: gateway + pre + '/data/update.do', // 更新工单表单，表单引擎
  echo: ({
    formCode,
    formDataId,
    siteCode
  }) => gateway + pre + '/data/echo.do?formCode=' + formCode + '&formdataid=' + formDataId + '&siteCode=' + siteCode, // 根据工单信息获取表单详细信息，表单引擎

  download: gateway + pre + '/fileForm/download.do?fileUrl=', // 下载
}

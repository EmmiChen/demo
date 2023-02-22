const {
  gateway,
} = sysConfig

const pre = `${gateway}/obs-base`

/**
 * 数据导入
 * @see http://10.0.7.106:6094/swagger-ui.html#/
 */
export default {
  // 数据导入管理Data Import From Txt Controller
  uploadTxtFile: pre + '/dataImportFromTxt/uploadTxtFile', // 上传导入文件

  // 中间库/生产库导入历史Import History Controller
  backData: pre + '/importHistory/backData', // 回退

  selectCustomInfoByPage: pre + '/importHistory/selectCustomInfoByPage', // 分页查询客户信息
  selectImportHistorySourceByPage: pre + '/importHistory/selectImportHistorySourceByPage', // 分页查询中间库导入历史

  selectImportHistoryByPage: pre + '/importHistory/selectImportHistoryByPage', // 分页查询生产库导入历史

  // 导入规则管理 Import Rule Controller

  addImportRule: pre + '/importRule/addImportRule', // 新增导入规则
  deleteImportRules: pre + '/importRule/deleteImportRules', // 删除导入规则
  deleteImportRuleTimeTask: pre + '/importRule/deleteImportRuleTimeTask', // 删除导入规则定时任务
  executeImportRules: pre + '/importRule/executeImportRules', // 立即执行多条导入规则
  findImportRuleById: pre + '/importRule/findImportRuleById', // 根据id查询导入规则
  reloadCanImpNumByIds: pre + '/importRule/reloadCanImpNumByIds', // 更新规则下可导入数量
  saveImportRuleTimeTask: pre + '/importRule/saveImportRuleTimeTask', // 保存导入规则定时任务
  selectFieldValueByPage: pre + '/importRule/selectFieldValueByPage', // 分页查询某个字段的值选项
  selectImportRuleByPage: pre + '/importRule/selectImportRuleByPage', // 分页查询导入规则
  selectImportRuleTimeTaskByPage: pre + '/importRule/selectImportRuleTimeTaskByPage', // 分页查询导入规则定时任务
  updateImportRule: pre + '/importRule/updateImportRule', // 修改导入规则
  updatePreDictImpNum: pre + '/importRule/updatePreDictImpNum', // 修改规则预设导入数量

  viewProductByBusinessType: pre + '/productTable/viewProductByBusinessType', // 通过业务类型查看通用产品详情

  selectProSortByBusinessType: pre + '/tbProject/selectProSortByBusinessType', // 根据业务类型查询项目编号
  addWorkForm: pre + '/workFrom/addWorkForm', // 工单数据添加
  selectDraftsPage: pre + '/workFrom/selectDraftsPage', // 草稿箱列表
  selectWorkFormInfo: pre + '/workFrom/selectWorkFormInfo', // 获取工单数据
  updateWorkForm: pre + '/workFrom/updateWorkForm', // 更新工单数据

  downloadTemplate: pre + '/netApply/downloadTemplate', // 网申、客服工单数据分配模板下载
  exportIncompleteInfo: pre + '/netApply/exportIncompleteInfo', // 导出网申工单数据
  uploadNetWorkFile: pre + '/netApply/uploadNetWorkFile', // 网申、客服工单数据分配名单文件上传
  selectIncompletePage: pre + '/netApply/selectIncompletePage', // 网申列表

  selectWorkFormDataByPage: pre + '/workFrom/selectWorkFormDataByPage', // 客服工单列表
  exportCustomerWorkFormData: pre + '/workFrom/exportCustomerWorkFormData', // 导出客服工单数据息

  selectProSortByBusinessTypeForAll: pre + '/tbProject/selectProSortByBusinessTypeForAll', // 根据业务类型查询所有项目编号。含未启用
}

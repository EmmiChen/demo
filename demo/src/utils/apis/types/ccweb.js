const {
  gateway
} = sysConfig

const pre = '/ccweb'
const preBase = '/obs-base'

/**
 * CCWEB API
 * ccweb接口
 * @see http://10.0.7.30:6086/swagger-ui.html#/
 */
export default {
  // 系统配置[x]
  downloadFile: gateway + pre + '/system/downloadFile', // 下载文件

  getDictionariesDetailByCode: gateway + pre + '/system/getDictionariesDetailByCode', // 获取字典项目

  selectNoticeByPage: gateway + pre + '/notice/selectNoticeByPage', // 分页查询所有公告
  getAllConfigType: gateway + pre + '/config/getAllConfigType',

  // 短信管理
  selectSMSTemplates: gateway + preBase + '/sms/selectSMSTemplates', // 查询短信模板列表
  saveSMSTemplate: gateway + preBase + '/sms/saveSMSTemplate', // 增加或修改短信
  deleteSMSTemplate: gateway + preBase + '/sms/deleteSMSTemplate', // 删除短信
  updateEnable: gateway + preBase + '/sms/updateEnable', // 修改启用状态
  selectSMSTemplate: gateway + preBase + '/sms/selectSMSTemplate', // 根据id查询模板
  selectFixedSMSTemplates: gateway + preBase + '/sms/selectFixedSMSTemplates', // 查询固化的短信模板
  selectSMSTTemplates: gateway + preBase + '/smsTemplate/selectSMSTemplates', // 分页查询已经完成的相关模板
  insertSmsTemplate: gateway + preBase + '/smsTemplate/insertSmsTemplate', //  增加新的短信模板
  selectSMSTemplateByNO: gateway + preBase + '/smsTemplate/selectSMSTemplateByNO', // 按Id查询新的短信模板
  updateSmsTemplate: gateway + preBase + '/smsTemplate/updateSmsTemplate', // 修改新的短信模板
  deleteSMSTTemplate: gateway + preBase + '/smsTemplate/deleteSMSTemplate', // 修改新的短信模板
  selectTemplates: gateway + preBase + '/smsTemplate/selectTemplates', // 查询已经完成的相关模板

}

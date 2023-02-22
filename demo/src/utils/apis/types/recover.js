const {
  gateway
} = sysConfig

const obsUrl = `${gateway}/obs-base`

/**
 * 数据回收 API
 * @see http://10.0.7.30:6086/swagger-ui.html#/
 */
export default {
  // 系统回收规则
  selectSystemRuleByPage: obsUrl + '/systemRecover/selectSystemRuleByPage', // 分页查询系统回收规则
  getRuleDetailById: obsUrl + '/systemRecover/getRuleDetailById', // 根据id，查看系统回收规则详情
  deleteRuleByIds: obsUrl + '/systemRecover/deleteRuleByIds', // 批量删除系统回收规则
  saveRuleAndDetail: obsUrl + '/systemRecover/saveRuleAndDetail', // 保存系统回收规则
  // 项目规则
  getCurrentProRule: obsUrl + '/systemRecover/getCurrentProRule', // 查询当前项目使用的回收规则及详情
  saveProRule: obsUrl + '/systemRecover/saveProRule', // 保存项目自定义规则
  deleteProRuleAndGetNewRule: obsUrl + '/systemRecover/deleteProRuleAndGetNewRule', // 删除项目回收规则

  // 手工回收规则
  batchAllocateToOne: obsUrl + '/manualRecover/batchAllocateToOne', // 将一批数据转分配给指定员工
  batchRecoverByCondition: obsUrl + '/manualRecover/batchRecoverByCondition', // 根据条件批量回收
  getAllocateCountAndList: obsUrl + '/manualRecover/getAllocateCountAndList', // 根据条件，获取批量分配的数量和数据列表
  recoverByDataIdList: obsUrl + '/manualRecover/recoverByDataIdList', // 根据数据id列表回收数据
  selectTargetDataByPage: obsUrl + '/manualRecover/selectTargetDataByPage', // 分页查询可指定回收的数据

  // 自定义回收规则
  batchDeleteRules: obsUrl + '/customizeRecover/batchDeleteRules', // 批量删除自定义规则
  downloadTemplate: obsUrl + '/customizeRecover/downloadTemplate', // 下载回收规则excel模板
  getDetailByRuleId: obsUrl + '/customizeRecover/selectRuleDetailByPage', // 查看自定义规则内容及结果
  selectCustomizeRuleByPage: obsUrl + '/customizeRecover/selectCustomizeRuleByPage', // 分页查询自定义回收规则
  uploadRuleFile: obsUrl + '/customizeRecover/uploadRuleFile', // 上传自定义回收规则

  // 回收日志
  getLogDetailByLogId: obsUrl + '/recoverLog/selectLogDetailByPage', // 根据日志id，查询数据回收日志详情
  selectRecoverLogByPage: obsUrl + '/recoverLog/selectRecoverLogByPage', // 分页查询数据回收日志详情
}

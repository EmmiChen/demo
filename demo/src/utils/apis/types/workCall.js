const {
  gateway,
} = sysConfig

const pre = `${gateway}/obs-bussiness`
const ccweb = '/ccweb-dev'

/**
 * 业务外呼
 * @see http://10.0.7.17:6094/swagger-ui.html#/
 */
export default {
  getValidResultByBusinessType: pre + '/resultDefine/getValidResultByBusinessType', // 根据业务类型，查询有效的结果定义

  addBlackListSeat: pre + '/blackList/addBlackListSeat', // 新增黑名单/禁止外呼名单坐席端录入

  isBlackBusiness: pre + '/blackList/isBlackBusiness', // 判断手机号和业务类型是否禁呼

  // 任务列表
  taskList: pre + '/outBound/selectFixedProductTaskByPage', // 分页查询通用产品任务列表

  selectOutBound: pre + '/outBound/selectOutBound', // 查询业务外呼详情

  addCallOutResult: pre + '/callOutResult/addCallOutResult', // 新增外呼结果

  addCallOutLog: pre + '/callOutLog/addCallOutLog', // 新增外呼记录,小豪写的，需要现场根据要求再写
  getCallRecordByDataId: pre + '/callOutLog/getCallRecordByDataId', // 查询某个人的外呼记录

  insertFormAndBaseId: pre + '/outBound/insertFormAndBaseId', // 表单id绑定baseId

  selectFixedSuccess: pre + '/outBound/selectFixedSuccess', // 查询通用产品成功列表
  exportFixedSuccess: pre + '/outBound/exportFixedSuccess', // 导出通用产品成功列表
  selectFixedSuccessByBaseId: pre + '/outBound/selectFixedSuccessByBaseId', // 查询通用产品成功列表

  findUserByGroups: gateway + ccweb + '/group/findUserByGroups', // 根据当前登录人获取自己和子节点下所有员工
  isSaleMember: gateway + ccweb + '/group/isSaleMember', // 判断账号在不在销售线下
  findAccountById: gateway + ccweb + '/group/findAccountById', // 根据工号判定是否是组长，组长就返回所有组员工号，返回一个字符串用逗号间隔，非组长返回自己
  getLoginInfo: gateway + ccweb + '/user/getLoginInfo', // 调取自己的工号

}

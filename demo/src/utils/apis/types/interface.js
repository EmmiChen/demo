const {
  gateway
} = sysConfig

const pre = '/ccweb-dev'
export default {
  // 禁呼名单
  selectInterfaceConfigByPage: gateway + pre + '/tradeUtil/selectInterfaceConfigByPage', // 添加和编辑禁呼用户
  insertInterfaceConfigByPage: gateway + pre + '/tradeUtil/insertInterfaceConfig', // 查询禁呼用户的列表
  updateInterfaceConfigByPage: gateway + pre + '/tradeUtil/updateInterfaceConfig', // 查询禁呼用户的列表
}

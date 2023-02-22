const {
  gateway
} = sysConfig

const pre = '/obs-base'
export default {
  // 禁呼名单
  saveBlackList: gateway + pre + '/blackList/saveBlackList', // 添加和编辑禁呼用户
  selectBlackListByPage: gateway + pre + '/blackList/selectBlackListByPage', // 查询禁呼用户的列表
  deleteBlackList: gateway + pre + '/blackList/deleteBlackList', // 删除特定禁呼用户
  findInfoById: gateway + pre + '/blackList/findInfoById', // 查看特定禁呼用户
  checkPass: gateway + pre + '/blackList/checkPass', // 审核用户通过
  checkNotPass: gateway + pre + '/blackList/checkNotPass', // 审核用户未通过
  exportBlackListInfo: gateway + pre + '/blackList/exportBlackListInfo', // 禁呼用户导出

  // 敏感名单
  saveSensitiveList: gateway + pre + '/blackList/saveSensitiveList', // 新增敏感名单菜单端录入
  selectSensitiveListByPage: gateway + pre + '/blackList/selectSensitiveListByPage', // 查询敏感用户的列表
  deleteSensitiveList: gateway + pre + '/blackList/deleteSensitiveList', // 删除特定敏感用户
  findSensitiveInfoById: gateway + pre + '/blackList/findSensitiveInfoById', // 查询特定敏感用户
}

const {
  gateway,
} = sysConfig

const pre = `${gateway}/obs-base`

/**
 * 看板目标值设定
 * @see http://10.0.6.154:6094/swagger-ui.html#/
 */
export default {
  addTarget: pre + '/tbTarget/addTarget', // 新增和修改看板目标设定
  selectTargetByPage: pre + '/tbTarget/selectTargetByPage', // 分页查看看板目标设定

  selectAllPerson: pre + '/tbTarget/selectAllPerson', // 查询所有人员信息
  selectAllPersonForGroup: pre + '/tbTarget/selectAllPersonForGroup', // 查询当前部门下所有人员信息

  insertOrUpdatePersonTargetFq: pre + '/tbTarget/insertOrUpdatePersonTargetFq', // 新增和修改个人业绩目标配置分期
  insertOrUpdatePersonTargetFk: pre + '/tbTarget/insertOrUpdatePersonTargetFk', // 新增和修改个人业绩目标配置发卡

  deletePersonTargetFq: pre + '/tbTarget/deletePersonTargetFq', // 删除个人业绩目标配置分期
  deletePersonTargetFk: pre + '/tbTarget/deletePersonTargetFk', // 删除个人业绩目标配置发卡

  selectPersonTargetFqPage: pre + '/tbTarget/selectPersonTargetFqPage', // 分页查询个人业绩目标配置分期
  selectPersonTargetFkPage: pre + '/tbTarget/selectPersonTargetFkPage', // 分页查询个人业绩目标配置发卡

}

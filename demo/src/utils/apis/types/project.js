const {
  gateway,
} = sysConfig

const pre = `${gateway}/obs-base`

/**
 * 数据导入
 * @see http://10.0.7.106:6094/swagger-ui.html#/
 */
export default {
  addProjectForBase: pre + '/tbProject/addProjectForBase', // 新增项目编号
  copyProject: pre + '/tbProject/copyProject', // 克隆项目编号
  addProjectForTask: pre + '/tbProject/addProjectForTask', // 项目编号基础配置保存
  selectProjectById: pre + '/tbProject/selectProjectById', // 根据项目id查询详情
  selectProjectByPage: pre + '/tbProject/selectProjectByPage', // 查询项目编号
  deleteProject: pre + '/tbProject/deleteProject', // 删除项目编号
  exportProjectListInfo: pre + '/tbProject/exportProjectListInfo', // 导出项目列表
  // 数据脱频
  updateProjectFilterRule: pre + '/tbProject/updateProjectFilterRule', // 新增或修改
  deleteProjectFilterRule: pre + '/tbProject/deleteProjectFilterRule', // 删除
  // 项目编号转换管理
  addProSortTransfer: pre + '/tbProSortTransfer/addProSortTransfer', // 新增项目编号转换
  updateProSortTransfer: pre + '/tbProSortTransfer/updateProSortTransfer', // 更新项目编号转换
  deleteProSortTransfer: pre + '/tbProSortTransfer/deleteProSortTransfer', // 删除项目编号转换
  selectProSortTransfer: pre + '/tbProSortTransfer/selectProSortTransfer', // 查询所有转换后的编号
  selectProSortTransferByPage: pre + '/tbProSortTransfer/selectProSortTransferByPage', // 分页查询所有编号转换
  updateBackDataType: pre + '/tbProSortTransfer/updateBackDataType', // 更新返数规则
  selectGroup: pre + '/tbProSortTransfer/selectGroup', // 获取返数规则中已选组别
}

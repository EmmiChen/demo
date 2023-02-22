const {
  gateway
} = sysConfig

const pre = '/ccweb-dev'

/**
 * CCWEB API
 * 二开接口
 * @see http://10.0.7.30:6086/swagger-ui.html#/
 */
export default {
  selectUserByPage: gateway + pre + '/user/selectUserByPage', // 获取部门人员列表[x]
  selectGroupName: gateway + pre + '/group/selectGroupName', // 查询部门下班组
  findUserByGroup: gateway + pre + '/group/findUserByGroup', // 查询班组下员工
  selectGroupByBusiness: gateway + pre + '/group/selectGroupByBusiness', // 配置业务的所有组务查询

  selectSelfNextLevelGroup: gateway + pre + '/group/selectSelfNextLevelGroup', // 获取当前账户部门下一级组别以及自己组别,看板目标需要
  selectAllSaleGroup: gateway + pre + '/group/selectAllSaleGroup', // 查询所有营销组别
  findDepartmentAndAccount: gateway + pre + '/group/findDepartmentAndAccount', // 根据业务类型查询对应的所有分组及其下员工号,业务类型为空时查询所有已经分配业务类型的分组及其下员工号
  findAllStaff: gateway + pre + '/group/findAllStaff', // 查询所有员工
}

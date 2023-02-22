const {
  gateway,
} = sysConfig

const pre = '/hrm'

/**
 * hrm
 * @see http://10.0.33.133:8051/swagger-ui.html#/
 */
export default {
  // (HRM)组织机构树[x]
  deptList: gateway + pre + '/deptTree/deptList?departmentName=', // 获取所有部门
}

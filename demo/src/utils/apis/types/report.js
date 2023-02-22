const {
  gateway,
} = sysConfig

const pre = '/obs-report'

export default {
  // 数据分配日志
  dataAssign: {
    // 数据分配日志
    dataAssignLog: gateway + pre + '/report/dataAssignLog',
    // 层级分配数据日志
    levelDataAssignLog: gateway + pre + '/report/levelDataAssignLog',
    // 自定义分配报表
    assignDefinition: gateway + pre + '/report/assignDefinition',
    // 自定义分配报表导出
    exportAssignDefinition: gateway + pre + '/report/exportAssignDefinition',
    // 直接分配未分配
    unAllocationData: gateway + pre + '/report/unAllocationData',
    // 直接分配已分配
    alreadyAllocationData: gateway + pre + '/report/alreadyAllocationData',
    // 未分配导出
    exportUnAllocationData: gateway + pre + '/report/exportUnAllocationData',
    // 已分配导出
    exportAlreadyAllocationData: gateway + pre + '/report/exportAlreadyAllocationData',
    // 配额分配数据查询(日)
    quotaDataForDay: gateway + pre + '/report/quotaDataForDay',
    // 配额分配数据查询(月)
    quotaDataForMonth: gateway + pre + '/report/quotaDataForMonth',
    // 配额分配数据查询(月)-人员详情
    quotaSalemanForMonth: gateway + pre + '/report/quotaSalemanForMonth',
  },
  // 数据状态查询
  workCall: {
    selectAllocatedResultCountByPage: gateway + pre + '/callOutResult/selectAllocatedResultCountByPage', // 数据状态查询
    exportAllocatedResultCount: gateway + pre + '/callOutResult/exportAllocatedResultCount', // 数据状态导出
  },
}

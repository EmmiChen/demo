const {
  gateway
} = sysConfig

const pre = '/obs-base'

/**
 * OBS API
 * ccweb接口
 * @see http://10.0.7.106:6094/swagger-ui.html#/
 */
export default {
  // 系统配置Sys Config Controller
  addSysConfig: gateway + pre + '/sysconfig/addSysConfig', // 新增系统配置
  deleteSysConfigById: gateway + pre + '/sysconfig/deleteSysConfigById', // 删除系统配置
  selectSysConfigList: gateway + pre + '/sysconfig/selectSysConfigList', // 查询所有系统配置
  updateSysConfig: gateway + pre + '/sysconfig/updateSysConfig', // 修改系统配置
  updateSysConfigSort: gateway + pre + '/sysconfig/updateSysConfigSort', // 修改系统配置排序
  findSysConfigByCodes: gateway + pre + '/sysconfig/findSysConfigByCodes', // 根据编码查询系统配置

  // 固定产品管理
  viewProductByBusinessType: gateway + pre + '/productTable/viewProductByBusinessTypeForSMS', // 短信模板通过业务类型查看通用产品详情

  // 业务管理
  project: {
    // 绑定表单
    getAllClassifyTrees: gateway + `/xform/classify/getAllClassifyTrees.do`, // 表单类型
    list: gateway + `/xform/manage/list.do`, // 表单名称

    productWorkForm: gateway + pre + '/productTable/productWorkForm', // 提交
    // 导出
    exportProductInfo: gateway + pre + '/productTable/exportProductInfo',
    // 固定
    selectFixedProductTableByPage: gateway + pre + '/productTable/selectFixedProductTableByPage', // 分页查询固定产品表
    // 通用
    viewProduct: gateway + pre + '/productTable/viewProduct', // 查看通用产品详情
    editProduct: gateway + pre + '/productTable/editProduct', // 编辑通用产品
    deleteProduct: gateway + pre + '/productTable/deleteProduct', // 删除通用产品
    addProduct: gateway + pre + '/productTable/addProduct', // 新增通用产品
    selectProductType: gateway + pre + '/productTable/selectProductType', // 查看通用产品业务类型
    selectProductTableByPage: gateway + pre + '/productTable/selectProductTableByPage', // 列表查询
    // 产品表字段管理
    addField: gateway + pre + '/productField/addField', // 新增产品表字段
    delField: gateway + pre + '/productField/delField', // 删除产品表字段
    editField: gateway + pre + '/productField/editField', // 编辑产品表字段
    selectProductFieldByPage: gateway + pre + '/productField/selectProductFieldByPage', // 根据id查询字段
    // 外呼结果定义
    addResultDefine: gateway + pre + '/resultDefine/addResultDefine', // 新增外呼结果定义
    disAbleResultDefine: gateway + pre + '/resultDefine/disAbleResultDefine', // 禁用外呼结果定义
    getAllByBusinessType: gateway + pre + '/resultDefine/getAllByBusinessType', // 根据业务类型，查询所有结果定义
    save: gateway + pre + '/resultDefine/save', // 修改下级描述
  },
  // 数据分配
  dataAssign: {
    // 单条数据分配
    selectDataAssignSingleByPage: gateway + pre + '/dataAssign/single/selectDataAssignSingleByPage', // 列表查询
    dataAssignSingle: gateway + pre + '/dataAssign/single/dataAssignSingle', // 弹窗分配
    // 批量数据分配
    selectDirectAssignInfoByProSort: gateway + pre + '/dataAssign/multi/selectDirectAssignInfoByProSort', // 直接分配列表
    selectQuotaAssignInfoByProSort: gateway + pre + '/dataAssign/multi/selectQuotaAssignInfoByProSort', // 配额分配列表
    dataDirectAssign: gateway + pre + '/dataAssign/multi/DataDirectAssign', // 直接分配 选择人员进行分配
    dataQuotaAssign: gateway + pre + '/dataAssign/multi/DataQuotaAssign', // 配额分配 选择人员进行分配
    // 层级数据分配
    // 直接分配
    adminDataDirectAssign: gateway + pre + '/dataAssign/level/AdminDataDirectAssign', // 数据管理员
    managerDataDirectAssign: gateway + pre + '/dataAssign/level/ManagerDataDirectAssign', // 经理
    teamDataDirectAssign: gateway + pre + '/dataAssign/level/TeamDataDirectAssign', // 组长
    // 配额分配
    adminDataQuotaAssign: gateway + pre + '/dataAssign/level/AdminDataQuotaAssign', // 数据管理员
    managerDataQuotaAssign: gateway + pre + '/dataAssign/level/ManagerDataQuotaAssign', // 经理
    teamDataQuotaAssign: gateway + pre + '/dataAssign/level/TeamDataQuotaAssign', // 组长
    groupAssignList: gateway + pre + '/dataAssign/level/GroupAssignList', // 分配给部门/班组的项目信息列表

    // 管理员
    levelGroupTree: gateway + pre + '/dataAssign/level/levelGroupTree', // 树机构数据
    selectLevelAllocationHistory: gateway + pre + '/dataAssign/level/selectLevelAllocationHistory', // 管理员层级分配数据修改列表
    updateDataAssignLevel: gateway + pre + '/dataAssign/level/updateDataAssignLevel', // 管理员层级分配数据修改

    // 自定义分配
    uploadRuleFile: gateway + pre + '/dataAssign/definition/uploadRuleFile', // 自定义规则文件上传
    submitReview: gateway + pre + '/dataAssign/definition/submitReview', // 提交复审
    selectRuleFilePage: gateway + pre + '/dataAssign/definition/selectRuleFilePage', // 自定义规则文件列表
    selectRuleFileDetail: gateway + pre + '/dataAssign/definition/selectRuleFileDetail', // 获取规则文件详情
    deleteRuleFile: gateway + pre + '/dataAssign/definition/deleteRuleFile', // 删除规则
    assignStatistical: gateway + pre + '/dataAssign/definition/assignStatistical', // 复审界面详情
    throughReview: gateway + pre + '/dataAssign/definition/throughReview', // 审核通过
    downloadTemplate: gateway + pre + '/dataAssign/definition/downloadTemplate', // 下载模板
    selectRuleInfoById: gateway + pre + '/dataAssign/definition/selectRuleInfoById', // 通过id查看审核详情
  },
}

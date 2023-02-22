export default {
  // 枚举类
  isTrue: [
    {
      value: '1',
      label: '是'
    },
    {
      value: '0',
      label: '否'
    }
  ],
  isTrueAndAll: [
    {
      value: '',
      label: '全部'
    },
    {
      value: '1',
      label: '是'
    },
    {
      value: '0',
      label: '否'
    }
  ],
  // 回收等级
  recyclingLevel: [
    {
      value: 'one',
      label: '一级回收'
    },
    {
      value: 'two',
      label: '二级回收'
    },
  ],
  // 回收类型
  recyclingType: [
    {
      value: 'target',
      label: '指定回收'
    },
    {
      value: 'batch',
      label: '批量回收'
    },
    {
      value: 'customize',
      label: '自定义回收'
    },
    {
      value: 'system',
      label: '系统回收'
    },
    {
      value: 'allocate',
      label: '转分配'
    },
  ],
  // 分配模式
  assignModel: [
    {
      value: 'FIFO',
      label: '先进先出'
    },
    {
      value: 'LIFO',
      label: '先进后出'
    },
    {
      value: 'RANDOM',
      label: '随机分配'
    },
  ],
  // 分配类型
  allocateType: [
    {
      value: '1',
      label: '即时分配'
    },
    {
      value: '2',
      label: '定时分配'
    },
  ],
  // 复审结果
  reviewStatus: [
    {
      value: '1',
      label: '未提交'
    },
    {
      value: '2',
      label: '待审核'
    },
    {
      value: '3',
      label: '通过'
    },
    {
      value: '4',
      label: '不通过'
    },
  ],
  // 复审结果通过不通过
  reviewStatusPass: [
    {
      value: '3',
      label: '通过'
    },
    {
      value: '4',
      label: '不通过'
    },
  ],
  // 分配操作
  assignOperation: [
    {
      value: 'D',
      label: '单条分配'
    },
    {
      value: 'P',
      label: '批量分配'
    },
    {
      value: 'CG',
      label: '层级分配（管理员）'
    },
    {
      value: 'CJ',
      label: '层级分配（经理）'
    },
    {
      value: 'CZ',
      label: '层级分配（组长）'
    },
    {
      value: 'ZF',
      label: '转分配'
    },
    {
      value: 'CX',
      label: '层级分配修改'
    },
    {
      value: 'Z',
      label: '自定义分配'
    },
    {
      value: 'J',
      label: '奖励分配'
    },
  ],
  // 数据范围
  dataRange: [
    {
      value: 'BUSINESS',
      label: '业务类型'
    },
    {
      value: 'PROSORTTYPE',
      label: '项目类型'
    },
    {
      value: 'PROSORT',
      label: '项目编号'
    },
    {
      value: 'ALL',
      label: '全局'
    },
  ],
  // 规则依据
  ruleBasis: [
    {
      value: 'TELEPHONE',
      label: '手机号'
    },
    {
      value: 'VOUCHERID',
      label: '证件号'
    },
  ],
  // 是否通过
  isPass: [
    {
      value: '1',
      label: '通过'
    },
    {
      value: '0',
      label: '已通过'
    },
  ],
  // 外呼模式
  callMode: [
    {
      value: '1',
      label: '预览式外呼'
    },
    {
      value: '2',
      label: '预测式外呼'
    },
  ],
  // 数据清洗
  dataFilter: [
    {
      value: '1',
      label: '禁呼名单过滤'
    },
    {
      value: '2',
      label: '敏感客户过滤'
    },
  ],
  // 分配规则
  assignRole: [
    {
      value: 'A',
      label: '直接分配'
    },
    {
      value: 'B',
      label: '配额分配'
    }
  ],
  businessType: [
    {
      value: 'FK',
      label: '发卡'
    },
    {
      value: 'FQ',
      label: '分期'
    },
  ],
  // 级别定义
  levelDefinition: [
    // {
    //   value: '0',
    //   label: '一级定义'
    // },
    {
      value: '1',
      label: '二级定义'
    },
    {
      value: '2',
      label: '三级定义'
    },
  ],
  // 中间库导入方式
  importType: [
    {
      value: 'SAS导入',
      label: 'SAS导入',
    },
    {
      value: '人工导入',
      label: '人工导入',
    },
  ],
  // 生产库导入方式
  importTypeSC: [
    {
      value: '定时导入',
      label: '定时导入',
    },
    {
      value: '人工导入',
      label: '人工导入',
    },
  ],
  // 搜索-题目类型
  questionType: [
    {
      value: '1',
      label: '单选',
    },
    // {
    //   value: '2',
    //   label: '多选',
    // },
    // {
    //   value: '3',
    //   label: '问答',
    // },
    {
      value: '4',
      label: '结束语',
    },
    {
      value: '',
      label: '全部',
    },
  ],
  // 题目类型
  questionTypeForSet: [
    {
      value: '1',
      label: '单选',
    },
    // {
    //   value: '2',
    //   label: '多选',
    // },
    // {
    //   value: '3',
    //   label: '问答',
    // },
    {
      value: '4',
      label: '结束语',
    },
  ],
  // 导入规则GREATER/LESS/SAME/NOT_SAME/GREATER_SAME/LESS_SAME
  // '>', '<', '=', '≠', '≥', '≤'
  importRuleSign: [
    {
      value: 'GREATER',
      label: '>'
    },
    {
      value: 'LESS',
      label: '<'
    },
    {
      value: 'SAME',
      label: '='
    },
    {
      value: 'NOT_SAME',
      label: '≠'
    },
    {
      value: 'GREATER_SAME',
      label: '≥'
    },
    {
      value: 'LESS_SAME',
      label: '≤'
    },
  ],
  // 导入规则,字符串专用
  importRuleSignString: [
    {
      value: 'SAME',
      label: '='
    },
  ],
  // 导入规则,AND/OR
  importRuleType: [
    {
      value: 'AND',
      label: 'AND'
    },
    {
      value: 'OR',
      label: 'OR'
    },
  ],
  // 禁呼时效
  banTime: [
    {
      value: '30',
      label: '30天'
    },
    {
      value: '60',
      label: '60天'
    },
    {
      value: '90',
      label: '90天'
    },
    {
      value: '180',
      label: '180天'
    },
    {
      value: '360',
      label: '360天'
    },
    {
      value: null,
      label: '永久'
    }
  ],
  // 客户声音
  customerVoice: [
    {
      value: '被电话骚扰(无明确业务)',
      label: '被电话骚扰(无明确业务)'
    },
    {
      value: '被电话骚扰(禁呼业务)',
      label: '被电话骚扰(禁呼业务)'
    },
    {
      value: '争议/投诉',
      label: '争议/投诉'
    },
    {
      value: '客户需求无法满足',
      label: '客户需求无法满足'
    },
    {
      value: '无明确原因',
      label: '无明确原因'
    },
    {
      value: '其他',
      label: '其他'
    },
  ],
  escapeTypeOptions: [
    {
      value: '0',
      label: '直接转义'
    },
    {
      value: '1',
      label: '性别转义'
    }
  ],
  // 特殊的外呼结果
  specialRules: [
    {
      value: 'unassigned',
      label: '未分配'
    },
    {
      value: 'unCall',
      label: '未外呼'
    }
  ],
  // 是否营销卡友推荐
  cardFriendIntention: [
    {
      value: 'hasIntention',
      label: '有意愿',
    },
    {
      value: 'noIntention',
      label: '无意愿',
    },
    {
      value: 'notMarket',
      label: '未营销',
    },
  ],
  // 新增字段-数据类型
  fieldType: [
    {
      value: 'string',
      label: '字符串',
    },
    {
      value: 'number',
      label: '数字',
    },
    {
      value: 'date',
      label: '日期',
    },
    {
      value: 'enumeration',
      label: '枚举',
    },
  ],
  // 返数类型
  returnCodeType: [
    {
      value: '1',
      label: '自动'
    },
    {
      value: '0',
      label: '手动'
    },
    {
      value: '2',
      label: '组别返数'
    },
  ],
  // 目标类别
  targetType: [
    {
      value: '通话时长',
      label: '分钟'
    },
    {
      value: '核卡量',
      label: '张卡'
    },
    {
      value: '放款量',
      label: '万元'
    },
    {
      value: '交表量',
      label: '张表'
    },
  ],
  // 性别
  sex: [
    {
      value: 'M',
      label: '男',
    },
    {
      value: 'F',
      label: '女',
    }
  ],
  // 账单日
  billDay: [
    {
      value: 1,
      label: '1号'
    },
    {
      value: 2,
      label: '2号'
    },
    {
      value: 3,
      label: '3号'
    },
    {
      value: 4,
      label: '4号'
    },
    {
      value: 5,
      label: '5号'
    },
    {
      value: 6,
      label: '6号'
    },
    {
      value: 7,
      label: '7号'
    },
    {
      value: 8,
      label: '8号'
    },
    {
      value: 9,
      label: '9号'
    },
    {
      value: 10,
      label: '10号'
    },
    {
      value: 11,
      label: '11号'
    },
    {
      value: 12,
      label: '12号'
    },
    {
      value: 13,
      label: '13号'
    },
    {
      value: 14,
      label: '14号'
    },
    {
      value: 15,
      label: '15号'
    },
    {
      value: 16,
      label: '16号'
    },
    {
      value: 17,
      label: '17号'
    },
    {
      value: 18,
      label: '18号'
    },
    {
      value: 19,
      label: '19号'
    },
    {
      value: 20,
      label: '20号'
    },
    {
      value: 21,
      label: '21号'
    },
    {
      value: 22,
      label: '22号'
    },
    {
      value: 23,
      label: '23号'
    },
    {
      value: 24,
      label: '24号'
    },
    {
      value: 25,
      label: '25号'
    },
    {
      value: 26,
      label: '26号'
    },
    {
      value: 27,
      label: '27号'
    },
    {
      value: 28,
      label: '28号'
    },
    {
      value: 29,
      label: '29号'
    },
    {
      value: 30,
      label: '30号'
    },
    {
      value: 31,
      label: '31号'
    }
  ],
  // 有无房贷
  housingLoan: [
    {
      value: '有',
      label: '有'
    },
    {
      value: '无',
      label: '无'
    }
  ]
}

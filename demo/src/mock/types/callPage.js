export default {
  // 外呼界面，基本信息展示，多模块组成对象数组
  info: [
    {
      sysCode: 'module_fk_xmxx', // 模块编号
      sysValue: '项目信息', // 模块名称,对应丁老师的树结构
      // 模块下字段数组，后端排序并做好数值类型为枚举的转译
      data: [
        {
          label: '业务类型', // 字段名称
          value: '普通发卡', // 字段值
          isPhone: '0', // 是否电话
        },
      ]
    },
    {
      sysCode: 'module_fk_jbxx',
      sysValue: '基本信息',
      data: [
        {
          label: '客户姓名',
          value: '张三',
          isPhone: '0', // 是否电话
          key: 'CUST_NAME',
        },
        {
          label: '证件号',
          value: '343243',
          key: 'VOUCHER_ID'
        },
        {
          label: '性别',
          value: '男', // 数据库值为M，需要后端进行转译
          isPhone: '0'
        },
        {
          label: '年龄',
          value: '30',
          isPhone: '0'
        },
        {
          label: '手机',
          value: '189****8979',
          isPhone: '1',
          key: 'CELLPHONE_NUM'
        },
        {
          label: '电话',
          value: '189****8979',
          isPhone: '1'
        }
      ]
    },
    {
      sysCode: 'module_fk_tgdwzyl',
      sysValue: '推广单位专用栏',
      data: [
        {
          label: '与被推荐人关系',
          value: '',
          isPhone: '0', // 是否电话
        },
      ]
    }
  ],
  // 外呼结果定义，平行结构，前端组合成树结构
  callResult: [
    // 1级结果定义，与配置树中保持一致
    {
      value: '接听',
      code: 'jt',
      preCode: '',
    },
    // 2级结果定义，类型为select
    {
      value: '太贵',
      code: 'tg',
      preCode: 'jt', // 对应1级结果为接听
      type: 'select',
      options: [
        '太贵-a',
        '太贵-b',
      ]
    },
    // 3级结果定义，类型为select
    {
      value: '太贵贵',
      code: 'tg-b',
      preCode: 'tg', // 对应2级结果为太贵
      type: 'select',
      options: [
        '太贵贵-a',
        '太贵贵-b',
      ]
    },
    // 2级结果定义，类型为input
    {
      value: '太便宜',
      code: 'tpy',
      preCode: 'jt', // 对应1级结果为接听
      type: 'input',
    },
    // 3级结果定义，类型为input
    {
      value: '太便宜拉',
      code: 'tpyl',
      preCode: 'tpy', // 对应1级结果为太便宜
      type: 'input',
    },
    // 特殊结果定义，需要填写预约时间
    {
      value: '意向另约',
      code: 'yxly',
      preCode: '',
    },
  ],
  callResultList: {
    list: [
      {
        callOutId: '3333',
        resultCode: '成功',
        custNature: '经营业主',
        refuseReason: '不需要',
        callOutTime: '2021-12-27 10:00:00',
        appointTime: '',
        custType: 'A类',
        content: '备注'
      }
    ]
  }
}

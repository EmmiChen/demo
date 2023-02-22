export default {
  info: [
    {
      sysCode: 'khgrzil',
      sysValue: '客户个人资料',
      data: [
        {
          label: '客户姓名',
          value: '张三',
          isPhone: '0', // 是否电话
          key: 'khxm'
        },
        {
          label: '性别',
          value: '男',
          isPhone: '0',
          key: 'xb'
        },
        {
          label: '年龄',
          value: '30',
          isPhone: '0',
          key: 'nl'
        },
        {
          label: '手机',
          value: '189****8979',
          isPhone: '1',
          key: 'sj'
        },
        {
          label: '电话',
          value: '189****8979',
          isPhone: '1',
          key: 'dh'
        },
        {
          label: '证件号',
          value: '189189189****8979',
          isPhone: '0',
          key: 'zjh'
        },
      ]
    },
    {
      sysCode: 'tjrxx',
      sysValue: '推荐人信息',
      data: [
        {
          label: '与被推荐人关系',
          value: '',
          isPhone: '0', // 是否电话
        },
      ]
    }
  ],
  callResult: {
    // 外呼结果
    callResult: '成功',
    // 客户性质：经营业主
    customerType: '经营业主',
    // 客户分类：A类
    customerCat: 'A类',
    remark: '备注'
  },
  list: [
    {
      custName: 1,
      id: 'xxx1'
    }
  ]
}

export default {

  singleList: [{
    id: '1',
    customer: '83829839238',
    name: '郑晨',
    phone: '136****1234',
    idType: '18位身份证',
    idNumber: '132189****5678',
    importTime: '2021-10-20 16:16:00'
  }, {
    id: '2',
    customer: '83829839238',
    name: '郑晨',
    phone: '136****1234',
    idType: '18位身份证',
    idNumber: '132189****5678',
    importTime: '2021-10-20 16:16:00'
  }],
  singUser: ['小请', '奥特曼', '哥斯拉', '喜羊羊', '美羊羊', '沸羊羊', '慢羊羊', '懒洋洋', '暖洋洋', '小羊羊', '绿洋洋', '比基尼', '海绵宝宝', '派大星', '章鱼哥'],
  searchUser: [{
    value: 'zhinan',
    label: '指南',
    children: [{
      value: 'shejiyuanze',
      label: '设计原则',
      children: [{
        value: 'yizhi',
        label: '一致'
      }, {
        value: 'fankui',
        label: '反馈'
      }, {
        value: 'xiaolv',
        label: '效率'
      }, {
        value: 'kekong',
        label: '可控'
      }]
    }, {
      value: 'daohang',
      label: '导航',
      children: [{
        value: 'cexiangdaohang',
        label: '侧向导航'
      }, {
        value: 'dingbudaohang',
        label: '顶部导航'
      }]
    }]
  }],
  batchAssignList: [{
    id: 1,
    proSort: 'S000B20211112001',
    proTypeSort: '先进先出',
    assignRole: '直接分配',
    assignModel: '先进先出',
    currentStock: '1000',
    checkGroup: [{
      label: '全选',
      value: '0',
    }, {
      label: '发卡组一',
      value: '1',
    }, {
      label: '发卡组二',
      value: '2',
    }, {
      label: '发卡组三',
      value: '3',
    }, {
      label: '发卡组四',
      value: '4',
    }, {
      label: '发卡组五',
      value: '5',
    }]
  }],
  directAssignList: [{
    id: 2,
    proSort: 'S000B20211112001',
    assignRole: '配额分配',
    assignModel: '先进先出',
    currentStock: '1000',
    dataTotalNum: '800',
    usedQuotaNum: '500',
    notUsedQuotaNum: '300',
    canAssignQuotaNum: '700',
    checkGroup: [{
      label: '全选',
      value: '0',
    }, {
      label: '发卡组一',
      value: '1',
    }, {
      label: '发卡组二',
      value: '2',
    }, {
      label: '发卡组三',
      value: '3',
    }, {
      label: '发卡组四',
      value: '4',
    }, {
      label: '发卡组五',
      value: '5',
    }]
  }],
  reviewPage: [{
    id: '12987124',
    name: '发卡',
    title: '卡友推荐',
    type: '直接分配',
    amount1: '234',
    amount2: '3.2',
    amount3: 10,
    total: 4,
  }, {
    id: '12987125', // 项目编号
    name: '项目', // 项目名称
    title: '卡友推荐', // 业务名称
    type: '配额分配', // 分配方式
    amount1: '234',
    amount2: '3.2',
    amount3: 10,
    total: 4, // 当前业务数据总数据
  }, {
    id: '12987125', // 项目编号
    name: '项目', // 项目名称
    title: '卡友推荐', // 业务名称
    type: '配额分配', // 分配方式
    amount1: '234',
    amount2: '3.2',
    amount3: 10,
    total: 4, // 当前业务数据总数据
  }, {
    id: '总计', // 项目编号，总计数据为总计
    name: '项目', // 项目名称
    title: '业务', // 业务名称
    type: '', // 分配方式，总计数据为空
    amount1: '234',
    amount2: '3.2',
    amount3: 10,
    total: 4, // 当前业务数据总数据
    isTotal: true, // 是否总计数据
  }, {
    id: '12987124',
    name: '发卡',
    title: '卡友推荐',
    type: '直接分配',
    amount1: '234',
    amount2: '3.2',
    amount3: 10,
    total: 4,
  }, {
    id: '12987125', // 项目编号
    name: '项目', // 项目名称
    title: '卡友推荐', // 业务名称
    type: '配额分配', // 分配方式
    amount1: '234',
    amount2: '3.2',
    amount3: 10,
    total: 4, // 当前业务数据总数据
  }, {
    id: '12987125', // 项目编号
    name: '项目', // 项目名称
    title: '卡友推荐', // 业务名称
    type: '配额分配', // 分配方式
    amount1: '234',
    amount2: '3.2',
    amount3: 10,
    total: 4, // 当前业务数据总数据
  }, {
    id: '总计', // 项目编号，总计数据为总计
    name: '项目', // 项目名称
    title: '业务', // 业务名称
    type: '', // 分配方式，总计数据为空
    amount1: '234',
    amount2: '3.2',
    amount3: 10,
    total: 4, // 当前业务数据总数据
    isTotal: true, // 是否总计数据
  }, {
    id: '12987126', // 项目编号，总计数据为总计
    name: '项目', // 项目名称
    title: '业务', // 业务名称
    type: '配额分配', // 分配方式
    amount1: '234',
    amount2: '3.2',
    amount3: 10,
    total: 2, // 当前业务数据总数据
  }, {
    id: '总计', // 项目编号，总计数据为总计
    name: '项目', // 项目名称
    title: '业务', // 业务名称
    type: '', // 分配方式，总计数据为空
    amount1: '234',
    amount2: '3.2',
    amount3: 10,
    total: 2, // 当前业务数据总数据
    isTotal: true, // 是否总计数据
  }, {
    id: '12987126', // 项目编号，总计数据为总计
    name: '项目', // 项目名称
    title: '业务', // 业务名称
    type: '配额分配', // 分配方式
    amount1: '234',
    amount2: '3.2',
    amount3: 10,
    total: 5, // 当前业务数据总数据
  }, {
    id: '12987126', // 项目编号，总计数据为总计
    name: '项目', // 项目名称
    title: '业务', // 业务名称
    type: '配额分配', // 分配方式
    amount1: '234',
    amount2: '3.2',
    amount3: 10,
    total: 5, // 当前业务数据总数据
  }, {
    id: '34324324', // 项目编号，总计数据为总计
    name: '项目', // 项目名称
    title: '业务', // 业务名称
    type: '配额分配', // 分配方式
    amount1: '234',
    amount2: '3.2',
    amount3: 10,
    total: 5, // 当前业务数据总数据
  }, {
    id: '12987126', // 项目编号，总计数据为总计
    name: '项目', // 项目名称
    title: '业务', // 业务名称
    type: '配额分配', // 分配方式
    amount1: '234',
    amount2: '3.2',
    amount3: 10,
    total: 5, // 当前业务数据总数据
  }, {
    id: '总计', // 项目编号，总计数据为总计
    name: '项目', // 项目名称
    title: '业务', // 业务名称
    type: '', // 分配方式，总计数据为空
    amount1: '234',
    amount2: '3.2',
    amount3: 10,
    total: 5, // 当前业务数据总数据
    isTotal: true, // 是否总计数据
  }],
  list: [{
    id: 'e319c87638a34cb4b340fdc42ad67ef7',
    title: '公告式神',
    type: 1,
    overDate: '2021-12-24',
    content: null,
    mustRead: null,
    readTotal: 1,
    creater: null,
    createTime: '2021-12-15 17:04:05'
  }],
  moreHeader: [{
    employ: '2016-05-03',
    name: '王小虎',
    itemNo: 200333,
    item: [{
      itemName: 'S000B20211021001',
      num: '5',
    }, {
      itemName: 'S000B20211021001',
      num: '6',
    }, {
      itemName: 'S000B20211021001',
      num: '8',
    }]
  },
  {
    employ: '2016-05-03',
    name: '黑小虎',
    itemNo: 99999,
    item: [{
      itemName: 'S000B20211021001',
      num: '7',
    }, {
      itemName: 'S000B20211021001',
      num: '8',
    }, {
      itemName: 'S000B20211021001',
      num: '8',
    }]
  },
  {
    employ: '2016-05-03',
    name: '辣小虎',
    itemNo: 88888,
    item: [{
      itemName: 'S000B20211021001',
      num: '0000',
    }, {
      itemName: 'S000B20211021001',
      num: '111111',
    }, {
      itemName: 'S000B20211021001',
      num: '8',
    }]
  },
  ],
  otherList: [{
    type: '定时分配',
    time: '2016-05-03'
  },
  {
    type: '定时分配',
    time: '2016-05-03'
  },
  {
    type: '定时分配',
    time: '2016-05-03'
  }
  ],
  resultHeader: [{
    employ: '2016-05-03',
    name: '王小虎',
    itemNo: 200333,
    item: [{
      itemName: 'S000B20211021001',
      type: '直接分配',
      num: '54',
      totalNum: '3',
    }, {
      itemName: 'S000B20211021002',
      type: '直接分配',
      num: '66',
      totalNum: '44',
    }, {
      itemName: 'S000B20211021003',
      type: '直接分配',
      num: '11',
      totalNum: '22',
    }]
  },
  {
    employ: '2016-05-03',
    name: '黑小虎',
    itemNo: 200333,
    item: [{
      itemName: 'S000B20211021001',
      type: '直接分配',
      num: '99',
      totalNum: '31',
    }, {
      itemName: 'S000B20211021002',
      type: '直接分配',
      num: '6655',
      totalNum: '888',
    }, {
      itemName: 'S000B20211021003',
      type: '直接分配',
      num: '000',
      totalNum: '666',
    }]
  },
  {
    employ: '2016-05-03',
    name: '辣小虎',
    itemNo: 200333,
    item: [{
      itemName: 'S000B20211021001',
      type: '直接分配',
      num: '4545',
      totalNum: '34343',
    }, {
      itemName: 'S000B20211021002',
      type: '直接分配',
      num: '64564',
      totalNum: '756765',
    }, {
      itemName: 'S000B20211021003',
      type: '直接分配',
      num: '4564',
      totalNum: '234324',
    }]
  }
  ],
  resultList: [{
    id: '1001',
    name: '张三',
    project: 'S000B20211021001',
    type: '直接分配',
    num: 1,
    total: 2,
    idNum: 3,
    planTime: '2021-02-7 12:09',
    factTime: '2022-02-7 12:09'
  },
  {
    id: '1002',
    name: '李四',
    project: 'S000B20211021001',
    type: '配额分配',
    num: 4,
    total: 5,
    idNum: 8,
    planTime: '2021-02-7 12:09',
    factTime: '2022-02-7 12:09'
  },
  {
    id: '1003',
    name: '王五',
    project: 'S000B20211021001',
    type: '直接分配',
    num: 4,
    total: 5,
    idNum: 888,
    planTime: '2021-02-7 12:09',
    factTime: '2022-02-7 12:09'
  }, {
    id: '1001',
    name: '张三',
    project: 'S000B20211021002',
    type: '直接分配',
    num: 1,
    total: '002',
    idNum: '003',
    planTime: '2021-02-7 12:09',
    factTime: '2022-02-7 12:09'
  },
  {
    id: '1002',
    name: '李四',
    project: 'S000B20211021002',
    type: '配额分配',
    num: '004',
    total: '005',
    idNum: '99',
    planTime: '2021-02-7 12:09',
    factTime: '2022-02-7 12:09'
  },
  {
    id: '1003',
    name: '王五',
    project: 'S000B20211021002',
    type: '直接分配',
    num: '022',
    total: '44',
    idNum: '999',
    planTime: '2021-02-7 12:09',
    factTime: '2022-02-7 12:09'
  }, {
    id: '1001',
    name: '张三',
    project: 'S000B20211021003',
    type: '直接分配',
    num: '2222',
    total: '8888',
    idNum: '9333',
    planTime: '2021-02-7 12:09',
    factTime: '2022-02-7 12:09'
  },
  {
    id: '1002',
    name: '李四',
    project: 'S000B20211021003',
    type: '配额分配',
    num: '44444',
    total: '2222',
    idNum: '4444',
    planTime: '2021-02-7 12:09',
    factTime: '2022-02-7 12:09'
  },
  {
    id: '1003',
    name: '王五',
    project: 'S000B20211021003',
    type: '直接分配',
    num: '666',
    total: '7777',
    idNum: '9999',
    planTime: '2021-02-7 12:09',
    factTime: '2022-02-7 12:09'
  },
  ],
  import: [
    {
      id: 'bac003ce9d9f426ca9865271821f5566',
      bankId: '9865271821f5567',
      custName: '1',
      cellphoneNum: '1',
      telephoneNum: '1',
      companyTele: '2',
      custSex: '1',
      voucherId: '4',
      isHaveCard: '1',
      isAwardData: '1',
      isHistoryCust: '1',
      cardType: '8',
      billingDate: '9',
      isSetpwd: '1',
      dataSource: '54',
      calloutName: '57',
      remindTime: '75',
      dataType: '865',
      companyName: '33',
      companyAddress: '363',
    },
    {
      id: 'bac003ce9d9f426ca9865271821f5562',
      bankId: '9865271821f5566',
      custName: '1',
      cellphoneNum: '1',
      telephoneNum: '1',
      companyTele: '2',
      custSex: '1',
      voucherId: '4',
      isHaveCard: '1',
      isAwardData: '1',
      isHistoryCust: '1',
      cardType: '8',
      billingDate: '9',
      isSetpwd: '1',
      dataSource: '54',
      calloutName: '57',
      remindTime: '75',
      dataType: '865',
      companyName: '33',
      companyAddress: '363',
    },
    {
      id: 'bac003ce9d9f426ca9865271821f5563',
      bankId: '9865271821f5565',
      custName: '1',
      cellphoneNum: '1',
      telephoneNum: '1',
      companyTele: '2',
      custSex: '1',
      voucherId: '4',
      isHaveCard: '1',
      isAwardData: '1',
      isHistoryCust: '1',
      cardType: '8',
      billingDate: '9',
      isSetpwd: '1',
      dataSource: '54',
      calloutName: '57',
      remindTime: '75',
      dataType: '865',
      companyName: '33',
      companyAddress: '363',
    },
    {
      id: 'bac003ce9d9f426ca9865271821f5564',
      bankId: '9865271821f5564',
      custName: '1',
      cellphoneNum: '1',
      telephoneNum: '1',
      companyTele: '2',
      custSex: '1',
      voucherId: '4',
      isHaveCard: '1',
      isAwardData: '1',
      isHistoryCust: '1',
      cardType: '8',
      billingDate: '9',
      isSetpwd: '1',
      dataSource: '54',
      calloutName: '57',
      remindTime: '75',
      dataType: '865',
      companyName: '33',
      companyAddress: '363',
    },
  ]
}

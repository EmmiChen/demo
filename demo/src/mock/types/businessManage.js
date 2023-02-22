export default {
  list: [{
    id: '1',
    typeName: '分期',
    name: '张三',
    createdTime: '2021-10-15 17:20:06',
    bound: '广发卡，浦发卡，信用卡',
    updateTime: '2021-10-15 17:20:06'
  }, {
    id: '2',
    typeName: '发卡',
    name: '李四',
    createdTime: '2021-10-15 17:20:06',
    bound: '消费分期，现金分期',
    updateTime: '2021-10-15 17:20:06'
  }],
  tableList: [{
    menuId: '1',
    menuName: '接听',
    state: '在用',
    menuLevel: '1',
    child: [{
      menuId: '4',
      menuName: '没想法',
      state: '在用',
      menuLevel: '2',
      child: [{
        menuId: '7',
        menuName: '不想要',
        state: '在用',
        menuLevel: '3',
      }]
    }] }, {
    menuId: '2',
    menuName: '预约',
    state: '在用',
    menuLevel: '1',
    child: [{
      menuId: '5',
      menuName: '没想法',
      state: '在用',
      menuLevel: '2',
    }]
  }, {
    menuId: '3',
    menuName: '加入黑名单',
    state: '在用',
    menuLevel: '1',
    child: [{
      menuId: '6',
      menuName: '没想法',
      state: '在用',
      menuLevel: '2',
    }]
  }]
}

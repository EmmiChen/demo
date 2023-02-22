export default {
  options: [
    {
      key: 'CUST_ID',
      label: '客户编号',
      type: 'number',
    },
    {
      key: 'CUST_NAME',
      label: '客户姓名',
      type: 'varchar',
    },
  ],
  data: [
    [
      {
        'key1': 'age',
        'key2': '>',
        'key3': '18',
        'key4': '',
        'key5': 'number'
      },
      {
        'key1': 'age',
        'key2': '<',
        'key3': '40',
        'key4': 'AND',
        'key5': 'number'
      }
    ],
    [
      {
        'key1': 'place',
        'key2': '=',
        'key3': ['杭州', '上海', '北京'],
        'key4': '',
        'key5': 'varchar'
      },
      {
        'key1': 'place',
        'key2': '=',
        'key3': ['广州', '深圳'],
        'key4': 'OR',
        'key5': 'varchar'
      }
    ]
  ]
}

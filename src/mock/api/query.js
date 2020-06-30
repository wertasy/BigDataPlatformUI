var history = [{
  name: 'XX查询',
  sqlContent: 'select * from db01.log_dev1'
}, {
  name: 'XX查询2',
  sqlContent: 'select * from db01.log_dev2'
}]

var datas = {
  schema: [
    {
      id: 11,
      label: "操作类型"
    },{
      id: 12,
      label: "用户id"
    },{
      id: 13,
      label: "用户类型"
    },{
      id: 14,
      label: "备注信息"
    }
  ],
  rows: [
    { '操作类型':'创建用户', '用户id':'1554099545', '用户类型':'hdfs', '备注信息': '创建用户 test0' },
    { '操作类型':'创建用户', '用户id':'1554099546', '用户类型':'yarn', '备注信息': '创建用户 test1' },
    { '操作类型':'创建用户', '用户id':'1554099547', '用户类型':'hdfs', '备注信息': '创建用户 test2' },
    { '操作类型':'创建用户', '用户id':'1554099548', '用户类型':'yarn', '备注信息': '创建用户 test3' },
  ],
}
var schema = [
  {
    id: 1,
    label: 'db01',
    children: [
      {
        id: 4,
        label: 'log_dev1',
        children: [
          {
            id: 9,
            label: 'id int'
          },
          {
            id: 10,
            label: 'name varchar'
          }
        ]
      },{
        id: 14,
        label: 'log_dev2',
        children: [
          {
            id: 11,
            label: "op_type"
          },{
            id: 12,
            label: "user_id"
          },{
            id: 13,
            label: "user_type"
          },{
            id: 14,
            label: "comment"
          }
        ]
      }
    ]
  },
  {
    id: 2,
    label: 'db02',
    children: [
      {
        id: 5,
        label: 'log_dev2'
      },
      {
        id: 6,
        label: 'log_dev23'
      }
    ]
  },
  {
    id: 3,
    label: 'db03',
    children: [
      {
        id: 7,
        label: 'log_dev3'
      },
      {
        id: 8,
        label: 'log_dev4'
      }
    ]
  }
]

export default [
  {
    path: 'query/sqls',
    method: 'get',
    handle({ params, Repeat }) {
      console.log(params)
      var result = {
        code: 200,
        msg: '获取数据成功',
        data: history
      }
      console.log(result)
      return result
    }
  },
  {
    path: 'query/sql',
    method: 'get',
    handle({ params, Repeat }) {
      console.log(params)
      var result = {
        code: 200,
        msg: '获取数据成功',
        data: datas
      }
      console.log(result)
      return result
    }
  },
  {
    path: 'query/sql',
    method: 'post',
    handle({ body }) {
      console.log(body)
      history.push(body)
      var result = {
        code: 200,
        msg: '获取数据成功',
        data: true
      }
      console.log(result)
      return result
    }
  },
  {
    path: 'query/schemas',
    method: 'get',
    handle({ params }) {
      console.log(params)
      var result = {
        code: 200,
        msg: '获取 schemas 成功',
        data: schema
      }
      console.log(result)
      return result
    }
  }
]
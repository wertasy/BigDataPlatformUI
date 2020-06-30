var datas = [{
  'id': 1,
  'privilegeType': '系统管理',
  'team': 'Admin',
  'createTime': 1589955823
},{
  'id': 2,
  'privilegeType': '集群概览',
  'team': 'Admin',
  'createTime': 1589955823
},{
  'id': 3,
  'privilegeType': '运营管理',
  'team': 'Admin',
  'createTime': 1589955823
},{
  'id': 4,
  'privilegeType': '任务管理',
  'team': 'Admin',
  'createTime': 1589955823
},{
  'id': 5,
  'privilegeType': '数据查询',
  'team': 'Admin',
  'createTime': 1589955823
},{
  'id': 6,
  'privilegeType': '数据可视化',
  'team': 'Admin',
  'createTime': 1589955823
}]

export default [
  {
    path: 'system/privileges',
    method: 'get',
    handle({ params, Repeat }) {
      console.log(params)
      var result = {
        code: 200,
        msg: '获取数据成功',
        data: {
          pageCount: Math.ceil(datas.length / params.pageSize),
          pageSize: params.pageSize,
          pageIndex: params.pageIndex,
          pages: datas.slice((params.pageIndex - 1) * params.pageSize, params.pageIndex * params.pageSize)
        }
      }
      console.log(result)
      return result
    }
  },{
    path: 'system/privilege',
    method: 'post',
    handle({ body }) {
      body.id = datas.length + 1
      body.createTime = Math.round(new Date().getTime()/1000)
      datas.push(body)
      console.log(body)
      var result = {
        code: 200,
        msg: '获取数据成功',
        data: true
      }
      console.log(result)
      return result
    }
  }
]

var datas = [{
  'id': 1,
  'admin': 'xiyou',
  'name': 'Admin',
  'createTime': 1589955823
}]

export default [
  {
    path: 'system/teams',
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
    path: 'system/team',
    method: 'post',
    handle({body}) {
      body.id = datas.length + 1
      body.createTime = Math.round(new Date().getTime()/1000)
      datas.push(body)
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
    path: 'system/team/name',
    method: 'get',
    handle({ params, Repeat }) {
      console.log(params)
      var result = {
        code: 200,
        msg: '获取数据成功',
        data: datas.map((item) => item.name)
      }
      console.log(result)
      return result
    }
  }
]

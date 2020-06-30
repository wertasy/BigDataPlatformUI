var datas = [{
  id: 1,
  name: '数据处理流程1',
  admin: 'xiyou',
  azId: '1',
  scheduled: false,
  scheduleCron: '',
  app: {
    'name': '数据中心业务线'
  },
  createTime: 1582180320
}, {
  id: 2,
  name: '金融业务线流程',
  admin: 'xiyou',
  azId: '2',
  scheduled: false,
  scheduleCron: '0 0/10 0 0 0 ？',
  app: {
    'name': '金融业务线'
  },
  createTime: 1582180320
}, {
  id: 3,
  name: '蚂蚁业务线流程',
  admin: 'xiyou',
  azId: '3',
  scheduled: false,
  scheduleCron: '0 0/1 0 0 0 ？',
  app: {
    'name': '蚂蚁业务线'
  },
  createTime: 1582180320
}, {
  id: 4,
  name: '测试业务线流程',
  admin: 'xiyou',
  azId: '4',
  scheduled: false,
  scheduleCron: '0 0 0 0 0 ？',
  app: {
    'name': '测试业务线'
  },
  createTime: 1582180320
}]

export default [
  {
    path: 'task/workflows',
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
  },
  {
    path: 'task/workflow',
    method: 'get',
    handle({ params, Repeat }) {
      console.log(params)
      var result = {
        code: 200,
        msg: '获取数据成功',
        data: datas[params.id]
      }
      console.log(result)
      return result
    }
  },
  {
    path: 'task/names',
    method: 'get',
    handle({ params, Repeat }) {
      console.log(params)
      var result = {
        code: 200,
        msg: '获取数据成功',
        data: datas.map(item => item.name)
      }
      console.log(result)
      return result
    }
  }
]

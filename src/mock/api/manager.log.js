var datas = [
  // {
  //   'id': 24,
  //   'user': 'xiyou',
  //   'opeation': '创建业务线',
  //   'obj': 'AppId:12 Name:XX业务',
  //   'createTime': 1589955923
  // },
  // {
  //   'id': 23,
  //   'user': 'xiyou',
  //   'opeation': '上传Plugin',
  //   'obj': 'PluginID:14 Name:测试Plugin2 Lang：Python',
  //   'createTime': 1589955823
  // }, {
  //   'id': 22,
  //   'user': 'xiyou',
  //   'opeation': '删除Plugin',
  //   'obj': 'PluginID:12 Name:测试Plugin Lang：Python',
  //   'createTime': 1589955723
  // },
  // {
  //   'id': 21,
  //   'user': 'xiyou',
  //   'opeation': '上传Plugin',
  //   'obj': 'PluginID:12 Name:测试Plugin Lang：Python',
  //   'createTime': 1572464913
  // }, 
  // {
  //   'id': 20,
  //   'user': 'xiyou',
  //   'opeation': '创建业务线',
  //   'obj': 'AppId:12 Name:XX业务',
  //   'createTime': 1579955923
  // }, 
  // {
  //   'id': 19,
  //   'user': 'xiyou',
  //   'opeation': '创建业务线',
  //   'obj': 'AppId:12 Name:XX业务',
  //   'createTime': 1579955923
  // }, 
  // {
  //   'id': 18,
  //   'user': 'xiyou',
  //   'opeation': '创建业务线',
  //   'obj': 'AppId:12 Name:XX业务',
  //   'createTime': 1579955923
  // }, 
  // {
  //   'id': 17,
  //   'user': 'xiyou',
  //   'opeation': '创建业务线',
  //   'obj': 'AppId:12 Name:XX业务',
  //   'createTime': 1579955923
  // }, 
  // {
  //   'id': 16,
  //   'user': 'xiyou',
  //   'opeation': '创建业务线',
  //   'obj': 'AppId:12 Name:XX业务',
  //   'createTime': 1579955923
  // }, 
  // {
  //   'id': 15,
  //   'user': 'xiyou',
  //   'opeation': '创建业务线',
  //   'obj': 'AppId:12 Name:XX业务',
  //   'createTime': 1579955923
  // }, 
  // {
  //   'id': 14,
  //   'user': 'xiyou',
  //   'opeation': '创建业务线',
  //   'obj': 'AppId:12 Name:XX业务',
  //   'createTime': 1579955923
  // }, 
  // {
  //   'id': 13,
  //   'user': 'xiyou',
  //   'opeation': '创建业务线',
  //   'obj': 'AppId:12 Name:XX业务',
  //   'createTime': 1579955923
  // }, 
  // {
  //   'id': 12,
  //   'user': 'xiyou',
  //   'opeation': '创建业务线',
  //   'obj': 'AppId:12 Name:XX业务',
  //   'createTime': 1579955923
  // }, 
  // {
  //   'id': 11,
  //   'user': 'xiyou',
  //   'opeation': '创建业务线',
  //   'obj': 'AppId:12 Name:XX业务',
  //   'createTime': 1579955923
  // }, 
  // {
  //   'id': 10,
  //   'user': 'xiyou',
  //   'opeation': '创建业务线',
  //   'obj': 'AppId:12 Name:XX业务',
  //   'createTime': 1579955923
  // }, 
  // {
  //   'id': 9,
  //   'user': 'xiyou',
  //   'opeation': '创建业务线',
  //   'obj': 'AppId:12 Name:XX业务',
  //   'createTime': 1579955923
  // }, 
  // {
  //   'id': 8,
  //   'user': 'xiyou',
  //   'opeation': '创建业务线',
  //   'obj': 'AppId:12 Name:XX业务',
  //   'createTime': 1579955923
  // }, 
  // {
  //   'id': 7,
  //   'user': 'xiyou',
  //   'opeation': '创建业务线',
  //   'obj': 'AppId:12 Name:XX业务',
  //   'createTime': 1579955923
  // }, 
  // {
  //   'id': 6,
  //   'user': 'xiyou',
  //   'opeation': '创建业务线',
  //   'obj': 'AppId:12 Name:XX业务',
  //   'createTime': 1579955923
  // }, {
  //   'id': 5,
  //   'user': 'xiyou',
  //   'opeation': '创建业务线',
  //   'obj': 'AppId:12 Name:XX业务',
  //   'createTime': 1579955923
  // },
  {
    'id': 4,
    'user': 'xiyou',
    'opeation': '创建业务线',
    'obj': 'AppId:12 Name:XX业务',
    'createTime': 1579955923
  },
  {
    'id': 3,
    'user': 'xiyou',
    'opeation': '上传Plugin',
    'obj': 'PluginID:14 Name:测试Plugin2 Lang：Python',
    'createTime': 1579955823
  }, {
    'id': 2,
    'user': 'xiyou',
    'opeation': '删除Plugin',
    'obj': 'PluginID:12 Name:测试Plugin Lang：Python',
    'createTime': 1579955723
  },
  {
    'id': 1,
    'user': 'xiyou',
    'opeation': '上传Plugin',
    'obj': 'PluginID:12 Name:测试Plugin Lang：Python',
    'createTime': 1592464913
  }
]

export default [
  {
    path: 'system/log',
    method: 'get',
    handle ({ params, Repeat }) {
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
  }
]

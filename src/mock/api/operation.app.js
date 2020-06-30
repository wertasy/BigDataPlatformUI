var datas = [
  {
    'id': 1,
    'name': '生鲜业务线',
    'detail': '生鲜业务线',
    'admin': 'xiyou',
    'basePath': '/fresh_project/01',
    'ns': 'hdfs_ns_01',
    'dsQuota': 1024,
    'nsQuota': 20,
    'baseQueue': 'queue01',
    'createTime': 1584685423
  },
  {
    'id': 2,
    'name': '农贸市场业务线',
    'detail': '农贸市场业务线',
    'admin': 'xiyou',
    'basePath': '/agricultural_market/01',
    'ns': 'hdfs_ns_01',
    'dsQuota': 1024,
    'nsQuota': 20,
    'baseQueue': 'queue01',
    'createTime': 1584985423
  },
  {
    'id': 3,
    'name': '农家乐业务线',
    'detail': '农家乐业务线',
    'admin': 'xiyou',
    'basePath': '/farmhouse/01',
    'ns': 'hdfs_ns_01',
    'dsQuota': 1024,
    'nsQuota': 20,
    'baseQueue': 'queue01',
    'createTime': 1585685423
  }
]

export default [
  {
    path: '/api/mock/operation/app',
    method: 'get',
    handle({ params, Repeat }) {
      console.log(params)
      var result = {
        code: 200,
        msg: '获取数据成功',
        data: {
          pageCount: 1,
          pageSize: params.pageSize,
          pageIndex: params.pageIndex,
          pages: datas
        }
      }
      console.log(result)
      return result
    }
  },
  {
    path: 'meta/project/name',
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
  },
  {
    path: 'meta/project',
    method: 'post',
    handle({ body }) {
      body.id = datas.length + 1
      body.admin = 'xiyou'
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

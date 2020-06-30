export default [
    {
      path: 'meta/datasources',
      method: 'get',
      handle ({ params, Repeat }) {
        console.log(params)
        var result = {
          code: 200,
          msg: 'datasources数据成功',
          data: {
            pageCount: 1,
            pageSize: params.pageSize,
            pageIndex: params.pageIndex,
            pages: [
              {
                id: 1,
                name: 'mysql1',
                admin: 'xiyou',
                sourceType: 'JDBC',
                connectInfo: {},
                isPublic: true,
                createTime: 1587312000
              }, {
                id: 2,
                name: 'mysql2',
                admin: 'xiyou',
                sourceType: 'JDBC',
                connectInfo: {},
                isPublic: true,
                createTime: 1587312000
              }, {
                id: 3,
                name: 'mysql3',
                admin: 'xiyou',
                sourceType: 'JDBC',
                connectInfo: {},
                isPublic: true,
                createTime: 1587312000
              }, {
                id: 4,
                name: 'postgresql1',
                admin: 'xiyou',
                sourceType: 'JDBC',
                connectInfo: {},
                isPublic: true,
                createTime: 1587312000
              }
            ]
          }
        }
        console.log(result)
        return result
      }
    }
  ]
  
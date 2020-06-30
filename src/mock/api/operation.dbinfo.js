
var datas = [
  { id:1, name:"db01", level: "STG", projectName: "生鲜业务线", locationUri: "hadoop01/fresh_project/01", admin: "xiyou", createTime: 1584685423 },
  { id:2, name:"db02", level: "STG", projectName: "农贸市场业务线", locationUri: "hadoop01/agricultural_market/01", admin: "xiyou", createTime: 1584985423 },
  { id:3, name:"db02", level: "STG", projectName: "农家乐业务线", locationUri: "hadoop01/farmhouse/01", admin: "xiyou", createTime: 1585685423 },
  { id:4, name:"db01_ods", level: "ODS", projectName: "生鲜业务线", locationUri: "hadoop01/fresh_project/01/ods", admin: "xiyou", createTime: 1589685423 }
]

export default [
    {
      path: 'meta/dbs',
      method: 'get',
      handle({ params }) {
        console.log(params)
        var result = {
          code: 200,
          msg: '获取 schemas 成功',
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
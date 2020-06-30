
var datas = [{
    id: 1,
    name: '生鲜业务数据仓库',
    team: 'Admin',
    resourceType: 'HDFS',
    resource: "/fresh_project/01",
    createTime: 1581559642
}, {
    id: 2,
    name: '农贸市场业务数据仓库',
    team: 'Admin',
    resourceType: 'HDFS',
    resource: "/agricultural_market/01",
    createTime: 1581559642
}, {
    id: 3,
    name: '农家乐业务数据仓库',
    team: 'Admin',
    resourceType: 'HDFS',
    resource: "/farmhouse/01",
    createTime: 1581559642
}, {
    id: 4,
    name: '生鲜业务数据仓库查询',
    team: 'Admin',
    resourceType: 'HIVE',
    resource: "db01/log_dev1",
    createTime: 1581559642
}, {
    id: 5,
    name: '农贸市场业务数据仓库查询',
    team: 'Admin',
    resourceType: 'HIVE',
    resource: "db01/log_dev2",
    createTime: 1581559642
}, {
    id: 6,
    name: '生鲜业务数据仓库查询',
    team: 'Admin',
    resourceType: 'HIVE',
    resource: "db02/table01",
    createTime: 1581559642
}]

export default [
    {
        path: 'ranger/privileges',
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
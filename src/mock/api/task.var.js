var datas = [{
    id: 1,
    name: 'var1',
    admin: 'xiyou',
    varType: 'Accumulator',
    initValue: '0',
    currentValue: '1',
    preValue: '0',
    app: {
        'name': 'XX业务线'
    },
    createTime: 1582176720
}, {
    id: 2,
    name: 'var2',
    admin: 'xiyou',
    varType: 'Accumulator',
    initValue: '0',
    currentValue: '1',
    preValue: '0',
    app: {
        'name': 'XX业务线'
    },
    createTime: 1582176720
}, {
    id: 3,
    name: 'var3',
    admin: 'xiyou',
    varType: 'Accumulator',
    initValue: '0',
    currentValue: '1',
    preValue: '0',
    app: {
        'name': 'XX业务线'
    },
    createTime: 1582176720
}, {
    id: 4,
    name: 'var4',
    admin: 'xiyou',
    varType: 'Accumulator',
    initValue: '0',
    currentValue: '1',
    preValue: '0',
    app: {
        'name': 'XX业务线'
    },
    createTime: 1582176720
}]

export default [
    {
        path: 'param/vars',
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
    }
]

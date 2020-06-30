var datas = [{
  id: 1,
  name: 'Mysql导入插件',
  admin: 'xiyou',
  version: '1.0',
  pluginType: 'transform',
  pluginCategory: '基础插件',
  lang: 'Python',
  pluginStatus: '开发中',
  createTime: 1587312000
}, {
  id: 2,
  name: 'XX业务处理插件',
  admin: 'xiyou',
  version: '1.0',
  pluginType: 'calc',
  pluginCategory: '业务插件',
  lang: 'Java',
  pluginStatus: '开发中',
  createTime: 1587312000
}, {
  id: 3,
  name: '数据清洗插件',
  admin: 'xiyou',
  version: '1.0',
  pluginType: 'calc',
  pluginCategory: '基础插件',
  lang: 'Python',
  pluginStatus: '开发中',
  createTime: 1587312000
}, {
  id: 4,
  name: 'XX服务计算',
  admin: 'xiyou',
  version: '2.0',
  pluginType: 'transform',
  pluginCategory: '业务插件',
  lang: 'Python',
  pluginStatus: '开发中',
  createTime: 1587312000
}]

var menuList = [
  {
    id: '1',
    type: 'group',
    name: '基础插件',
    ico: 'el-icon-video-play',
    children: [
      {
        id: '1',
        type: 'task',
        name: 'Mysql导入插件',
        ico: 'el-icon-time'
      },
      {
        id: '3',
        type: 'task',
        name: '数据清洗插件',
        ico: 'el-icon-odometer'
      }
    ]
  },
  {
    id: '2',
    type: 'group',
    name: '业务插件',
    ico: 'el-icon-video-pause',
    children: [
      {
        id: '2',
        type: 'task',
        name: 'XX业务处理插件',
        ico: 'el-icon-caret-right'
      },
      {
        id: '4',
        type: 'task',
        name: 'XX服务计算',
        ico: 'el-icon-shopping-cart-full'
      }
    ]
  }
]

export default [
  {
    path: 'task/plugins',
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
    path: 'task/plugin',
    method: 'get',
    handle({ params, Repeat }) {
      console.log(params)
      var result = {
        code: 200,
        msg: '获取 plugin package 数据成功',
        data: datas[params.id - 1]
      }
      console.log(result)
      return result
    }
  },
  {
    path: 'task/fuck/name',
    method: 'get',
    handle({ params, Repeat }) {
      console.log(params)
      var result = {
        code: 200,
        msg: '获取 menuList 数据成功',
        data: menuList
      }
      console.log("??? %o", result)
      return result
    }
  }
]

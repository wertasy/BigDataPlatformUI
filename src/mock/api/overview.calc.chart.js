export default [
  {
    path: 'monitor/calc/chart',
    method: 'get',
    handle () { 
      var result = {
        code: 200,
        msg: '获取数据成功',
        data: {
          chartSettings: {
            dimension: ['queueName'],
            metrics: ['appsPending', 'appsRunning'],
            area: true
          },
          chartData: {
            columns: ['queueName', 'appsPending', 'appsRunning', 'allocatedMB', 'availableMB', 'ActiveUsers'],
            rows: [
              {
                'queueName': 'queue1',
                'appsPending': 1,
                'appsRunning': 3,
                'allocatedMB': 100,
                'availableMB': 20,
                'ActiveUsers': 2
              },
              {
                'queueName': 'queue2',
                'appsPending': 2,
                'appsRunning': 4,
                'allocatedMB': 80,
                'availableMB': 10,
                'ActiveUsers': 1
              },
              {
                'queueName': 'queue3',
                'appsPending': 2,
                'appsRunning': 3,
                'allocatedMB': 150,
                'availableMB': 80,
                'ActiveUsers': 6
              }
            ]
          }
        }

      }
      console.log(result)
      return result
    }
  }
]

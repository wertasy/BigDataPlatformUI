export default [
  {
    path: 'monitor/calc',
    method: 'get',
    handle () {
      var result = {
        code: 200,
        msg: '获取数据成功',
        data: {
          'liveNodeManagerNums': 10,
          'deadNodeManagerNums': 0,
          'unhealthyNodeManagerNums': 0,
          'submittedApps': 14,
          'runningApps': 10,
          'pendingApps': 0,
          'completedApps': 10,
          'killedApps': 1,
          'failedApps': 3,
          'allocatedMem': 20,
          'allocatedCores': 10,
          'allocatedContainers': 0,
          'availableMem': 10,
          'availableCores': 0,
          'pendingMem': 0,
          'pendingCores': 20,
          'pendingContainers': 10,
          'reservedMem': 0,
          'reservedCores': 10,
          'reservedContainers': 0
        }
      }
      console.log(result)
      return result
    }
  }
]

import request from '@/plugin/axios'

export function StorageInfo () {
  return request({
    // url: 'monitor/storage',
    url: '/api/mock/storage',
    method: 'get'
  })
}

export function StorageChart () {
  return request({
    // url: 'monitor/storage/chart',
    url: '/api/mock/storage/chart',
    method: 'get'
  })
}

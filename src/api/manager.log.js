import request from '@/plugin/axios'

export function LogInfo (pageIndex, pageSize = 20) {
  return request({
    url: 'system/log',
    method: 'get',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    params: { pageIndex, pageSize }
  })
}

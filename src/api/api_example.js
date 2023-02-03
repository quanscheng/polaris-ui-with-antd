import { api } from '@/configs/interceptor'

export const getApiAccess = () =>
  api.request({
    url: `/api/test`,
    method: 'get',
    headers: {},
  })

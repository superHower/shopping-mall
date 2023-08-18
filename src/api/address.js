import request from '@/utils/request'

// 获取地址列表
export const getAddressList = () => {
  return request.get('/address/list')
}
export const addAddress = () => {
  return request.post('/address/list')
}

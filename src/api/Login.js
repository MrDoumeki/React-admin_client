import request from '../utils/request'

export function reqLogin(form){
    return request({
      url: '/login',
      method: 'post',
      data: form
    })
  }
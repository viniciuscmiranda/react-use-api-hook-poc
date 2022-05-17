import {request} from './index'

export function login(payload){
  return request({
    label: 'login',
    payload,
    response: {
      token: 'AUTH_TOKEN'
    }
  })
}

export function register(payload){
  return request({
    label: 'register',
    payload,
    response: {
      id: 'ID',
      token: 'AUTH_TOKEN',
      ...payload
    }
  })
}
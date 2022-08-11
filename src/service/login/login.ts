import apiRequest from '../index'
import type { IAccount, ILoginResult } from './type'
import type { IDataType } from '../types'

enum LoginApi {
  AccountLogin = '/login',
  LoginUserInfo = '/users/',
  UserMenus = '/role/'
}
export function accountLoginRequest(account: IAccount) {
  return apiRequest.post<IDataType<ILoginResult>>({
    url: LoginApi.AccountLogin,
    data: account
  })
}

export function requestUserInfoById(id: number) {
  return apiRequest.get<IDataType>({
    url: LoginApi.LoginUserInfo + id,
    showLoading: false
  })
}

export function requestUserMenusByRoleId(id: number) {
  return apiRequest.get<IDataType>({
    url: LoginApi.UserMenus + id + '/menu',
    showLoading: false
  })
}

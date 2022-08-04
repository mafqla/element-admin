import apiRequest from '../index'
import type { IAccount } from './type'

enum LoginApi {
  AccountLogin = '/login'
}
export function accountLoginRequest(account: IAccount) {
  return apiRequest.post({
    url: LoginApi.AccountLogin,
    data: account
  })
}

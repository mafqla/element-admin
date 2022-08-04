import type { Module } from 'vuex'
import type { ILoginState } from './type'
import type { IRootState } from '../type'
import type { IAccount } from '@/service/login/type'
import { accountLoginRequest } from '@/service/login/login'

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {}
    }
  },
  getters: {},
  mutations: {},
  actions: {
    async accountLoginAction({ commit }, payload: IAccount) {
      // commit('accountLoginMutation', payload)
      console.log('---执行accountLoginAction---', payload)
      const loginResult = await accountLoginRequest(payload)
      console.log(loginResult)
    }
    // phoneLoginAction({ commit }, payload: any) {
    //   // commit('phoneLoginMutation', payload)
    //   console.log('---执行phoneLoginAction---', payload)
    // }
  }
}

export default loginModule

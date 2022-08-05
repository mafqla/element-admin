import type { Module } from 'vuex'
import type { ILoginState } from './type'
import type { IRootState } from '../type'
import type { IAccount } from '@/service/login/type'
import {
  accountLoginRequest,
  requestUserInfoById,
  requestUserMenusByRoleId
} from '@/service/login/login'
import localCahe from '@/utils/cache'
import router from '@/router'

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {},
      userMenus: []
    }
  },
  getters: {},
  mutations: {
    changeToken(state, token: string) {
      state.token = token
    },
    changeUserInfo(state, userInfo: any) {
      state.userInfo = userInfo
    },
    changeUserMenus(state, userMenus: any) {
      state.userMenus = userMenus
    }
  },
  actions: {
    async accountLoginAction({ commit }, payload: IAccount) {
      // commit('accountLoginMutation', payload)
      // console.log('---执行accountLoginAction---', payload)
      const loginResult = await accountLoginRequest(payload)
      // console.log(loginResult)
      // console.log(loginResult.data.id, loginResult.data.token)
      const { id, token } = loginResult.data
      commit('changeToken', token)
      // 存储token
      localCahe.setCache('token', token)

      // 请求用户信息
      const userInfoResult = await requestUserInfoById(id)
      const userInfo = userInfoResult.data
      commit('changeUserInfo', userInfo)
      // 缓存用户信息
      localCahe.setCache('userInfo', userInfo)

      // 请求用户菜单
      const userMenusResult = await requestUserMenusByRoleId(userInfo.role.id)
      const userMenus = userMenusResult.data
      // console.log('---执行accountLoginAction---', userMenus)
      // 缓存用户菜单
      localCahe.setCache('userMenus', userMenus)

      // 跳转到首页
      router.push('/main')
    },
    // phoneLoginAction({ commit }, payload: any) {
    //   // commit('phoneLoginMutation', payload)
    //   console.log('---执行phoneLoginAction---', payload)
    // }

    loadLocalLogin({ commit }) {
      const token = localCahe.getCache('token')
      if (token) {
        commit('changeToken', token)
      }
      const userInfo = localCahe.getCache('userInfo')
      if (userInfo) {
        commit('changeUserInfo', userInfo)
      }
      const userMenus = localCahe.getCache('userMenus')
      if (userMenus) {
        commit('changeUserMenus', userMenus)
      }
    }
  }
}

export default loginModule

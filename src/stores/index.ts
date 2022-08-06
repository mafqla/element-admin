import { createStore, Store, useStore as useVuexStore } from 'vuex'
import login from './login/login'
import type { IRootState, IStoreType } from './type'

const store = createStore<IRootState>({
  state: () => {
    return {
      username: 'test',
      age: 18
    }
  },
  mutations: {},
  getters: {},
  actions: {},
  modules: {
    login
  }
})

export function setupStore() {
  store.dispatch('login/loadLocalLogin')
}

export function useStore(): Store<IStoreType> {
  return useVuexStore()
}
export default store

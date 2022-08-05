import { createStore } from 'vuex'
import login from './login/login'
interface IRootState {
  username: string
  age: number
}

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

export default store

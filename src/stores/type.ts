import type { ILoginState } from './login/type'
export interface IRootState {
  username: string
  age: number
}
export interface IRootWithModule {
  login: ILoginState
}

export type IStoreType = IRootState & IRootWithModule

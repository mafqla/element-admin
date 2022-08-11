import apiRequest from '../../index'

import type { IDataType } from '../../types'

export function getPageListData(url: string, queryInfo: any) {
  return apiRequest.post<IDataType>({
    url: url,
    data: queryInfo
  })
}

// url: /users/id
export function deletePageData(url: string) {
  return apiRequest.delete<IDataType>({
    url: url
  })
}

export function createPageData(url: string, newData: any) {
  return apiRequest.post<IDataType>({
    url: url,
    data: newData
  })
}

export function editPageData(url: string, editData: any) {
  return apiRequest.patch<IDataType>({
    url: url,
    data: editData
  })
}

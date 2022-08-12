import { ref } from 'vue'
import type PageContent from '@/components/page-content'

export function usePageSearch(): any {
  // InstanceType: PageContent构造类型
  const pageContentRef = ref<typeof PageContent | null>(null)
  const handleResetClick = () => {
    pageContentRef.value?.getPageData()
  }
  const handleQueryClick = (queryInfo: any) => {
    pageContentRef.value?.getPageData(queryInfo)
  }
  return [pageContentRef, handleResetClick, handleQueryClick]
}

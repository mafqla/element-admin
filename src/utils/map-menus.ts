import type { IBreadcrumb } from '@/base-ui/breadcrumb/types/index'
import type { RouteRecordRaw } from 'vue-router'

let firstMenu: any = null
export function mapMenusToRoutes(userMenus: any[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = []

  // 1.先去加载默认所有的routes
  const allRoutes: RouteRecordRaw[] = []
  // const routeFiles = require.context('../router/main', true, /\.ts/)
  const modules = import.meta.glob('../router/main/**/**.ts', { eager: true })
  // console.log(modules)
  for (const module in modules) {
    const routeFiles: any = modules[module]
    // console.log(routeFiles.default)
    allRoutes.push(routeFiles.default)
  }
  // console.log('1', allRoutes)
  // allRoutes.push(routeFiles)
  // routeFiles.keys().forEach((key) => {
  //   const route = require('../router/main' + key.split('.')[1])
  //   allRoutes.push(route.default)
  // })

  // 2.根据菜单获取需要添加的routes
  // userMenus:
  // type === 1 -> children -> type === 1
  // type === 2 -> url -> route
  const _recurseGetRoute = (menus: any[]) => {
    for (const menu of menus) {
      // console.log('mennu', menu.url)

      if (menu.type === 2) {
        // console.log(allRoutes)
        const route = allRoutes.find((route) => route.path === menu.url)
        // console.log('route', route)

        if (route) routes.push(route)
        if (!firstMenu) {
          firstMenu = menu
        }
      } else {
        _recurseGetRoute(menu.children)
      }
    }
  }

  _recurseGetRoute(userMenus)
  // console.log('routes:', routes)

  return routes
}

export function pathMapBreadcrumbs(userMenus: any[], currentPath: string) {
  const breadcrumbs: IBreadcrumb[] = []
  pathMapToMenu(userMenus, currentPath, breadcrumbs)
  return breadcrumbs
}

// /main/system/role  -> type === 2 对应menu
export function pathMapToMenu(
  userMenus: any[],
  currentPath: string,
  breadcrumbs?: IBreadcrumb[]
): any {
  for (const menu of userMenus) {
    if (menu.type === 1) {
      const findMenu = pathMapToMenu(menu.children ?? [], currentPath)
      if (findMenu) {
        breadcrumbs?.push({ name: menu.name })
        breadcrumbs?.push({ name: findMenu.name })
        return findMenu
      }
    } else if (menu.type === 2 && menu.url === currentPath) {
      return menu
    }
  }
}

export { firstMenu }

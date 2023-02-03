import { Navigation } from '@shopify/polaris'
import {
  CustomersMajor,
  NotificationMajor,
  PlanMajor,
  SettingsMajor
} from '@shopify/polaris-icons'
import { useLocation } from 'react-router-dom'

export const Sider = () => {
  const { pathname } = useLocation()

  // 左边主菜单
  const left_menu = [
    {
      url: '/',
      label: 'Home',
      icon: CustomersMajor,
      exactMatch: true,
    },
    {
      url: '/program',
      label: 'Program',
      icon: PlanMajor,
    },
    {
      url: '/notifications',
      label: 'Notifications',
      icon: NotificationMajor,
      // exactMatch: true,
      // badge: '15',
    },
  ]
  // 左边下方菜单
  const bottom_menu = [
    {
      url: '/settings',
      label: 'Settings',
      icon: SettingsMajor,
      exactMatch: true,
    },
  ]

  return (
    <Navigation location={pathname}>
      <Navigation.Section fill items={left_menu} />
      <Navigation.Section items={bottom_menu} />
    </Navigation>
  )
}

import polaris from '@/assets/svg/polaris.svg'
import { GlobalToast } from '@/components/GlobalToast'
import { Frame } from '@shopify/polaris'
import '@shopify/polaris/build/esm/styles.css'
import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { Sider } from './Sider'

const logo = {
  width: 124,
  topBarSource: polaris,
  contextualSaveBarSource: polaris,
  accessibilityLabel: 'URL shorter',
}

export const Main = () => {
  return (
    <Frame
      logo={logo}
      navigation={<Sider />}
      topBar={<Header />}
    >
      <GlobalToast />
      <Outlet />
    </Frame>
  )
}

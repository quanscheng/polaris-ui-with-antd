import { PolarisLink } from '@/utils/polarisLink'
import { AppProvider } from '@shopify/polaris'
import en from '@shopify/polaris/locales/en.json'; // DropZone里面的文字依赖
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { routes } from './configs/routes'
const router = createBrowserRouter(routes)

function App() {
  return (
    <AppProvider
      i18n={en}
      linkComponent={PolarisLink}
    >
      <RouterProvider router={router} />
    </AppProvider>
  )
}

export default App

import { Main } from '@/layouts/Main'
import { ErrorPage } from '@/pages/error/ErrorPage'
import { Page404 } from '@/pages/error/Page404'
import { HomePage } from '@/pages/home/HomePage'
import { Redirect } from '@/pages/trans/Redirect'
import { SignIn } from '@/pages/trans/SignIn'

export const routes = [
  {
    path: '/',
    element: <Main />,
    errorElement: <Page404 />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <HomePage />,
          },
        ],
      },
    ],
  },
  {
    path: '/signin',
    element: <SignIn />,
  },
  {
    path: '/redirect',
    element: <Redirect />,
  },
]

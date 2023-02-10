import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Other from './pages/Other'
import Products from './pages/Products'
import Error from './system/Error'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Error />,
    children: [
      { path: '/', element: <Products /> },
      { path: '/product:id', element: <Other /> },
    ],
  },
])

export default router

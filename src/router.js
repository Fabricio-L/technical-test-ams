import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Product from './pages/Product'
import Products from './pages/Products'
import Error from './system/Error'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Error />,
    children: [
      { path: '/', element: <Products /> },
      { path: '/product/:idProduct', element: <Product /> },
    ],
  },
])

export default router

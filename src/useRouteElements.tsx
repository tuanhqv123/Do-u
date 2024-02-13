import { useRoutes } from 'react-router-dom'
import Thanku from './components/Thanku'
import Product from './components/Product'

export default function useRouteElements() {
  const routeElements = useRoutes([
    {
      path: '/thanku',
      element: <Thanku />
    },
    {
      path: '/',
      element: <Product />
    }
  ])
  return routeElements
}

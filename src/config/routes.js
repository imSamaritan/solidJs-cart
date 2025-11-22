import { lazy } from 'solid-js'

import App from '../App'
const Products = lazy(() => import('../pages/Products'))
const Product = lazy(() => import('../pages/Product'))

const routes = [
  {path: '/', component: App},
  {
    path: '/products',
    children: [
      { path: '/', component: Products},
      {path: '/:id', component: Product},
    ],
  },
]

export default routes

/* @refresh reload */
import { render } from 'solid-js/web'
import { Router, Route } from '@solidjs/router'
import { lazy } from 'solid-js'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './index.css'

import App from './App'
import NotFound from './pages/NotFound'
import Products from './pages/Products'
const Product = lazy(() => import('./pages/Product'))

const root = document.getElementById('root')

render(
  () => (
    <Router root={App}>
      <Route path="/" component={Products} />
      <Route path="/products/:id" component={Product} />
      <Route path="*" component={NotFound} />
    </Router>
  ),
  root,
)

/* @refresh reload */
import { render } from 'solid-js/web'
import { Router } from '@solidjs/router'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './index.css'

import routes from './config/routes'

const root = document.getElementById('root')

render(() => <Router>{routes}</Router>, root)

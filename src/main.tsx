import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import RouteList from './router/index'
import vconosle from 'vconsole'

// new vconosle()

ReactDOM.render(
  <React.StrictMode>
		<RouteList/>
  </React.StrictMode>,
  document.getElementById('root')
)

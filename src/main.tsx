import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import RouteList from './router/index'

ReactDOM.render(
  <React.StrictMode>
		{RouteList}
  </React.StrictMode>,
  document.getElementById('root')
)

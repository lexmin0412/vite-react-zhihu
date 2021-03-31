import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route} from "react-router-dom";
import HomeIndex from './../pages/home'
import MsgIndex from './../pages/msg'
import UserIndex from './../pages/user'

let baseName = import.meta.env.DEV ? '' : 'vite-react-app'

console.log('basename', baseName)

export default <Router basename={baseName}>
	<Route path="/home/index" component={HomeIndex} />
	<Route path="/msg/index" component={MsgIndex} />
	<Route path="/user/index" component={UserIndex} />
</Router>


import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route} from "react-router-dom";
import HomeIndex from './../pages/home'
import MsgIndex from './../pages/msg'
import UserIndex from './../pages/user'

export default <Router basename=''>
	<Route path="/" component={HomeIndex} />
	<Route path="/home/index" component={HomeIndex} />
	<Route path="/msg/index" component={MsgIndex} />
	<Route path="/user/index" component={UserIndex} />
</Router>


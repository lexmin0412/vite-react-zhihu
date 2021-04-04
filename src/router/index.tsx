import React, { useState } from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route} from "react-router-dom";
import HomeIndex from './../pages/home'
import MsgIndex from './../pages/msg'
import UserIndex from './../pages/user'
import {ThemeProvider} from './../contexts/index'
import { themeList, ITheme } from './../constants/theme'

export default () => {
	const [theme, setTheme] = useState(themeList[0])

	return (
		<ThemeProvider value={{
			value: theme,
			setTheme: (value: ITheme) => {
				setTheme(value)  // 修改js context值
				document.documentElement.style.setProperty('--themeColor', value.hex);  // 修改css变量
			}
		}}>
			<Router basename=''>
				<Route path="/" exact component={HomeIndex} />
				<Route path="/home/index" component={HomeIndex} />
				<Route path="/msg/index" component={MsgIndex} />
				<Route path="/user/index" component={UserIndex} />
			</Router>
		</ThemeProvider>
	)
}


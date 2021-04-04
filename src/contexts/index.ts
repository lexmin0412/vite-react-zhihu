import React from 'react'
import {themeList, ITheme } from './../constants/theme'

export const ThemeContext = React.createContext({
	value: themeList[0],
	setTheme: (value: ITheme) => {}
})

export const ThemeProvider = ThemeContext.Provider

export const ThemeConsumer = ThemeContext.Consumer

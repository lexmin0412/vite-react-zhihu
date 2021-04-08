import React, {useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import dayjs from 'dayjs'

import Tabbar from './../../components/tabbar'
import styles from './index.module.css'
import { ThemeContext } from './../../contexts'
import { themeList, ITheme } from './../../constants/theme'
import { useNotify } from './../../components/notification/index'

export default function UserIndex() {



	const { value: themeValue, setTheme} = useContext(ThemeContext)
	console.log('当前主题', themeValue.titleZh)

	const toggleTheme = (item: ITheme) => {
		setTheme(item)
		console.log('切换主题', item)
	}

	const { show, RenderNotification } = useNotify()

	const history = useHistory()

	useEffect(() => {
		const userToken = localStorage.getItem('vite-react-zhihu-user-token')
		console.log('userToken', userToken)
		if (!userToken) {
			history.push('/login/index')
		}
		show()
	}, [])


	const timeStr = dayjs().format('YYYY年MM月DD日')

	return (
		<div className={styles.userIndexPage}>
			<RenderNotification>
				<React.Fragment>
					今天是{timeStr}, 祝大家牛年大吉啦
				</React.Fragment>
			</RenderNotification>
			<div className={styles.userMain}>
				<div className={styles.userInfo}>
					<img className={styles.userHeadImg} />
					<div className={styles.userInfoAbbr}>
						<div className={styles.userName}>
							Lexmin
						</div>
					</div>
				</div>
				<div className={styles.themeSetting}>
					<div className={styles.themeSettingTitle}>
						当前主题：
						<div className={styles.currentTheme}>
							{themeValue.titleZh}
						</div>
					</div>
					<div className={styles.themeList}>
						{
							themeList.map((item) => {
								return (
									<div className={styles.themeSettingItem}
										key={item.hex}
										style={{
											background: item.hex
										}}
										onClick={()=>toggleTheme(item)}
									>
										{item.titleZh}
									</div>
								)
							})
						}
					</div>
				</div>
			</div>
			<Tabbar />
		</div>
	)
}

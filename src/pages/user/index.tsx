import React, { useContext } from 'react'
import Tabbar from './../../components/tabbar'
import styles from './index.module.css'
import { ThemeContext } from './../../contexts'
import { themeList, ITheme } from './../../constants/theme'

export default function UserIndex() {

	const { value: themeValue, setTheme} = useContext(ThemeContext)
	console.log('当前主题', themeValue.titleZh)

	const toggleTheme = (item: ITheme) => {
		console.log('toggleTheme', item)
		setTheme(item)
	}

	return (
		<div className={styles.userIndexPage}>
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

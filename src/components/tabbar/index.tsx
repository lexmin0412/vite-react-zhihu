import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from './index.module.css'
import Icon from './../../components/icon/index'

const routerList = [
	{
		url: '/home/index',
		title: '首页',
		icon: () => <Icon name='Home' />,
		selectedIcon: () => <Icon name='HomeSelected' />
	},
	{
		url: '/msg/index',
		title: '消息',
		icon: () => <Icon name='Msg' />,
		selectedIcon: () => <Icon name='MsgSelected' />
	},
	{
		url: '/user/index',
		title: '我的',
		icon: () => <Icon name='User' />,
		selectedIcon: () => <Icon name='UserSelected' />
	},
]

export default function Tabbar() {

	const location = useLocation()

	return (
		<div className={styles.tabbarComp}>
			{
				routerList.map((item) => {
					const isCurLocation = location.pathname  === item.url
					return (
						<Link
							className={`${styles.tabbarItem} ${isCurLocation  ?  styles.current :  ''}`}
							to={item.url}
							key={item.url}
							replace
						>
							<div className={styles.icon}>
								{isCurLocation ? item.selectedIcon() : item.icon()}
							</div>
							<div className={styles.title}>
								{item.title}
							</div>
						</Link>
					)
				})
			}
		</div>
	)
}

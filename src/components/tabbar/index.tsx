import React from 'react'
import { Link, useLocation, useHistory, useParams, useRouteMatch } from 'react-router-dom'
import styles from './index.module.css'

const routerList = [
	{
		url: '/home/index',
		title: '首页'
	},
	{
		url: '/msg/index',
		title: '消息'
	},
	{
		url: '/user/index',
		title: '我的'
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
						>
							{item.title}
						</Link>
					)
				})
			}
		</div>
	)
}

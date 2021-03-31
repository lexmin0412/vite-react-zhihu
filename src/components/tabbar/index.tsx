import React from 'react'
import { Link } from 'react-router-dom'
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
	return (
		<div className={styles.tabbarComp}>
			{
				routerList.map((item)=>{
					return (
						<Link
							className={styles.tabbarItem}
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

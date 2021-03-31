import React, { useState, useEffect } from 'react'
import Tabbar from './../../components/tabbar'
import HomeService from './../../services/zhihu/home'
import styles from './index.module.css'

export default function HomeIndex() {

	const [ list, setList ] = useState([])

	useEffect(() => {
		HomeService.getRecommendList().then((res: any)=>{
			console.log('请求结果', res)
			setList(res)
		})
	}, []);

	return (
		<div className={styles.homeIndexPage}>
			<div className="list-container">
				{
					list.map((item: any)=>{
						return (
							<div className={styles.listItem}
								key={item.id}
							>
								<div className="title">
									{item.title}
								</div>
								<div className="content">
									{item.desc}
								</div>
							</div>
						)
					})
				}
			</div>
			<Tabbar />
		</div>
	)
}

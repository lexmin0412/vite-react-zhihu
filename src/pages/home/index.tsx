import React, { useState, useEffect } from 'react'
import Tabbar from './../../components/tabbar'
import HomeService from './../../services/zhihu/home'
import styles from './index.module.css'

export default function HomeIndex() {

	const [ list, setList ] = useState<Array<any>>([])

	useEffect(() => {
		HomeService.getRecommendList().then((res: any)=>{
			console.log('请求结果', res)
			setList(res)
		})
	}, []);

	return (
		<div className={styles.homeIndexPage}>
			<div className={styles.listContainer}>
				{
					list.map((item: any)=>{
						return (
							<div className={styles.listItem}
								key={item.id}
							>
								<div className={styles.itemTop}>
									<img className={styles.itemHeadImg} src={item.headimg} />
									<div className={styles.itemUserInfo}>
										<div className={styles.itemUserName}>
											{item.user}
										</div>
										<div className={styles.itemUpdateTime}>
											{item.timeStamp}
										</div>
									</div>
								</div>
								<div className={styles.itemMain}>
									<div className={styles.title}>
										{item.title}
									</div>
									<div className={styles.content}>
										<div className={styles.desc}>
											{item.desc}
										</div>
										<img src={item.mainPic} alt="" className={styles.mainPic}/>
									</div>
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

import React, { useState, useEffect } from 'react'
import Tabbar from './../../components/tabbar'
import HomeService from './../../services/zhihu/home'
import styles from './index.module.css'
import ReactLoading from 'react-loading';

export default function HomeIndex() {

	const [ list, setList ] = useState<Array<any>>([])
	const [ fetchFinished, setFetchFinished ] = useState<Boolean>(false)

	useEffect(() => {
		HomeService.getRecommendList().then((res: any)=>{
			console.log('请求结果', res)
			setList(res)
			setFetchFinished(true)
		})
	}, []);

	return (
		<div className={styles.homeIndexPage}>
			<div className={styles.listContainer}>
				<div className={styles.listTitle}>
					<div className={styles.listTitleText}>
						推荐
					</div>
				</div>
				{
					fetchFinished ?
					<React.Fragment>
							{
								list.map((item: any) => {
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
													<img src={item.mainPic} alt="" className={styles.mainPic} />
												</div>
											</div>
										</div>
									)
								})
							}
					</React.Fragment>
						:
						<div className={`${styles.flex} ${styles.fill}`}>
							<ReactLoading type='spokes' color='#06f' height={40} width={40} />
						</div>
				}
			</div>
			<Tabbar />
		</div>
	)
}

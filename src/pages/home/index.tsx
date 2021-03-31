import React, { useState, useEffect } from 'react'
import Tabbar from './../../components/tabbar'
import HomeService from './../../services/zhihu/home'
import styles from './index.module.css'
import ReactLoading from 'react-loading';
import useGetListOnScroll from './../../hooks/useGetListOnScroll'

export default function HomeIndex() {

	const [list, fetchFinished] = useGetListOnScroll(HomeService.getRecommendList)

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
								list.map((item: any, index) => {
									return (
										<div className={styles.listItem}
											key={`${item.id}${index}`}
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

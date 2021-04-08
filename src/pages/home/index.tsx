import React, {useContext} from 'react'
import ReactLoading from 'react-loading';

import Tabbar from './../../components/tabbar'
import HomeService from './../../services/zhihu/home'
import styles from './index.module.css'
import useGetListOnScroll from './../../hooks/useGetListOnScroll'
import useSetMeta from './../../hooks/useSetMeta'
import { ThemeContext } from './../../contexts/index'

export default function HomeIndex() {

	const [list, fetchFinished] = useGetListOnScroll(HomeService.getRecommendList)
	const {value: themeValue} = useContext(ThemeContext)
	useSetMeta({title: '首页'})

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
							<ReactLoading type='spokes' color={themeValue.hex} height={40} width={40} />
						</div>
				}
			</div>
			<Tabbar />
		</div>
	)
}

import React, { useEffect } from 'react'
import Tabbar from './../../components/tabbar'
import useSetMeta from './../../hooks/useSetMeta'
import useGetListOnScroll from './../../hooks/useGetListOnScroll'
import RepoService from './../../services/github/repo'
import styles from './index.module.css'

export default function MsgIndex() {
	useSetMeta({title: '仓库'})

	const [ list, fetchFinished ] = useGetListOnScroll(RepoService.getRepoDetail)
	
	return (
		<div>
			<div className={styles.listTitle}>
				<div className={styles.listTitleText}>
					仓库
				</div>
			</div>
				{
					fetchFinished ?
					<div className={styles.listContainer}>
						{
							list.map((item, index)=>{
								return (
									<div className={styles.listItem}>
										{item.name}
									</div>
								)
							})
						}
					</div>
					:
					<div>loading</div>
				}
			<Tabbar />
		</div>
	)
}

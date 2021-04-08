import React from 'react'
import Tabbar from './../../components/tabbar'
import useSetMeta from './../../hooks/useSetMeta'
import styles from './index.module.css'

export default function MsgIndex() {
	useSetMeta({title: '消息'})
	return (
		<div>
			<div className={styles.listTitle}>
				<div className={styles.listTitleText}>
					消息
				</div>
			</div>
			<Tabbar />
		</div>
	)
}

import React from 'react'
import Tabbar from './../../components/tabbar'
import styles from './index.module.css'

export default function MsgIndex() {
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

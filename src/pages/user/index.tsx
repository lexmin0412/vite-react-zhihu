import React, {useEffect} from 'react'
import Tabbar from './../../components/tabbar'
import styles from './user.module.css'

export default function UserIndex() {

	return (
		<div className={styles.userIndexPage}>
			<div className={styles.userMain}>
				<div className={styles.userInfo}>
					<img className={styles.userHeadImg} />
					<div className={styles.userInfoAbbr}>
						<div className="userName">
							Lexmin
						</div>
					</div>
				</div>
			</div>
			<Tabbar />
		</div>
	)
}

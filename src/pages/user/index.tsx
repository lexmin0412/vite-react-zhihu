import React, {useEffect} from 'react'
import Tabbar from './../../components/tabbar'
import styles from './user.module.css'
import Request from './../../utils/request'

export default function UserIndex() {

	useEffect(()=>{
		Request({
			url: `${process.env.VITE_NETEASE_API}/topic/detail?actid=111551188`
		}).then((res)=>{
			console.log('请求结果', res)
		})
	}, [])

	return (
		<div className={styles.userIndexPage}>
			<div className={styles.userMain}>
				<div className={styles.userInfo}>
					<img className={styles.userHeadImg} />
					<div className={styles.userInfoAbbr}>
						<div className="userName">
							Lexmin
						</div>
						<div className="userPump">
							打气值
						</div>
					</div>
				</div>
			</div>
			<Tabbar />
		</div>
	)
}

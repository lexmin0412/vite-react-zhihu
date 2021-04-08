import React from 'react'
import { useHistory } from 'react-router-dom'
import styles from './index.module.css'

import Form, { Field, useForm } from './../../components/form/index'

export default function LoginIndex() {
	const [ form ] = useForm()
	const history = useHistory()
	const onFinish = (res: any) => {
		console.log('onfinish',res)
		localStorage.setItem('vite-react-zhihu-user-token', res.userName)
		console.log('history.length', history.length)
		if ( history.length > 1 ) {
			history.goBack()
		} else {
			history.push('/user/index')
		}
	}
	const onFinishFailed = (errs: Array<any>) => {
		console.log('onFinishFailed', errs)
	}
	return (
		<div className={styles.loginIndexContainer}>
			<div className={styles.main}>
				<header className={styles.title}>登录</header>

				<Form form={form} onFinish={onFinish} onFinishFailed={onFinishFailed}>
					<>
						<div className={styles.fieldBox}>
							<div className={styles.label}>账号</div>
							<Field name="userName" rules={[{required: true, msg: '用户名不能为空～'}]}>
								<input type="text" placeholder='请输入用户名' />
							</Field>
						</div>
						<div className={styles.fieldBox}>
							<div className={styles.label}>密码</div>
							<Field name="password" rules={[{required: true, msg: '密码不能为空～'}]}>
								<input type="password" placeholder='请输入密码' />
							</Field>
						</div>
						<button type='submit' className={styles.submitBtn}>
							登录
						</button>
					</>
				</Form>



			</div>
		</div>
	)
}

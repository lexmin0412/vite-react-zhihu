import React from 'react'

import { FormContextProvider } from "./formContext";

type Props = {
	children: JSX.Element
	/**
	 * 表单store
	 */
	form: any
	/**
	 * 提交成功回调
	 */
	onFinish: (store: any) => void
	/**
	 * 提交失败回调
	 */
	onFinishFailed: (err: any) => void
}

export default function Form({
	children,
	form,
	onFinish,
	onFinishFailed
}: Props) {
	const onSubmit: any = (event: Event) => {
		event.preventDefault()
		form.submit()
			.then(onFinish)
			.catch(onFinishFailed)
	}

	return (
		<form onSubmit={onSubmit}>
			<FormContextProvider value={form}>
				{children}
			</FormContextProvider>
		</form>
	)
}

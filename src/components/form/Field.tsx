import React, { useContext, useEffect } from 'react'

import { FormContext } from './formContext'

type Props = {
	children: JSX.Element
	name: string
	rules: Array<any>
}

export default function Field(props: Props) {
	const {
		children,
		name
	} = props
	const form: any = useContext(FormContext)

	useEffect(()=>{
		const {unRegisterField} = form.registerField({props})
		return () => {
			unRegisterField({props})
		}
	}, [])


	const returnChildrenNode = React.cloneElement(children, {
		value: form.getFieldValue(name),
		onChange: (event: any) => {
			const newValue = event.target.value
			console.log('newValue', newValue)
			form.setFieldValue({[name]: newValue})
		}
	})
	return returnChildrenNode
}

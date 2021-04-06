import React, { useEffect,  useRef, useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import IconClose from './../../components/icon/close'

/**
 * 通知栏组件
 */
const Notification = React.memo((props: {
	children: JSX.Element | string
	onClose?: () => void
})=>{

	const { children, onClose } = props

	const container = useRef(document.createElement('div'))

	useEffect(()=>{
		container.current.classList.add('notify-portal-container')
		document.documentElement.appendChild(container.current)
		return () => {
			document.documentElement.removeChild(container.current)
		}
	}, [props.children])

	return (
		ReactDOM.createPortal(
			<React.Fragment>
				<div className="notify-portal-content">
					{props.children}
				</div>
				<div className="notify-portal-close"
					onClick={()=>{ onClose ? onClose() : void 0 }}
				>
					<IconClose />
				</div>
			</React.Fragment>,
			container.current
		)
	)
})

export default Notification

/**
 * 封装 hook
 */
export const useNotify = (): {
	/**
	 * 展示通知栏
	 */
	show: () => void
	/**
	 * 隐藏通知栏
	 */
	hide: () => void
	/**
	 * 渲染通知栏
	 */
	RenderNotification: (props: {children: JSX.Element | string}) => any
} => {

	const [ visible, setVisible ] = useState(false)

	const show = () => setVisible(true)
	const hide = () => setVisible(false)
	const RenderNotification = ({children}: {children: JSX.Element | string}) => {
		return (
			visible ? <Notification onClose={hide} >
				{children}
			</Notification> : null
		)
	}

	return {
		show,
		hide,
		RenderNotification
	}
}

/**
 * 使用class的方式实现
 */
// class Toast extends React.Component {

// 	constructor(props:any) {
// 		super(props)
// 		this.el = document.createElement('div')
// 		this.el.classList.add('toast-container')
// 	}

// 	el: HTMLDivElement

// 	componentDidMount() {
// 		document.documentElement.appendChild(this.el)
// 	}

// 	componentWillUnmount() {
// 		document.documentElement.removeChild(this.el)
// 	}

// 	render() {
// 		return ReactDOM.createPortal(
// 			this.props.children,
// 			this.el
// 		)
// 	}
// }

// export default React.memo(Toast)


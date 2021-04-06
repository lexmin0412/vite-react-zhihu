import React, { useEffect,  useRef, useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

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
					<svg t="1617743948751" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2044" width="16" height="16"><path d="M127.431111 455.111111a40.96 40.96 0 0 0 0 36.408889A427.235556 427.235556 0 0 0 493.226667 739.555556L158.72 404.48a444.302222 444.302222 0 0 0-31.288889 50.631111zM893.724444 449.422222C853.333333 384 732.728889 208.782222 512 208.782222a401.066667 401.066667 0 0 0-223.573333 66.56L207.644444 194.56 143.36 258.844444l74.524444 74.524445 100.693334 102.4 233.244444 231.537778 60.871111 61.44 101.262223 101.262222 64.284444-64.284445-72.248889-72.248888a455.111111 455.111111 0 0 0 189.44-193.422223 52.337778 52.337778 0 0 0-1.706667-50.631111zM638.293333 625.777778l-64.853333-65.422222a105.813333 105.813333 0 1 0-147.911111-147.911112L360.675556 347.591111A197.404444 197.404444 0 1 1 638.293333 625.777778z" p-id="2045" fill="#ffffff"></path></svg>
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


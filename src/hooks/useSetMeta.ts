import {useEffect } from 'react'

/**
 * 设置meta数据
 * @param metaData
 */
const useSetMeta = (metaData: {
	title: string
}) => {
	useEffect(() => {
		const {title} = metaData
		document.title = title
	}, [])
}

export default useSetMeta

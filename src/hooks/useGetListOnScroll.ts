/**
 * useGetListOnScroll hook
 * 实现无限加载列表页的进入加载和上拉加载渲染数据
 */
import {useState, useEffect} from 'react'

const useGetListOnScroll = (getList: Function): [Array<any>, Boolean] => {

	const [list, setList] = useState<Array<any>>([])
	const [fetchFinished, setFetchFinished] = useState<Boolean>(false)

	const queryData = () => {
		getList().then((res: any) => {
			console.log('请求结果', res)
			console.log('新列表', list.concat(res))
			const newList = list.concat(res)
			setList(newList)
			setFetchFinished(true)
		})
	}

	useEffect(() => {
		console.log('useEffect')
		queryData()
	}, []);

	//滚动条在Y轴上的滚动距离

	function getScrollTop() {
		var scrollTop = 0, bodyScrollTop = 0, documentScrollTop = 0;
		if (document.body) {
			bodyScrollTop = document.body.scrollTop;
		}
		if (document.documentElement) {
			documentScrollTop = document.documentElement.scrollTop;
		}
		scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
		return scrollTop;
	}

	//文档的总高度

	function getScrollHeight() {
		var scrollHeight = 0, bodyScrollHeight = 0, documentScrollHeight = 0;
		if (document.body) {
			bodyScrollHeight = document.body.scrollHeight;
		}
		if (document.documentElement) {
			documentScrollHeight = document.documentElement.scrollHeight;
		}
		scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;
		return scrollHeight;
	}

	//浏览器视口的高度

	function getWindowHeight() {
		var windowHeight = 0;
		if (document.compatMode == "CSS1Compat") {
			windowHeight = document.documentElement.clientHeight;
		} else {
			windowHeight = document.body.clientHeight;
		}
		return windowHeight;
	}

	window.onscroll = function () {
		if (getScrollTop() + getWindowHeight() == getScrollHeight()) {
			var more = document.getElementById('more');
			console.log('触底')
			queryData()
		}
	};

	return [list, fetchFinished]
}

export default useGetListOnScroll

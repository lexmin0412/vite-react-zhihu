import Request from './../../utils/request'

class HomeService {
	getRecommendList() {
		return Request({
			url: `${import.meta.env.VITE_API_HOST}/zhihu/home/getRecommendList`,
			method: 'post',
			body: {
				theme: '#ffe400'
			}
		})
	}
}

export default new HomeService()

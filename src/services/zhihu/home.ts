import Request from './../../utils/request'

class HomeService {
	getRecommendList() {
		return Request({
			url: '/api/zhihu/home/getRecommendList'
		})
	}
}

export default new HomeService()

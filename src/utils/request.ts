const request = (params: {
	url: string
	method: 'get' | 'post' | 'put' | 'delete'
	body?: any
}) => {
	const { url, method, body } = params

	// 原生fetch封装
	return new Promise((resolve, reject) => {
		const config: any = {
			method,
			headers: {
				'Content-Type': 'application/json'
			}
		}
		if ( ['post', 'put'].includes(method) ) {
			config.body = JSON.stringify(body)
		}		
		fetch(url, {
			...config
		})
		.then(function (response) {
			try {
				return response.json();
			} catch (error) {
				console.log('error', error);
			}
		})
		.then(function (myJson) {

			// 区分来源域名取不同级别的数据
			if ( url.startsWith('https://api.github.com') ) {
				resolve(myJson)
				return
			}
			if (myJson.code === '10000') {
				resolve(myJson.data)
				return
			}
			reject(myJson)
		}).catch((err)=>{
			console.log('fetch err', err)
			reject(err)
		})
	})
}

export default request

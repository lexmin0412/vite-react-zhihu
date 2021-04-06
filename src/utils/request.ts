const request = (params: {
	url: string
	method: 'get' | 'post' | 'put' | 'delete'
	body: any
}) => {
	const { url, method, body } = params

	// 原生fetch封装
	return new Promise((resolve, reject) => {
		fetch(url, {
			method,
			body: JSON.stringify(body),
			headers: {
				'Content-Type': 'application/json'
			}
		})
		.then(function (response) {
			return response.json();
		})
		.then(function (myJson) {
			if (myJson.code === '10000') {
				resolve(myJson.data)
				return
			}
			console.log('fetch err', myJson)
			reject(myJson)
		}).catch((err)=>{
			console.log('fetch err', err)
			reject(err)
		})
	})
}

export default request

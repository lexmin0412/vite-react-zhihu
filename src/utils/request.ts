const request = (params: {
	url: string
}) => {
	const { url } = params
	return new Promise((resolve, reject) => {
		fetch(url)
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

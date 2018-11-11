const base = 'http://172.23.1.78:3000'

const get = (url) => {
	return makeRequest(url + '?user_id=1')
}

const post = (url, body) => {
	return makeRequest(url, { method: 'POST', body })
}

const update = (url, body) => {
	return makeRequest(url, { method: 'UPDATE', body })
}

const makeRequest = (url, settings) => {	
	return fetch(base + url, setup(settings)).then(response =>
		response.json().then(data => 
			response.ok ? data : Promise.reject(data)
		)
	)
}

const setup = (settings) => {
	let config = {}

	if(settings) {
		config.method = settings.method ? settings.method : 'GET'

		if(settings.body) {
			config.headers = { 'Content-Type': 'application/json' }
			config.body = JSON.stringify(settings.body)
		}
	}

	return config
}

export default { get, post, update }
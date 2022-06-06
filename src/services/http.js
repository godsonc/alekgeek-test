import axios from 'axios'

const http = axios.create({
	baseURL: 'https://gnikdroy.pythonanywhere.com/api/',
})

http.interceptors.request.use(
	(config) => {
		config.headers['Content-Type'] = 'application/type'

		return config
	},
	(error) => {
		return Promise.reject(error)
	},
)

const handleSuccess = (res) => {
	return res
}

const handleError = (error) => {
	return Promise.reject(error)
}

http.interceptors.response.use(
	(response) => {
		return handleSuccess(response)
	},
	(error) => handleError(error),
)

export default http

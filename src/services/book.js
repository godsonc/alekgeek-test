import http from './http'

export const fetchAllBooks = async () => {
	return http.get('/book/')
}

import http from './http'

export const fetchAllBooks = async () => {
	const res = await http.get('/book/')
	return res.data
}

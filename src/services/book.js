import http from './http'

export const fetchAllBooks = async () => {
	const res = await http.get('/book/')
	return res.data
}


export const fetchAllBookShelf = async () => {
	const res = await http.get('/bookshelf')
	return res.data
}

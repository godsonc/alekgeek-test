import React, { useEffect } from 'react'
import { fetchAllBooks } from '../services/book'

const Books = () => {
	const getBooks = async () => {
		try {
			const allBooks = await fetchAllBooks()
			console.log(allBooks)
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		getBooks()
	}, [])

	return <div>books</div>
}

export default Books

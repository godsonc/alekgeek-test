import { Container, Grid, GridItem, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { fetchAllBooks } from '../services/book'

const Books = () => {
	const [books, setBooks] = useState([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		fetchAllBooks()
			.then((res) => {
				setBooks(res.results)
				setLoading(false)
			})
			.catch((err) => {
				console.log(err)
			})
	}, [])

	const getBookImage = (resource) => {
		let obj = resource.find((o) => o.type === 'image/jpeg')
		console.log(obj)

		return ''
	}

	return (
		<>
			{loading ? (
				<div>Loading</div>
			) : (
				<Container>
					{books.map((book, index) => {
						return (
							<Grid
								key={index}
								my={5}
								templateColumns='repeat(5, 1fr)'
								gap={3}>
								{getBookImage(book.resources)}
								<GridItem colSpan={1} w='100%' h='10'>
									<img
										alt={book.title}
										height={10}
										width={40}
										src='https://www.gutenberg.org/cache/epub/84/pg84.cover.small.jpg'
									/>
								</GridItem>
								<GridItem colSpan={3} w='100%' h='10'>
									<Text fontSize='sm'>{book.title}</Text>
									<Text fontSize='xs'>
										by {book.agents[0].person}
									</Text>
								</GridItem>
								<GridItem colSpan={1} w='100%' h='10'>
									<Text color='blue.400' fontSize='xs'>
										View
									</Text>
								</GridItem>
							</Grid>
						)
					})}
				</Container>
			)}
		</>
	)
}

export default Books

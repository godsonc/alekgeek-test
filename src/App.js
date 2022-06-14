import React from 'react'
import './App.css'
import Books from './views/Books'
import { ChakraProvider } from '@chakra-ui/react'

function App() {
	return (
		<ChakraProvider>
			<div className='App'>
				<Books />
			</div>
		</ChakraProvider>
	)
}

export default App

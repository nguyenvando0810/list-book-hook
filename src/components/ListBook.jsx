import React, { useContext } from 'react'
import { BooksContext } from '../context/BooksContext'
import Book from './Book'

function ListBook() {
  const { books } = useContext(BooksContext)

  return (
    <div className="book-list">
      <ul>{books.map((book, index) => <Book key={index} book={book} />)}</ul>
    </div>
  )
}

export default ListBook

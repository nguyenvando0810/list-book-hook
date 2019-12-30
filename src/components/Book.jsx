import React, { useContext } from 'react'
import { BooksContext } from '../context/BooksContext'

function ListBook({ book }) {
  const { dispatch } = useContext(BooksContext)

  return (
    <li onClick={() => dispatch({ type: 'DELETE_BOOK', id: book.id })}>
      <div className="title">
        {book.title} / {book.author}
      </div>
    </li>
  )
}

export default ListBook

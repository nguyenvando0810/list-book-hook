import React, { useContext } from 'react'
import { BooksContext } from '../context/BooksContext'

function ListBook({ book }) {
  const { dispatchVisible } = useContext(BooksContext)

  return (
    <li onClick={() => dispatchVisible({ type: 'OPEN_MODAL', book: book })}>
      <div className="title">
        {book.title} / {book.author}
      </div>
    </li>
  )
}

export default ListBook

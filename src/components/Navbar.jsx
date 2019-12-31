import React, { useContext } from 'react'
import { BooksContext } from '../context/BooksContext'

function Navbar() {
  const { books } = useContext(BooksContext)
  return (
    <div className="navbar">
      <h1>Reading List Book</h1>
      {books.length > 0 ? <h3>Total books: {books.length}</h3> : <h3> No book (T__T) </h3>}
    </div>
  )
}

export default Navbar

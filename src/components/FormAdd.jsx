import React, { useState, useContext } from 'react'
import { BooksContext } from '../context/BooksContext'

function FormAdd() {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const { dispatch } = useContext(BooksContext)

  function handleChangeTitle(e) {
    setTitle(e.target.value)
  }

  function handleChangeAuthor(e) {
    setAuthor(e.target.value)
  }

  function handleSubmitForm() {
    dispatch({ type: 'ADD_BOOK', book: { title, author } })
    setTitle('')
    setAuthor('')
  }

  return (
    <form>
      <input
        type="text"
        placeholder="Book title"
        value={title}
        onChange={handleChangeTitle}
      />

      <input
        type="text"
        placeholder="Author name"
        value={author}
        onChange={handleChangeAuthor}
      />
      <input type="button" value="Add book" onClick={handleSubmitForm} />
    </form>
  )
}

export default FormAdd

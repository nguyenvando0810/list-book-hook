import React, { useState, useContext } from 'react'
import { BooksContext } from '../context/BooksContext'
import { Form, Input, Button } from 'antd';

function FormAdd() {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [errTitle, setErrTitle] = useState(false)
  const [errAuthor, setErrAuthor] = useState(false)
  const { dispatch } = useContext(BooksContext)

  function handleSubmitForm() {
    dispatch({ type: 'ADD_BOOK', book: { title, author } })
    setTitle('')
    setAuthor('')
  }

  const handleBlueTitle = (e) => {
    setErrTitle(!e.target.value)
  }

  const handleBlueAuthor = (e) => {
    setErrAuthor(!e.target.value)
  }

  return (
    <Form>
      <div className="form-control">
        <Input
          type="text"
          placeholder="Book title"
          value={title}
          onChange={(e) => { setTitle(e.target.value) }}
          onBlur={handleBlueTitle}
        />
        {errTitle && <div className="error_message">Title cannot be empty</div>}
      </div>

      <div className="form-control">
        <Input
          type="text"
          placeholder="Author name"
          value={author}
          onChange={(e) => { setAuthor(e.target.value) }}
          onBlur={handleBlueAuthor}
        />
        {errAuthor && <div className="error_message">Author cannot be empty</div>}
      </div>

      <div className="text-center">
        <Button type="primary" onClick={handleSubmitForm} disabled={!title.trim() || !author.trim()}>Add book</Button>
      </div>
    </Form>
  )
}

export default FormAdd

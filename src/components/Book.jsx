import React, { useContext } from 'react'
import { Icon } from 'antd';
import { BooksContext } from '../context/BooksContext'

function ListBook({ book }) {
  const { dispatchVisible } = useContext(BooksContext)

  return (
    <li>
      <div className="title">
        {book.title} / {book.author}
        <span style={{ float: "right" }}>
          <Icon type="edit" onClick={() => dispatchVisible({ type: 'OPEN_MODAL', book: book })} /> &nbsp; &nbsp;
          <Icon type="delete" onClick={() => dispatchVisible({ type: 'OPEN_MODAL', book: book, typeModal: "DELETE_MODAL" })} />
        </span>
      </div>
    </li>
  )
}

export default ListBook

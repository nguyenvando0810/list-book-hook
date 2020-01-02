import React, { useContext } from 'react'
import { BooksContext } from '../context/BooksContext'
import { Button } from 'antd';

function FormAdd() {
  const { dispatchVisible } = useContext(BooksContext)

  const handleOpenFormAdd = () => {
    dispatchVisible({ type: 'OPEN_MODAL' })
  }

  return (
    <div style={{ margin: "0 20px" }}>
      <Button type="primary" onClick={handleOpenFormAdd}> Add Book</Button>
    </div>
  )
}

export default FormAdd

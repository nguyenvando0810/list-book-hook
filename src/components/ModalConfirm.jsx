import React, { useContext, useEffect, useState } from 'react'
import { Modal, Form, Input, notification, Button } from 'antd';
import { BooksContext } from '../context/BooksContext'

function ModalConfirm() {
  const { visible, dispatch, dispatchVisible } = useContext(BooksContext)
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [errTitle, setErrTitle] = useState(false)
  const [errAuthor, setErrAuthor] = useState(false)

  useEffect(() => {
    if (visible.book) {
      setTitle(visible.book.title)
      setAuthor(visible.book.author)
    }
  }, [visible.book])

  const handleCancel = () => {
    dispatchVisible({ type: 'CLOSE_MODAL' })
    setErrTitle(false)
    setErrAuthor(false)
    setTitle('')
    setAuthor('')
  }

  const openNotificationWithIconDelete = (type) => {
    notification[type]({
      message: "Notification Delete",
      description: "Delete Success !"
    });
  }

  const openNotificationWithIconEdit = (type) => {
    notification[type]({
      message: "Notification Edit",
      description: "Edit Success !"
    });
  }

  const openNotificationWithIconCreate = (type) => {
    notification[type]({
      message: "Notification Create",
      description: "Create Success !"
    });
  }

  const handleDelete = () => {
    dispatch({ type: 'DELETE_BOOK', id: visible.book.id })
    openNotificationWithIconDelete('success')
    handleCancel()
  }

  const handleBlurTitle = (e) => {
    setErrTitle(!e.target.value)
  }

  const handleBlurAuthor = (e) => {
    setErrAuthor(!e.target.value)
  }

  const handleUpdate = () => {
    if (visible.book) {
      dispatch({ type: 'EDIT_BOOK', book: { id: visible.book.id, title, author } })
      openNotificationWithIconEdit('success')
    } else {
      dispatch({ type: 'ADD_BOOK', book: { title, author } })
      openNotificationWithIconCreate('success')
    }

    handleCancel()
  }

  return (
    <>
      {(visible.book && visible.typeModal === "DELETE_MODAL") ? (
        <Modal
          title="Delete Modal"
          visible={visible.visible}
          onOk={handleDelete}
          onCancel={handleCancel}
          okText="Delete"
        >
          <p>Are you want to delete book " {visible.book.title}" ?</p>
        </Modal>
      ) : (
          <Modal
            title="Form Modal"
            visible={visible.visible}
            onOk={handleUpdate}
            onCancel={handleCancel}
            footer={[
              <Button key="back" onClick={handleCancel}>Cancel</Button>,
              <Button key="submit" type="primary" disabled={!title.trim() || !author.trim()} onClick={handleUpdate}>Save</Button>,
            ]}
          >
            <Form>
              <div className="form-control">
                <Input
                  type="text"
                  placeholder="Book title"
                  value={title || ''}
                  onChange={(e) => { setTitle(e.target.value) }}
                  onBlur={handleBlurTitle}
                />
                {errTitle && <div className="error_message">Title cannot be empty</div>}
              </div>

              <div className="form-control">
                <Input
                  type="text"
                  placeholder="Author name"
                  value={author || ''}
                  onChange={(e) => { setAuthor(e.target.value) }}
                  onBlur={handleBlurAuthor}
                />
                {errAuthor && <div className="error_message">Author cannot be empty</div>}
              </div>
            </Form>
          </Modal>
        )}
    </>
  )
}

export default ModalConfirm

import React, { useContext } from 'react'
import { Modal, notification } from 'antd';
import { BooksContext } from '../context/BooksContext'

function ModalConfirm() {
  const { visible, dispatch, dispatchVisible } = useContext(BooksContext)

  const handleOk = () => {
    dispatch({ type: 'DELETE_BOOK', id: visible.book.id })
    openNotificationWithIcon('success')
    dispatchVisible({ type: 'CLOSE_MODAL' })
  }

  const openNotificationWithIcon = (type) => {
    notification[type]({
      message: 'Notification Delete',
      description: 'Delete Success !'
    });
  }

  const handleCancel = () => {
    dispatchVisible({ type: 'CLOSE_MODAL' })
  }

  return (
    <>
      {visible.book && (
        <Modal
          title="Delete Modal"
          visible={visible.visible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <p>Are you want to delete book " {visible.book.title}" ?</p>
        </Modal>
      )}
    </>
  )
}

export default ModalConfirm

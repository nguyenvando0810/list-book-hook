import React, { createContext, useReducer } from 'react'
import { BookReducer } from '../reducer/BooksReducer'
import { ModalReducer } from '../reducer/ModalReducer'

export const BooksContext = createContext()

function BooksContextProvider(props) {
  const [books, dispatch] = useReducer(BookReducer, [{ title: 'True', author: 'Do Do', id: 1 }])
  const [visible, dispatchVisible] = useReducer(ModalReducer, { visible: false, typeModal: '' })

  return (
    <BooksContext.Provider value={{ books, dispatch, visible, dispatchVisible }}>
      {props.children}
    </BooksContext.Provider>
  )
}

export default BooksContextProvider

import React, { createContext, useReducer } from 'react'
import { BookReducer } from '../reducer/BooksReducer'

const intinialBooks = [{ title: 'True', author: 'Do Do', id: 1 }]
export const BooksContext = createContext()

function BooksContextProvider(props) {
  const [books, dispatch] = useReducer(BookReducer, intinialBooks)

  return (
    <BooksContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BooksContext.Provider>
  )
}

export default BooksContextProvider

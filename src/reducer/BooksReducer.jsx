import uuid from 'uuid'

export function BookReducer(state, action) {
  switch (action.type) {
    case 'ADD_BOOK':
      return [
        ...state,
        { title: action.book.title, author: action.book.author, id: uuid.v4() }
      ]

    case 'EDIT_BOOK':
      return state.map((book) => book.id === action.book.id ? action.book : book)

    case 'DELETE_BOOK':
      return state.filter(book => book.id !== action.id)
    default:
      return state
  }
}

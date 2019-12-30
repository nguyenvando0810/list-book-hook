export function BookReducer(state, action) {
  switch (action.type) {
    case 'ADD_BOOK':
      return [
        ...state,
        { title: action.book.title, author: action.book.author, id: Date.now() }
      ]

    case 'DELETE_BOOK':
      return state.filter(book => book.id !== action.id)
    default:
      return state
  }
}

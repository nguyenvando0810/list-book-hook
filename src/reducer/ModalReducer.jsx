export function ModalReducer(state, action) {
  switch (action.type) {
    case 'OPEN_MODAL':
      return { visible: true, book: action.book, typeModal: action.typeModal }

    case 'CLOSE_MODAL':
      return { visible: false, book: action.book }

    default:
      return state
  }
}

export function createBook (book) {
  return {
    type: 'CREATE_BOOK',
    book
  }
}

export function removeBook (book) {
  return {
    type: 'REMOVE_BOOK',
    book
  }
}
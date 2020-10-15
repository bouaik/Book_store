export const createBook = book => ({
  type: 'CREATE_BOOK',
  id: Math.floor(Math.random() * 10000),
  title: book.title,
  category: book.category,
});

export const removeBook = book => ({
  type: 'REMOVE_BOOK',
  id: book.id,
});

export const changeFilter = category => ({
  type: 'CHANGE_FILTER',
  payload: category,
});

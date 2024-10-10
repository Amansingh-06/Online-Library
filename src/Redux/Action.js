// src/redux/actions.js
export const addBook = (book) => {
    return {
        type: 'ADD_BOOK',
        payload: book,
    };
};

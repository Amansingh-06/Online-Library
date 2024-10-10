// src/redux/reducer.js
const initialState = {
    books: [
        { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", category: "Fiction", description: "A classic novel...", rating: 4.5 },
    ],
};

const booksReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_BOOK':
            return {
                ...state,
                books: [...state.books, action.payload],
            };
        default:
            return state;
    }
};

export default booksReducer;

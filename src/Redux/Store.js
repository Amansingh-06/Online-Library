// src/redux/store.js
import {createStore} from "redux"
import booksReducer from './Reducer';

const store = createStore(booksReducer);

export default store;

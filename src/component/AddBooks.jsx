// src/components/AddBook.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../Redux/Action';

const AddBooks = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [rating, setRating] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newBook = { title, author, category, description, rating };
        dispatch(addBook(newBook));
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Add a New Book</h1>
            <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
            <input type="text" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} required />
            <input type="text" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} required />
            <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
            <input type="text" placeholder="Rating" value={rating} onChange={(e) => setRating(e.target.value)} required />
            <button type="submit">Add Book</button>
        </form>
    );
};

export default AddBooks;

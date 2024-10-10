import React from 'react';
import { useParams, Link } from 'react-router-dom';

const books = [
    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", description: "A classic novel...", rating: 4.5 },
    { id: 2, title: "1984", author: "George Orwell", description: "A dystopian novel...", rating: 4.8 },
];

const BooksDetail = () => {
    const { id } = useParams();
    const book = books.find(b => b.id === parseInt(id));

    return book ? (
        <div className='popular_book'>
            <div className='popular_card'>
            <h1>{book.title}</h1>
            <p><strong>Author:</strong> {book.author}</p>
            <p><strong>Description:</strong> {book.description}</p>
            <p><strong>Rating:</strong> {book.rating}</p>
                <Link to="/browse">Back to Browse</Link>
            </div>
        </div>
    ) : (
        <p style={{textAlign:"center"}}>Book not found</p>
    );
};

export default BooksDetail;

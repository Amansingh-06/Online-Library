// src/components/BrowseBooks.jsx
import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';

// Sample books data
const books = [
    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", category: "Fiction", image: "https://tse1.mm.bing.net/th?id=OIP.aJE9Wj2KjPNANln6CB3YawHaK-&pid=Api&P=0&h=180" },
    { id: 2, title: "1984", author: "George Orwell", category: "Fiction", image: "https://images-na.ssl-images-amazon.com/images/I/71kxa1-0mfL.jpg" },
    { id: 3, title: "Dune", author: "Frank Herbert", category: "Sci-Fi", image: "https://tse2.mm.bing.net/th?id=OIP.3QS83UQ0rWqsk2tNxraTfQHaLH&pid=Api&P=0&h=180" },
    { id: 4, title: "Sapiens", author: "Yuval Noah Harari", category: "Non-Fiction", image: "https://images-na.ssl-images-amazon.com/images/I/713jIoMO3UL.jpg" },
    { id: 5, title: "The Lean Startup", author: "Eric Ries", category: "Business", image: "https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg" },
    { id: 6, title: "Harry Potter and the Philosopher's Stone", author: "J.K. Rowling", category: "Fantasy", image: "https://images-na.ssl-images-amazon.com/images/I/81YOuOGFCJL.jpg" },
    { id: 7, title: "To Kill a Mockingbird", author: "Harper Lee", category: "Fiction", image: "https://images-na.ssl-images-amazon.com/images/I/81a4kCNuH+L.jpg" },
    { id: 8, title: "The Lord of the Rings", author: "J.R.R. Tolkien", category: "Fantasy", image: "https://tse3.mm.bing.net/th?id=OIP.hOQG35ySkusg3qg40n2G5QHaJ4&pid=Api&P=0&h=180" },
    { id: 9, title: "Thinking, Fast and Slow", author: "Daniel Kahneman", category: "Non-Fiction", image: "https://images-na.ssl-images-amazon.com/images/I/71uAI28kJuL.jpg" },
    { id: 10, title: "Atomic Habits", author: "James Clear", category: "Self-Help", image: "https://images-na.ssl-images-amazon.com/images/I/91bYsX41DVL.jpg" },
    { id: 11, title: "The Catcher in the Rye", author: "J.D. Salinger", category: "Fiction", image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg" }
];

// Function to get query parameters
const useQuery = () => {
    return new URLSearchParams(useLocation().search);
};

const BrowseBooks = () => {
    const query = useQuery();
    const category = query.get('category'); // Get the category from the URL
    const [search, setSearch] = useState('');

    // Filter books based on the selected category and search input
    const filteredBooks = books.filter(book => {
        const matchesCategory = category ? book.category.toLowerCase() === category.toLowerCase() : true;
        const matchesSearch = book.title.toLowerCase().includes(search.toLowerCase()) || book.author.toLowerCase().includes(search.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="container">
            <h1>Browse Books</h1>
            {category && <h2>Showing books in category: {category}</h2>}
            <input
                type="text"
                placeholder="Search by title or author"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <ul>
                {filteredBooks.length === 0 ? (
                    <li>No books found.</li>
                ) : (
                    filteredBooks.map(book => (
                        <li key={book.id}>
                            <img src={book.image} alt={book.title} style={{ width: '150px', height: '200px', marginBottom: '10px' }} />
                            <h3>{book.title}</h3>
                            <p>by {book.author}</p>
                            <Link to={`/books/${book.id}`}>View Details</Link>
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
};

export default BrowseBooks;

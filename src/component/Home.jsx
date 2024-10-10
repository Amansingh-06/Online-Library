// src/components/Home.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate(); // Hook to programmatically navigate

    // Array of popular books
    const popularBooks = [
        { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
        { id: 2, title: "1984", author: "George Orwell" },
        { id: 3, title: "Dune", author: "Frank Herbert" },
        { id: 4, title: "Sapiens", author: "Yuval Noah Harari" },
        { id: 5, title: "Harry Potter and the Philosopher's Stone", author: "J.K. Rowling" },
    ];

    // Function to handle category click
    const handleClick = (category) => {
        navigate(`/browse?category=${category}`); // Navigate to the browse page with the selected category
    };

    return (
        <div className="home">
            <h1>Welcome to the Online Library</h1>
            <h2>Explore Our Book Categories</h2>
            <div className="categories">
                <div className="category-card">
                    <img src="https://storage.googleapis.com/a1aa/image/eeeUyVfQj3JCjTnBIWDJ4A2R94PJRtdLsubIY2r3NCje3GrcC.jpg" alt="Fiction" />
                    <Link to="#" onClick={handleClick('Fiction')} className='Link'>Fiction</Link>
                </div>
                <div className="category-card">
                    <img src="https://storage.googleapis.com/a1aa/image/HDNp6Nz4Y65nMBwPerCNMYhtRKX7ROuqu4DDPyeVMQrh3YlTA.jpg" alt="Non-Fiction" />
                    <Link to="#" onClick={handleClick('Non-Fiction')} className='Link'>Non-Fiction</Link>
                </div>
                <div className="category-card">
                    <img src="https://storage.googleapis.com/a1aa/image/XpVWeMiV3G0DYiK2t7w5RZNielpU5BZYVRyWMIelir2c0xKnA.jpg" alt="Sci-Fi" />
                    <Link to="#" onClick={handleClick('Sci-Fi')} className='Link'>Sci-Fi</Link>
                </div>
                <div className="category-card">
                    <img src="https://storage.googleapis.com/a1aa/image/HdGrQsItA66nHtIvff4wQN6U3Q6JGvDgPZOICgdR89OkfxKnA.jpg" alt="Business" />
                    <Link to="#" onClick={handleClick('Business')} className='Link'>Business</Link>
                </div>
                <div className="category-card">
                    <img src="https://storage.googleapis.com/a1aa/image/AgYIphCXmJoEN9tfUkR2deOd0beCcXb6uaLK1n0GgXEfEkVOB.jpg" alt="Fantasy" />
                    <Link to="#" onClick={handleClick('Fantasy')} className='Link'>Fantasy</Link>
                </div>
            </div>

            <h2>Popular Books</h2>
            <ul className='popularbook_home'>
                {popularBooks.map((book) => (
                    <li key={book.id}>
                        <Link to={`/books/${book.id}`}>
                            {book.title} by {book.author}
                        </Link>
                    </li>
                ))}
            </ul>

            <Link to="/browse">
                <button className="button">Browse Books</button>
            </Link>
        </div>
    );
};

export default Home;

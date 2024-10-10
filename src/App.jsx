import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import BrowseBooks from "./component/BrowseBooks";
import BooksDetail from "./component/BooksDetail";
import AddBooks from "./component/AddBooks";
import NotFound from "./component/NotFound";
import "./App.css"

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <a href="/">Home</a> |
          <a href="/browse">Browse Books</a> |
          <a href="/add">Add Book</a>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/browse" element={<BrowseBooks />} />
          <Route path="/books/:id" element={<BooksDetail />} />
          <Route path="/add" element={<AddBooks />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

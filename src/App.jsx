import { useState, useEffect } from 'react';
import './index.css';
import BookList from './Books';
import SingleBook from "./SingleBook";
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  const [books, setBooks] = useState([]);
  const [favoriteBook, setFavoriteBook] = useState(null);

  useEffect(() => {
    const getBooks = async () => {
      try {
        const res = await fetch("https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books");
        const data = await res.json();
        setBooks(data); // Access the books array from the response
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    getBooks();
    
    // Load favorite from localStorage
    const storedFavorite = localStorage.getItem("favoriteBook");
    if (storedFavorite) {
      setFavoriteBook(JSON.parse(storedFavorite));
    }
  }, []);

  useEffect(() => {
    if (favoriteBook) {
      localStorage.setItem("favoriteBook", JSON.stringify(favoriteBook));
    } else {
      localStorage.removeItem("favoriteBook");
    }
  }, [favoriteBook]);

  return (
    <>
      <nav style={{ display: "flex", justifyContent: "space-between" }}>
        <Link to="/">Home</Link>
        <Link to="/favorite">Favorite</Link>
      </nav>

      <h1>Library</h1>

      <Routes>
        <Route path="/" element={<BookList books={books} setFavoriteBook={setFavoriteBook} />} />
        <Route path="/books" element={<BookList books={books} setFavoriteBook={setFavoriteBook} />} />
        <Route path="/favorite" element={<SingleBook favoriteBook={favoriteBook} setFavoriteBook={setFavoriteBook} />} />
      </Routes>
    </>
  );
}

export default App;
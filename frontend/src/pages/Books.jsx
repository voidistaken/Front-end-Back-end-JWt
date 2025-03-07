import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const Books = () => {
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      navigate('/login'); // Redirect to login if no token is found
      return;
    }

    const fetchBooks = async () => {
      try {
        const response = await axios.get('http://localhost:9000/api/books', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setBooks(response.data);
      } catch (error) {
        console.error('Error fetching books:', error);
        localStorage.removeItem('token'); // Remove invalid token
        navigate('/login'); // Redirect to login if token is invalid
      }
    };

    fetchBooks();
  }, [navigate]);

  return (
    <div style={{ padding: '20px' }}>
      <h1>List of books</h1>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {books.map((book) => (
          <li key={book.id} style={{ margin: '10px 0', padding: '10px', border: '1px solid #ccc' }}>
            <h2 style={{ margin: '0 0 10px 0' }}>{book.title}</h2>
            <p style={{ margin: '0 0 5px 0' }}>Author: {book.author}</p>
            <p style={{ margin: 0 }}>Price: ${book.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

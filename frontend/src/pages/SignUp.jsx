import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

export const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize the navigate function

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Sign Up submitted:', { email, password });

    try {
      const res = await axios.post('http://localhost:9000/api/users/', { email, password });
      console.log(res.data);
      
      // Redirect to login page after successful signup
      navigate('/'); 
    } catch (error) {
      console.error('Error signing up:', error.response?.data || error.message);
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: 'linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)',
        padding: '20px',
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          backgroundColor: 'white',
          padding: '40px',
          borderRadius: '12px',
          boxShadow: '0px 8px 12px rgba(0, 0, 0, 0.2)',
          width: '100%',
          maxWidth: '420px',
          textAlign: 'center',
        }}
      >
        <h1 style={{ marginBottom: '25px', color: '#222', fontSize: '1.8rem', fontWeight: '600' }}>
          Sign Up
        </h1>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="email" style={{ display: 'block', marginBottom: '8px', color: '#555', fontSize: '0.9rem' }}>
            Email Address:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              width: '100%',
              padding: '12px',
              borderRadius: '6px',
              border: '1px solid #ddd',
              fontSize: '1rem',
              outline: 'none',
              boxShadow: 'inset 0px 2px 4px rgba(0, 0, 0, 0.1)',
            }}
          />
        </div>
        <div style={{ marginBottom: '25px' }}>
          <label htmlFor="password" style={{ display: 'block', marginBottom: '8px', color: '#555', fontSize: '0.9rem' }}>
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{
              width: '100%',
              padding: '12px',
              borderRadius: '6px',
              border: '1px solid #ddd',
              fontSize: '1rem',
              outline: 'none',
              boxShadow: 'inset 0px 2px 4px rgba(0, 0, 0, 0.1)',
            }}
          />
        </div>
        <button
          type="submit"
          style={{
            padding: '12px 24px',
            backgroundColor: '#28a745',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '1rem',
            fontWeight: '500',
            transition: 'background 0.3s ease',
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = '#218838')}
          onMouseLeave={(e) => (e.target.style.backgroundColor = '#28a745')}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

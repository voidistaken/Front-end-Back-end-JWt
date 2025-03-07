import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { SignUp } from './pages/SignUp';
import { Login } from './pages/Login';
import { Books } from './pages/Books';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/Books" element={<Books />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);



export default App;

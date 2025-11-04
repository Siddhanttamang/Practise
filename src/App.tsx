import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import './styles/app.css';
import ProtectedRoute from './utilities/ProtectedRoute';
import { AuthContext } from './contexts/AuthContext';

function App() {
  const auth = useContext(AuthContext);
  if (!auth) return null;

  return (
    <div className='app'>
      {auth.isLoggedIn && <Navbar />}
      <main className="main-content">
        <Routes>
          <Route
            path="/login"
            element={!auth.isLoggedIn ? <Login /> : <Navigate to="/" replace />}
          />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/about"
            element={
              <ProtectedRoute>
                <About />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;


import React, { JSX, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

interface ProtectedRouteProps {
  children: JSX.Element;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const auth = useContext(AuthContext);

  if (!auth) return null; 
  if (!auth.isLoggedIn) return <Navigate to="/" replace />; 
  return children;
};

export default ProtectedRoute;

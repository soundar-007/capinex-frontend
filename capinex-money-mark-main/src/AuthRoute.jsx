import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const AuthRoute = ({ element, ...rest }) => {
  const isAuthenticated = localStorage.getItem('isLoginRCS');
  
  // Use the condition to either render the element or navigate to the login page
  return isAuthenticated ? element : <Navigate to="/login" />;
};

export default AuthRoute;
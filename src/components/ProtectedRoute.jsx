import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
    const { isAuthenticated, token } = useSelector((state) => state.auth);

    // Check both Redux state and Storage (for persistence across refreshes)
    const isAuth = isAuthenticated || !!localStorage.getItem('auth') || !!sessionStorage.getItem('auth');

    return isAuth ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;

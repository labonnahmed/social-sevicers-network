import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom'

const PrivateOutlet = () => {
    const loggedInUser = JSON.parse(sessionStorage.getItem('loggedInUser')) || null;

    const location = useLocation();
    return (
        <div>
            {
                loggedInUser ? <Outlet /> : <Navigate to='/login' state={{ from: location }} replace />
            }
        </div>
    );
};

export default PrivateOutlet;
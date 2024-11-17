// LogOut.jsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext/AuthContext';

export default function LogOut() {
    const navigate= useNavigate();
    const { logOut }= useAuth();

    useEffect(() => {
        logOut();
        navigate('/'); 
    }, [logOut, navigate]);

    return <div>Logging out...</div>;
}

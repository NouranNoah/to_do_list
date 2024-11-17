// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Imges/logoToDo.png';
import { useAuth } from '../AuthContext/AuthContext';

export default function Navbar() {
    const { user, logOut} = useAuth();

    return (
        <nav className="navbar navbar-expand-lg navbar-dark Nav" style={{ backgroundColor: "lightPink", borderRadius: '0 0px 0% 50%', paddingBottom: '2%', boxShadow: '0px 0px 30px 0px navy' }}>
            <div className="container">
                <Link className="navbar-brand d-flex align-items-center" to="/">
                    <img src={logo} alt="logo" className="navbar-logo" style={{ margin: '0' }} />
                    <span style={{ color: 'navy', fontWeight: 800, marginLeft: '10px', fontSize: '25px' }}>Do It</span>
                </Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav text-center w-100">
                        {user ? (
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/home">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about">About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/contact">Contact Us</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/dashboard">Dashboard</Link>
                                </li>
                            </>
                        ) : null}
                    </ul>

                    <div className="d-flex justify-content-center mt-3 mt-lg-0">
                        {!user ? (
                            <>
                                <button className='btn btn-log mx-2'>
                                    <Link to="/login" className="font">Login</Link>
                                </button>
                                <button className='btn btn-reg mx-2'>
                                    <Link to="/register" className="text-white text-decoration-none">Register</Link>
                                </button>
                            </>
                        ) : (
                            <button className='btn btn-log mx-2'>
                                <Link to="/logout" className="font" onClick={logOut}>LogOut</Link>
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { toast } from 'react-toastify';
import { useAuth } from '../AuthContext/AuthContext';
import bgLogin from '../Imges/loginImg.jpeg';

const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email format').required('Email is required!'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required!')
});

export default function Login() {
    const navigate = useNavigate();
    const { register } = useAuth();
    const [users, setUsers] = useState([]);
    const [apiError, setApiError] = useState('');

    const initialValues = {
        email: '',
        password: ''
    };

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await axios.get('http://localhost:3000/users');
                setUsers(res.data);
            } catch (error) {
                setApiError('Failed to fetch users.');
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []);

    const findUser = (email, password) => {
        return users.find(user => user.email === email && user.password === password);
    };

    const submitForm = async (values, { setSubmitting }) => {
        try {
            const user = findUser(values.email, values.password);
            if (user) {
                toast.success("Successfully logged in!");
                register(user);
                navigate('/home');
            } else {
                toast.error('Invalid email or password.');
            }
        } catch (error) {
            toast.error('An error occurred during login. Please try again.');
        }
        setSubmitting(false);
    };

    return (
        <div className="cont-log d-flex justify-content-center">
            <div className="col w-100" style={{ maxWidth: '800px', color: 'navy' }}>
                <img 
                    src={bgLogin} 
                    alt="Login Background" 
                    className="card-img-top" 
                    style={{ height: '200px' }} 
                />
                <div className="card-body">
                    {apiError && <div className="alert alert-danger">{apiError}</div>}
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={submitForm}
                    >
                        {({ isSubmitting }) => (
                            <Form>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <Field
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="form-control"
                                        placeholder="Enter your email"
                                    />
                                    <ErrorMessage
                                        name="email"
                                        component="div"
                                        className="form-text text-danger"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <Field
                                        type="password"
                                        name="password"
                                        id="password"
                                        className="form-control"
                                        placeholder="Enter your password"
                                    />
                                    <ErrorMessage
                                        name="password"
                                        component="div"
                                        className="form-text text-danger"
                                    />
                                </div>
                                <button 
                                    type="submit" 
                                    className="btn btnLog w-100" 
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? 'Logging in...' : 'Login'}
                                </button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    );
}

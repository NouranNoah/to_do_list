import React, { useState } from 'react';
import regImg from '../Imges/studiokat.jpeg';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { toast } from 'react-toastify';
import { useAuth } from '../AuthContext/AuthContext';

const validationSchema = Yup.object().shape({
    first_name: Yup.string().min(3, 'First Name must be at least 3 characters').max(10, 'First Name cannot be longer than 10 characters').required('First Name is required!').matches(/^[a-zA-Z]+$/, 'First Name must contain letters only'),
    last_name: Yup.string().min(3, 'Last Name must be at least 3 characters').max(10, 'Last Name cannot be longer than 10 characters').required('Last Name is required!').matches(/^[a-zA-Z]+$/, 'Last Name must contain letters only'),
    age: Yup.number().min(10, 'Age must be at least 10').required('Age is required!'),
    email: Yup.string().email('Invalid email format').required('Email is required!'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required!')
});

export default function Register() {
    const navigate = useNavigate();
    const { register } = useAuth();
    const [error, setError] = useState('');

    const initialValues = {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        age: ''
    };

    const submitForm = async (values, { setSubmitting }) => {
        try {
            await register(values);
            toast.success("Successfully registered!");
            navigate('/home');
        } catch (error) {
            setError('An error occurred during registration. Please try again.');
            toast.error('An error occurred. Please try again.');
        }
        setSubmitting(false);
    };

    return (
        <div className="container" style={{ marginTop: '6%' }}>
            {error && <div className="alert alert-danger my-5">{error}</div>}
            <div className="row justify-content-center">
                <div className="col-md-9">
                    <div className="card-box" style={{ maxHeight: '500px' }}>
                        <div className="card-body" style={{ padding: '0px' }}>
                            <div className="row">
                                <div className="col-md-6">
                                    <img src={regImg} className='regImg' alt="" />
                                </div>
                                <div className="col-md-6" style={{ color: "rgb(249, 136, 153)" }}>
                                    <Formik
                                        initialValues={initialValues}
                                        validationSchema={validationSchema}
                                        onSubmit={submitForm}
                                    >
                                        {({ isSubmitting }) => (
                                            <Form>
                                                <div className="form-group">
                                                    <label htmlFor="first_name">First Name:</label>
                                                    <Field
                                                        type="text"
                                                        name="first_name"
                                                        id="first_name"
                                                        className="form-control"
                                                        placeholder="Enter your first name"
                                                    />
                                                    <ErrorMessage
                                                        name="first_name"
                                                        component="div"
                                                        className="error text-danger"
                                                    />
                                                </div>

                                                <div className="form-group">
                                                    <label htmlFor="last_name">Last Name:</label>
                                                    <Field
                                                        type="text"
                                                        name="last_name"
                                                        id="last_name"
                                                        className="form-control"
                                                        placeholder="Enter your last name"
                                                    />
                                                    <ErrorMessage
                                                        name="last_name"
                                                        component="div"
                                                        className="error text-danger"
                                                    />
                                                </div>

                                                <div className="form-group">
                                                    <label htmlFor="email">Email:</label>
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
                                                        className="error text-danger"
                                                    />
                                                </div>

                                                <div className="form-group">
                                                    <label htmlFor="password">Password:</label>
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
                                                        className="error text-danger"
                                                    />
                                                </div>

                                                <div className="form-group">
                                                    <label htmlFor="age">Age:</label>
                                                    <Field
                                                        type="number"
                                                        name="age"
                                                        id="age"
                                                        className="form-control"
                                                        placeholder="Enter your age"
                                                    />
                                                    <ErrorMessage
                                                        name="age"
                                                        component="div"
                                                        className="error text-danger"
                                                    />
                                                </div>

                                                <button
                                                    type="submit"
                                                    className="btn-custom btn btn-block"
                                                    style={{ padding: '7px', width: '100%' }}
                                                    disabled={isSubmitting}
                                                >
                                                    {isSubmitting ? 'Registering...' : 'Register'}
                                                </button>
                                            </Form>
                                        )}
                                    </Formik>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

import React, { useEffect, useState } from 'react';
import './EditTask.css';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as yup from 'yup';
import { useAuth } from '../../AuthContext/AuthContext';
import { useNavigate, useParams } from 'react-router-dom';

export default function EditTask() {
    const navigate = useNavigate();
    const { editTask,tasks }= useAuth();
    const { id }= useParams(); 
    const [task, setTask]= useState(null);

    useEffect(() => {
        const taskToEdit =tasks.find(t => t.id === id); 
        if (taskToEdit) {
            setTask(taskToEdit);
        } else {
            console.error('Task not found');
            navigate('/home');
        }
    }, [id, tasks, navigate]);

   
    const submitForm= async (values, { setSubmitting })=> {
        if (task) {
            await editTask(id, values); 
            navigate('/home'); 
        } else {
            console.error('Invalid task ID');
            navigate('/home');
        }
        setSubmitting(false);
    };

    
    const validationSchema= yup.object().shape({
        title: yup.string().required('Title task is Required!'),
        info: yup.string().required('Task info is required!'),
        date: yup.date().required('Date is required!'),
        status: yup.string().required('Status is required!'),
        priority: yup.string().required('Priority is required!')
    });

    
    if (!task) return <p>Loading...</p>;

    
    const initialValues= {
        title: task.title || '',
        info: task.info || '',
        date: task.date || '',
        status: task.status || '',
        priority: task.priority || ''
    };

    return (
        <div className='all d-flex justify-content-center'>
            <div className='taskContent'>
                <div className='lineNote'></div>
                <Formik
                    validationSchema={validationSchema}
                    initialValues={initialValues}
                    onSubmit={submitForm}
                >
                    <Form>
                        <label htmlFor="title">Title Task:</label>
                        <Field type='text' name="title" id='title' className='form-control'/>
                        <ErrorMessage name="title" component="div" className="error text-danger"/>

                        <label htmlFor="info">Task Info:</label>
                        <Field as='textarea' name="info" id='info' className='form-control'/>
                        <ErrorMessage name="info" component="div" className="error text-danger"/>

                        <label htmlFor="date">Date:</label>
                        <Field type='date' name="date" id='date' className='form-control'/>
                        <ErrorMessage name="date" component="div" className="error text-danger"/>

                        <div className='box-radio'>
                            <div className='box-radio1'>
                                <label>Status:</label>
                                <div>
                                    <label>
                                        <Field type="radio" name="status" value="completed" />
                                        completed
                                    </label>
                                    <label>
                                        <Field type="radio" name="status" value=" pending" />
                                        pending
                                    </label>
                                </div>
                                <ErrorMessage name="status" component="div" className="error text-danger"/>
                            </div>

                            <div className='box-radio2'>
                                <label>Priority:</label>
                                <div>
                                    <label>
                                        <Field type="radio" name="priority" value="high" />
                                        High
                                    </label>
                                    <label>
                                        <Field type="radio" name="priority" value="low" />
                                        Low
                                    </label>
                                </div>
                                <ErrorMessage name="priority" component="div" className="error text-danger"/>
                            </div>
                        </div>

                        <div className='all-btn'>
                            <button type="submit" className="btn-custom btn btn-block my-4 mx-4">Update</button>
                            <button type="button" className="btn-custom btn btn-block my-4" onClick={() => navigate('/home')}>
                                Cancel
                            </button>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
    );
}

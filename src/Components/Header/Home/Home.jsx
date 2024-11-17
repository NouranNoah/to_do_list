import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MdDelete, MdEdit } from 'react-icons/md';
import './Home.css';
import { useAuth } from '../../AuthContext/AuthContext';

export default function Home() {
    const { tasks, user, removeTask, updateTaskStatus }= useAuth();
    const navigate= useNavigate();

    const handleCheckboxChange= (taskId, event)=> {
        updateTaskStatus(taskId, event.target.checked);
    };

    const handleEditClick= (id)=> {
        navigate(`/editTask/${id}`);
    };

    const handleDeleteClick= (id)=> {
        if (window.confirm('Are you sure you want to delete this task?')) {
            removeTask(id);
        }
    };

    const colors= [
        'rgba(135, 206, 250, 0.457)',
        'rgba(248, 214, 214, 0.691)',
        'rgba(199, 242, 199, 0.73)',
        'lightgoldenrodyellow',
    ];

    return(
        <div className='all'>
            <h3 className='welcome'>Welcome {user?.first_name}, Let's add our goal</h3>

            <div className='options'>
                <h3>Today Tasks</h3>
                <ul className='options-list'>
                    <li><a href="#">Personal</a></li>
                    <li><a href="#">Study</a></li>
                    <li><a href="#">Work</a></li>
                    <li><a href="#">Daily</a></li>
                    <li><a href="#">Weekly</a></li>
                </ul>
            </div>

            <div className='task-list'>
                {tasks.length > 0 ? (
                    tasks.map((task) => {
                        const backgroundColor = colors[tasks.indexOf(task) % colors.length];
                        const isChecked = task.isChecked;

                        return (
                            <div
                                key={task.id}
                                className='noteTask'
                                style={{ 
                                    backgroundColor: isChecked ? 'rgba(0, 0, 0, 0.383)' : backgroundColor, 
                                    textDecoration: isChecked ? 'line-through' : 'none'
                                }}
                            >
                                <h6 className='index'>{tasks.indexOf(task)+1}</h6>
                                <h3>{task.title || 'Untitled'}</h3>
                                <p>{task.info || 'No information provided'}</p>
                                <p>{task.date || 'No date provided'}</p>
                                <div className='d-flex justify-content-center'>
                                    <h6 className='mx-2'>Priority: </h6>
                                    <p>{task.priority || 'No priority provided'}</p>
                                </div>
                                <div className='d-flex justify-content-center'>
                                    <h6 className='mx-2'>Status: </h6>
                                    <p>{task.status || 'No status provided'}</p>
                                </div>
                                <div className='task-actions'>
                                    <input
                                        type="checkbox"
                                        checked={isChecked}
                                        onChange={(event) => handleCheckboxChange(task.id, event)}
                                    />
                                    <label htmlFor="">Done</label>
                                    <button onClick={() => handleEditClick(task.id)} className='edit-btn'>
                                        <MdEdit />
                                    </button>
                                    <button onClick={() => handleDeleteClick(task.id)} className='delete-btn'>
                                        <MdDelete />
                                    </button>
                                </div>
                            </div>
                        );
                    })
                ) : (
                    <p className='noTask'>No tasks available!</p>
                )}
            </div>

            <div className='content-add text-white d-flex justify-content-end'>
                <div className='bg-add'>
                    <Link to='/addTask' className='link'>
                        <div className='add'>+</div>
                    </Link>
                    <h3 className='text-add'>Add Task</h3>
                </div>
            </div>
        </div>
    );
}

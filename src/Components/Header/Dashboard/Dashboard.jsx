import React, { useState } from 'react';
import { useAuth } from '../../AuthContext/AuthContext';
import './Dashboard.css'; 

export default function Dashboard() {
  const { tasks } = useAuth();
  const [view, setView] = useState('all');

  
  const calcCheckedTasks = tasks.filter(task => task.isChecked).length;
  const calcPendingTasks = tasks.length - calcCheckedTasks;
  const calcPriorityTasks = tasks.filter(task => task.priority==='high').length;


  const handleViewChange = (viewType) => {
    setView(viewType);
  };


  const filteredTasks = tasks.filter(task => {
    if (view === 'completed') return task.isChecked;
    if (view === 'pending') return !task.isChecked;
    if (view === 'priority') return task.priority==='high';
    return true;
  });

  return (
    <div className="dashboard">
      <h1>Task Overview</h1>
      <div className="stats">
        <div onClick={() => handleViewChange('all')} className={`stat-item ${view === 'all' ? 'active' : ''}`}>
          Total Tasks: {tasks.length}
        </div>
        <div onClick={() => handleViewChange('completed')} className={`stat-item ${view === 'completed' ? 'active' : ''}`}>
          Completed: {calcCheckedTasks}
        </div>
        <div onClick={() => handleViewChange('pending')} className={`stat-item ${view === 'pending' ? 'active' : ''}`}>
          Pending: {calcPendingTasks}
        </div>
        <div onClick={() => handleViewChange('priority')} className={`stat-item ${view === 'priority' ? 'active' : ''}`}>
          Priority: {calcPriorityTasks}
        </div>
      </div>
      <div className="task-list">
        {filteredTasks.length > 0 ? (
          filteredTasks.map(task => (
            <div key={task.id} className='noteTask'>
              <h6 className='index'>{tasks.indexOf(task) + 1}</h6>
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
            </div>
          ))
        ) : (
          <p>No tasks available!</p>
        )}
      </div>
    </div>
  );
}

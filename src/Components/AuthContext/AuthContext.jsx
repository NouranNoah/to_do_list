import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

const AuthContext= createContext();

export const AuthProvider= ({ children }) => {
    const [user, setUser]= useState(null);
    const [tasks, setTasks]= useState([]);

    
    useEffect(() => {
        if (user) {
            const loadUserData = async () => {
                try {
                    const response = await axios.get(`http://localhost:3000/users/${user.id}`);
                    setTasks(response.data.todo || []);
                } catch (error) {
                    console.error('Error loading user data:', error);
                }
            };
    
            loadUserData();
        }
    }, [user]);

    
    const register= async(userData)=> {
        try {
            const{data}= await axios.post('http://localhost:3000/users', userData);
            setUser(data);
        }catch(error) {
            console.error('Error registering user:', error);
        }
    };

    

    
    const logOut= ()=> {
        setUser(null);
        setTasks([]);
    };

    const addTask= async(task) => {
        if(user) {
            try {
                const updatedTasks = [...tasks, { ...task, id: String(tasks.length + 1) }];
                await axios.put(`http://localhost:3000/users/${user.id}`, { ...user, todo: updatedTasks });
                setTasks(updatedTasks);
            } catch (error) {
                console.error('Error adding task:', error);
            }
        }
    };

    const editTask= async(id, updatedTask) => {
        if (user) {
            try {
                const updatedTasks = tasks.map(task =>
                    task.id === id ? { ...task, ...updatedTask } : task
                );
                await axios.put(`http://localhost:3000/users/${user.id}`, { ...user, todo: updatedTasks });
                setTasks(updatedTasks);
            } catch (error) {
                console.error('Failed to edit task:', error);
            }
        }
    };

    const removeTask= async(id) => {
        if (user) {
            try {
                const updatedTasks = tasks.filter(task => task.id !== id);
                await axios.put(`http://localhost:3000/users/${user.id}`, { ...user, todo: updatedTasks });
                setTasks(updatedTasks);
            } catch (error) {
                console.error('Failed to delete task:', error);
            }
        }
    };

    const updateTaskStatus = async (id, isChecked) => {
        if (user) {
            try {
                const updatedTasks = tasks.map(task =>
                    task.id === id ? { ...task, isChecked } : task
                );
                await axios.put(`http://localhost:3000/users/${user.id}`, { ...user, todo: updatedTasks });
                setTasks(updatedTasks);
            } catch (error) {
                console.error('Error updating task status:', error);
            }
        }
    };

    return (
        <AuthContext.Provider value={{ user, register, logOut, addTask, tasks,updateTaskStatus ,editTask, removeTask }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
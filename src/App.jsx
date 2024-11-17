import React, { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import Layout from './Components/Header/Layout';
import Home from './Components/Header/Home/Home';
import About from './Components/Header/About/About';
import ContactUs from './Components/Header/ContactUs/ContactUs';
import Register from './Components/Header/Register';
import Login from './Components/Header/Login';
import LogOut from './Components/Header/LogOut';
import LandingPage from './Components/pages/LandingPage/LandingPage';
import AddTask from './Components/pages/AddTask/AddTask'
import NotFound from './Components/pages/NotFound/NotFound';
import EditTask from './Components/pages/EditTask/EditTask';
import Dashboard from './Components/Header/Dashboard/Dashboard';

const navbar= createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <ContactUs /> },
      { path: 'dashboard', element: <Dashboard /> },
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register/> },
      { path: 'logout', element: <LogOut /> },
      { path: 'home', element: <Home /> },
      { path: 'addTask', element: <AddTask />},
      { path: 'editTask/:id', element: <EditTask />},
      { path: '*', element: <NotFound />}
    ]
  }
]);

export default function App() {
  

  return (
    <RouterProvider
      router={navbar}/>
  );
}

import React from 'react';
import bgImg1 from '../../Imges/Schedule Customizable Isometric Illustrations _ Amico Style.jpeg';
import './LandingPage.css';
import bgImg2 from '../../Imges/img Timemanagment.jpeg';
import bgImg3 from '../../Imges/Premium Vector _ Idea illustration concept.jpeg'
import list1 from '../../Imges/list1.jpeg'
import list2 from '../../Imges/list2.jpeg'
import list8 from '../../Imges/list8.jpeg'
import list9 from '../../Imges/list9.jpeg'
import { useNavigate } from 'react-router-dom';

export default function LandingPage() {
  const navigate =useNavigate()
  return (
    <div className='all'>




      <div className='content'>
        <div className='bub'></div>
      <div className='head'>
          <h1>Welcome to Your To-Do List!</h1>
          <p>We're thrilled to have you here! This is your space to stay organized, set your goals, and achieve your dreams. Whether you’re tackling big projects or just keeping track of daily tasks, we’re here to help you stay on top of things. Let’s make today productive and fulfilling—one task at a time!</p>
        </div>
        <div className='list'>
          <ul>
            <li><img src={list1} alt="img" /></li>
            <li><img src={list8} style={{width:"40%"}} alt="img" /></li>
            <li><img src={list2} alt="img" /></li>
            <li><img src={list9} style={{width:"50%"}} alt="img" /></li>
            
          </ul>
        </div>
      </div>

      <div className='content1'>

        <div className='header'>
          <h1 className='headerh1'>Task Manager</h1>
          <p className='headerp'>
          Organize your life effortlessly with our Task Manager. Whether you're managing personal goals, work projects, or daily tasks, our intuitive interface and powerful features help you stay on top of everything. Prioritize tasks, set deadlines, and track progress—all in one place. Start managing your tasks like a pro today!
          </p>
          <button className='btn-header' onClick={()=>{navigate('/register')}}>Join Us</button>
        </div>

        <div className='imgheader'>
          <img src={bgImg1} alt="Landing Page Background"/>
        </div>

      </div>





      <div className='content2'>
        <div className='imgheader'>
          <img src={bgImg2} alt="Landing Page Background" />
        </div>
        <div className='header'>
          <h1 className='headerh1'>Time Managment</h1>
          <p className='headerp'>
          Transform the way you manage your time with our Task Manager. organize tasks, set priorities Whether you're juggling multiple projects or just keeping track of daily responsibilities,Take control of your scheduleand achieve your goals more efficiently than ever before!
          </p>
          <button className='btn-header' onClick={()=>{navigate('/register')}}>Join Us</button>
        </div>
      </div>  




      <div className='content1'>
      <div className='header'>
          <h1 className='headerh1'>Master Your Tasks</h1>
          <p className='headerp'>
          Take control of your day with our Task Manager. Designed for busy professionals, students, and anyone who wants to streamline their to-do list, our tool helps you organize tasks, set priorities, and meet deadlines effortlessly. Get started today and make every day more productive!
          </p>
      <button className='btn-header' onClick={()=>{navigate('/register')}}>Join Us</button>
      </div>

      <div className='imgheader'>
      <img src={bgImg3} alt="Task Management Illustration"/>
      </div>
      </div>


      <footer>
  <div className="footer-content">
    <div className="footer-section links">
    <h4>Follow Us</h4>
      <a href="#">About Us</a>
      <a href="#">Contact Us</a>
      <a href="#">Our Teams</a>
    </div>
    <div className="footer-section">
      <p>Footer Content</p>
      <p>&copy; 2024 Your Company</p>
    </div>
    <div className="footer-section">
  <h4>Follow Us</h4>
  <a href="#">Facebook</a>
  <a href="#">Twitter</a>
  <a href="#">LinkedIn</a>
</div>
  </div>
</footer>

    </div>
  );
}

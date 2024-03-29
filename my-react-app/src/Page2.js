import {useState} from 'react'
import './App.css';
import FinalPage from './FinalPage';
import {Link, Route, Routes, useNavigate} from 'react-router-dom';

export default function Dashboard() {
    const navigate = useNavigate();
    const handleClick = () => navigate('/finalpage')
    return (
      <>
        <div className="dropdown NAV">
            <p id="dropdown-heading">Profile</p>
            <div className="dropdown-options NAV">
                <a href="/topic">Week1</a>
                <a href="/topic2">Week2</a>
                <a href="/topic3">Week3</a>
            </div>
        </div>

        <p>Welcome!</p>
        <p>Here on the left you can access lessons</p>
        <p>try to complete all of them.</p>

        <button type = "button" onClick={handleClick}>Go to last page</button>
      </>
    );
  }
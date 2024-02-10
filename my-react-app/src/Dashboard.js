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
                <a href="/topic1">Topic 1</a>
                <a href="/topic2">Topic 2</a>
                <a href="/topic3">Topic 3</a>
            </div>
        </div>

        <p>Welcome!</p>
        <p>Here in the right, you can access lessons!</p>
        <p>Try to complete all of them!</p>
      </>
    );
  }
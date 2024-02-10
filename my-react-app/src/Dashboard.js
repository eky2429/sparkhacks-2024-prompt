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
                <a href="#">Week1</a>
                <a href="#">Week2</a>
                <a href="#">Week3</a>
            </div>
        </div>

        <p>Some text</p>
        <p>Other text</p>
        <p>etc.</p>
      </>
    );
  }
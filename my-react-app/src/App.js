import React from 'react';
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Login';
import FinalPage from './FinalPage';
import Page2 from './Page2';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path='/' element = {<Login/>}/>
      <Route path='page2' element = {<Page2/>}/>
      <Route path= 'finalpage' element = {<FinalPage/>}/>
    </Routes>
  </BrowserRouter>
);

export default App;

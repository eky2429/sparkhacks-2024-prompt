import React from 'react';
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Login';
import FinalPage from './FinalPage';
import Page2 from './Page2';
import LogInPage from './components/LogInPage';
import { AuthProvider } from './contexts/AuthContxt';

const App = () => (

  <AuthProvider>
  <BrowserRouter>
    <Routes>
      <Route exact path='/' element = {<LogInPage/>}/>
      <Route path='page2' element = {<Page2/>}/>
      <Route path= 'finalpage' element = {<FinalPage/>}/>
    </Routes>
  </BrowserRouter>
  </AuthProvider>
);

export default App;

import React from 'react';
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';
import './App.css';
import FinalPage from './FinalPage';
import Dashboard from './Dashboard';
import LogInPage from './components/LogInPage';
import { AuthProvider } from './contexts/AuthContxt';

const App = () => (

  <AuthProvider>
  <BrowserRouter>
    <Routes>
      <Route exact path='/' element = {<LogInPage/>}/>
      <Route path='dashboard' element = {<Dashboard/>}/>
      <Route path= 'finalpage' element = {<FinalPage/>}/>
    </Routes>
  </BrowserRouter>
  </AuthProvider>
);

export default App;

import React from 'react';
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';
import './App.css';
import FinalPage from './FinalPage';
import Dashboard from './Dashboard';
import LogInPage from './components/LogInPage';
import FirstTopic from './Topic1';
import SecondTopic from './Topic2';
import ThirdTopic from './Topic3';
import { AuthProvider } from './contexts/AuthContxt';

const App = () => (
  <AuthProvider>
  <BrowserRouter>
    <Routes>
      <Route exact path='/' element = {<LogInPage/>}/>
      <Route path='dashboard' element = {<Dashboard/>}/>
      <Route path= 'finalpage' element = {<FinalPage/>}/>
      <Route exact path='/' element = {<LogInPage/>}/>
      <Route path='topic1' element = {<FirstTopic/>}/>
      <Route path= 'topic2' element = {<SecondTopic/>}/>
      <Route path= 'topic3' element = {<ThirdTopic/>}/>
    </Routes>
  </BrowserRouter>
  </AuthProvider>
);

export default App;

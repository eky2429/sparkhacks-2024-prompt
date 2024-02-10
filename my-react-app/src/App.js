import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import FinalPage from './FinalPage';
import Page2 from './Page2';
import LogInPage from './components/LogInPage';
import { AuthProvider } from './contexts/AuthContxt';
import SignUpPage from './components/SignUpPage';

const App = () => (

  <AuthProvider>
  <BrowserRouter>
    <Routes>
        <Route exact path='/' element = {<LogInPage/>}/>
        <Route path ='/signup' element = {<SignUpPage/>}/>
        <Route path='/page2' element = {<Page2/>}/>
        <Route path= '/finalpage' element = {<FinalPage/>}/>
    </Routes>
  </BrowserRouter>
  </AuthProvider>
);

export default App;

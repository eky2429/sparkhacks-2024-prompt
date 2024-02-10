import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import FinalPage from './FinalPage';
import Page2 from './Page2';
import LogInPage from './components/LogInPage';
import { AuthProvider } from './contexts/AuthContxt';
import SignUpPage from './components/SignUpPage';
import Topic1 from './Topic1';
import Topic2 from './Topic2';
import Topic3 from './Topic3';

const App = () => (

  <AuthProvider>
  <BrowserRouter>
    <Routes>
        <Route exact path='/' element = {<LogInPage/>}/>
        <Route path ='/signup' element = {<SignUpPage/>}/>
        <Route path='/page2' element = {<Page2/>}/>
        <Route path= '/finalpage' element = {<FinalPage/>}/>
        <Route path= '/Topic1' element = {<Topic1/>}/>
        <Route path= '/Topic2' element = {<Topic2/>}/>
        <Route path= '/Topic3' element = {<Topic3/>}/>
    </Routes>
  </BrowserRouter>
  </AuthProvider>
);

export default App;

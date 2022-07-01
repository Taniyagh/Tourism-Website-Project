import './App.css';
import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Pages/Home';
import Footer from './Components/Footer/Footer';
import Tourism from './Components/Pages/Tourism';
import Tour from './Components/Pages/Tour';
import SignUp from './Components/Pages/SignUp';
import ScrollToTop from './ScrolltoTop';

function App() {
  return (
    <React.Fragment>     
      <BrowserRouter>
      <ScrollToTop/>
      <NavBar/>
        <Routes>
          <Route path='/' exact element={<Home/>}/>
          <Route path='/tourism' exact element={<Tourism/>}/>
          <Route path='/tour' exact element={<Tour/>}/>
          <Route path='/sign-up' exact element={<SignUp/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;

import React from 'react';
import { ReactDOM } from 'react';
import { BrowserRouter, Route, Router } from 'react-router-dom';

//pages
import LandingIndex from './components/LandingPage/LandingIndex';
import LandingNavbar from './components/LandingPage/LandingNavbar';

function App() {
  return (
    <BrowserRouter>
    <LandingIndex />
    </BrowserRouter>
    
  );
}

export default App;

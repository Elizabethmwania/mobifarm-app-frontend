import React from 'react';
import { 
  BrowserRouter,
  Routes,
  Route, } from 'react-router-dom';
import FarmerIndex from './components/FarmersPage/FarmerIndex';
import LandingIndex from './components/LandingPage/LandingIndex';
import Login from './components/OfftakerPage/Login';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LandingIndex />} />
        <Route path='/farmers' element={<FarmerIndex />} />
        <Route path='/offtakers' element={<Login />} />
        
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;

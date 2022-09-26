import React, { useState } from 'react';
import './App.css'
import { 
  BrowserRouter,
  Routes,
  Route, } from 'react-router-dom';
import FarmerIndex from './components/FarmersPage/FarmerIndex';
import LandingIndex from './components/LandingPage/LandingIndex';
import Login from './components/OfftakerPage/Login/Login';
import Dashboard from './components/OfftakerPage/Dashboard/Dashboard';


function App() {
  
  
//   return (
//     <div>
//       <Test />
//     </div>
//   );
// }
  return (
    
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LandingIndex />} />
        <Route path='/farmers' element={<FarmerIndex />} />
        <Route path='/offtaker-login' element={<Login />} />
        <Route path='/offtaker-dashboard' element={<Dashboard />} />

        
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;

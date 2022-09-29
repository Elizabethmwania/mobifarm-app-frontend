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
import Clients from './components/OfftakerPage/Clients/Clients';
import Products from './components/OfftakerPage/Products/Products';
import Payment from './components/OfftakerPage/Payments/Payment';
import FarmerRegistration from './components/OfftakerPage/FarmerRegistration/FarmerRegistration';
import DealerLogin from './components/AgrodealerPage/Login/DealerLogin';
import DealerDashboard from './components/AgrodealerPage/Dashboard/DealerDashboard';
import DealerClients from './components/AgrodealerPage/Clients/DealerClients';
import DealerLoans from './components/AgrodealerPage/Loans/DealerLoans';
import AdminLogin from './components/FinancialInstitution/Login/AdminLogin';
import AdminDashboard from './components/FinancialInstitution/Dashboard/AdminDashboard';
import LoanStatistics from './components/FinancialInstitution/LoanStatistics/LoanStatistics';
import ClientRecords from './components/FinancialInstitution/ClientsRecords/ClientRecords';
import ContactMain from './components/Contact/ContactMain';
import AboutMain from './components/AboutUs/AboutMain';


function App() {
 
  return (
    
    <BrowserRouter>
      <Routes>
        {/* landingpage */}
        <Route exact path="/" element={<LandingIndex />} />
        <Route path='/farmers' element={<FarmerIndex />} />
        <Route path='/contact' element={<ContactMain />} />
        <Route path='/about' element={<AboutMain />} />
        
        {/* offftakers */}
        <Route path='/offtaker-login' element={<Login />} />
        <Route path='/offtaker-dashboard' element={<Dashboard />} />
        <Route path='/offtaker-clients' element={<Clients />} />
        <Route path='/offtaker-products' element={<Products />} />
        <Route path='/offtaker-payments' element={<Payment />} />
        <Route path='/farmer-registration' element={<FarmerRegistration />} />

        {/* agrodealers */}
        <Route path='/dealers-login' element={<DealerLogin />} />
        <Route path='/dealers-dashboard' element={<DealerDashboard />} />
        <Route path='/dealers-clients' element={<DealerClients />} />
        <Route path='/dealers-loans' element={<DealerLoans />} />
        
        {/* Admin */}
        <Route path='/admin-login' element={<AdminLogin />} />
        <Route path='/admin-dashboard' element={<AdminDashboard />} />
        <Route path='/loans-statistics' element={<LoanStatistics />} />
        <Route path='/farmers-records' element={<ClientRecords />} />
       
       
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;

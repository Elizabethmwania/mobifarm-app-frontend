import React from 'react';
import Footer from '../Common/Footer';
import FarmerHeader from '../FarmersPage/FarmerHeader';
import ContactForm from './ContactForm';
import ContactNav from './ContactNav';
import Updated from './Updated';

const ContactMain = () => {
    return (
        <>
           <FarmerHeader />
           <ContactNav /> 
           <ContactForm />
           {/* <Updated /> */}
           <Footer />
        </>
    );
};

export default ContactMain;
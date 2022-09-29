import React from 'react';
//style
import 'bootstrap/scss/bootstrap.scss'
import '../../assets/scss/paper-kit.scss?v=1.3.0';
import '../../assets/demo/demo.css?v=1.3.0';
//pages
import Header from './Header';
import LandingNavbar from './LandingNavbar';
import Content from './Content';
import Trainers from './Trainers';
import Footer from '../Common/Footer';
import Feature from './Feature';

const LandingIndex = () => {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
  return (
    <>
    <LandingNavbar />
    <Header />
    <Feature />
    <Content />
    <Trainers />
    <Footer />
    </>
  );
};

export default LandingIndex;
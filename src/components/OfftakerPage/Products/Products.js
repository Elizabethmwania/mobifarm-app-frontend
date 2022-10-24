import React, { Suspense } from 'react';
import Footer from '../../Common/Footer';
import OfftakerNavbar from '../OfftakerNavbar';
import SideNav from '../SideNav';
import ListProducts from './ListProducts';

const Products = () => {
    return (
        <>
        <div class="container-scroller">
        <SideNav />
        <div class="container-fluid page-body-wrapper">
        <OfftakerNavbar />
        <ListProducts/>
        </div>
        </div>
        <Footer />
        </>
    );
};

export default Products;
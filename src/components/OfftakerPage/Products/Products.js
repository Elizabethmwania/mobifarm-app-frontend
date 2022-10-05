import React, { Suspense } from 'react';
import Footer from '../../Common/Footer';
import OfftakerNavbar from '../OfftakerNavbar';
import SideNav from '../SideNav';
import ProductList from './ProductList';
import ProductsApi from './ProductsApi';

const Products = () => {
    return (
        <>
        <div class="container-scroller">
        <SideNav />
        <div class="container-fluid page-body-wrapper">
        <OfftakerNavbar />
        <Suspense fallback= {<h1>Products LOading</h1>}>
            {/* <ProductsApi /> */}
        
        <ProductList />
        </Suspense>
        </div>
        </div>
        <Footer />
        </>
    );
};

export default Products;
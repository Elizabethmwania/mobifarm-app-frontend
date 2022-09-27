import React from 'react';
//import './product.css'
import product1 from '../../../img/products/Broccoli-florets.jpg'

const productStyle = {
    container: {
        paddingTop: 80,
    },
}

const ProductList = () => {
    return (
        <div className='container mt-5' style={productStyle.container}>
            <div className='row'>
                    <div class="col-md-4">
                        <div class="card">
                            <div class="image-container">

                                <img src={product1} class="img-fluid rounded thumbnail-image" />
                            </div>
                            <div class="product-detail-container p-2">
                                <div class="d-flex justify-content-between align-items-center">
                                    <p class="dress-name">Product: Broccoli <br /> User ID: 00134
                                    </p>
                                    <div class="d-flex flex-column mb-2">
                                        <span class="new-price">Ksh9,900</span>
                                        <small class="old-price text-right">per sack</small>
                                    </div>
                                </div>
                                <div class="voutcher-right text-center border-left">
                                    <h5 class="discount-percent">Send</h5>
                                    <span class="off">Request</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card">
                            <div class="image-container">

                                <img src={product1} class="img-fluid rounded thumbnail-image" />
                            </div>
                            <div class="product-detail-container p-2">
                                <div class="d-flex justify-content-between align-items-center">
                                    <p class="dress-name">Product: Broccoli <br /> User ID: 00134
                                    </p>
                                    <div class="d-flex flex-column mb-2">
                                        <span class="new-price">Ksh9,900</span>
                                        <small class="old-price text-right">per sack</small>
                                    </div>
                                </div>
                                <div class="voutcher-right text-center border-left">
                                    <h5 class="discount-percent">Send</h5>
                                    <span class="off">Request</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card">
                            <div class="image-container">

                                <img src={product1} class="img-fluid rounded thumbnail-image" />
                            </div>
                            <div class="product-detail-container p-2">
                                <div class="d-flex justify-content-between align-items-center">
                                    <p class="dress-name">Product: Broccoli <br /> User ID: 00134
                                    </p>
                                    <div class="d-flex flex-column mb-2">
                                        <span class="new-price">Ksh9,900</span>
                                        <small class="old-price text-right">per sack</small>
                                    </div>
                                </div>
                                <div class="voutcher-right text-center border-left">
                                    <h5 class="discount-percent">Send</h5>
                                    <span class="off">Request</span>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
            
        </div>
    );
};

export default ProductList;
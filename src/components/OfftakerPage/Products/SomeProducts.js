import React from 'react';
import { Link } from 'react-router-dom';
import product1 from '../../../img/products/Broccoli-florets.jpg'
import './products.scss';
const SomeProducts = () => {

    const products = [
        {
            id: 1,
            name: "broccoli",
            img: '',
            price: 2400,
            status: 'available',
            seller: 10883677,
        },
        {
            id: 1,
            name: "broccoli",
            img: '',
            price: 2400,
            status: 'available',
            seller: 10883677,
        },
        {
            id: 1,
            name: "broccoli",
            img: '',
            price: 2400,
            status: 'available',
            seller: 10883677,
        }
    ]
    return (
        <>
        <div className='products-container'>
            <div className='products-header'>
                <h1>Recommended Products</h1>
            </div>   
            <div className='products' style={{width:'100%'}}>
            {products.map (product => (
                <div className='product' key={product.id}>
                    <div className='img'>
                        <img src={product1} alt="product" />
                    </div>
                    <div class="product-detail-container p-2">
                        <div class="d-flex justify-content-between align-items-center">
                            <p className='product-name'>Product: {product.name} <br/>  <br/>
                            Seller ID: {product.seller} </p>
                            <div class="d-flex flex-column mb-2">
                                <span className='new-price'> Ksh. {product.price}</span>
                                <small className='old-price'>per sack</small>
                            </div>
                        </div>
                        <div class="voutcher-right text-center">
                            {/* <h5 className='discount-percent'>see</h5>
                            <span className='off'>off</span> */}
                            <button className='button'>Request</button>
                        </div>
                    </div>
                </div>
            )) }
            
        </div>
        <div className='button-more'> 
            <button
            style={{color:'black', backgroundColor:'transparent', border:'1px solid green' }}
            className="btn-round" color="neutral" type="button" outline to="/farmers" tag={Link}
            >
                <Link to='/offtaker-products' className='link'>View All</Link>
            
            </button>  
        </div>
        </div>
        </>
        
    );
};

export default SomeProducts;
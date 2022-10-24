import React from 'react';
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
        <div className='row'>
            <div className='table-row' style={{backgroundColor:'#dee2e6'}} >
              
              <h4>Clients Debts</h4>
              
              <h4>View all</h4>
          </div>
        </div>
        <div className='products-container'>
        <div className='products' style={{marginTop:50}}>
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
        </div>
        </>
        
    );
};

export default SomeProducts;
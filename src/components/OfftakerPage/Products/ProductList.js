import React from 'react';
import fetchData from '../../../utils/fetchData';
//import './product.css'
import product1 from '../../../img/products/Broccoli-florets.jpg'


const productStyle = {
    container: {
        paddingTop: 80,
    },
    row: {
        display: 'flex',
        alignItems: 'stretch',
        justifyContent: 'center',

    }
}

const apiData = fetchData('https://dog.ceo/api/breeds/image/random/50')

const ProductList = () => {
    const data = apiData.read();
    return (
        <div className='container mt-5' style={productStyle.container}>
            <div className='row'>
                    <div class="col-md-12">
                        <div class="card" style={{ border:'none', boxShadow:'none' }}>
                            <div class="image-container">

                                {data.map((item, index) => (
                                <img style={{float:'left', margin:'1px', padding:'10px 3px', height:'100px', width:'100px'}}
                                    alt={`gallery-img-${index + 1}`}
                                    src={item}
                                    key={`gallery-${index + 1}`}
                                />
                                 ))} 
                               
                            </div>
                            
                        </div>
                        {/* </div> */}
                            
                    </div>

            </div>
            
        </div>
    );
};

export default ProductList;
import React from 'react';
import fetchData from '../../../utils/fetchData';

const apiData = fetchData('https://dog.ceo/api/breeds/image/random/50')

const ProductsApi = () => {
    const data = apiData.read();
    return (
        <div className='card'>
           {data.map((item, index) => (
           <img
            alt={`gallery-img-${index + 1}`}
            src={item}
            key={`gallery-${index + 1}`}
        />
      ))} 
        </div>
    );
};

export default ProductsApi;
import React from 'react';
import './Service.css';

const Service = ({service}) => {
   const {name, img, price, description } = service;
   return (
      <div className='service'>
         <img src={img} alt="" />
         <h2>Service: {name}</h2>
         <p>{description}</p>
         <p>price: {price}</p>
         <button>Book Now: {name}</button>
      </div>
   );
};

export default Service;
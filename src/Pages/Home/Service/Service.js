import React from 'react';
import './Service.css';

const Service = ({service}) => {
   const {name, img, price, description } = service;
   return (
      <div className='service'>
         <img src={img} alt="" />
         <h4 className='pt-3'>Service: {name}</h4>
         <p>{description}</p>
         <p>price: {price}</p>
         <buttonb className="btn btn-primary">Book Now : {name}</buttonb>
      </div>
   );
};

export default Service;
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({service}) => {
   const {_id, name, img, price, description } = service;

   const navigate = useNavigate();

   const HandleServiceDetail = (id) => {
      navigate(`/service/${id}`)
   }
   return (
      <div className='service'>
         <img src={img} alt="" />
         <h4 className='pt-3'>Service: {name}</h4>
         <p>{description}</p>
         <p>price: {price}</p>
         <button onClick={() => HandleServiceDetail(_id)} className="btn btn-primary mb-3">Book Now : {name}</button>
      </div>
   );
};

export default Service;
import React, { useEffect, useState } from 'react';
import useServices from '../../../hooks/useServices';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {

   const [services, setServices] = useServices([]);

   return (
      <div className='services-container'>
         <h1 className='mt-5'>Our services</h1>
         <div className='service-container'>
         {
            services.map(service => <Service
               key={service._id}
               service={service}
            ></Service>)
         }
         </div>
      </div>
   );
};

export default Services;
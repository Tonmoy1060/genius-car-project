import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
   const params= useParams();
   return (
      <div>
         <h1>Welcome{params.serviceId}</h1>
         <Link to="/checkout"><Button>Check Out</Button></Link>
      </div>
   );
};

export default ServiceDetail;
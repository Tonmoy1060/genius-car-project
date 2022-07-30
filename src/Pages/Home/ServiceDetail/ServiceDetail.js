import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
   const params= useParams();
   const [user,setUser] = useState({});
   useEffect(()=>{
      const url = `http://localhost:5000/users/${params.serviceId}`
      fetch(url)
      .then(res => res.json())
      .then(data => setUser(data))
   },[])
   return (
      <div>
         <h1>Welcome : {user.name}</h1>
         <Link to="/checkout"><Button>Check Out</Button></Link>
      </div>
   );
};

export default ServiceDetail;
import React, { useEffect, useState } from 'react';
import DisplayService from './DisplayService';

const ServiceHome = () => {
    const [services, setServices ] = useState([]);
    useEffect(()=>{
        fetch('https://travel-server-delta.vercel.app/services')
        .then(res => res.json())
        .then(data => setServices(data))
       },[])
    return (
        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10'>
        {
           services.map(service=> <DisplayService
            key={service._id}
            service={service}
           ></DisplayService>) 
        }
   </div>
    );
};

export default ServiceHome;
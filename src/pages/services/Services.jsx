import React, { useEffect, useState } from 'react';
import ServicesCard from './ServicesCard';

const Services = () => {

    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])

    return (
        <div className='py-8'>
            <div className='text-center'>
                <p className='text-2xl py-2 font-bold text-orange-400 '>Service</p>
                <p className='text-4xl py-2 font-bold '>Our Services</p>
                <p className='py-2'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-3 gap-8'> 
            {
                services.map(services=><ServicesCard
                    key={services._id}
                    services={services}
                />)
            }
            </div>
        </div>
    );
};

export default Services;
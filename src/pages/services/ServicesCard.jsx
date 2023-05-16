import React from "react";
import {BsArrowRightShort } from 'react-icons/bs';
import { Link } from "react-router-dom";
const ServicesCard = ({services}) => {
    const {_id,title, img, price, description, facility} = services

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        
         <div>
         <img src={img} alt="Shoes" className=" h-[250px] w-full p-4 rounded "/>
         </div>
        
        <div className="p-8">
          <h2 className="card-title text-2xl font-bold">{title}</h2>
          <div className="flex items-center justify-between">
          <p className="text-orange-500 font-bold">Price: ${price}</p>
          <Link to={`/checkout/${_id}`}>
          <p className="text-4xl text-orange-500"><BsArrowRightShort/></p>
          </Link>
          
          </div>
        </div>

      </div>
    </div>
  );
};

export default ServicesCard;

import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const CheckOut = () => {
  const service = useLoaderData();
  const { title, _id,price, img} = service;
  const {user} = useContext(AuthContext)
  
  const handleServices = event=>{
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = user?. email;

    const orderCheckout = {
      customerName: name, 
      email,
      img,
      date, 
      service: title,
      service_id: _id, 
      price: price,
    }
    console.log(orderCheckout);
    fetch('http://localhost:5000/checkout',{
      method:"POST",
      headers: {
        'content-type': 'application/json'
      },
      body:JSON.stringify(orderCheckout)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
    })

  }
  return (
    <div>
      <h1>{title}</h1>
      <div className="card-body grid grid-cols-2">
        <form onSubmit={handleServices}>
          <div className=" grid grid-cols-2 gap-8">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                
                type="text"
                name="name"
                defaultValue={user?.displayName}
                placeholder="name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Date</span>
              </label>
              <input
                type="date"
                name="date"
                placeholder="password"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name="email"
                defaultValue={user?.email}
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Due Amount</span>
              </label>
              <input
                type="text"
                name="amount"
                defaultValue={'$'+price}
                className="input input-bordered"
              />
            </div>
          </div>

          <div className="form-control mt-6">
            <input className="btn btn-primary" type="submit" value="Checkout" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckOut;

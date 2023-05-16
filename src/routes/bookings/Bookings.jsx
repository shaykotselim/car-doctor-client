import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import BookingRow from "./BookingRow";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  const url = `http://localhost:5000/checkout?email=${user?.email}`;
  useEffect(() => {
    fetch(url, {
      method:'GET', 
      headers:{
        authorization:`Bearer ${localStorage.getItem('car-access-token')}`
      }
    })
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, []);

  const handleDelete = id =>{
    const proceed =confirm('Are You Sure?');
    if(proceed){
        fetch(`http://localhost:5000/checkout/${id}`,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data =>{
            console.log(data);
            if(data.deletedCount > 0){
                alert('DELETED Successfully');
                const remaining = bookings.filter(booking=>booking._id !== id);
                setBookings(remaining)
            }
        })
    }
  }
  const handleConfirm = id =>{
    fetch(`http://localhost:5000/checkout/${id}`,{
         method:"PATCH", 
         headers:{
            "content-type": "application/json"
         },
         body: JSON.stringify({status:'confirm'})
    })
    .then(res=>res.json())
    .then(data => {
        console.log(data);
        if(data.modifiedCount > 0){
            // update state
            const remaining = bookings.filter(booking=>booking._id !== id);
            const updated = bookings.find(booking => booking._id == id);
            updated.status = 'confirm'
            const newBookings = [updated, ...remaining];
            setBookings(newBookings);
        }
    })
  }


  return (
    <div>
      <h1>This is bookings{bookings.length}</h1>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name of Services</th>
              <th>Email</th>
              <th>Customer-Name</th>
              <th>Date</th>

              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
                {
                    bookings.map(booking=><BookingRow
                            key={booking._id}
                        booking={booking}
                        handleDelete={handleDelete}
                        handleConfirm ={handleConfirm}   
                    />)
                }
          </tbody>
         
        </table>
      </div>
    </div>
  );
};

export default Bookings;

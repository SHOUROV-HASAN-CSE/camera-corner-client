import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const MyOrders = () => {

  const { user } = useContext(AuthContext);

  const url = `http://localhost:5000/bookings?email=${user?.email}`;

  const { data: bookings = [] } = useQuery({
      queryKey: ['bookings', user?.email],
      queryFn: async () => {
          const res = await fetch(url, {
              headers: {
                 authorization: `bearer ${localStorage.getItem('accessToken')}` 
              }
          });
          const data = await res.json();
          return data;
      }
  })


  return (
    <div>
    <h1 className='text-5xl mb-5 font-bold text-center text-[#003144]'>My Orders</h1>

    <div className="overflow-x-auto">
  <table className="table w-full mb-10 shadow-xl">
    <thead>
      <tr>
        <th>ID</th>
        <th>Image</th>
        <th>product Name</th>
        <th>Product Price</th>
        <th>Purchase</th>
        
      </tr>
    </thead>
    <tbody>
    
    {
         bookings.map((booking, i) => <tr key={booking._id}>
          <th>{i+1}</th>
          <td><img className='w-28' src={booking.img} alt="" /></td>
          <td>{booking.productName}</td>
          <td>${booking.price}</td>
          <td><button className="btn">Pay Now</button></td>
    
          </tr>)
    }
      
    </tbody>
  </table>
</div>

    </div>
  );
};

export default MyOrders;
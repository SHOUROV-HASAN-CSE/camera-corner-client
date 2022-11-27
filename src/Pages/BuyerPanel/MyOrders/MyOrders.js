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
    <h1 className='text-3xl mb-5 font-semibold text-center'>My Orders</h1>

    <div className="overflow-x-auto">
  <table className="table w-full">
    <thead>
      <tr>
        <th>bookingDate</th>
        <th>productName</th>
        <th>price</th>
        <th>phone</th>
        <th>location</th>
        
      </tr>
    </thead>
    <tbody>
    
    {
         bookings.map((booking, i) => <tr key={booking._id}>
          <th>{i+1}</th>
          <td>{booking.bookingDate}</td>
          <td>{booking.productName}</td>
          <td>{booking.price}</td>
          <td>{booking.phone}</td>
          <td>{booking.location}</td>
          </tr>)
    }
      
    </tbody>
  </table>
</div>

    </div>
  );
};

export default MyOrders;
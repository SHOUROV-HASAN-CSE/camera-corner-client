import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const MyOrders = () => {

  const { user } = useContext(AuthContext);

  const url = `https://camera-corner-server.vercel.app/bookings?email=${user?.email}`;

  const { data: bookings = [] , refetch } = useQuery({
      queryKey: ['bookings', user?.email],
      queryFn: async () => {
          const res = await fetch(url, {
              headers: {
                 authorization: `bearer ${localStorage.getItem('camera-corner-token')}` 
              }
          });
          const data = await res.json();
          return data;
      }
  })

  const handleDelete = id =>{
    const proceed = window.confirm(' Would you want to Delete this Product?');
    if(proceed){
        fetch(`https://camera-corner-server.vercel.app/myorders/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if (data.deletedCount > 0){
              toast.success('Deleted successfully.........');
              refetch();
               
            }
        })
    }
}


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
        <th>Delete Product</th>
        
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
          <td><button onClick={() => handleDelete(booking._id)} className="btn">Delete</button></td>
          </tr>)
    }
      
    </tbody>
  </table>
</div>

    </div>
  );
};

export default MyOrders;
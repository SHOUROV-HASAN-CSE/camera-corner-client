import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllBuyer = () => {



  const { data: allusers = [] } = useQuery
  ({
      queryKey: ['users'],
      queryFn: async () => {
          const res = await fetch(`http://localhost:5000/users?user=Buyer`);
          const data = await res.json();
          return data;
      }
  })


  return (
    <div>
    <h1 className='text-5xl mb-5 font-bold text-center text-[#003144]'>All Buyers</h1>

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
         allusers.map((user, i) => <tr key={user._id}>
          <th>{i+1}</th>
          <td><img className='w-28' src={user.img} alt="" /></td>
          <td>{user.productName}</td>
          <td>${user.price}</td>
          <td><button className="btn">Delete Buyer</button></td>
    
          </tr>)
    }
      
    </tbody>
  </table>
</div>

    </div>
  );
};

export default AllBuyer;
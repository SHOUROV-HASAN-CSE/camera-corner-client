import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllSeller = () => {



  
  const { data: allSellers = [] } = useQuery
  ({
      queryKey: ['users'],
      queryFn: async () => {
          const res = await fetch(`http://localhost:5000/users?user=Seller`);
          const data = await res.json();
          return data;
      }
  })




  return (
<div>
    <h1 className='text-5xl mb-5 font-bold text-center text-[#003144]'>All Sellers</h1>

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
         allSellers.map((seller, i) => <tr key={seller._id}>
          <th>{i+1}</th>
          <td><img className='w-28' src={seller.img} alt="" /></td>
          <td>{seller.productName}</td>
          <td>${seller.price}</td>
          <td><button className="btn">Delete Seller</button></td>
    
          </tr>)
    }
      
    </tbody>
  </table>
</div>

    </div>
  );
};

export default AllSeller;
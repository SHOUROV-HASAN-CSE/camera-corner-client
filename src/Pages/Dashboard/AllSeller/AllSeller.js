import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllSeller = () => {

  
  const { data: allSellers = [], refetch } = useQuery
  ({
      queryKey: ['users'],
      queryFn: async () => {
          const res = await fetch(`http://localhost:5000/users?user=Seller`);
          const data = await res.json();
          return data;
      }
  })


  
  const handleDelete = email =>{
    const proceed = window.confirm(' Would you want to Delete this Seller?');
    if(proceed){
        fetch(`http://localhost:5000/users/${email}`, {
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
    <h1 className='text-5xl mb-5 font-bold text-center text-[#003144]'>All Sellers</h1>

    <div className="overflow-x-auto">
  <table className="table w-full mb-10 shadow-xl">
    <thead>
      <tr>
        <th>ID</th>
        <th>Image</th>
        <th>Seller Name</th>
        <th>Seller Email</th>
        <th>Verification</th>
        <th>Delete Seller</th>
        
      </tr>
    </thead>
    <tbody>
    
    {
         allSellers.map((seller, i) => <tr key={seller._id}>
          <th>{i+1}</th>
          <td><img className='w-24 rounded-2xl' src={seller.photoURL} alt="" /></td>
          <td>{seller.name}</td>
          <td>{seller.email}</td>
          <td><button className="btn">Verify</button></td>
          <td><button onClick={() => handleDelete(seller.email)} className="btn">Delete</button></td>
    
          </tr>)
    }
      
    </tbody>
  </table>
</div>

    </div>
  );
};

export default AllSeller;
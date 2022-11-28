import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllBuyer = () => {



  const { data: allusers = [], refetch } = useQuery
  ({
      queryKey: ['users'],
      queryFn: async () => {
          const res = await fetch(`https://camera-corner-server.vercel.app/users?user=Buyer`);
          const data = await res.json();
          return data;
      }
  })


  const handleDelete = email =>{
    const proceed = window.confirm(' Would you want to Delete this Seller?');
    if(proceed){
        fetch(`https://camera-corner-server.vercel.app/users/${email}`, {
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
    <h1 className='text-5xl mb-5 font-bold text-center text-[#003144]'>All Buyers</h1>

    <div className="overflow-x-auto">
  <table className="table w-full mb-10 shadow-xl">
    <thead>
      <tr>
        <th>ID</th>
        <th>Image</th>
        <th>Buyer Name</th>
        <th>Buyer Email</th>
        <th>Delete Buyer</th>
        
      </tr>
    </thead>
    <tbody>
    
    {
         allusers.map((user, i) => <tr key={user._id}>
          <th>{i+1}</th>
          <td><img className='w-24 rounded-2xl' src={user.photoURL} alt="" /></td>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td><button onClick={() => handleDelete(user.email)} className="btn">Delete</button></td>
    
          </tr>)
    }
      
    </tbody>
  </table>
</div>

    </div>
  );
};

export default AllBuyer;
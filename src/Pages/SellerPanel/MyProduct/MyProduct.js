import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const MyProduct = () => {

  const {user} = useContext(AuthContext);

  const { data: allProducts = [], refetch } = useQuery
  ({
      queryKey: ['users'],
      queryFn: async () => {
          const res = await fetch(`http://localhost:5000/myproduct?email=${user?.email}`);
          const data = await res.json();
          return data;
      }
  })


  
  const handleDelete = email =>{
    const proceed = window.confirm(' Would you want to Delete this Product?');
    if(proceed){
        fetch(`http://localhost:5000/myproduct/${email}`, {
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

const handleMakeAdmin = email => {
  fetch(`http://localhost:5000/product/${email}`, {
      method: 'PUT', 
      headers: {
          authorization: `bearer ${localStorage.getItem('camera-corner-token')}`
      }
  })
  .then(res => res.json())
  .then(data => {
      if(data.modifiedCount > 0){
          toast.success('Product Advertise successful.')
          refetch();
      }
  })


}

  return (
    <div>
    <h1 className='text-5xl mb-5 font-bold text-center text-[#003144]'>My Product</h1>

    <div className="overflow-x-auto">
  <table className="table w-full mb-10 shadow-xl">
    <thead>
      <tr>
        <th>ID</th>
        <th>Image</th>
        <th>Product Name</th>
        <th>Selling Price</th>
        <th>Available Status</th>
        <th>Advertise Product</th>
        <th>Delete Product</th>
        
      </tr>
    </thead>
    <tbody>
    
    {
         allProducts.map((product, i) => <tr key={product._id}>
          <th>{i+1}</th>
          <td><img className='w-24 rounded-2xl' src={product.img} alt="" /></td>
          <td>{product.title}</td>
          <td>$ {product.resale_price}</td>
          <td className='font-semibold'>{product.sales_status}</td>
          <td>{ product?.advertise !== 'added' && <button onClick={() => handleMakeAdmin(product.email)} className="btn">advertise</button>}</td>
          <td><button onClick={() => handleDelete(product.email)} className="btn">Delete</button></td>
          </tr>)
    }
      
    </tbody>
  </table>
</div>

    </div>
  );
};

export default MyProduct;
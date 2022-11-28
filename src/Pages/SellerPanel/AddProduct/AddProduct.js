import React, { useContext, useState } from 'react';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {

    const [selectedDate, setSelectedDate] = useState(new Date());
    const navigate = useNavigate();

    const {user} = useContext(AuthContext);
    const date = format(selectedDate, 'PP');


  const handleAddService = event =>{
    event.preventDefault();
    const form = event.target;
    const category = form.category.value;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const location = form.location.value;
    const originalPrice = form.originalPrice.value;
    const resalePrice = form.resalePrice.value;
    const usedDays = form.usedDays.value;
    const sellerName = form.sellerName.value;
    


    const product = {
        category: category,
        title: name,
        img: photoURL,
        resale_price: resalePrice,
        original_price: originalPrice,
        location: location,
        used: usedDays,
        posted_date: date,
        seller_name: sellerName,
        email: user?.email,
        verified: "true",
        sales_status: "available"
    }
  
  
     
    fetch('http://localhost:5000/addproduct', {
      method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
      })
      .then(res => res.json())
      .then(data => {
          console.log(data);
          if (data.acknowledged) {
            toast.success('Your Product is added for ready to Sell....');
            form.reset();
            navigate('/myproduct');
          }
          else{
            toast.error(data.message);
          }     
    })



}


  return (
    <div className='w-3/4 mx-auto mb-8 bg-slate-100 rounded-2xl shadow-2xl p-8'>
    <form onSubmit={handleAddService}>
                <h2 className="text-4xl font-semibold text-center my-8 text-[#003144]">You can added Your Used Product</h2>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mb-5'>
                    <input name="category" type="text" placeholder="Product Category" className="input input-ghost w-full  input-bordered input-success" required/>
                    <input name="photoURL" type="text" placeholder="Product Image Link" className="input input-ghost w-full  input-bordered input-primary" required/>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mb-5'>
                    <input name="name" type="text" placeholder="Product Name" className="input input-ghost w-full  input-bordered input-warning" required/>
                    <input name="location" type="text" placeholder="Location" className="input input-ghost w-full  input-bordered input-error" required/>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mb-5'>
                    <input name="originalPrice" type="number" placeholder="Original Price" className="input input-ghost w-full  input-bordered input-info" required/>
                    <input name="resalePrice" type="number" placeholder="Resale Price" className="input input-ghost w-full  input-bordered input-success" required/>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mb-5'>
                    <input name="usedDays" type="text" placeholder="Used Days" className="input input-ghost w-full  input-bordered input-warning" required/>
                    <input name="sellerName" type="text" placeholder="Seller Name" className="input input-ghost w-full  input-bordered input-error" required/>
                </div>

                 <div className='text-center'>
                 <input type="text" value={date} className="input input-ghost w-1/2 text-center input-bordered input-primary " readOnly/>
                 </div>

                <div className='text-center mt-3'>
                <input className='btn btn-outline btn-secondary' type="submit" value="Add Product" />
                </div>
            </form>

            <div className='hidden'>
            <DayPicker
                mode='single'
                selected={selectedDate}
                onSelect={setSelectedDate}
                />
             </div>
    </div>
  );
};

export default AddProduct;
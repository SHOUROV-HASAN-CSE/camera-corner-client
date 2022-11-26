import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';

const AddProduct = () => {

    const [selectedDate, setSelectedDate] = useState(new Date());


  const handleAddService = event =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photoUrl.value;
    const price = form.price.value;
    const ratings = form.rating.value;
    const message = form.message.value;


    const service = {
        title: name,
        img: photo,
        price: price,
        ratings: ratings,
        description: message,
    }
    
    fetch('https://localhost5000/camera', {
      method: 'POST',
      headers: {
          'content-type': 'application/json'
      },
      body: JSON.stringify(service)
  })
      .then(res => res.json())
      .then(data => {
          if(data.acknowledged){
            toast('The Service Added Successfully.....',{position:"top-center"});
              form.reset();   
          }
      })
      .catch(err => console.error(err))

  }

  return (
    <div className='w-3/4 mx-auto mb-8 bg-slate-100 rounded-2xl shadow-2xl p-8'>
    <form onSubmit={handleAddService}>
                <h2 className="text-4xl font-semibold text-center my-8 text-[#003144]">You can added Your Used Product</h2>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mb-5'>
                    <input name="name" type="text" placeholder="Product Category" className="input input-ghost w-full  input-bordered input-success" required/>
                    <input name="photoUrl" type="text" placeholder="Product Image Link" className="input input-ghost w-full  input-bordered input-primary" required/>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mb-5'>
                    <input name="price" type="text" placeholder="Product Name" className="input input-ghost w-full  input-bordered input-warning" required/>
                    <input name="rating" type="text" placeholder="Location" className="input input-ghost w-full  input-bordered input-error" required/>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mb-5'>
                    <input name="price" type="number" placeholder="Original Price" className="input input-ghost w-full  input-bordered input-info" required/>
                    <input name="rating" type="number" placeholder="Resale Price" className="input input-ghost w-full  input-bordered input-success" required/>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mb-5'>
                    <input name="price" type="text" placeholder="Used Days" className="input input-ghost w-full  input-bordered input-warning" required/>
                    <input name="rating" type="text" placeholder="Seller Name" className="input input-ghost w-full  input-bordered input-error" required/>
                </div>

                 <div className='text-center'>
                 <input name="price" type="text" placeholder={format(selectedDate, 'PP')} className="input input-ghost w-1/2 text-center input-bordered input-primary " readOnly/>
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
            <ToastContainer/>
    </div>
  );
};

export default AddProduct;
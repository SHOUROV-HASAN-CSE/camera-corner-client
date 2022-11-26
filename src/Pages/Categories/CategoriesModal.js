import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CategoriesModal = ({booking, SetBooking}) => {
  const {title, resale_price} = booking;
  const [selectedDate, setSelectedDate] = useState(new Date());
  const date = format(selectedDate, 'PP');



  const handleBooking = event =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const location = form.location.value;


    const booking = {
      bookingDate: date,
      productName: title,
      price: resale_price,
      name,
      email,
      phone,
      location

    }

    toast('The item is Booked....',{position:"top-center"});
    console.log(booking);
    SetBooking(null);
  }

  return (
    <>
      {/* Put this part before </body> tag */}
<input type="checkbox" id="categories-modal" className="modal-toggle" />
<div className="modal text-center">
  <div className="modal-box relative">
    <label htmlFor="categories-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h1 className="py-2 font-bold text-3xl">{title}</h1>
    <p className="font-bold text-lg">Price: ${resale_price}</p>

    <form onSubmit={handleBooking}>
    <input type="text" value={date} className="input input-bordered input-secondary w-full my-1 text-center" disabled/>
    <input name='name' type="name" placeholder="Your Name" className="input input-bordered input-secondary w-full my-1 text-center" />
    <input name='email' type="email" placeholder="Email Address" className="input input-bordered input-secondary w-full my-1 text-center" />
    <input name='phone' type="number" placeholder="Phone Number" className="input input-bordered input-secondary w-full my-1 text-center" required/>
    <input name='location' type="text" placeholder="Location" className="input input-bordered input-secondary w-full my-1 text-center"required />
    <br />
    <input className='w-full btn my-4' type="submit" value="submit" />
    </form>
  

  </div>
</div>



    {/* date picker */}
    <div className='hidden'>
    <DayPicker
        mode='single'
        selected={selectedDate}
        onSelect={setSelectedDate}
          />
    </div>


    <ToastContainer/>
    </>


  


  );
};

export default CategoriesModal;
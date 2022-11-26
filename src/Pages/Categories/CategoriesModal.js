import React, { useContext, useState } from 'react';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const CategoriesModal = ({booking, SetBooking}) => {
  const {title, resale_price} = booking;
  const [selectedDate, setSelectedDate] = useState(new Date());
  const date = format(selectedDate, 'PP');
  const {user} = useContext(AuthContext)



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

    
    
    fetch('http://localhost:5000/bookings', {
      method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
      })
      .then(res => res.json())
      .then(data => {
          console.log(data);
          if (data.acknowledged) {
            toast.success('The item is Booked....');
            SetBooking(null); 
          }
          else{
            toast.error(data.message);
          }     
    })
    
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
    <input type="text" value={date} className="input  w-full my-1 text-center" disabled/>
    <input name='name' type="name" defaultValue={user?.displayName} disabled className="input w-full my-1 text-center" />
    <input name='email' type="email" defaultValue={user?.email} disabled className="input w-full my-1 text-center" />
    <input name='phone' type="number" placeholder="Phone Number" className="input input-bordered input-secondary w-full my-1 text-center" required/>
    <input name='location' type="text" placeholder="Your Location" className="input input-bordered input-primary w-full my-1 text-center"required />
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
    </>


  


  );
};

export default CategoriesModal;
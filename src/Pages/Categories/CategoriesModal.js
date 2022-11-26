import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';

const CategoriesModal = ({booking}) => {
  const {title, resale_price} = booking;


  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <>
      {/* Put this part before </body> tag */}
<input type="checkbox" id="categories-modal" className="modal-toggle" />
<div className="modal text-center">
  <div className="modal-box relative">
    <label htmlFor="categories-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h1 className="py-4 font-bold text-3xl">{title}</h1>
    <p className="font-bold text-xl">Price: ${resale_price}</p>

    <form >
    <input type="text" value={format(selectedDate, 'PP')} className="input input-bordered input-secondary w-full my-1 text-center" disabled/>
    <input type="text" placeholder="Type here" className="input input-bordered input-secondary w-full my-1 text-center" />
    <input type="text" placeholder="Type here" className="input input-bordered input-secondary w-full my-1 text-center" />
    <input type="text" placeholder="Type here" className="input input-bordered input-secondary w-full my-1 text-center" />
    <input type="text" placeholder="Type here" className="input input-bordered input-secondary w-full my-1 text-center" />
    <br />
    <input className='w-full max-w-sm btn my-4' type="submit" value="submit" />
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
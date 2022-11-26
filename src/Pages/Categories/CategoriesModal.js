import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';

const CategoriesModal = () => {

  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <>
      {/* Put this part before </body> tag */}
<input type="checkbox" id="categories-modal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="categories-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="text-lg font-bold">{format(selectedDate, 'PP')}</h3>
    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
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
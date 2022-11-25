import React from 'react';
import { Link } from 'react-router-dom';

const CategoriesCard = ({category}) => {

  const {_id, img, title, resale_price, original_price, location, used, posted_date, seller_name, verified} = category;

  return (
    <div>
       <div className="card card-compact bg-base-300 shadow-xl border-orange-400 border-2">
            <figure>
            <img src={img} alt="" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
               
                <p className='text-2xl text-orange-600 font-semibold'>Resale Price: ${resale_price}</p>
                <p className='text-lg text-orange-600 font-semibold'>Buying Price: ${original_price}</p>
                <p className="text-lg">Used: {used}</p>
                <div>
                <p className="text-xl">Seller: {seller_name}</p>
                </div>
                <p className="text-lg">Location: {location}</p>
                <p className="text-lg">Post Date: {posted_date}</p>
                <div className="card-actions justify-end">
                   
                           {/* The button to open modal */}
                  
                  <label htmlFor="my-modal" className="btn">Book Now</label>
                  <label className="btn">Report to admin</label>
                </div>
            </div>
        </div>

        {/* Modal Body */}
<input type="checkbox" id="my-modal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">{title}</h3>
    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
    <div className="modal-action">
      <label htmlFor="my-modal" className="btn">Booked</label>
    </div>
  </div>
</div>




    </div>
  );
};

export default CategoriesCard;
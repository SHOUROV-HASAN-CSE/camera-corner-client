import React from 'react';

const AdvertisedCard = ({add}) => {

  const {_id, img, title, resale_price, original_price, location, used, posted_date, seller_name, verified} = add;

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
                   
        
                  <label  className="btn">Book Now</label>
                </div>
            </div>
        </div>

    </div>
  );
};

export default AdvertisedCard;
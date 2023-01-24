import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const AdvertisedCard = ({add, SetBooking}) => {

  const {user} = useContext(AuthContext);

  const {_id, img, title, resale_price, original_price, location, used, posted_date, seller_name} = add;

  return (
    <div>
       <div className="card card-compact bg-base-300 rounded-lg shadow-xl border-[#005c80] border-2">
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
                <div className="card-actions justify-center">
                {
                  user?.email? <label htmlFor="categories-modal" onClick={()=> SetBooking(add)} className="custom-button">Book Now</label>: <Link to='/login'><button className="custom-button">Book Now</button></Link>
                } 
                </div>
            </div>
        </div>

    </div>
  );
};

export default AdvertisedCard;
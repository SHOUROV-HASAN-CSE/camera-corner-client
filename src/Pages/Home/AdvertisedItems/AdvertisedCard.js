import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const AdvertisedCard = ({add, SetBooking}) => {

  const {user} = useContext(AuthContext);

  const {img, title, resale_price} = add;

  return (
    <div>
       <div className="card card-compact bg-[#f1f1ef] rounded-lg shadow-xl border-[#005c80] border-2">
            <figure>
            <img src={img} alt="" />
            </figure>
            <div className="card-body text-center">
                <h2 className="text-xl font-semibold">{title}</h2>
                <p className='text-lg text-orange-600 font-semibold'>${resale_price}</p>
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
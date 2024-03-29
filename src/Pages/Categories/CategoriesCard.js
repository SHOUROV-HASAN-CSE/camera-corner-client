import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const CategoriesCard = ({category, SetBooking}) => {
  const {user} = useContext(AuthContext);

  const {img, title, resale_price, original_price, location, used, posted_date, seller_name, verified} = category;

  return (
    <div>
       <div className="card card-compact bg-base-300 rounded-lg shadow-xl border-orange-400 border-2">
            <figure>
            <img src={img} alt="" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
               
                <p className='text-2xl text-orange-600 font-semibold'>Resale Price: ${resale_price}</p>
                <p className='text-lg text-orange-600 font-semibold'>Buying Price: ${original_price}</p>
                <p className="text-lg">Used: {used}</p>
                <div>
                <p className="text-xl flex justify-start items-center "><span>Seller: {seller_name}</span><span className='ml-2'> {
                  verified==='true' &&
                  <svg xmlns="http://www.w3.org/2000/svg" className="stroke-[#25ca64] flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  
                }</span></p>

              

                </div>
                <p className="text-lg">Location: {location}</p>
                <p className="text-lg">Post Date: {posted_date}</p>
                <div className="card-actions justify-center">
                   
                           {/* The button to open modal */}
                {
                  user?.email? <label htmlFor="categories-modal" onClick={()=> SetBooking(category)} className="custom-button">Book Now</label>: <Link to='/login'><button className="custom-button">Book Now</button></Link>
                }  
                  <label className="custom-button">Report to admin</label>
                </div>
            </div>
        </div>

    </div>
  );
};

export default CategoriesCard;
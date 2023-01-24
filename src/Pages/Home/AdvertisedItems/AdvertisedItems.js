import React, { useEffect, useState } from 'react';
import CategoriesModal from '../../Categories/CategoriesModal';
import AdvertisedCard from './AdvertisedCard';

const AdvertisedItems = () => {

    const [booking, SetBooking] = useState(null);
    const [adds, setAdds] = useState([]);


  useEffect(() => {
      fetch(`https://camera-corner-server.vercel.app/advertise?name=added`)
          .then(res => res.json())
          .then(data => setAdds(data))
  },[]);



  return (
    <div className='my-16 mt-36 mx-10'>
        {!adds?.length? <></> : <>      
    <div className='text-center mb-12 font-[Barlow]'>
        <p className='text-lg tracking-widest font-black'>DISC 50% SELECTED ITEMS</p>
        <p className="text-6xl mt-4  font-black">Best Offer For This Year</p>
    </div>
    <div className='grid gap-8 grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
        {
            adds.map(add => <AdvertisedCard
                key={add._id}
                add={add}
                SetBooking={SetBooking}
            ></AdvertisedCard>)
        }
    </div>
    {
     booking &&   
    <CategoriesModal
    booking={booking}
    SetBooking={SetBooking}
    ></CategoriesModal>
    }
    </>} 

</div>
  );
};

export default AdvertisedItems;
import React, { useEffect, useState } from 'react';
import AdvertisedCard from './AdvertisedCard';

const AdvertisedItems = () => {

  
  const [adds, setAdds] = useState([]);


  useEffect(() => {
      fetch(`https://camera-corner-server.vercel.app/advertise?name=added`)
          .then(res => res.json())
          .then(data => setAdds(data))
  },[]);



  return (
    <div className='my-16'>
        {!adds?.length? <></> : <>      
    <div className='text-center mb-12'>
        <p className="text-6xl font-semibold text-[#003144]">Flash Sale</p>
    </div>
    <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {
            adds.map(add => <AdvertisedCard
                key={add._id}
                add={add}
            ></AdvertisedCard>)
        }
    </div>
    </>} 
</div>
  );
};

export default AdvertisedItems;
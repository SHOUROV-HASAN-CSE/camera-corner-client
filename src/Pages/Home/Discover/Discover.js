import React from 'react';
import './Discover.css';
import img1 from '../../../assets/images/discover/images1.jpg';
import img2 from '../../../assets/images/discover/images2.jpg';
import img3 from '../../../assets/images/discover/images3.jpg';
import img4 from '../../../assets/images/discover/images4.jpg';

const Discover = () => {
  return (
  <div className='md:flex justify-around items-center py-24'>
    <div>
      <p className='text-2xl mb-4 tracking-widest font-[Barlow] font-semibold'>Discover New Experiences</p>
      <h1 className='text-center text-6xl font-[Barlow] font-black'>Capture Every Second</h1>

    </div>
      <div className='gallery'>
         <img src={img1} alt="" />
         <img src={img2} alt="" />
         <img src={img3} alt="" />
         <img src={img4} alt="" />
    </div>
  </div>
  );
};

export default Discover;

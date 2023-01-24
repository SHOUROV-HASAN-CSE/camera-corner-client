import React from 'react';
import './Discover.css';
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";
import img1 from '../../../assets/images/discover/images1.jpg';
import img2 from '../../../assets/images/discover/images2.jpg';
import img3 from '../../../assets/images/discover/images3.jpg';
import img4 from '../../../assets/images/discover/images4.jpg';

const Discover = () => {
  return (
  <div className='md:flex justify-around items-center py-24 mx-10 md:mx-0'>
    <div>
      <p className='text-2xl text-center md:text-left mb-4 tracking-widest font-[Barlow] font-semibold'>Discover New Experiences</p>
      <h1 className='text-center text-6xl font-[Barlow] font-black'>Capture Every Second</h1>

    <p className='mt-4 text-lg text-[#a7968f]'>we are providing the best Used camera and after-sales service.</p>

     <div className='mt-10'>
      
    <div className='mt-3'>
    <span className='p-1'>
      BUILD QUALITY
      </span>
      <Progress
      percent={90}
      status="error"
      theme={{
        error: {
          symbol: '90%',
          color: '#f8e233'
        }
      }}
    />
    </div>

    <div className='mt-3'>
    <span className='p-1 mt-40'>
    LENS KIT
      </span>
      <Progress
      percent={78}
      status="error"
      theme={{
        error: {
          symbol: '78%',
          color: '#19b5fe'
        }
      }}
    />
    </div>

    <div className='mt-3'>
    <span className='p-1'>
    CAMERA STRAP
      </span>
      <Progress
      percent={86}
      status="error"
      theme={{
        error: {
          symbol: '86%',
          color: '#ea4c88'
        }
      }}
    />
    </div>
     </div>
     <button className='mt-8 custom-button ml-32 md:ml-0'>Read More</button>
    </div>
     
      <div className='gallery mt-14 md:mt-0 w-full md:w-auto'>
         <img src={img1} alt="" />
         <img src={img2} alt="" />
         <img src={img3} alt="" />
         <img src={img4} alt="" />
    </div>
  </div>
  );
};

export default Discover;

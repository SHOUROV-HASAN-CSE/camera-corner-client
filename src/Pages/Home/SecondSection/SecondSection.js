import React from 'react';
import img1 from '../../../assets/images/image/image-3.PNG';
import img2 from '../../../assets/images/image/image-4.PNG';
import img3 from '../../../assets/images/image/image-5.PNG';

const SecondSection = () => {
  return (
    <div className=' grid md:grid-cols-3 grid-cols-1 mx-auto'>
      <img className='mt-10 md:w-11/12 w-auto mx-auto' src={img1} alt="" />
      <img className='mt-10 md:w-11/12 w-auto mx-auto' src={img2} alt="" />
      <img className='mt-10 md:w-11/12 w-auto mx-auto' src={img3} alt="" />
    </div>
  );
};

export default SecondSection;
import React from 'react';
import img1 from '../../../assets/images/image/image-6.png';
import img2 from '../../../assets/images/image/image-7.png';
const Shop = () => {
  return (
    <div className=' hidden md:flex justify-center mt-10'>
      <div className='flex items-center'>
        <div className='w-96'>
        <h1 className='text-4xl font-semibold mb-6'>Shop & Save More Cashback</h1>
        <p className='text-[#939393]'>The Manfrotto 546B Tripod & 504HD Head combines the innovative and stylish 504HD Fluid Video Head...</p>
        <button className='mt-8 custom-button ml-32 md:ml-0'>Read More</button>
        </div>
        <img className='w-80' src={img1} alt="" />
    </div>

    <div className='flex items-center'>
        <div className='w-96'>
        <h1 className='text-4xl font-semibold mb-6'>Shop Now!</h1>
        <p className='text-[#939393]'>Traditional tripods have suffered from needless bulk and wasted space...</p>
        <button className='mt-8 custom-button ml-32 md:ml-0'>Read More</button>
        </div>
        <img className='w-64' src={img2} alt="" />
    </div>
    </div>
  );
};

export default Shop;